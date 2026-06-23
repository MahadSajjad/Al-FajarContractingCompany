import { useRef, useState } from 'react';
import { Form, Input, Select, App } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Button from '../ui/Button';
import { contactSchema, serviceInterestOptions, createContactSubmissionApi } from '../../services/contactApi';

// Required-field label with an orange asterisk (zod owns the actual validation,
// so we don't use antd's `required`/rules which would inject its own messages).
const req = (text) => (
  <>
    {text} <span className="text-safety-orange">*</span>
  </>
);

export default function ContactForm() {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);
  const lastSubmit = useRef(0);

  // Clear a field's manual (zod) error as soon as the user edits it.
  const onValuesChange = (changed) => {
    form.setFields(Object.keys(changed).map((name) => ({ name, errors: [] })));
  };

  const onFinish = async (values) => {
    // Honeypot: real users never fill this hidden field.
    if (values.website) return;

    // Debounce double-submits.
    const now = Date.now();
    if (loading || now - lastSubmit.current < 1500) return;
    lastSubmit.current = now;

    // antd returns `undefined` for untouched fields; coerce to '' so our zod
    // `.min()` messages apply instead of zod's built-in type-error "Required".
    const normalized = {
      name: values.name ?? '',
      email: values.email ?? '',
      phone: values.phone ?? '',
      company: values.company ?? '',
      serviceInterest: values.serviceInterest ?? '',
      message: values.message ?? '',
    };

    // zod is the single source of validation; map any issues to inline errors.
    const result = contactSchema.safeParse(normalized);
    if (!result.success) {
      const seen = new Set();
      const fields = [];
      for (const issue of result.error.issues) {
        const name = issue.path[0];
        if (seen.has(name)) continue;
        seen.add(name);
        fields.push({ name, errors: [issue.message] });
      }
      form.setFields(fields);
      message.error('Please check the highlighted fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await createContactSubmissionApi(result.data);
      if (res.ok) {
        message.success('Message sent — we’ll get back to you shortly.');
        form.resetFields();
      } else {
        message.error(res.message || 'Something went wrong. Please try again or call us.');
      }
    } catch {
      message.error('Network error. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      noValidate
      scrollToFirstError
    >
      {/* Honeypot — visually hidden, off keyboard + autofill */}
      <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <Form.Item name="website" label="Website">
          <Input tabIndex={-1} autoComplete="off" />
        </Form.Item>
      </div>

      <div className="grid gap-x-5 sm:grid-cols-2">
        <Form.Item name="name" label={req('Full name')}>
          <Input placeholder="Your name" size="large" autoComplete="name" />
        </Form.Item>
        <Form.Item name="email" label={req('Email')}>
          <Input placeholder="you@company.com" size="large" autoComplete="email" inputMode="email" />
        </Form.Item>
        <Form.Item name="phone" label="Phone (optional)">
          <Input placeholder="+966 5X XXX XXXX" size="large" autoComplete="tel" inputMode="tel" />
        </Form.Item>
        <Form.Item name="company" label="Company (optional)">
          <Input placeholder="Company name" size="large" autoComplete="organization" />
        </Form.Item>
      </div>

      <Form.Item name="serviceInterest" label="Service interest (optional)">
        <Select
          size="large"
          placeholder="Select a service area"
          allowClear
          options={serviceInterestOptions}
        />
      </Form.Item>

      <Form.Item name="message" label={req('Project details')}>
        <Input.TextArea
          rows={5}
          size="large"
          placeholder="Tell us about your project — scope, location and timeline help us respond faster."
        />
      </Form.Item>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={loading}
          icon={loading ? <LoadingOutlined aria-hidden="true" /> : null}
        >
          Send Message
        </Button>
        <p className="font-mono text-xs text-slate-400">
          We typically reply within one business day.
        </p>
      </div>
    </Form>
  );
}

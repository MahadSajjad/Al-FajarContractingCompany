import { z } from 'zod';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { serviceCategories } from '../data/services';

// Contact form data contract — the single source of validation (zod), shared by
// the form (inline errors) and this API (final gate before insert).
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Enter a valid email address')
    .max(150),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  serviceInterest: z.string().trim().max(120).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Please add a little detail (at least 10 characters)')
    .max(2000),
});

// Options for the "service interest" select — built from the service categories.
export const serviceInterestOptions = [
  { value: 'General enquiry', label: 'General enquiry' },
  ...serviceCategories.map((c) => ({ value: c.name, label: c.short })),
  { value: 'Manpower supply', label: 'Manpower supply' },
  { value: 'Equipment / fleet rental', label: 'Equipment / fleet rental' },
  { value: 'Other', label: 'Other' },
];

// Shapes a stored/submitted row into a stable client object.
export function normalizeContactSubmission(row) {
  return {
    id: row.id ?? null,
    name: row.name,
    email: row.email,
    phone: row.phone ?? null,
    company: row.company ?? null,
    serviceInterest: row.service_interest ?? row.serviceInterest ?? null,
    message: row.message,
    createdAt: row.created_at ?? new Date().toISOString(),
  };
}

// Inserts a lead. The table is insert-only under RLS (no SELECT for anon), so we
// intentionally do NOT chain .select() — `error` is the success signal.
export async function createContactSubmissionApi(payload) {
  if (!isSupabaseConfigured || !supabase) {
    return {
      ok: false,
      error: 'NOT_CONFIGURED',
      message:
        'The form is not connected yet. Please call or WhatsApp us in the meantime — we read every message.',
    };
  }

  const row = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone || null,
    company: payload.company || null,
    service_interest: payload.serviceInterest || null,
    message: payload.message,
    source: 'website',
  };

  const { error } = await supabase.from('contact_submissions').insert(row);

  if (error) {
    return { ok: false, error: error.code || 'INSERT_ERROR', message: error.message };
  }

  return { ok: true, data: normalizeContactSubmission(row) };
}

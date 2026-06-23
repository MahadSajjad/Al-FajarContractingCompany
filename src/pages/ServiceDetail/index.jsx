import { useParams } from 'react-router-dom';

export default function ServiceDetail() {
  const { slug } = useParams();
  return (
    <section className="container-page py-28 lg:py-36">
      <p className="eyebrow">Service</p>
      <h1 className="mt-5 font-display text-display-lg text-steel-navy">{slug}</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        Scaffold placeholder — dynamic service detail built in Phase 4.
      </p>
    </section>
  );
}

import { Head } from 'vite-react-ssg';

// Renders one or more JSON-LD blocks into <head> (collected into static HTML by
// vite-react-ssg). Pass a single schema object or an array.
export default function StructuredData({ data }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <Head>
      {blocks.filter(Boolean).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}

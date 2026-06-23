import Layout from '../components/layout/Layout';
import { allServiceSlugs } from '../data/services';

// Route-level code splitting: each page is a lazy chunk so page-specific code
// (e.g. the antd-backed contact form) loads only when its route is visited.
// The Layout shell stays in the main chunk. vite-react-ssg resolves `lazy`
// during prerender and on the client before mount.
const lazyPage = (loader) => () => loader().then((m) => ({ Component: m.default }));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, lazy: lazyPage(() => import('../pages/Home')) },
      { path: 'about', lazy: lazyPage(() => import('../pages/About')) },
      { path: 'services', lazy: lazyPage(() => import('../pages/Services')) },
      {
        path: 'services/:slug',
        lazy: lazyPage(() => import('../pages/ServiceDetail')),
        // Pre-render a static HTML page for every service.
        getStaticPaths: () => allServiceSlugs.map((slug) => `/services/${slug}`),
      },
      { path: 'sectors', lazy: lazyPage(() => import('../pages/Sectors')) },
      { path: 'clients', lazy: lazyPage(() => import('../pages/Clients')) },
      { path: 'contact', lazy: lazyPage(() => import('../pages/Contact')) },
      // Concrete /404 is prerendered, then copied to dist/404.html (post-build)
      // so static hosts serve a real branded 404. '*' covers client navigation.
      { path: '404', lazy: lazyPage(() => import('../pages/NotFound')) },
      { path: '*', lazy: lazyPage(() => import('../pages/NotFound')) },
    ],
  },
];

export default routes;

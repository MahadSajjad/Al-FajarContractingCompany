import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Sectors from '../pages/Sectors';
import Clients from '../pages/Clients';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Route tree consumed by vite-react-ssg (createBrowserRouter under the hood).
// The root route renders <Layout/> (providers + chrome) with child pages in its
// <Outlet/>. The dynamic /services/:slug route gets a getStaticPaths() in Phase 4
// so every service is prerendered to static HTML.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'services/:slug', Component: ServiceDetail },
      { path: 'sectors', Component: Sectors },
      { path: 'clients', Component: Clients },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
];

export default routes;

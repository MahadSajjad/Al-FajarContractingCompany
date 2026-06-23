import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes/AppRoutes';
import './styles/index.css';

// vite-react-ssg entry. On the client it self-mounts (wrapping the app in
// HelmetProvider + RouterProvider); during `vite-react-ssg build` it prerenders
// each route to static HTML. `createRoot` is the required export.
export const createRoot = ViteReactSSG({ routes });

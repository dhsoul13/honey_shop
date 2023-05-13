import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <div>Hello world!</div>,
  },
]);

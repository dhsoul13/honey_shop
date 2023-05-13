import { Outlet, createBrowserRouter } from 'react-router-dom';
import { devroutes, routes } from './routes';
import { Footer, Header } from 'src/components';
import { MainLayout } from 'src/components/layout/MainLauout';
import { DevLayout } from 'src/components/layout/DevLayout';

export const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <>Hello World</>,
      },
    ],
  },
  {
    path: routes.dev.path,
    element: <DevLayout />,
    children: [
      {
        path: devroutes.header.path,
        element: (
          <div
            style={{
              backgroundColor: '#ffd057',
            }}
          >
            <Header />
          </div>
        ),
      },
      {
        path: devroutes.footer.path,
        element: (
          <div
            style={{
              backgroundColor: '#ffd057',
            }}
          >
            <div>
              <Footer />
            </div>
          </div>
        ),
      },
    ],
  },
]);

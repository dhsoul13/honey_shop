import { Outlet, createBrowserRouter } from 'react-router-dom';
import { devroutes, routes } from './routes';
import { Footer, Header } from 'src/components';
import { MainLayout } from 'src/components/layout/MainLauout';

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
    element: <MainLayout />,
    children: [
      {
        path: devroutes.header.path,
        element: (
          <div
            style={{
              backgroundColor: '#ffd057',
            }}
          >
            <div
              style={{
                width: '1140px',
                margin: '0px auto',
              }}
            >
              <Header />
            </div>
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

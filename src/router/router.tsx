import { Outlet, createBrowserRouter } from 'react-router-dom';
import { devroutes, routes } from './routes';
import { Header } from 'src/components';

export const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <div>Hello world!</div>,
  },
  {
    path: routes.dev.path,
    element: (
      <>
        <Outlet />
      </>
    ),
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
    ],
  },
]);

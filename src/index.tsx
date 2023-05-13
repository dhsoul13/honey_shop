import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import './styles/global.scss';
import ConfigProvider from 'antd/es/config-provider';
import { configProviderProps } from './shared/constant/configProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider {...configProviderProps}>
    <RouterProvider router={router} />
  </ConfigProvider>
);

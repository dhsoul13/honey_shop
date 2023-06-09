import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import './styles/global.scss';
import ConfigProvider from 'antd/es/config-provider';
import { configProviderProps } from './shared/constant/configProvider';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<ConfigProvider {...configProviderProps}>
			<RouterProvider router={router} />
		</ConfigProvider>
	</Provider>
);

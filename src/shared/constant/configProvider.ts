import ru_RU from 'antd/locale/ru_RU';

import type { ConfigProviderProps } from 'antd/es/config-provider';

export const configProviderProps: ConfigProviderProps = {
	locale: ru_RU,
	theme: {
		token: {
			fontSize: 16,
			borderRadius: 5,
			colorPrimary: '#ffd057',
			colorText: '#3c270d',
			colorTextHeading: '#3c270d',
			fontFamily: '"Montserrat", sans-serif',
		},
	},
};

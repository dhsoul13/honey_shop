import {
	EnvironmentOutlined,
	MailOutlined,
	PhoneOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { IContentInfoAboutSeller } from './types';
import { TelegramIcon, VKIcon } from 'src/assets/imgs/svg';

export const contentInfoAboutSeller: Array<IContentInfoAboutSeller> = [
	{
		visitableTitle: 'Имя продавца',
		visibleInformation: 'Иванов Иван Иванович',
		icon: <UserOutlined />,
	},
	{
		visitableTitle: 'Наше расположение',
		visibleInformation: 'c. Большое Болдино',
		icon: <EnvironmentOutlined />,
	},
	{
		visitableTitle: 'Номер телефона',
		visibleInformation: '74242412412412',
		icon: <PhoneOutlined />,
	},
	{
		visitableTitle: 'Email',
		visibleInformation: 'mrerr@ya.ru',
		icon: <MailOutlined />,
	},
	{
		visitableTitle: 'Ссылки на соцсети',
		visibleInformation: [
			{
				dopVisitableTitle: 'Telegram',
				dopVisibleInformation: '323',
				iconDop: <TelegramIcon />,
			},
			{
				dopVisitableTitle: 'VK',
				dopVisibleInformation: '3232',
				iconDop: <VKIcon />,
			},
			{
				dopVisitableTitle: 'VK группа',
				dopVisibleInformation: '3232',
				iconDop: <VKIcon />,
			},
		],
	},
];

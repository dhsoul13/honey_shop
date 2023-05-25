import { routes } from 'src/router';

interface IHeaderLink {
	title: string;
	link: string;
	disable: boolean;
}

export const headerLink: Array<IHeaderLink> = [
	{
		title: 'Магазин',
		link: '/shop',
		disable: false,
	},
	{
		title: 'О меде',
		link: '/honey',
		disable: true,
	},
	{
		title: 'Контакты',
		link: '/contact ',
		disable: false,
	},
];

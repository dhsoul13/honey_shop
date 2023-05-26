type TPageName =
	| 'Главная страница'
	| 'Наша продукция'
	| 'Наши пасики'
	| 'О меде'
	| 'Контакты'
	| 'Демрнстрационная страница';

type TTegs = 'липовый мед' | 'цветочный мед';

interface IRequestElement {
	id: string | number;
	title: string;
	info: string;
	price: string;
	tegs: Array<TTegs>;
	count: number | string;
	volume: '1' | '0,5' | '2' | '3';
	img?: Array<string>;
}

interface IRequestNews {
	id: string | number;
	title: string;
	info: string;
	img?: Array<string>;
	date: Date;
}

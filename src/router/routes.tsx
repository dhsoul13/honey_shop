export const routes: TRoutes = {
	home: {
		visibleNameRouter: 'Главная страница',
		path: '/',
	},
	shop: {
		visibleNameRouter: 'Наша продукция',
		path: '/shop',
	},
	honey: {
		visibleNameRouter: 'О меде',
		path: '/honey',
	},
	contact: {
		visibleNameRouter: 'Контакты',
		path: '/contact',
	},
	dev: {
		visibleNameRouter: 'Демрнстрационная страница',
		path: '/dev',
	},
	404: {
		visibleNameRouter: 'Страница 404',
		path: '*',
	},
};

export const devroutes: TRoutesDev = {
	header: {
		visibleNameRouter: 'Header',
		path: '/dev/header',
	},
	footer: {
		visibleNameRouter: 'Footer',
		path: '/dev/footer',
	},
	button: {
		visibleNameRouter: 'Button',
		path: '/dev/button',
	},
	modalCard: {
		visibleNameRouter: 'Модальное окно для карточки',
		path: '/dev/modalCard',
	},
	ModalsAuthentically: {
		visibleNameRouter: 'Модальное окно для авторизации и регистрации',
		path: '/dev/modalAuthentically',
	},
};

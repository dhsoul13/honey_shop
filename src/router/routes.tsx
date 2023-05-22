interface IRoutes {
  visibleNameRouter: string;
  path: string;
}

export const routes: Record<string, IRoutes> = {
  home: {
    visibleNameRouter: 'Главная страница',
    path: '/',
  },
  about: { visibleNameRouter: 'О нас', path: './about' },
  shop: {
    visibleNameRouter: 'Наша продукция',
    path: '/shop',
  },
  place: {
    visibleNameRouter: 'Наши пасики',
    path: '/place',
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
};

export const devroutes: Record<string, IRoutes> = {
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
};

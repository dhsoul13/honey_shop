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
  product: {
    visibleNameRouter: 'Наша продукция',
    path: '/product',
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
};

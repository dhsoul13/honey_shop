interface IHeaderLink {
  title: string;
  link: string;
  disable: boolean;
}

export const headerLink: Array<IHeaderLink> = [
  {
    title: 'О нас',
    link: '/dev/header',
    disable: true,
  },
  {
    title: 'Наша продукция',
    link: `./shop`,
    disable: false,
  },
  {
    title: 'О меде',
    link: '/dev/header',
    disable: true,
  },
  {
    title: 'Контакты',
    link: '/dev/header',
    disable: true,
  },
];

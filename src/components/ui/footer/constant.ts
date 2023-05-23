interface IFooterLink {
  title: string;
  link: string;
}

export const footerLink: Array<IFooterLink> = [
  {
    title: 'Наша магазин',
    link: '/shop',
  },
  {
    title: 'О меде',
    link: '/honey',
  },
  {
    title: 'Контакты',
    link: '/contact',
  },
];

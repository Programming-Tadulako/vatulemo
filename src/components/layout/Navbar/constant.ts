interface NavLink {
  id: string;
  href: string;
  title: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    id: "1",
    href: "/#home",
    title: "Home",
  },
  {
    id: "2",
    href: "/#about",
    title: "About",
  },
  {
    id: "3",
    href: "/#faq",
    title: "FAQ",
  },
];

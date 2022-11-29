export type NavbarLink = {
  id: number;
  title: string;
  href: string;
};

export const navbarLinks: NavbarLink[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "New",
    href: "/new",
  },
  {
    id: 3,
    title: "Popular",
    href: "/popular",
  },
  {
    id: 4,
    title: "Trending",
    href: "/trending",
  },
  {
    id: 5,
    title: "Categories",
    href: "/categories",
  },
];

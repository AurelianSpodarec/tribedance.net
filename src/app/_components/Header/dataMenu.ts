export interface IMenuItem {
  name: string;
  url: string;
  isActive?: boolean;
}

const dataMenu: IMenuItem[] = [
  {
    name: "Academy",
    url: "/academy",
  },
  {
    name: "Mixing and Mastering",
    url: "/mixing-and-mastering",
  },
  {
    name: "Co-Production",
    url: "/co-production"
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Shop",
    url: "/shop",
  },
]

export default dataMenu;

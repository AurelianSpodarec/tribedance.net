export interface IMenuItem {
  name: string;
  url: string;
  isActive?: boolean;
}

const dataMenu: IMenuItem[] = [
  {
    name: "Shop",
    url: "/shop",
  },
  // {
  //   name: "Mixing and Mastering",
  //   url: "/mixing-and-mastering",
  // },
  // {
  //   name: "Academy",
  //   url: "/academy",
  // },
  // {
  //   name: "Co-Production",
  //   url: "/co-production"
  // },
  // {
  //   name: "Blog",
  //   url: "/blog",
  // },
]

export default dataMenu;

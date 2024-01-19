export type navItemType = {
  text: string;
  children?: {
    text: string;
    to: string;
  }[];
  to: string;
};

export type NavbarItemProp = {
  navItem: navItemType;
};

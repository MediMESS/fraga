export type navButtonType = {
  text: string;
  children?: {
    text: string;
    onClick: () => void;
  }[];
  onClick: () => void;
};

export type NavbarItemProp = {
  navButton: navButtonType;
};

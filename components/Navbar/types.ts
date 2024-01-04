export type NavbarProps = {
  children?: React.ReactNode;
  nav_links?: NavLinkProps[];
};

export type NavLinkProps = {
  href: string;
  label: string;
  special: boolean;
};

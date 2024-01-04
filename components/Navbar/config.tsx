import { NavLinkProps } from "./types";

const NavLink = (
  label: string,
  href: string = "",
  special: boolean = false
): NavLinkProps => {
  return {
    label: label,
    href: href,
    special: special,
  };
};

const nav_links_data = [{}];

export default nav_links_data;

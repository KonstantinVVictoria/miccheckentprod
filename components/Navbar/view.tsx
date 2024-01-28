import { MenuIcon } from "../Icons/view";
import Logo from "../Logo/view";
import styles from "./styles.module.css";
import { NavLinkProps, NavbarProps } from "./types";

const NavItem = ({ label, href, special }: NavLinkProps) => {
  return (
    <a
      className={special ? styles.nav_link_special : styles.nav_link}
      href={href}
    >
      {label}
    </a>
  );
};

export function Navbar(props: NavbarProps) {
  // const nav_links = props.nav_links.map((nav_link_prop) => (
  //   <NavItem {...nav_link_prop} />
  // ));
  return (
    <header className={styles.main_container} id="nav_bar">
      <div className={styles.header_items}>
        <Logo size={4} style={{ margin: "0.5rem" }} />
        <nav className={styles.nav_links}>
          <NavItem label="Home" href="#main_banner" />
          <NavItem label="Mixes" href="#mixes_section" />
          <NavItem label="Bookings" href="#book_now_section" />
          <NavItem label="Jobs" href="#join_us_section" />
          <NavItem label="Contact" href="" />
        </nav>
      </div>
    </header>
  );
}

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
        <button className={styles.nav_link_special}>Book Now!</button>
      </div>
      <nav className={styles.nav_links}>
        <NavItem label="Home" href="" />
        <NavItem label="Bookings" href="" />
        <NavItem label="Contact" href="" />
        <NavItem label="Jobs" href="" />
      </nav>
    </header>
  );
}

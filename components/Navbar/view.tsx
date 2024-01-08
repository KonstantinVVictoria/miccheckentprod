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
      <Logo size={4} style={{ margin: "0.5rem" }} />
      <div className={styles.menu_items}>
        <button className={styles.nav_link_special}>Book Now!</button>
      </div>
    </header>
  );
}

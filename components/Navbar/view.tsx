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
  const nav_links = props.nav_links.map((nav_link_prop) => (
    <NavItem {...nav_link_prop} />
  ));
  return (
    <header className={styles.main_container}>
      <Logo size={5.5} />
      <div className={styles.menu_items}>
        <button className={styles.nav_link_special}>Book Now!</button>
        <button className={styles.menu_button}>
          <MenuIcon color={"var(--gold)"} />
        </button>
      </div>
    </header>
  );
}

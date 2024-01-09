import styles from "./styles.module.css";
import { ViewportProps } from "./types";

export default function Viewport(props: ViewportProps) {
  return (
    <main id="main_viewport" className={styles.viewport || props.className}>
      {props.children}
    </main>
  );
}

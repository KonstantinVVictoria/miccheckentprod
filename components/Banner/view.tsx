import styles from "./styles.module.css";
import { BannerProps } from "./types";

export default function Banner(props: BannerProps) {
  const composite_classname = [
    styles.main_container,
    props.special ? styles.special : undefined,
  ].reduce((acc, elem) => {
    return acc + (elem ? ` ${elem}` : "");
  });

  return (
    <section className={composite_classname} style={props.style}>
      {props.children}
    </section>
  );
}

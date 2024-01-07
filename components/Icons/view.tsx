import styles from "./styles.module.css";
import { IconsProps } from "./types";

export function MenuIcon(props: IconsProps) {
  return (
    <svg
      fill={props.color ? `${props.color}` : "#000"}
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z" />
    </svg>
  );
}

export function ExitIcon(props: IconsProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        d="M3 21.32L21 3.32001"
        stroke={props.color ? `${props.color}` : "#000"}
        strokeWidth="1.5"
      />
      <path
        d="M3 3.32001L21 21.32"
        stroke={props.color ? `${props.color}` : "#000"}
        strokeWidth="1.5"
      />
    </svg>
  );
}

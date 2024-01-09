"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { SpecialImageProps } from "./types";

//TODO: Handle desktop version
export default function SpecialImage(props: SpecialImageProps) {
  const ImageRef = useRef(null);
  const ContainerRef = useRef(null);
  useEffect(() => {
    const Image = ImageRef.current as unknown as HTMLImageElement;
    const Container = ContainerRef.current as unknown as HTMLDivElement;
    const container_width = Container.offsetWidth;
    const image_width = Image.offsetWidth;
    const image_height = Image.offsetHeight;
    const viewport_height = window.innerHeight;
    const image_midpoint = image_width / 2;
    const NavBar = document.getElementById(
      "nav_bar"
    ) as unknown as HTMLHeadingElement;
    const Footer = document.getElementById(
      "mobile_footer"
    ) as unknown as HTMLElement;

    const y_offset_top = NavBar.offsetHeight / viewport_height;
    const y_offset_bot = 1 - Footer.offsetHeight / viewport_height;

    const shift_length = (container_width - image_width) / 2;
    if (props.parallax) {
      window.addEventListener(
        "scroll",
        () => {
          const relative_pos =
            Image.getBoundingClientRect().y / viewport_height - y_offset_top;
          if (
            relative_pos >= 0 &&
            relative_pos <= y_offset_bot - y_offset_top
          ) {
            //waxing

            const transition_ratio = Math.pow(
              relative_pos / (y_offset_bot - y_offset_top),
              1
            );
            Image.style.transform = `translateX(${
              transition_ratio * shift_length
            }px)`;
          } else if (
            relative_pos < 0 &&
            relative_pos >= -image_height / viewport_height
          ) {
            //waning
            const transition_ratio = -Math.pow(
              -relative_pos / (image_height / viewport_height),
              1
            );
            Image.style.transform = `translateX(${
              transition_ratio * shift_length
            }px)`;
          }
        },
        false
      );
    }
  }, []);
  return (
    <div
      className={styles.main_container}
      style={props.style}
      ref={ContainerRef}
    >
      <img
        src={props.src}
        alt={props.alt}
        ref={ImageRef}
        style={{ height: "100%" }}
      />
    </div>
  );
}

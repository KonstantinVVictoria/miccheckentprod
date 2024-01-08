"use client";
import {
  AboutUsIcon,
  CalendarIcon,
  ExitIcon,
  HomeIcon,
  JobIcon,
  MenuIcon,
  PhoneIcon,
} from "../Icons/view";
import styles from "./styles.module.css";
import { MenuProps } from "./types";
import { useEffect, useState } from "react";

type MenuButtonProps = {
  children?: React.ReactNode;
  label: string;
  special?: boolean;
};
function MenuButton(props: MenuButtonProps) {
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
        fontFamily: "inherit",
      }}
    >
      {props.children}
      <p
        style={{
          margin: 0,
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: "2rem",
          color: props.special ? "var(--ruby)" : "",
        }}
      >
        {props.label}
      </p>
    </button>
  );
}

export default function Menu() {
  const [is_menu_open, menu_open] = useState(false);
  useEffect(() => {
    const body = document.getElementsByTagName(
      "body"
    )[0] as unknown as HTMLBodyElement;
    body.style.overflowY = is_menu_open ? "hidden" : "auto";
  });
  return (
    <>
      <footer
        style={{
          zIndex: 100,
          position: "fixed",
          bottom: "0",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "0.7rem 0.5rem",
          gap: "1rem",
          width: "100%",
          backgroundColor: "var(--marble)",
          borderTop: "1px solid var(--concrete)",
        }}
      >
        <input
          placeholder="Ask an AI"
          style={{
            height: " 2.5rem",
            border: "none",
            borderRadius: "7px",
            width: "80%",
            background: "transparent",
            fontFamily: "inherit",
            padding: "0rem 1rem",
            fontSize: "1rem",
            color: "var(--obsidian)",
          }}
        />
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onMouseDown={() => {
            menu_open(true);
          }}
        >
          <MenuIcon
            style={{
              height: "2rem",
              width: "auto",
              zIndex: 100,
              position: "relative",
            }}
            color={"var(--obsidian)"}
          />
        </button>
      </footer>
      <div
        className={styles.menu}
        style={{
          opacity: is_menu_open ? "1" : "0",
          pointerEvents: is_menu_open ? "auto" : "none",
          backdropFilter: is_menu_open ? "blur(40px)" : "blur(0px)",
        }}
      >
        <menu
          style={{
            position: "fixed",
            bottom: "4rem",
            margin: "0",
            width: "100%",
            padding: "1rem",
            zIndex: "104",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column-reverse",
            gap: "2rem",
          }}
        >
          <MenuButton label="Home"></MenuButton>
          <MenuButton label="Book" special></MenuButton>
          <MenuButton label="About Us"></MenuButton>
          <MenuButton label="Contact Us"></MenuButton>
          <MenuButton label="Jobs"></MenuButton>
          <img
            src="/images/company_logo.svg"
            style={{ width: "100%", padding: "2rem" }}
          />
        </menu>
      </div>

      <footer
        style={{
          zIndex: 103,
          position: "fixed",
          bottom: "0",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0.7rem 0.5rem",
          gap: "1rem",
          width: "100%",
          height: "4rem",
          backgroundColor: "transparent",
          opacity: is_menu_open ? "1" : "0",
          transition: "opacity 200ms ease",
          pointerEvents: is_menu_open ? "auto" : "none",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
          }}
          onMouseDown={() => {
            menu_open(false);
          }}
        >
          <ExitIcon
            style={{
              height: "2.4rem",
              width: "auto",
              zIndex: 104,
              position: "relative",
            }}
            color={"var(--obsidian)"}
          />
        </button>
      </footer>
    </>
  );
}

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

export default function Menu(props: MenuProps) {
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
        className={styles.toolbar}
        id="mobile_footer"
        style={{
          zIndex: 100,
          position: "fixed",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "var(--marble)",
          borderTop: "1px solid var(--concrete)",
        }}
      >
        <input
          className={styles.ask_ai}
          placeholder="Ask an AI 🤖"
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
        {props.dimension_type !== 1 ? (
          <button
            className={styles.menu_button}
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
        ) : null}
      </footer>

      {props.dimension_type !== 1 ? (
        <>
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
              <MenuButton label="Contact Us"></MenuButton>
              <MenuButton label="Join Us"></MenuButton>
              <MenuButton label="Book" special></MenuButton>
              <MenuButton label="About Us"></MenuButton>
              <MenuButton label="Home"></MenuButton>
              <img
                src="/images/company_logo.svg"
                style={{
                  width: "100%",
                  padding: "2rem",
                  borderRadius: "15px",
                }}
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
      ) : null}
    </>
  );
}

"use client";
import { ExitIcon, MenuIcon } from "../Icons/view";
import styles from "./styles.module.css";
import { MenuProps } from "./types";
import { useEffect, useState } from "react";
export default function Menu() {
  const [is_menu_open, menu_open] = useState(false);
  useEffect(() => {});
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
          position: "fixed",
          opacity: is_menu_open ? "1" : "0",
          pointerEvents: is_menu_open ? "auto" : "none",
          backdropFilter: is_menu_open ? "blur(25px)" : "blur(0px)",
        }}
      >
        <nav className={styles.menu_selections}></nav>
        <footer
          style={{
            zIndex: 100,
            position: "relative",
            bottom: "0",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0.7rem 0.5rem",
            gap: "1rem",
            width: "100%",
            height: "4rem",
          }}
        >
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onMouseDown={() => {
              menu_open(false);
            }}
          >
            <ExitIcon
              style={{
                height: "2.4rem",
                width: "auto",
                zIndex: 100,
                position: "relative",
              }}
              color={"var(--marble)"}
            />
          </button>
        </footer>
      </div>
    </>
  );
}
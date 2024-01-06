import nav_links_data from "@/components/Navbar/config";
import { Navbar } from "@/components/Navbar/view";
import VideoBanner from "@/components/VideoBanner/view";
import styles from "./styles.module.css";
import { MenuIcon } from "@/components/Icons/view";
import { relative } from "path";

function InfoBanner() {
  return <></>;
}

export default function SplashPage() {
  return (
    <>
      <Navbar />
      <VideoBanner
        glow
        style={{
          height: "40vh",
          width: "100vw",
        }}
        id={"intro_video"}
        src="/videos/kev_splash_page.mp4"
      />
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
          background: `linear-gradient(
    180deg,
    rgba(25, 25, 25, 0.75) 0%,
    rgba(35, 35, 35, 0.75) 100%
  );`,
        }}
      >
        <input
          placeholder="Search"
          style={{
            height: " 2rem",
            border: "1px solid white",
            borderRadius: "50px",
            width: "80%",
            background: "transparent",
            fontFamily: "inherit",
            padding: "0rem 1rem",
            fontSize: "1rem",
            color: "var(--gold)",
          }}
        />
        <MenuIcon
          style={{
            height: "2rem",
            width: "auto",
            zIndex: 100,
            position: "relative",
          }}
          color={"var(--gold)"}
        />
      </footer>
    </>
  );
}

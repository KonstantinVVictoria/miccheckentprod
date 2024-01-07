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
      <main style={{ marginBottom: "4.5rem" }}>
        <VideoBanner
          style={{
            height: "65vh",
            width: "100vw",
            borderRadius: "17px",
          }}
          id={"intro_video"}
          src="/videos/kev_splash_page.mp4"
          placeholder_src="images/company_logo.svg"
          placeholder_alt="dj kev"
        />
        <section
          className={styles.section}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0rem 0rem",
            padding: "1rem",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
            color: "white",
            height: "calc(100vh - 65vh - 8rem)",
          }}
        >
          <p
            style={{
              fontWeight: "200",
              fontSize: "1.7rem",
              textAlign: "center",
              margin: "0.5rem 0rem",
            }}
          >
            <i>&ldquo</i> It’s not just <b>entertainment.</b> <br />
            It’s about the <b>experience.</b>
            <i>&rdquo</i>
          </p>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem 0rem",
            padding: "1rem",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
            color: "var(--obsidian)",
          }}
        >
          <img
            src="/images/whatwedo.png"
            style={{ width: "100%", objectFit: "cover", borderRadius: "15px" }}
          />
          <h2
            style={{
              fontWeight: "400",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            What We Do
          </h2>
          <p
            style={{
              fontWeight: "200",
              fontSize: "1.7rem",
              textAlign: "center",
              margin: "0.5rem 0rem",
            }}
          >
            We offer a full Wedding and Event entertainment service including
            Lighting and Photo Booth options.
          </p>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem 0rem",
            padding: "1rem",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
            color: "var(--obsidian)",
          }}
        >
          <img
            src="/images/dj_kev_luu_side.jpg"
            style={{ width: "100%", objectFit: "cover", borderRadius: "15px" }}
          />
          <h2
            style={{
              fontWeight: "400",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Who We Are
          </h2>
          <p
            style={{
              fontWeight: "200",
              fontSize: "1.7rem",
              textAlign: "center",
              margin: "0.5rem 0rem",
            }}
          >
            An entertainment company run by professional musicians and audio
            engineers where customer satisfaction and attention to detail is our
            highest priority.
          </p>
        </section>
      </main>
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
        <MenuIcon
          style={{
            height: "2rem",
            width: "auto",
            zIndex: 100,
            position: "relative",
          }}
          color={"var(--obsidian)"}
        />
      </footer>
    </>
  );
}

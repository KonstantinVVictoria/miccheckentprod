import nav_links_data from "@/components/Navbar/config";
import { Navbar } from "@/components/Navbar/view";
import VideoBanner from "@/components/VideoBanner/view";
import styles from "./styles.module.css";

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
        src="/videos/splash_page.mp4"
      />
      <section id={"intro_section"} style={{ width: "100vw", padding: "1rem" }}>
        <h1 style={{ fontWeight: "800", zIndex: 99, width: "100vw" }}>
          We specialize in...
        </h1>
        <h1 style={{ color: "var(--gold)", fontWeight: "400" }}>
          Magical Slow Dances
          <br />
          <br />
          Energetic Moments
          <br />
          <br />
          Unforgettable Memories
        </h1>
      </section>
    </>
  );
}

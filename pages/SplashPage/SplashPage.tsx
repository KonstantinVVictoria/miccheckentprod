"use client";
import { Navbar } from "@/components/Navbar/view";
import VideoBanner from "@/components/VideoBanner/view";
import Menu from "@/components/Menu/view";
import SpecialImage from "@/components/SpecialImage/view";
import styles from "./styles.module.css";
import Viewport from "@/components/Viewport/view";
import Banner from "@/components/Banner/view";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function InfoBanner() {
  return <></>;
}

export default function SplashPage() {
  //1 is desktop, 2 is tablet, 3 is mobile
  const [dimension_type, set_dimension_type] = useState(1);

  useEffect(() => {
    if (
      window.matchMedia("(max-width: 400px)").matches &&
      dimension_type !== 3
    ) {
      set_dimension_type(3);
    } else if (
      window.matchMedia("(max-width: 760px)").matches &&
      dimension_type !== 2
    ) {
      set_dimension_type(2);
    } else {
      set_dimension_type(1);
    }

    window.addEventListener("resize", () => {
      if (
        window.matchMedia("(max-width: 400px)").matches &&
        dimension_type !== 3
      ) {
        console.log("mobile");
        set_dimension_type(3);
      } else if (
        window.matchMedia("(max-width: 760px)").matches &&
        dimension_type !== 2
      ) {
        set_dimension_type(2);
        console.log("tablet");
      } else {
        set_dimension_type(1);
        console.log("desktop");
      }
    });
  }, []);
  return (
    <div className={styles.page}>
      <aside className={styles.media}>
        <div className={styles.intro_video}>
          <VideoBanner
            style={{
              height: "100vh",
              width: "50vw",
              borderRadius: "17px",
            }}
            id={styles.intro_video}
            src="/videos/kev_splash_page.mp4"
            placeholder_src="images/company_logo.svg"
            placeholder_alt="dj kev"
          />
        </div>
      </aside>
      <article
        className={styles.main_article}
        style={{ overflowY: "scroll", height: "100vh" }}
      >
        <Navbar />
        <Viewport>
          <div className={styles.intro_video_mobile}>
            <VideoBanner
              style={{
                height: "65vh",
                width: "100vw",
                borderRadius: "17px",
              }}
              id={styles.intro_video_mobile}
              src="/videos/kev_splash_page.mp4"
              placeholder_src="images/company_logo.svg"
              placeholder_alt="dj kev"
            />
          </div>

          <Banner
            special
            style={{
              margin: "0rem 0rem",
              padding: "1rem",
              color: "var(--marble)",
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
              <q>
                It’s not just <b>entertainment.</b> <br />
                It’s about the <b>experience.</b>
              </q>
            </p>
          </Banner>
          <Banner
            style={{
              margin: "1rem 0rem",
              padding: "1rem",
              color: "var(--obsidian)",
            }}
          >
            <SpecialImage
              parallax
              src="/images/party.jpg"
              alt="dj kev fixing lights"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
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
                margin: "0rem 0rem",
              }}
            >
              We offer a full <mark>Wedding</mark> and{" "}
              <mark>Event entertainment service</mark> including <u>Lighting</u>{" "}
              and <u>Photo Booth options</u>.
            </p>
          </Banner>
          <Banner
            style={{
              margin: "1rem 0rem",
              padding: "1rem",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
              color: "var(--obsidian)",
            }}
          >
            <SpecialImage
              parallax
              src="/images/dj_kev_closeup_side.jpg"
              alt="dj kev close up"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
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
                margin: "0rem 0rem",
              }}
            >
              <mark>An entertainment company</mark> run by professional
              musicians and audio engineers where{" "}
              <u>
                customer satisfaction and attention to detail is our highest
                priority
              </u>
              .
            </p>
          </Banner>
        </Viewport>
        <Menu dimension_type={dimension_type} />
      </article>
    </div>
  );
}

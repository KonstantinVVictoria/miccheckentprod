"use client";
import { Navbar } from "@/components/Navbar/view";
import VideoBanner from "@/components/VideoBanner/view";
import Menu from "@/components/Menu/view";
import SpecialImage from "@/components/SpecialImage/view";
import styles from "./styles.module.css";
import Viewport from "@/components/Viewport/view";
import Banner from "@/components/Banner/view";
import { RefObject, useEffect, useRef, useState } from "react";

function InfoBanner() {
  return <></>;
}

function PhaseMediaEffect(
  TargetRef: RefObject<HTMLElement>,
  PhaseInRef: RefObject<HTMLElement>,
  PhaseOutRef: RefObject<HTMLElement>
) {
  const DesktopMediaHolder = document.getElementById(
    "media_holder"
  ) as HTMLDivElement;

  if (getComputedStyle(DesktopMediaHolder).display === "none") return;
  const Container = DesktopMediaHolder as HTMLDivElement;
  const container_width = Container.offsetWidth;
  const Target = TargetRef.current as unknown as HTMLElement;
  const target_height = Target.offsetHeight;
  const viewport_height = window.innerHeight;

  const NavBar = document.getElementById(
    "nav_bar"
  ) as unknown as HTMLHeadingElement;

  const Footer = document.getElementById(
    "mobile_footer"
  ) as unknown as HTMLElement;

  const Article = document.getElementById(
    "main_article"
  ) as unknown as HTMLElement;

  const y_offset_top = NavBar.offsetHeight / viewport_height;
  const y_offset_bot = 1 - Footer.offsetHeight / viewport_height;
  const PhaseInElement = PhaseInRef.current as unknown as HTMLElement;
  const phasein_width = PhaseInElement.offsetWidth;
  const PhaseOutElement = PhaseOutRef.current as unknown as HTMLElement;

  const shift_length = (container_width - phasein_width) / 2;
  Article.addEventListener("scroll", () => {
    const relative_pos =
      Target.getBoundingClientRect().y / viewport_height - y_offset_top;
    if (relative_pos >= 0 && relative_pos <= y_offset_bot - y_offset_top) {
      //waxing
      const transition_ratio = Math.pow(
        relative_pos / (y_offset_bot - y_offset_top),
        1
      );

      PhaseInElement.style.transform = `translateX(${
        transition_ratio * shift_length
      }px)`;

      PhaseOutElement.style.opacity = `${Math.pow(transition_ratio, 1)}`;
      if (PhaseInElement.style.opacity !== "1")
        PhaseInElement.style.opacity = "1";
    } else if (
      relative_pos < 0 &&
      relative_pos >= -target_height / viewport_height
    ) {
      //waning

      const transition_ratio = -Math.pow(
        relative_pos / (target_height / viewport_height),
        1
      );
      PhaseInElement.style.opacity = `${Math.pow(1 - transition_ratio, 1)}`;
      PhaseInElement.style.transform = `translateX(${
        transition_ratio * shift_length
      }px)`;
      // Overlay.style.opacity = `${-Math.pow(transition_ratio, 5)}`;
    } else if (relative_pos > target_height / viewport_height) {
    }
  });
}

export default function SplashPage() {
  //1 is desktop, 2 is tablet, 3 is mobile
  const SplashVideoRef = useRef(null);
  const BookingImageRef = useRef(null);
  const BookingSectionRef = useRef(null);
  const JoinUsImageRef = useRef(null);
  const JoinUsSectionRef = useRef(null);
  const [dimension_type, set_dimension_type] = useState(1);

  useEffect(() => {
    const DesktopMediaHolder = document.getElementById(
      "media_holder"
    ) as HTMLDivElement;

    if (getComputedStyle(DesktopMediaHolder).display !== "none") {
      PhaseMediaEffect(BookingSectionRef, BookingImageRef, SplashVideoRef);
      PhaseMediaEffect(JoinUsSectionRef, JoinUsImageRef, BookingImageRef);
    }
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
        set_dimension_type(3);
      } else if (
        window.matchMedia("(max-width: 760px)").matches &&
        dimension_type !== 2
      ) {
        set_dimension_type(2);
      } else {
        set_dimension_type(1);
      }
    });
  }, []);
  return (
    <div className={styles.page}>
      <aside className={styles.media}>
        <div id="media_holder" className={styles.media_holder}>
          <img
            id="join_us_image"
            src="/images/dj_board.jpg"
            alt="dj_board"
            style={{
              position: "absolute",
              width: "auto",
              height: "100vh",
              objectFit: "cover",
              top: "0",
              right: "-50%",
              opacity: "0",
            }}
            ref={JoinUsImageRef}
          />
          <img
            id="book_now_image"
            src="/images/happy_couple_peace.jpg"
            alt="dj_board"
            style={{
              position: "absolute",
              width: "auto",
              height: "100vh",
              objectFit: "cover",
              top: "0",
              right: "-50%",
              opacity: "0",
            }}
            ref={BookingImageRef}
          />
          <VideoBanner
            style={{
              height: "100vh",
              width: "50vw",
              borderRadius: "17px",
            }}
            id={"intro_video"}
            src="/videos/kev_splash_page.mp4"
            placeholder_src="images/company_logo.svg"
            placeholder_alt="dj kev"
            reference={SplashVideoRef}
          />
        </div>
      </aside>
      <article
        id="main_article"
        className={styles.main_article}
        style={{ overflowY: "scroll", height: "100vh" }}
      >
        <Navbar />
        <Viewport>
          <div className={styles.intro_video_mobile}>
            <VideoBanner
              style={{
                height: "65vh",
                width: "100%",
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
              desktop
              src="/images/party.jpg"
              alt="dj kev fixing lights"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <SpecialImage
              mobile
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
              desktop
              src="/images/dj_kev_closeup_side.jpg"
              alt="dj kev close up"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <SpecialImage
              mobile
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
          <Banner
            style={{
              margin: "1rem 0rem",
              padding: "1rem",
              color: "var(--marble)",
              backgroundColor: "var(--ruby)",
              height: "calc(100vh - 2 * 4.5rem) !important",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
            }}
            reference={BookingSectionRef}
          >
            <h2
              style={{
                fontWeight: "400",
                fontSize: "2rem",
                textAlign: "center",
                flex: "1",
                marginTop: "0.5rem",
                marginBottom: "0rem",
              }}
            >
              Book Now!
            </h2>
            <section
              style={{
                flex: "10",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Name
              </p>
              <input
                className={styles.form_input}
                style={{
                  height: "2rem",
                  borderRadius: "2px",
                  fontSize: "1rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--ruby) 10%)",
                }}
              />
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Email Address
              </p>
              <input
                className={styles.form_input}
                style={{
                  height: "2rem",
                  borderRadius: "2px",
                  fontSize: "1rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--ruby) 10%)",
                }}
              />
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Phone Number
              </p>
              <input
                className={styles.form_input}
                style={{
                  height: "2rem",
                  borderRadius: "2px",
                  fontSize: "1rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--ruby) 10%)",
                }}
              />
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Request
              </p>
              <textarea
                className={styles.form_input}
                style={{
                  height: "8rem",
                  borderRadius: "2px",
                  fontSize: "1rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--ruby) 10%)",
                }}
              />
              <button className={styles.form_button}>Book</button>
            </section>
          </Banner>
          <Banner
            style={{
              margin: "1rem 0rem",
              padding: "1rem",
              color: "var(--marble)",
              backgroundColor: "var(--sapphire)",
              height: "calc(100vh - 2 * 4.5rem) !important",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
            }}
            reference={JoinUsSectionRef}
          >
            <h2
              style={{
                fontWeight: "400",
                fontSize: "2rem",
                textAlign: "center",
                flex: "1",
                marginTop: "0.5rem",
                marginBottom: "0rem",
              }}
            >
              Join Us!
            </h2>
            <section
              style={{
                flex: "10",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Name
              </p>
              <input
                className={styles.form_input}
                style={{
                  height: "2rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--sapphire) 10%)",
                  borderRadius: "2px",
                  fontSize: "1rem",
                }}
              />
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Email Address
              </p>
              <input
                className={styles.form_input}
                style={{
                  height: "2rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--sapphire) 10%)",
                  borderRadius: "2px",
                  fontSize: "1rem",
                }}
              />
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Phone Number
              </p>
              <input
                className={styles.form_input}
                style={{
                  height: "2rem",
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--sapphire) 10%)",
                  borderRadius: "2px",
                  fontSize: "1rem",
                }}
              />
              <p
                className={styles.form_label}
                style={{
                  fontSize: "1rem",
                }}
              >
                Tell us about yourself!
              </p>
              <textarea
                className={styles.form_input}
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--marble) 90%, var(--sapphire) 10%)",
                  height: "8rem",
                  borderRadius: "2px",
                  fontSize: "1rem",
                }}
              />
              <button className={styles.form_button}>Join</button>
            </section>
          </Banner>
        </Viewport>
        <Menu dimension_type={dimension_type} />
      </article>
    </div>
  );
}

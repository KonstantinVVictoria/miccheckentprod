"use client";
import { Navbar } from "@/components/Navbar/view";
import VideoBanner from "@/components/VideoBanner/view";
import Menu from "@/components/Menu/view";
import SpecialImage from "@/components/SpecialImage/view";
import styles from "./styles.module.css";
import Viewport from "@/components/Viewport/view";
import Banner from "@/components/Banner/view";
import { RefObject, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";

function SuccessfullySubmitted() {
  return (
    <div
      style={{
        height: "calc(100vh - 2 * 4.5rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Thank you for choosing us!</h2>
      <p>
        Please check your email and confirm you have <br /> received a copy of
        your request.
      </p>
      <p>You will hear back from us shortly 😁</p>
    </div>
  );
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
  const [booking_submitted, set_booking_submitted] = useState(false);
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
            src="/images/prices.jpg"
            alt="dj_board"
            style={{
              position: "absolute",
              width: "50vw",
              height: "100vh",
              objectFit: "contain",
              top: "2rem",
              right: "0%",
              opacity: "0",
              background: "black",
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
        <div className={styles.main_article_overlay}></div>
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
              height: "calc(100dvh - 65vh - 8rem)",
            }}
          >
            <p
              id="main_banner"
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
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
              color: "var(--obsidian)",
              padding: "0px",
            }}
          >
            <Banner
              special
              style={{
                color: "var(--marble)",
                height: "calc(100dvh - 65vh - 8rem)",
                width: "100%",
              }}
            >
              <h2
                id="mixes_section"
                style={{
                  fontWeight: "400",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                Mixes
              </h2>
            </Banner>
            <iframe
              width="100%"
              height="400"
              src="https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=%2Fkevluuinthestu%2F"
              frameBorder="0"
            ></iframe>
          </Banner>
          <Banner
            style={{
              margin: "1rem 0rem",
              padding: "1rem",
              color: "var(--marble)",
              backgroundColor: "var(--obsidian)",
              height: "calc(100vh - 2 * 4.5rem) !important",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
            }}
            reference={BookingSectionRef}
          >
            {booking_submitted ? (
              <SuccessfullySubmitted />
            ) : (
              <>
                <h2
                  id="book_now_section"
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
                <form
                  onSubmit={async (event) => {
                    event.preventDefault();
                    const form = event.target as HTMLFormElement;
                    const data = new FormData(form);
                    const form_submit = document.getElementById(
                      "booking_form_submit"
                    ) as unknown as HTMLButtonElement;
                    const form_loading = document.getElementById(
                      "booking_form_loading"
                    ) as unknown as HTMLDivElement;

                    form_submit.style.display = "none";
                    form_loading.style.display = " block";
                    let payload = Array.from(data.entries()).reduce(
                      (acc: any, [k, v]) => {
                        acc[k] = v;
                        return acc;
                      },
                      {}
                    );
                    payload.date = new Date().toLocaleString("en-US", {
                      timeZone: "PST",
                    });

                    const result = await fetch(
                      process.env.NODE_ENV === "production"
                        ? "https://miccheckentprod.vercel.app/api/book"
                        : "http://localhost:3000/api/book",
                      {
                        method: "POST", // *GET, POST, PUT, DELETE, etc.
                        mode: "cors", // no-cors, *cors, same-origin
                        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                        credentials: "same-origin", // include, *same-origin, omit
                        headers: {
                          "Content-Type": "application/json",
                          // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        redirect: "follow", // manual, *follow, error
                        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify(payload), // body data type must match "Content-Type" header
                      }
                    );
                    if (result.status === 200) {
                      form_submit.style.display = "none";
                      form_loading.style.display = " none";
                      set_booking_submitted(true);
                    } else {
                      form_submit.style.display = "";
                      form_loading.style.display = " none";
                    }

                    return false;
                  }}
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
                    name="name"
                    className={styles.form_input}
                    style={{
                      height: "2rem",
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
                    name="email"
                    className={styles.form_input}
                    style={{
                      height: "2rem",
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
                    name="phone_number"
                    className={styles.form_input}
                    style={{
                      height: "2rem",
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
                    Request
                  </p>
                  <textarea
                    name="request"
                    className={styles.form_input}
                    style={{
                      height: "8rem",
                      borderRadius: "2px",
                      fontSize: "1rem",
                    }}
                  />
                  <div>
                    <input
                      id="booking_form_submit"
                      type="submit"
                      value="Book"
                      className={styles.form_button}
                    />
                    <div id="booking_form_loading" style={{ display: "none" }}>
                      <ReactLoading
                        type={"spin"}
                        color={"white"}
                        height={"2rem"}
                        width={"2rem"}
                      />
                    </div>
                  </div>
                </form>
              </>
            )}
          </Banner>
          <Banner
            style={{
              margin: "1rem 0rem",
              padding: "1rem",
              color: "var(--marble)",
              backgroundColor: "var(--concrete)",
              height: "calc(100vh - 2 * 4.5rem) !important",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
            }}
            reference={JoinUsSectionRef}
          >
            <h2
              id="join_us_section"
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
                justifyContent: "center", //TODO: remove once section is finished
              }}
            >
              <h2>Coming Soon!</h2>
              {/* <p
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
                  height: "8rem",
                  borderRadius: "2px",
                  fontSize: "1rem",
                }}
              />
              <button className={styles.form_button}>Join</button> */}
            </section>
          </Banner>
        </Viewport>
        <Menu dimension_type={dimension_type} />
      </article>
    </div>
  );
}

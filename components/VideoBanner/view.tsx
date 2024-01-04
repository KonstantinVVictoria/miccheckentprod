"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { VideoBannerProps } from "./types";

export default function VideoBanner(props: VideoBannerProps) {
  const video_player_glow_ref = useRef(null);
  useEffect(() => {}, []);
  return (
    <div id={props.id} className={styles.main_container} style={props.style}>
      {props.glow ? (
        <video
          loop
          muted
          src={props.src}
          id={`${props.id}_glow`}
          height="100%"
          width="100%"
          ref={video_player_glow_ref}
          style={{
            position: "absolute",
            filter: "blur(40px)",
            objectFit: "cover",
            opacity: 1,
          }}
        />
      ) : null}
      <video
        autoPlay
        muted
        loop
        src={props.src}
        id={`${props.id}_video`}
        height="100%"
        width="100%"
        style={{
          position: "absolute",
          objectFit: "cover",
        }}
        onPlay={() => {
          const glow =
            video_player_glow_ref.current as unknown as HTMLVideoElement;
          console.log(glow);
          glow.play();
        }}
      />
      <div className={styles.overlay} />
    </div>
  );
}

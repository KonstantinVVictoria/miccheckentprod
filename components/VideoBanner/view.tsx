"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { VideoBannerProps } from "./types";

export default function VideoBanner(props: VideoBannerProps) {
  const video_player_glow = useRef(null);
  const video_player = useRef(null);
  useEffect(() => {
    const VideoPlayer = video_player.current as unknown as HTMLVideoElement;
    const VideoPlayerGlow =
      video_player_glow.current as unknown as HTMLVideoElement;
    console.log(VideoPlayer.readyState);
    if (VideoPlayer.readyState > 2) {
      VideoPlayer.play();
      VideoPlayerGlow.play();
    }
  }, []);
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
          ref={video_player_glow}
          style={{
            position: "absolute",
            filter: "blur(60px)",
            objectFit: "cover",
            opacity: 1,
          }}
          onCanPlay={() => {
            const VideoPlayerGlow =
              video_player_glow.current as unknown as HTMLVideoElement;
            const VideoPlayer =
              video_player.current as unknown as HTMLVideoElement;
            VideoPlayer.play();
            VideoPlayerGlow.play();
          }}
        />
      ) : null}
      <video
        muted
        loop
        src={props.src}
        id={`${props.id}_video`}
        height="100%"
        width="100%"
        ref={video_player}
        style={{
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <div className={styles.overlay} />
    </div>
  );
}

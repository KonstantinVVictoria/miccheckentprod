"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { VideoBannerProps } from "./types";

export default function VideoBanner(props: VideoBannerProps) {
  const video_player_glow = useRef(null);
  const video_player = useRef(null);
  const placeholder = useRef(null);
  useEffect(() => {
    const VideoPlayer = video_player.current as unknown as HTMLVideoElement;
    const VideoPlayerGlow =
      video_player_glow.current as unknown as HTMLVideoElement;
    console.log(VideoPlayer.readyState);
    const Placeholder = placeholder.current as unknown as HTMLImageElement;
    if (VideoPlayer.readyState > 2) {
      VideoPlayer.play();
      if (props.glow) {
        VideoPlayerGlow.play();
      }
      Placeholder.style.transform = "translateX(100%)";
    }
  }, []);
  return (
    <div
      id={props.id}
      className={styles.main_container}
      style={props.style}
      onMouseDown={(event) => {
        const VideoPlayer = video_player.current as unknown as HTMLVideoElement;
        console.log(VideoPlayer.muted);
        VideoPlayer.muted = !VideoPlayer.muted;
      }}
    >
      {props.glow ? (
        <video
          loop
          muted
          src={props.src}
          id={`${props.id}_glow`}
          ref={video_player_glow}
          style={{
            position: "absolute",
            filter: "blur(40px) saturate(150%)",
            objectFit: "cover",
            opacity: 0.8,
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
        onCanPlay={() => {
          const VideoPlayerGlow =
            video_player_glow.current as unknown as HTMLVideoElement;
          const VideoPlayer =
            video_player.current as unknown as HTMLVideoElement;
          const Placeholder =
            placeholder.current as unknown as HTMLImageElement;
          VideoPlayer.play();
          if (props.glow) {
            VideoPlayerGlow.play();
          }
          Placeholder.style.transform = "translateX(100%)";
        }}
        style={{
          position: "absolute",
          objectFit: "cover",
        }}
      />

      <div className={styles.overlay}>
        <img
          className={styles.placeholder}
          src={props.placeholder_src}
          ref={placeholder}
        />
      </div>
    </div>
  );
}

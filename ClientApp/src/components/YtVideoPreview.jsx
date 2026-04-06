import YouTube from "react-youtube";
import { useRef } from "react";

export default function YtVideoPreview({ ytVideoId, startTimeInSeconds = 0 }) {
  const playerRef = useRef(null);

  // 1. Capture the player instance when it's ready
  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.setPlaybackRate(2);
    playerRef.current.mute(); // Autoplay requires muting
    playerRef.current.seekTo(startTimeInSeconds);
  };

  const onEnd = (event) => {
    playerRef.current.seekTo(startTimeInSeconds);
    playerRef.current.playVideo();
  }

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0, // Hides YouTube UI
      modestbranding: 1,
      rel: 0,
      mute: 1,
      loop: 1,
    },
  };

  return (
    <div
      className="group relative w-auto aspect-video overflow-hidden rounded-xl bg-black"
      // onMouseEnter={() => {
      //   playerRef.current?.seekTo(startTimeInSeconds);
      //   playerRef.current?.playVideo();
      // }}
      // onMouseLeave={() => {
      //   playerRef.current?.pauseVideo();
      //   playerRef.current?.seekTo(startTimeInSeconds); // Optional: Reset to start
      // }}
    >
      <YouTube
        videoId={ytVideoId}
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
        className="h-full w-full pointer-events-none" // Prevents clicking the iframe
      />
    </div>
  );
}

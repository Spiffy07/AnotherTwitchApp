import YouTube from "react-youtube";
import { useRef } from "react";

export default function YtVideoPreview({ytVideoId, startTimeInSeconds = 0}) {
  const playerRef = useRef(null);

  // 1. Capture the player instance when it's ready
  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.setPlaybackRate(2);
    playerRef.current.mute(); // Autoplay requires muting
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0, // Hides YouTube UI
      modestbranding: 1,
    },
  };

  return (
    <div
      className="group relative w-auto aspect-video overflow-hidden rounded-xl bg-black"
      onMouseEnter={() => {
        playerRef.current?.seekTo(startTimeInSeconds);
        playerRef.current?.playVideo()
      }}
      onMouseLeave={() => {
        playerRef.current?.pauseVideo();
        playerRef.current?.seekTo(startTimeInSeconds); // Optional: Reset to start
      }}
    >
      <YouTube
        videoId={ytVideoId}
        opts={opts}
        onReady={onReady}
        className="h-full w-full pointer-events-none" // Prevents clicking the iframe
      />
    </div>
  );
}

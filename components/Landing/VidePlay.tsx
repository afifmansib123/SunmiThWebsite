"use client";

import { useEffect, useRef } from "react";

const VidePlay = () => {
  const videoEl = useRef<HTMLVideoElement | null>(null);

  const attemptPlay = () => {
    videoEl?.current?.play().catch((error) => {
      console.error("Error attempting to play", error);
    });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="relative  h-[240px] md:h-auto my-10">
      <video
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          margin: "0 auto",
          height: "800px",
        }}
        playsInline
        loop
        muted
        controls
        src="/Sunmi-Customers.mp4"
        ref={videoEl}
      />
    </div>
  );
};

export default VidePlay;

import { useRef } from "react";
import { useInView } from "framer-motion";
import ReactPlayer from "react-player";

export default function VideoBackground({ url, overlay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-200px" });

  return (
    <div ref={ref} className="absolute inset-0 z-0">
      {inView && (
        <ReactPlayer
          url={url}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
      {overlay}
    </div>
  );
}

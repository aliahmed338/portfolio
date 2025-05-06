// export default function VideoCard() {
//   return (
//     <div className="video">
//       <video
//         src="https://cdn.dribbble.com/userupload/10636098/file/original-9738e1db7941e9d6dd07f8e6944e6b49.mp4"
//         loop
//         muted
//         autoPlay
//         preload="none"
//       />
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import style from "./VideoCard.module.css";

export default function LazyVideo() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 50% من العنصر يكون ظاهر
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={style.videos} ref={videoRef}>
      {isVisible && (
        <div>
          <video
            src="https://cdn.dribbble.com/userupload/10636098/file/original-9738e1db7941e9d6dd07f8e6944e6b49.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/preview.jpg"
          />
        </div>
      )}
    </div>
  );
}

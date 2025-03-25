import "./VideoCard.css";
export default function VideoCard() {
  return (
    <div className="video">
      <video
        src="https://cdn.dribbble.com/userupload/10636098/file/original-9738e1db7941e9d6dd07f8e6944e6b49.mp4"
        loop
        muted
        autoPlay
        preload="none"
      />
    </div>
  );
}

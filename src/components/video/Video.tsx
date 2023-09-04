import { VideoHTMLAttributes, useEffect, useRef, useState } from "react";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}

export const Video = ({ resource, datatype }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video
      className="mb-9 w-3/4 cursor-pointer"
      ref={videoRef}
      onClick={() => setIsPlaying((prevState) => !prevState)}
      onEnded={() => setIsPlaying(false)}
    >
      <source src={resource} type={datatype} />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

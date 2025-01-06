import { useEffect, useRef } from 'react';

export function VideoPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video starts playing
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        src="/webpromo.mp4"
      />
      {/* Prevent user interaction with the video */}
      <div className="absolute inset-0" />
    </div>
  );
}

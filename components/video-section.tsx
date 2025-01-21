"use client";

import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {
            // Handle autoplay failure silently
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen">
      <div className="absolute inset-0 rounded-b-[100px] overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="animate-pulse text-[#00E083]">Loading...</div>
          </div>
        )}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity z-10 duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onCanPlay={() => setIsLoaded(true)}
          loop
          muted={!isPlaying}
          playsInline
          onClick={() => setIsPlaying(!isPlaying)}
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

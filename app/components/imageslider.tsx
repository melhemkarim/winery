'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/images/p1.png',
  '/images/p2.png',
  '/images/p3.png',
  '/images/p4.png',
  '/images/p1.png',
  '/images/p2.png',
  '/images/p3.png',
  '/images/p4.png',
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 ">
      {/* Text Overlay */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[#c2ab67] z-10">
        <h2 className="text-2xl md:text-4xl font-serif leading-tight">OUR LOCATION</h2>
      </div>

      {/* Arrows - desktop only */}
      <div className="hidden md:flex absolute justify-between w-full px-4 z-10">
        <button onClick={prev} className="text-[#c2ab67] text-4xl">
          ←
        </button>
        <button onClick={next} className="text-[#c2ab67] text-4xl">
          →
        </button>
      </div>

      {/* Image Grid: stacked on mobile, slider on desktop */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 pt-24 pb-10">
        {images.map((img, index) => {
          const isActive = index === activeIndex;

          // Sizes for mobile and desktop
          const mobileStyles = 'w-[90vw] h-[280px]';
          const desktopActive = 'w-[400px] h-[600px]';
          const desktopInactive = 'w-[150px] h-[220px]';

          return (
            <motion.div
              key={index}
              className={`relative rounded-md overflow-hidden ${
                isActive ? desktopActive : desktopInactive
              } md:cursor-pointer md:transition-all md:duration-500 ${mobileStyles} md:${isActive ? '' : desktopInactive}`}
              onClick={() => setActiveIndex(index)}
              animate={{
                scale: isActive || typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0.8,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

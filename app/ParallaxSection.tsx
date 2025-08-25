'use client';

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] }); 
  // "start end" means when top of target hits bottom of viewport, scrollYProgress=0
  // "end start" means when bottom of target hits top of viewport, scrollYProgress=1

  // Distance controls how much vertical parallax you want (px)
  const y = useParallax(scrollYProgress, 150);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </section>
  );
}

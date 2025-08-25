"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const items = [
  {
    title: "LINATA",
    category: "INATA",
    image: "/videos/v1.png",
  },
  {
    title: "RED WINE",
    category: "LINATA",
    image: "/videos/v1.mp4",
  },
  {
    title: "RED WINE",
    category: "LINATA",
    image: "/videos/v2.mp4",
  },
  {
    title: "RED WINE",
    category: "LINATA",
    image: "/videos/v3.mp4",
  },
  {
    title: "RED WINE",
    category: "LINATA",
    image: "/videos/v4.mp4",
  },
];

export default function VerticalScrollShowcase() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.07 });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="w-full text-white">
      {/* Use grid instead of flex to ensure full-height column layout */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Left column: spans 1 column on md and up */}
        <div className="md:col-span-1 p-8 border-b md:border-b-0 md:border-r border-white/10">
          <h2 className="text-4xl font-bold uppercase">More of Us</h2>
        </div>

        {/* Right column: spans 3 columns on md and up */}
        <div className="md:col-span-3 p-8 space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden flex items-end justify-between px-8 py-12"
            >
              {/* Background media */}
              <div className="absolute inset-0 z-0">
                {item.image.endsWith(".mp4") ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.image} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10" />

              {/* Text Content */}
              <div className="z-20">
                <motion.h2
                  className="text-5xl font-bold uppercase mb-2"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h2>
              </div>

              <div className="z-20 text-right">
                <motion.p
                  className="text-xs uppercase text-gray-400"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Category
                </motion.p>
                <motion.p
                  className="text-base font-semibold text-[#c2ab67]"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.category}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

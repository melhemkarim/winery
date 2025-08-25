'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeritageSection() {
  // Cork animation settings
  const corks = [
    { top: '5%', left: '8%', size: 45, delay: 0 },
    { top: '15%', right: '12%', size: 50, delay: 0.1 },
    { top: '25%', left: '20%', size: 40, delay: 0.2 },
    { top: '10%', right: '30%', size: 55, delay: 0.3 },
    { top: '50%', left: '5%', size: 50, delay: 0.25 },
    { top: '60%', right: '10%', size: 48, delay: 0.15 },
    { bottom: '10%', left: '10%', size: 42, delay: 0.35 },
    { bottom: '20%', right: '5%', size: 50, delay: 0.05 },
    { bottom: '30%', left: '25%', size: 46, delay: 0.4 },
    { bottom: '15%', right: '20%', size: 44, delay: 0.2 },
    { top: '35%', left: '15%', size: 50, delay: 0.1 },
    { top: '5%', left: '40%', size: 45, delay: 0 },

  ];

  return (
    <section className="relative min-h-screen  overflow-hidden flex items-center justify-center px-8 py-16">
      {/* Floating Corks - Spread Randomly */}
      {corks.map((cork, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{
            top: cork.top,
            left: cork.left,
            right: cork.right,
            bottom: cork.bottom,
          }}
          initial={{ y: -15 }}
          animate={{ y: 15 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2 + cork.delay,
            delay: cork.delay,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/images/cork.png"
            alt="Floating Cork"
            width={cork.size}
            height={cork.size}
            className="opacity-80 blur-[1px]"
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl items-center">
        {/* Text Section */}
        <div className="text-white space-y-6 mr-20">
          <p className="uppercase text-sm tracking-widest text-[#c2ab67]">Collection</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Heritage</h2>
          <p className="text-white/80 max-w-md">
            Bold varietals crafted with classical winemaking. Heritage expresses the soul of the vineyard through
            elegance, aging, and terroir.
          </p>
          <button className="bg-[#c2ab67] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b49b5d] transition">
            Discover the Collection
          </button>
        </div>

        {/* Bottle Image */}
        <div className="flex justify-center">
          <Image
            src="/images/nobg.png"
            alt="Inata Bottle"
            width={1200}
            height={500}
            className="z-20"
          />
        </div>
      </div>
    </section>
  );
}

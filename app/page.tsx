'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Tenor_Sans, Playfair_Display, Dancing_Script } from "next/font/google";
import Footer from "../app/components/footer";
import VerticalScrollShowcase from "../app/components/images";
import HeritageSection from './components/HeritageSection';
import { Monsieur_La_Doulaise } from 'next/font/google';

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  subsets: ['latin'],
  weight: '400', // Only 400 is available for this font
  display: 'swap',
});
import { Luxurious_Script } from 'next/font/google';
import ImageSlider from "./components/imageslider";

 const luxuriousScript = Luxurious_Script({
  subsets: ['latin'],
  weight: '400', // This font only has weight 400
  display: 'swap',
});
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '400' });
const tenor = Tenor_Sans({ subsets: ['latin'], weight: '400' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });



export default function HomePage() {
  return (
    <ParallaxProvider>
      <div className="font-serif">
        {/* Hero Section */}
        <div className="relative w-full h-screen overflow-hidden">
          <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-4 md:px-10 md:py-6 backdrop-blur-xs">
            <Image src="/images/logo.png" alt="Left Logo" width={120} height={40} />

            <nav className="hidden md:flex space-x-6 text-white text-sm tracking-widest uppercase font-light">
              <Link href="#"><span className="hover:text-[#c2ab67] border-b-2 border-transparent hover:border-[#c2ab67] transition-all">Main</span></Link>
              <Link href="#about"><span className="hover:text-[#c2ab67] border-b-2 border-transparent hover:border-[#c2ab67] transition-all">About</span></Link>
              <Link href="#tasting"><span className="hover:text-[#c2ab67] border-b-2 border-transparent hover:border-[#c2ab67] transition-all">Visit</span></Link>
              <Link href="#"><span className="hover:text-[#c2ab67] border-b-2 border-transparent hover:border-[#c2ab67] transition-all">Contact</span></Link>
            </nav>

            <Image src="/images/small-logo.png" alt="Right Logo" width={50} height={40} />
          </header>

          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-[white] text-center px-6 bg-black/40">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-8xl font-extrabold mb-6 tracking-tight drop-shadow-xl"
            >
              DISCOVER THE ART OF WINE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl mb-8"
            >
              Explore our exclusive selection of bottles crafted with passion and tradition.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }}>
             <Link href="/bottles">
  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-[#c2ab67] hover:text-white transition">
    View Bottles
  </button>
</Link>
            </motion.div>
          </div>
        </div>

        {/* About + Museum + Location + Tasting + Showcase Section */}
        <div id="about" className="relative w-full min-h-screen overflow-hidden">
          {/* Gradient overlays for the video */}
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/videos/aboutmaybe4.mp4" type="video/mp4" />
          </video>

          {/* Top and bottom gradient fades */}
          <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none ">
            <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-black/90 to-transparent" />
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/100 to-transparent" />
          </div>

          {/* Semi-transparent black overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>

          <div className="relative z-10 w-full min-h-screen flex flex-col justify-center text-white text-center px-6 bg-black/40 pt-24 pb-48">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-wrap justify-between text-xs tracking-wide uppercase mt-10  text-[#c2ab67]/80">
                <span>INATA</span>
                <span>Location</span>
                <span>2025</span>
              </div>
              <div className={`text-2xl md:text-4xl mt-40 leading-snug space-y-6 text-[#c2ab67] ${tenor.className}`}>
                <Parallax speed={-10}>
                  <p>
                    The <span className="inline-block">INATA</span>{" "}
                    <Image
                      src="/images/p7.png"
                      alt="1"
                      width={80}
                      height={60}
                      className="inline-block rounded-full mx-1 object-cover align-middle"
                    />{" "}
                    family has
                  </p>
                </Parallax>
                <Parallax speed={-8}>
                  <p>been crafting refined wines from hand-selected grapes</p>
                </Parallax>
                <Parallax speed={-6}>
                  <p>
                    {" "}
                    <Image
                      src="/images/p8.png"
                      alt="2"
                      width={80}
                      height={60}
                      className="inline-block rounded-full mx-1 object-cover align-middle"
                    />{" "}
                    Each bottle is a tribute to elegance
                  </p>
                </Parallax>
                <Parallax speed={-4}>
                  <p>
                    heritage{" "}
                    <Image
                      src="/images/p9.png"
                      alt="3"
                      width={80}
                      height={60}
                      className="inline-block rounded-full mx-1 object-cover align-middle"
                    />{" "}
                    and timeless sophistication
                  </p>
                </Parallax>
                
              </div>
              <Parallax speed={5}>
                <p className="text-xs  leading-relaxed  mt-20 text-[#c2ab67]/70">
                  Inata is where elegance meets origin. Each bottle reflects quiet craftsmanship, timeless beauty, and the art of refined winemaking.
                </p>
              </Parallax>
            </motion.div>
            <div id="location" className="border-t border-white/10 mt-30  " />

            <ImageSlider />
            <div className="border-t border-white/10 mt-20 " />

            {/* Join Us For Tasting Section */}
            <section id="tasting" className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6">
  {/* Wrapper for text content and decorative corners */}
  <div className="relative inline-block px-4 py-6">
    {/* Top Left Corner Image */}
    <Image
      src="/images/grapes-left.png"
      alt="Top Left Corner"
      width={100}
      height={100}
      className="absolute -top-4 -left-4 z-30"
    />

    {/* Bottom Right Corner Image */}
    <Image
      src="/images/grapes-left.png"
      alt="Bottom Right Corner"
      width={100}
      height={100}
      className="absolute -bottom-4 -right-4 z-30"
    />

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`text-4xl md:text-6xl mb-6 text-[#c2ab67] ${monsieurLaDoulaise.className}`}
    >
      Join us for a tasting 
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-lg md:text-xl max-w-2xl mb-10 text-[white]/90"
    >
      Step into the heart of our vineyard and discover the soul of our wines. <br />
      Taste tradition, experience passion, and make memories that linger on the palate.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <Link href="/visit">
        <button className="bg-[#c2ab67] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b49b5d] transition">
          Schedule Your Visit
        </button>
      </Link>
    </motion.div>
  </div>
</section>

            <div className="w-full h-px bg-white/20 my-10 mb-80" />

            {/* Vertical Scroll Showcase Section */}
            
            <div className="relative z-20 ">
              
              <VerticalScrollShowcase />
              
            </div>
            <div className="mt-20" />
      <HeritageSection />
          </div>
          <div className="mt-20" />
      
          </div>

        {/* Footer */}
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
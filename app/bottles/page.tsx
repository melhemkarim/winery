'use client';

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const wines = [
  {
    name: "Sauvignon Blanc ",
    image: "/images/winebottle.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    temp: "16 - 18°C",
    taste: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    grape: "Red",
    alcohol: "12.6%",
    volume: "750 ml"
  },
  {
    name: "Viognier",
    image: "/images/winebottle2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    temp: "10 - 12°C",
    taste: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    grape: "Viognier",
    alcohol: "13%",
    volume: "750 ml"
  },
  {
    name: "Viognier",
    image: "/images/winebottle2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    temp: "10 - 12°C",
    taste: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    grape: "Viognier",
    alcohol: "13%",
    volume: "750 ml"
  },
  {
    name: "Viognier",
    image: "/images/winebottle2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    temp: "10 - 12°C",
    taste: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    grape: "Viognier",
    alcohol: "13%",
    volume: "750 ml"
  },
];

export default function Page() {
  const [selectedWine, setSelectedWine] = useState(wines[0]);

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans">
      {/* Navbar */}
      <aside className="w-full md:w-1/5 bg-[url('/images/bottlesbg.png')] bg-cover bg-center text-[#F5F5F5] flex flex-col justify-between items-center py-10 px-4 relative overflow-hidden">



  {/* Logo */}
  <div className="relative z-10 mb-6">
    <Link href="http://localhost:3000"><Image src="/images/logo.png" alt="Logo" width={120} height={80} /></Link>
  </div>

  {/* Centered Nav Links */}
  <nav className="relative z-10 flex-1 flex flex-col justify-center space-y-6 w-full items-center">
    {['Home', 'Brands', 'Winery', 'Recipes', 'Contacts'].map((item, i) => (
      <div
        key={i}
        className="text-center text-xl font-semibold tracking-wide uppercase text-[#F5F5F5] hover:text-[#1a1a1a] transition duration-200 cursor-pointer"
        style={{ fontFamily: `'Playfair Display', serif` }} // or another elegant serif
      >
        {item}
      </div>
    ))}
  </nav>

  {/* Social Icons */}
  <div className="relative z-10 flex space-x-4 mt-10">
    <FaFacebookF className="text-xl hover:text-[#1a1a1a] cursor-pointer transition" />
    <FaInstagram className="text-xl hover:text-[#1a1a1a] cursor-pointer transition" />
    <FaTwitter className="text-xl hover:text-[#1a1a1a] cursor-pointer transition" />
  </div>
</aside>



      {/* Content */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Bottle Column */}
        <section className="w-full md:w-1/6 bg-[#F5F5F5] border-r border-gray-800 px-4 py-4 md:py-8 overflow-x-auto md:overflow-y-auto text-[#1a1a1a]">
          <div className="md:space-y-10 flex md:flex-col items-center gap-6">
            {wines.map((wine, index) => (
              <div
                key={index}
                onClick={() => setSelectedWine(wine)}
                className={`cursor-pointer text-center ${selectedWine.name === wine.name ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
              >
                <Image
                  src={wine.image}
                  alt={wine.name}
                  width={40}
                  height={150}
                  className="object-contain mx-auto"
                />
                <div className="text-s font-medium mt-2  truncate">{wine.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Details */}
        <section className="flex-1 bg-[#1A1A1A] p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row text-[#F5F5F5]">
          <div
            className="absolute inset-0 opacity-80 pointer-events-none bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/grape-pattern.png")' }}
          />

          <div className="flex-1 flex flex-col justify-center z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold font-serif mb-4 md:mb-8 tracking-tight text-[#F5F5F5]">{selectedWine.name}</h1>
            <p className="text-md md:text-lg leading-relaxed mb-4 text-[#F5F5F5]">{selectedWine.desc}</p>
            <div className="space-y-1 text-sm md:text-md text-[#F5F5F5]">
              <div>Temperature: <strong>{selectedWine.temp}</strong></div>
              <div>Taste: <strong>{selectedWine.taste}</strong></div>
              <div>Grape: <strong>{selectedWine.grape}</strong></div>
              <div>Alcohol: <strong>{selectedWine.alcohol}</strong></div>
              <div>Volume: <strong>{selectedWine.volume}</strong></div>
            </div>
            
          </div>

          <div className="flex-1 flex items-center justify-center z-10 mt-6 md:mt-0">
            <Image
              src={selectedWine.image}
              alt={selectedWine.name}
              width={600}
              height={800}
              className="object-contain w-full h-full max-h-[60vh] md:max-h-[60] max-w-[95%]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
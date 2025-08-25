// app/components/Footer.tsx
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/images/footerbg.png')] text-white">
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Bottom-aligned Content */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        {/* Top Links */}
        <div className="mb-2 flex space-x-6 text-xs tracking-widest uppercase">
          <Link href="#"><span className="hover:text-[#c2ab67] border-b-2 border-transparent hover:border-[#c2ab67] transition-all">Main</span></Link>
          <Link href="#"><span className="hover:text-[#c2ab67] border-b-2 border-transparent hover:border-[#c2ab67] transition-all">About</span></Link>
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
           <Link href="#"><span className="hover:text-[#c2ab67] border-b-2 border-transparent hover:border-[#c2ab67] transition-all">Contact</span></Link>

          </span>
        </div>

        {/* Logo Image */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-[600px] max-w-[700px] object-contain pb-1"
        />

        {/* Copyright */}
        <div className="text-[10px] tracking-wide uppercase mt-1">
          © 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

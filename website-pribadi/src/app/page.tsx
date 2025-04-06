import type { Metadata } from "next";
import Image, { StaticImageData } from 'next/image';
import imageTriyana from '../../public/images/Triyana.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya.",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya.",
  },
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start text-left space-y-6 md:space-y-0 md:space-x-6">      <Image
        src={imageTriyana}
        alt="Profile Picture"
        width={400}  
        height={400}
        className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
      />
      <div className="text-center md:text-left">
        <h2 className="font-bold text-xl text-zinc-800">Tentang Saya</h2>
        <h1 className="mt-2 font-bold text-4xl text-teal-600">Triyana Dewi Fatmawati</h1>
        <p className="text-zinc-600 mt-4 max-w-2xl">
          Seorang mahasiswa yang sedang mempelajari cara membangun website pribadi menggunakan Next.js 
          (App Router), React, dan Tailwind CSS. Memiliki kemampuan bekerja sama dalam tim dan semangat tinggi untuk mempelajari teknologi baru. 
          Siap berkontribusi dalam pengembangan antarmuka pengguna yang responsif dan menarik.
        </p>
        <div className="mt-6 flex flex-col items-center md:items-start space-y-4">
          <a href="https://wa.me/6285708727797" className="flex items-center gap-2 text-zinc-800 hover:text-zinc-600 transition w-fit">
            <FaPhone className="text-3xl text-zinc-800 hover:text-zinc-600 transition" />
            <span>+6285708727797</span>
          </a>
          <a href="https://www.linkedin.com/in/triyanadf/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-800 hover:text-zinc-600 transition w-fit">
            <FaLinkedin className="text-3xl text-zinc-800 hover:text-zinc-600 transition" />
            <span>triyanadf</span>
          </a>
          <a href="https://github.com/triyanadewi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-800 hover:text-zinc-600 transition w-fit">
            <FaGithub className="text-3xl text-zinc-800 hover:text-zinc-600 transition" />
            <span>triyanadewi</span>
          </a>
          <a href="mailto:triyanadewifatmawati@gmail.com" className="flex items-center gap-2 text-zinc-800 hover:text-zinc-600 transition w-fit">
            <FaEnvelope className="text-3xl text-zinc-800 hover:text-zinc-600 transition" />
            <span>triyanadewifatmawati@gmail.com</span>
          </a>
        </div> 
      </div>      
    </div>
  );
}

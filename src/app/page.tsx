'use client';
import { FaRunning, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import SignUp from './signUpCard';
import Image from 'next/image';
import RunClubLogo from './../images/runclubimage.svg';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { IoSparklesOutline } from 'react-icons/io5';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative">

      <div className='absolute top-4 right-4 flex space-x-2 md:space-x-4 z-50'>
        <button className="bg-transparent text-black py-2 px-4 rounded-md text-sm md:text-base hover:bg-white">Runner?</button>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          More Polised Features
        </button>
      </div>


      <div className="hidden md:block">
        <BackgroundBeams />
      </div>

      {/* text and image */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 z-10 px-4">
        {/* Adjusted for responsive layout */}

        {/* text containers */}
        <div className="flex flex-col space-y-8 text-center md:text-left">
          {/* app name and logo */}
          <div className="flex flex-row items-center justify-center md:justify-start text-gray-300 space-x-2">
            <h2 className="font-regular text-5xl md:text-3xl tracking-tighter">Runner&apos;s High</h2>
            <FaRunning />
          </div>
          {/* main text */}
          <div>
            <h1 className="text-7xl md:text-8xl font-medium text-black tracking-tighter">Find</h1>
            <h1 className="text-7xl md:text-8xl font-medium text-black tracking-tighter">Run</h1>
            <h1 className="text-7xl md:text-8xl font-medium text-black tracking-tighter">Clubs</h1>
            <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tighter rainbow-text">with Vibez</h1>
          </div>
          {/* subtext */}
          <div className="flex flex-row items-center justify-center md:justify-start opacity-30">
            <h2 className="font-regular text-4xl md:text-3xl tracking-tighter">Built By Runners For Runners</h2>
          </div>

          {/* Tally form button */}
          <button
            data-tally-open="mRLz24"
            data-tally-layout="modal"
            data-tally-width="386"
            data-tally-hide-title="1"
            data-tally-emoji-text="👋✨"
            data-tally-emoji-animation="wave"
            data-tally-auto-close="0"
            className="mt-4 bg-black text-white py-2 px-4 rounded"
          >
            Add Your Run Club
          </button>
        </div>

        {/* image with glow */}
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[700px] h-[700px] bg-white rounded-full opacity-90 blur-lg"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[500px] h-[500px] bg-[#EB5147] rounded-full opacity-90 blur-3xl"></div>
          </div>
          <div className="absolute left-16 md:left-72 -rotate-12 animate-bounce opacity-20">
            <IoSparklesOutline size={32} />
          </div>
          <div className="absolute bottom-0 right-16 md:right-52 delay-300 -rotate-12 animate-bounce opacity-40">
            <IoSparklesOutline size={42} />
          </div>
          <Image src={RunClubLogo} alt="Run Club Logo" width={850} height={850} className="relative z-10" />
        </div>
      </div>

      <div className="relative z-40 w-11/12 md:w-10/12 bg-transparent text-black py-4 border-t border-black border-opacity-30 mt-10 md:absolute md:bottom-10">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-center opacity-60 md:text-left">
            <p className="text-sm">© 2024 Runner&apos;s High. All rights reserved.</p>
            <p className="text-sm">Terms Privacy Security</p>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0 opacity-60">
            <a href="https://www.facebook.com" className="text-black hover:text-gray-400">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.twitter.com" className="text-black hover:text-gray-400">
              <FaTwitter size={18} />
            </a>
            <a href="https://www.instagram.com" className="text-black hover:text-gray-400">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

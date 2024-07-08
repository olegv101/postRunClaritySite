import { FaRunning, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import SignUp from "./signUpCard";
import Image from 'next/image';
import RunClubLogo from './../images/runclubimage.svg';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IoSparklesOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen relative">
      <BackgroundBeams />

      {/* text and image */}
      <div className="flex flex-row items-center space-x-12 z-10"> {/* Lower z-index to ensure SignUp is on top */}

        {/* text containers */}
        <div className="flex flex-col space-y-8">

          {/* app name and logo */}
          <div className="flex flex-row items-start text-gray-300">
            <h2 className="font-regular text-3xl tracking-tighter">Runner&apos;s High</h2>
            <FaRunning />
          </div>
          {/* main text */}
          <div>
            <h1 className="text-8xl font-medium text-black tracking-tighter">Find</h1>
            <h1 className="text-8xl font-medium text-black tracking-tighter">Run</h1>
            <h1 className="text-8xl font-medium text-black tracking-tighter">Clubs</h1>
            <h1 className="text-8xl font-bold text-white tracking-tighter rainbow-text">with Vibez</h1>
          </div>
          {/* subtext */}
          <div className="flex flex-row items-start opacity-30">
            <h2 className="font-regular text-3xl tracking-tighter">Built By Runners For Runners</h2>
          </div>
          <SignUp /> {/* Make sure SignUp component is placed correctly */}
        </div>

        {/* image with glow */}
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="size-[700px] bg-white rounded-full opacity-90 blur-lg"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="size-[500px] bg-[#EB5147] rounded-full opacity-90 blur-3xl"></div>
          </div>
          <div className="absolute left-72 -rotate-12 animate-bounce opacity-20">
            <IoSparklesOutline size={52} />
          </div>
          <div className="absolute bottom-0 right-52 delay-300 -rotate-12 animate-bounce opacity-40">
            <IoSparklesOutline size={62} />
          </div>
          <Image src={RunClubLogo} alt="Run Club Logo" width={850} height={850} className="relative z-10" />
        </div>
      </div>

      <div className="absolute bottom-10 w-10/12 bg-transparent text-black py-4 border-t border-black border-opacity-30">
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

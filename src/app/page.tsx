import { FaRunning, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import SignUp from "./signUpCard";
import Image from 'next/image';
import RunClubLogo from './../images/runclubimage.svg';
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen relative">
      <BackgroundBeams />

      {/* text and image */}
      <div className="flex flex-row items-center space-x-12 z-99">

        {/* text containers */}
        <div className="flex flex-col space-y-8">

          {/* app name and logo */}
          <div className="flex flex-row items-start text-gray-300">
            <h2 className="font-regular text-3xl tracking-tighter">Runner's High</h2>
            <FaRunning />
          </div>
          {/* main text */}
          <div>
            <h1 className="text-8xl font-medium text-black tracking-tighter">Find</h1>
            <h1 className="text-8xl font-medium text-black tracking-tighter">Run</h1>
            <h1 className="text-8xl font-medium text-black tracking-tighter">Clubs</h1>
            <h1 className="text-8xl font-bold text-white tracking-tighter rainbow-text">with Vibez
            </h1>
          </div>
          {/* subtext */}
          <div className="flex flex-row items-start opacity-30">
            <h2 className="font-regular text-3xl tracking-tighter">Built By Runners For Runners</h2>
          </div>

          <div data-tf-live="01J29C5FPP98PYMRZRE7N3G3W5"></div><script src="//embed.typeform.com/next/embed.js"></script>

        </div>

        {/* image with glow */}
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="size-[600px] bg-white rounded-full opacity-90 blur-4xl"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-96 h-96 bg-[#EB5147] rounded-full opacity-90 blur-3xl"></div>
          </div>
          <Image src={RunClubLogo} alt="Run Club Logo" width={850} height={850} className="relative z-10" />
        </div>
      </div>

      {/* <SignUp /> */}

      <div className="absolute bottom-0 w-4/5 bg-transparent text-white py-4 border-t border-black border-opacity-30 px-20 mx-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">© 2024 Runner's High. All rights reserved.</p>
            <p className="text-sm">Terms | Privacy | Security</p>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://www.facebook.com" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>


    </main>
  );
}

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#heroImage", { opacity: 1, delay: 0.5 });
    gsap.to("#heroTitle", { opacity: 1, delay: 0.5 });
  }, []);

  return (
    <div className="relative h-screen w-full bg-black">
      <Image
        id="heroImage"
        src="/hero.png"
        alt="UCLA Poker Club"
        fill
        className="object-cover brightness-50 opacity-0"
      />
      <div
        id="heroTitle"
        className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0"
      >
        <h1 className="text-8xl font-bold mb-4">POKER CLUB AT UCLA</h1>
        <p className="text-xl max-w-2xl text-center ">
          UCLA's Premier Poker Group
        </p>
        {/* <Link
          href="/join"
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg transition-colors"
        >
          Get Started
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;

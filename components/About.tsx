"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#about", {
      scrollTrigger: { trigger: "#about", toggleActions: "restart none restart none" },
      opacity: 1,
      y: 0,
    });
    gsap.to("#text", {
      scrollTrigger: { trigger: "#text", toggleActions: "restart none restart none " },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
    gsap.to("#image", {
      scrollTrigger: { trigger: "#text", toggleActions: "restart none restart none " },
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.25,
    });
  }, []);

  return (
    <section id="about" className="py-20 opacity-0 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-left mb-8">About the Club</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div id="text" className="opacity-0">
            <p className="text-lg text-gray-100 leading-relaxed">
              Poker Club at UCLA is more than just a group of people that play
              poker on Saturdays- it's a space for members to learn, grow, and
              explore. Poker Club is where strategy meets skill, psychology
              meets probability, and competition meets friendships. Founded in
              2024, Poker Club has become one of the most active clubs on
              campus, hosting weekly tournaments, workshops, and socials.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed mt-4">
              Poker Club was founded to bring UCLA Poker players together,
              introduce poker to the math and engineering community, and play
              poker with a perspective grounded in mathematics, game theory, and
              probability. Poker Club emphasizes the educational value of the
              game.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed mt-4">
              Whether you're a beginner looking to learn the basics or an
              experienced player aiming to sharpen your skills, our community
              welcomes players of all levels.
            </p>
          </div>
          <div id="image" className="relative h-[475px]">
            <Image
              src="/pokerchips.png"
              alt="Poker players at UCLA"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

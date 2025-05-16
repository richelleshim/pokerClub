"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.to("#about", {
        scrollTrigger: {
          trigger: "#about",
          toggleActions: "restart none restart none",
        },
        opacity: 1,
        y: 0,
      });
      gsap.to("#text", {
        scrollTrigger: {
          trigger: "#text",
          toggleActions: "restart none restart none ",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
      });

      // Set initial positions above the viewport with rotation
      // gsap.set("#image1", { y: -3000, rotation: -30, opacity: 0 });
      // gsap.set("#image2", { y: -3000, rotation: -15, opacity: 0 });
      // gsap.set("#image3", { y: -3000, rotation: 15, opacity: 0 });

      // Animate the images to fall down with a bounce effect
      gsap.fromTo(
        "#image1",
        {
          y: -150, // Start offscreen
          rotation: -0, // Slight rotation
          opacity: 0, // Fully transparent
        },
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.5,
          // stagger: 0.6,
          delay: 0.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: "#image4", // Matches the element ID
            start: "top center", // Animation starts when the element reaches the center of the viewport
            toggleActions: "play none none none", // Play the animation only once
          },
        },
      );
      gsap.fromTo(
        "#image2",
        {
          y: -100,
          rotation: -0,
          opacity: 0,
        },
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.5,
          // stagger: 0.6,
          ease: "bounce",
          scrollTrigger: {
            trigger: "#image4",
            start: "top center",
            toggleActions: "play none none none",
          },
        },
      );

      // Image 3 Animation
      gsap.fromTo(
        "#image3",
        {
          y: -100,
          rotation: -10,
          opacity: 1,
        },
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.6,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: "#image2",
            start: "top center",
            toggleActions: "play none none none",
          },
        },
      );
    },
    // gsap.to("#image1", {
    //   y: 0,
    //   rotation: 0,
    //   duration: 1,
    //   opacity: 1,
    //   stagger: 0.7,
    //   ease: "bounce.out",
    //   scrollTrigger: {
    //     trigger: "image1",
    //     start: "top center",
    //     toggleActions: "play play play play",
    //   },
    // });
    // gsap.to("#image2", {
    //   y: 0,
    //   rotation: 0,
    //   duration: 1,
    //   opacity: 1,
    //   stagger: 0.3,
    //   ease: "bounce.out",
    //   scrollTrigger: {
    //     trigger: "image2",
    //     start: "top center",
    //     toggleActions: "play play play play",
    //   },
    // });
    // gsap.to("#image3", {
    //   y: 0,
    //   rotation: 0,
    //   opacity: 1,
    //   duration: 1,
    //   stagger: 0.3,
    //   // ease: "bounce.out",
    //   scrollTrigger: {
    //     trigger: "image3",
    //     start: "top center",
    //     toggleActions: "play play play play",
    //   },
    [],
  );

  return (
    <section id="about" className="py-20 opacity-0 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-left mb-8">About the Club</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div id="text" className="opacity-0">
            <p className="text-lg text-gray-100 leading-relaxed">
              Poker Club at UCLA is more than just a group of people that play
              poker on Saturdays- it&#39;s a space for members to learn, grow,
              and explore. Poker Club is where strategy meets skill, psychology
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
              Whether you&#39;re a beginner looking to learn the basics or an
              experienced player aiming to sharpen your skills, our community
              welcomes players of all levels.
            </p>
          </div>
          <div className="max-h pb-20 items-center">
            <Image
              id="image1"
              src="/ucla.png"
              width={500}
              height={500}
              alt="UCLA Logo"
              className="absolute left-[60%] top-[5%] object-cover opacity-0 rounded-lg z-30 "
            />
            <Image
              id="image2"
              src="/poker.png"
              width={500}
              height={500}
              alt="Poker Chips"
              className="absolute left-[65%] top-[20%] opacity-0  object-cover rounded-lg z-20 pl-30"
            />
            <Image
              id="image3"
              src="/club.png"
              width={500}
              height={500}
              alt="Club Logo"
              className="absolute left-[60%] opacity-0 top-[40%] object-cover rounded-lg z-10 pl-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

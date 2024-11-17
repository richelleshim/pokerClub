"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";

const Acknowledgements = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to("#thanks", {
        scrollTrigger: {
          trigger: "#thanks",
          start: "top 85%",
          toggleActions: "restart none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
      });

      gsap.to("#title", {
        scrollTrigger: {
          trigger: "#title",
          start: "top 90%",
          toggleActions: "restart none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to("#subtitle", {
        scrollTrigger: {
          trigger: "#subtitle",
          start: "top 90%",
          toggleActions: "restart none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to("#image1", {
        scrollTrigger: {
          trigger: "#image1",
          start: "top 70%",
          toggleActions: "restart none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
      });

      gsap.to("#image2", {
        scrollTrigger: {
          trigger: "#image2",
          start: "top 70%",
          toggleActions: "restart none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <section id="thanks" className="py-20 opacity-0 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <h3
          id="title"
          className="text-4xl font-bold text-left mb-8 opacity-0 translate-y-8"
        >
          Acknowledgements
        </h3>

        <h3
          id="subtitle"
          className="text-2xl font-bold text-left mb-8 opacity-0 translate-y-8 text-gray-200"
        >
          Poker Club could not have started without the help of the following
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-center align-items ">
          <div>
            <div
              id="image1"
              className="flex flex-col items-center gap-10 pt-20 mt-20 opacity-0"
            >
              <Image
                src="/connectionsLabImage.svg"
                alt="Connections Lab Logo"
                width={400}
                height={200}
                className="object-cover mb-4"
              />
              <Image
                src="/connectionsLabLabel.svg"
                alt="Connections Lab Name"
                width={300}
                height={100}
                className="object-cover brightness-80"
              />
            </div>
          </div>

          <div>
            <div id="image2" className="flex flex-col items-center opacity-0">
              <Image
                src="/ucsbImage.svg"
                alt="UCSB Poker Logo"
                width={400}
                height={200}
                className="object-cover mb-4"
              />
              <Image
                src="/ucsbLabel.svg"
                alt="UCSB Poker Name"
                width={200}
                height={100}
                className="object-cover brightness-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgements;

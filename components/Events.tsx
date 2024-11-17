"use client";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { Event } from "../types";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const events: Event[] = [
    {
      id: 1,
      title: "Poker and Pie",
      date: "November 16",
      location: "Connections Lab",
      image: "/pokerPie.png",
      description: "Join us for a night with poker and pie!",
    },
    {
      id: 2,
      title: "USC Night Poker",
      date: "November 23 @ 7PM",
      location: "Connections Lab",
      image: "/connectionslab.jpg",
      description: "Watch the UCLA x USC game",
    },
    {
      id: 3,
      title: "TEST1",
      date: "December 1",
      location: "Ackerman Union",
      image: "/flatChips.png",
      description: "Compete in our Winter League!",
    },
    {
      id: 4,
      title: "TEST2",
      date: "December 15",
      location: "Connections Lab",
      image: "/flatChips.png",
      description: "Celebrate the holidays with poker!",
    },
    {
      id: 5,
      title: "TEST3",
      date: "November 16",
      location: "Connections Lab",
      image: "/flatChips.png",
      description: "Join us for a night with poker and pie!",
    },
    {
      id: 6,
      title: "TEST4",
      date: "November 23 @ 7PM",
      location: "Connections Lab",
      image: "/flatChips.png",
      description: "Watch the UCLA x USC game",
    },
    {
      id: 7,
      title: "TEST5",
      date: "December 1",
      location: "Ackerman Union",
      image: "/flatChips.png",
      description: "Compete in our Winter League!",
    },
    {
      id: 8,
      title: "TEST6",
      date: "December 15",
      location: "Connections Lab",
      image: "/flatChips.png",
      description: "Celebrate the holidays with poker!",
    },
    {
      id: 9,
      title: "TEST7",
      date: "December 15",
      location: "Connections Lab",
      image: "/flatChips.png",
      description: "Celebrate the holidays with poker!",
    },
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(events.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleItems = events.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide,
  );

  return (
    <section className="max-width py-20 bg-gray-900">
      <div className="max-width px-6">
        <h2 className="text-4xl font-bold text-left pl-2 mb-12 text-gray-50">
          Upcoming Events
        </h2>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <NavigateBefore className="w-6 h-6 fill-black" />
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out">
              {visibleItems.map((event) => (
                <div key={event.id} className="w-[33%] h-[100%] px-2">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <NavigateNext className="w-6 h-6 fill-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;

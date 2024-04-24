"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import FrogCarouselItem from "./FrogCarouselItem";
const frogList = [
  {
    title: "Houston Astros",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/astros.png",
    color: "bg-amber-800",
  },
  {
    title: "New York Yankees",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/yankees.png",
    color: "bg-gray-500",
  },
  {
    title: "Atlanta Braves",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/braves.png",
    color: "bg-blue-400",
  },

  {
    title: "New York Mets",
    subtitle: "Created and imagined ny DALL-E",
    imageUrl: "/images/mets.png",
    color: "bg-blue-500",
  },

  {
    title: "Baltimore Orioles",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/orioles.png",
    color: "bg-red-300",
  },
  {
    title: "Los Angeles Dodgers",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/dodgers.png",
    color: "bg-cyan-500",
  },
];
const FrogCarousel = () => {
  return (
    <Carousel
      plugins={[AutoScroll({ speed: 1 })]}
      opts={{ loop: true, watchDrag: false }}
      className="w-full border-[1px] p-6 rounded-xl "
    >
      <CarouselContent className="w-full h-[400px] ">
        {Array.from(frogList).map((frog, index) => (
          <FrogCarouselItem
            key={index}
            title={frog.title}
            subtitle={frog.subtitle}
            image={frog.imageUrl}
            backgroundColor={frog.color}
          />
        ))}
      </CarouselContent>
      <div className="pointer-events-none rounded-xl absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none rounded-xl absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </Carousel>
  );
};

export default FrogCarousel;

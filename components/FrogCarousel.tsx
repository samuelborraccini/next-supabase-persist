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
    title: "Bull Frog",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/bullfrog.png",
    color: "bg-amber-800",
  },
  {
    title: "Poison Dart Frog",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/poisonfrog.png",
    color: "bg-blue-400",
  },
  {
    title: "Lemur Leaf Frog",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/lemurfrog.png",
    color: "bg-green-500",
  },
  {
    title: "Future Frog",
    subtitle: "Created and imagined ny DALL-E",
    imageUrl: "/images/futfrog.png",
    color: "bg-pink-500",
  },
  {
    title: "Brazilian Horned Frog",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/hornfrog.png",
    color: "bg-yellow-500",
  },
  {
    title: "Red-eyed frog",
    subtitle: "live in freshwater ponds, lakes, and marshes",
    imageUrl: "/images/redfrog.png",
    color: "bg-red-500",
  },
];
const FrogCarousel = () => {
  return (
    <Carousel
      plugins={[AutoScroll({ speed: 1 })]}
      opts={{ loop: true, watchDrag: false }}
      className="w-full border-t-[1px] "
    >
      <CarouselContent className="w-full h-[450px] ">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </Carousel>
  );
};

export default FrogCarousel;

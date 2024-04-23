import React from "react";
import { FaListUl } from "react-icons/fa";

import { CarouselItem } from "./ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

type props = {
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
};

const FrogCarouselItem = ({
  title,
  subtitle,
  image,
  backgroundColor,
}: props) => {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
      <Card
        className={`h-full flex flex-col justify-between ${backgroundColor} w-80`}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-gray-200">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Image
            src={image}
            style={{ width: "90%", height: "auto" }}
            height={200}
            width={100}
            alt="frog"
          />
        </CardContent>
        <CardFooter>
          <div className="bg-white pt-1 pb-1 pl-4 pr-4 rounded-md text-black flex items-center justify-center space-x-2">
            <FaListUl size={15} />
            <div>More</div>
          </div>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
};

export default FrogCarouselItem;

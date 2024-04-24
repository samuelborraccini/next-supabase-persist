import FrogCarousel from "@/components/FrogCarousel";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/slices/mainSlice";
import React, { useEffect } from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center flex-col space-y-12">
      <div>
        <div className="w-72 rounded-full border-[1px]  bg-gray-600 mx-auto text-xl mb-8">
          <div className=" mx-auto animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent bg-gray-500 bg-clip-text text-transparent text-center bg-[length:50px_100%] bg-no-repeat w-max px-[60px] py-2 ">
            <span className="bg-yellow-600 bg-clip-text text-transparent">
              ✨
            </span>{" "}
            Made by Samuel
          </div>
        </div>
        <header className="mx-auto w-[600px] text-center flex flex-col space-y-4">
          <h1 className="text-5xl font-bold ">
            Keep up with the league and your favorite teams
          </h1>
          <p className="text-gray-500">Standings, stats and much more</p>
        </header>
      </div>
      <FrogCarousel />
    </div>
  );
};

export default HeroSection;

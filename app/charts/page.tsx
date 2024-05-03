"use client";
import Image from "next/image";
import React from "react";
import bravesLogo from "../../public/images/braves.png";
import chart from "../../public/images/chart.png";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div>
      <div className="justify-center items-center  flex flex-col space-y-2 mb-8">
        <h1 className="text-4xl font-bold">View how your team is performing</h1>
        <p className="text-white font-light">Check real time data</p>
      </div>
      <div className="flex space-x-6 mx-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: "-25%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="flex-1 flex flex-col border-r-[1px] border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4">Real time data</h2>
          <p>
            Our IA update charts in realtime so you can get the latest
            information about how a team is performing and can take actin
            accurately and efficently
          </p>
          <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="font-bold text-green-500">Batting Average</h2>
            <Image
              className="mr-12"
              src={bravesLogo}
              width={200}
              alt="team-logo"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "25%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="flex-1 justify-center items-center flex"
        >
          <Image src={chart} width={400} alt="team-logo" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        className="mt-8 flex justify-center"
      >
        <ul className="flex justify-between space-x-9 px-12 py-4 w-80 rounded-full bg-gray-200 font-thin text-gray-500 ">
          <li className="hover:text-black cursor-pointer">Avg</li>
          <li className="hover:text-black cursor-pointer">Hits</li>
          <li className="hover:text-black cursor-pointer">Runs</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default page;

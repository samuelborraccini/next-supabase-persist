"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import bravesLogo from "../../public/images/braves.png";
import chart from "../../public/images/chart.png";
import { BsClipboardDataFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { MdDiscount } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { SiPlanetscale } from "react-icons/si";
import { SiBetterstack } from "react-icons/si";

const demoVariants = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.75,
    },
  },
  initial: {
    y: 25,
    opacity: 0,
  },
};
const page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div>
      <div className="justify-center items-center  flex flex-col space-y-2 mb-8">
        <h1 className="text-4xl font-bold">Our goal</h1>
      </div>
      <div className=" text-center flex justify-center font-light mb-12">
        <p className="w-[70%]">
          we're dedicated to revolutionizing the way fans, analysts, and teams
          engage with the sport of baseball. Our mission is simple: to provide
          the most comprehensive, insightful, and accessible baseball analytics
          on the web. We aim to enhance the understanding of the game, from
          little leagues to the majors, through the power of data.
        </p>
      </div>
      <div className=" text-center flex justify-center">
        <h2 className=" font-bold text-2xl">What we offer</h2>
      </div>
      <div className="mt-8 flex justify-center mb-16">
        <motion.ul
          variants={demoVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col space-y-20 justify-center items-center px-24 py-4 font-light "
        >
          <div className="flex space-x-20">
            <motion.li
              variants={demoVariants}
              className="flex flex-col items-center justify-center text-green-500"
            >
              <BsClipboardDataFill size={60} />
              <p>Real-Time Data</p>
            </motion.li>
            <motion.li
              variants={demoVariants}
              className="flex flex-col items-center justify-center text-blue-400"
            >
              <FaTools size={60} />
              <p>Customizable Tools</p>
            </motion.li>
          </div>
          <div className="flex space-x-20">
            <motion.li
              variants={demoVariants}
              className="flex flex-col items-center justify-center text-yellow-500"
            >
              <SiGoogledocs size={60} />
              <p>Exclusive Reports</p>
            </motion.li>
            <motion.li
              variants={demoVariants}
              className="flex flex-col items-center justify-center text-purple-500"
            >
              <MdDiscount size={60} />
              <p>Seasonal Discounts</p>
            </motion.li>
          </div>
        </motion.ul>
      </div>
      <div className=" text-center flex flex-col space-y-10 items-center justify-center mb-12">
        <h2 className=" font-bold text-2xl">Trusted by</h2>
        <p className="font-light">
          Thousands of companies around the world work with us and belive in our
          project
        </p>
      </div>
      <motion.div
        initial="initial"
        animate={isInView && "animate"}
        variants={demoVariants}
        className="mt-8 flex space-x-24 justify-center overflow-hidden"
      >
        <motion.div
          className="group flex space-y-6 flex-col justify-center items-center "
          variants={demoVariants}
        >
          <FaRocket
            className="group-hover:text-red-500 ease-in duration-100"
            size={80}
          />
          <p className="group-hover:opacity-100 opacity-0 text-red-500 ease-in duration-100 font-bold text-md">
            Rocket.io
          </p>
        </motion.div>
        <motion.div
          className="group flex space-y-6 flex-col justify-center items-center "
          variants={demoVariants}
        >
          <SiPlanetscale
            className="group-hover:text-blue-500 ease-in duration-100"
            size={80}
          />
          <p className="group-hover:opacity-100 opacity-0 text-blue-500 ease-in duration-100 font-bold text-md">
            PlanetScale
          </p>
        </motion.div>
        <motion.div
          className="group flex space-y-6 flex-col justify-center items-center "
          variants={demoVariants}
          ref={ref}
        >
          <SiBetterstack
            className="group-hover:text-gray-600 ease-in duration-100"
            size={80}
          />
          <p className="group-hover:opacity-100 opacity-0 text-gray-600 ease-in duration-100 font-bold text-md">
            BetterStack
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default page;

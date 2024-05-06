"use client";
import { motion } from "framer-motion";
import React from "react";
import { BsClipboardDataFill } from "react-icons/bs";
import { FaRocket, FaTools } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { SiBetterstack, SiGoogledocs, SiPlanetscale } from "react-icons/si";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

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
  return (
    <div>
      <div className="justify-center items-center  flex flex-col space-y-6 mb-12">
        <h1 className="text-4xl font-bold">Have any questions?</h1>

        <p className="w-[70%] text-center">
          Please feel free to contact us via any of our social media links
          below.
        </p>
      </div>
      <motion.div
        initial="initial"
        animate={"animate"}
        variants={demoVariants}
        className="mt-12 mb-16 flex space-x-24 justify-center "
      >
        <motion.div
          className="group hover:text-blue-700 flex space-y-6 flex-col justify-center items-center "
          variants={demoVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaFacebook className="ease-in duration-100" size={80} />
        </motion.div>
        <motion.div
          className="group hover:text-yellow-900 flex space-y-6 flex-col justify-center items-center "
          variants={demoVariants}
          whileHover={{ scale: 1.2 }}
        >
          <AiFillInstagram className=" ease-in duration-100" size={80} />
        </motion.div>
        <motion.div
          className="group hover:text-blue-500 flex space-y-6 flex-col justify-center items-center "
          variants={demoVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin className=" ease-in duration-100" size={80} />
        </motion.div>
        <motion.div
          className="group hover:text-gray-600 flex space-y-6 flex-col justify-center items-center "
          variants={demoVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaXTwitter className="ease-in duration-100" size={80} />
        </motion.div>
      </motion.div>

      <div className=" text-center flex flex-col space-y-6 mb-16 justify-center">
        <h2 className=" font-bold text-2xl">Need more help</h2>
        <p>
          Fill the form below and we will contact you as soon as posible.
          Usually takes up to 2-3 days for us to get back to you.
        </p>
      </div>
      <div className="mt-8 flex flex-col justify-center items-center rounded-md mb-16 border-[1px] border-gray-400 shadow-md w-[50%] px-16 py-8 mx-auto">
        <div className="mb-8">
          <h3>Contact Form</h3>
        </div>
        <div className="flex w-full flex-col space-y-3 mb-8">
          <label>Email</label>
          <input
            className="p-2 focus:outline-none border-2 border-gray-400 rounded-xl"
            type="text"
            placeholder="email"
          />
        </div>
        <div className="flex w-full flex-col space-y-3 mb-12">
          <label>Content</label>
          <textarea
            className="p-2 focus:outline-none border-2 border-gray-400 rounded-xl"
            placeholder="Your question here..."
          />
        </div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="border-2 rounded-xl bg-green-500 px-12 py-4 cursor-pointer"
        >
          Submit!
        </motion.div>
      </div>
    </div>
  );
};

export default page;

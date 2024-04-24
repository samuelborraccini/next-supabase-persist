"use client";
import { useTheme } from "next-themes";
import React from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="rounded-full border-black dark:border-gray-200 p-[3px] border-[1px] text-black dark:text-white">
      {resolvedTheme === "dark" ? (
        <AnimatePresence>
          <motion.div
            animate={{
              rotate: 270,
            }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }}
          >
            <IoIosMoon
              className="transition ease-in-out "
              onClick={() => setTheme("light")}
              size={20}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          animate={{
            rotate: 270,
          }}
          transition={{
            ease: "linear",
            duration: 0.5,
          }}
        >
          <IoIosSunny
            className="transition ease-in-out delay-150"
            onClick={() => setTheme("dark")}
            size={20}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitch;

/**
 * Hero.tsx
 *
 * This is the landing (home) section of the ePortfolio.
 * It includes a dark/light toggle button, my name and capstone title,
 * a profile image, and a scroll-down indicator that fades in while the arrow bounces.
 *
 * Author: Collin Lanier
 * Date: April 11, 2025
 */

import { FC } from "react";

interface HeroProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Hero: FC<HeroProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex-grow">
      <div
        id="home"
        className="h-screen flex flex-col items-center justify-center px-1 bg-gray-100 dark:bg-[#121212] text-black dark:text-white text-center relative overflow-hidden snap-start"
      >
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 p-3 rounded-full bg-gray-400 dark:bg-gray-700 transition-all z-10 opacity-0 animate-fadeInDelay4"
          aria-label="Toggle dark/light mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Profile Image and Hero Header Container */}
        <div className="relative inline-block">
          {/* Profile Image */}
          <img
            src="/ePortfolio_pic-Photoroom.png"
            alt="Profile picture of Collin Lanier"
            className="hidden lg:block absolute opacity-0 -bottom-[20rem] right-[100%] lg:right-[85%] xl:right-[90%] w-[40rem] h-[40rem] rounded-full object-cover animate-fadeInDelay2"
          />
          {/* Hero Header */}
          <h1 className="opacity-0 text-4xl sm:text-5xl font-bold text-center mb-6 animate-fadeInDelay2">
            Hi, I'm <span className="text-blue-700">Collin Lanier</span>
          </h1>
        </div>

        {/* Computer Science Caption */}
        <p className="opacity-0 text-3xl sm:text-4xl mb-6 animate-fadeInDelay3">
          Computer Science Capstone
        </p>

        {/* Scroll Down Button */}
        <a href="#self-assess" className="mt-10 opacity-0 animate-fadeInDelay4">
          <div className="w-12 h-12 border-2 border-black dark:border-white animate-bounce rounded-full flex items-center justify-center">
            <span className="block">&darr;</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;

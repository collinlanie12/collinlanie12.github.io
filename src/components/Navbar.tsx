/**
 * Navbar.tsx
 *
 * This component represents the navigation bar of the ePortfolio.
 * It includes a dark/light mode toggle button, a hamburger menu for mobile view,
 * and links to different sections of the portfolio.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

import { FC, useEffect, useRef, useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection: string;
}

const Navbar: FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Self Assessment", href: "#self-assess" },
    { label: "Code Review", href: "#code-video" },
    { label: "Projects", href: "#projects" },
  ];

  // Effect to handle the visibility of the navbar to appear after scrolling past the Hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const hero = document.querySelector("#hero");
    if (hero) observer.observe(hero);
    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  // Effect to handle clicks outside the navbar to close the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full h-16 bg-sky-200 z-40 dark:bg-black text-black dark:text-white border-b bg-opacity-55 dark:bg-opacity-55 border-gray-700 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flex items-center justify-end p-4">
        {/* Desktop Menu: Items & Dark Mode Toggle on the Right */}
        <div className="hidden md:flex md:flex-row items-center space-x-6">
          {menuItems.map((item) => {
            // Compare activeSection with the link’s id
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href} className="list-none">
                <a
                  href={item.href}
                  className={`hover:underline transition-all ${
                    isActive ? "text-blue-700" : "hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-400 dark:bg-gray-700 transition-all z-10 opacity-0 animate-fadeInDelay4"
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile View: Show dark mode toggle with hamburger button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-400 dark:bg-gray-700 transition-all z-10"
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none relative w-6 h-6"
          >
            <span
              className={`hamburger-line ${isOpen ? "rotate-45" : "top-0"}`}
            ></span>
            <span
              className={`hamburger-line ${isOpen ? "opacity-0" : "top-2.5"}`}
            ></span>
            <span
              className={`hamburger-line ${
                isOpen ? "-rotate-45" : "bottom-0.5"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-16 right-0 w-full bg-gray-100 dark:bg-black md:bg-transparent md:hidden flex flex-col items-center space-y-4 py-6 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block py-2 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

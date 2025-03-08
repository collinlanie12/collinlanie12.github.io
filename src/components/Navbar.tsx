import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility
  const [isVisible, setIsVisible] = useState(false); // Navbar visibility
  const navRef = useRef<HTMLDivElement>(null); // Ref for the navbar

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show Navbar only past the Hero section
      setIsVisible(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full h-16 bg-black text-white border-b border-gray-700 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-center p-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 ml-auto">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:underline transition-all">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none relative w-6 h-6 ml-auto"
        >
          {/* Top Line */}
          <span
            className={`hamburger-line ${isOpen ? "rotate-45" : "top-0"}`}
          ></span>
          {/* Middle Line */}
          <span
            className={`hamburger-line ${isOpen ? "opacity-0" : "top-2.5"}`}
          ></span>
          {/* Bottom Line */}
          <span
            className={`hamburger-line ${isOpen ? "-rotate-45" : "bottom-0.5"}`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-16 right-0 w-full bg-black md:bg-transparent md:hidden flex flex-col items-center space-y-4 py-6 transition-transform duration-500 ${
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
      </div>
    </nav>
  );
};

export default Navbar;

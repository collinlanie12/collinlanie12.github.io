import { useEffect, useState } from "react";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <main className="flex-grow">
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white text-center"
      >
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <h1 className="text-5xl font-bold text-center mb-6">
          Hi, I'm <span className="text-blue-700">Collin Lanier</span>
        </h1>
        <p className="text-5xl mb-6">Computer Science Capstone</p>

        {/*  Scroll Down Button */}
        <a href="#about" className="mt-10 animate-bounce">
          <div className="w-12 h-12 border-2 border-black dark:border-white rounded-full flex items-center justify-center">
            &darr;
          </div>
        </a>
      </section>
    </main>
  );
};

export default Hero;

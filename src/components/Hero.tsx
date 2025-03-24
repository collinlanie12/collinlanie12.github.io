import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <main className="flex-grow">
      {/* Hero Content */}
      <section
        id="hero"
        className="h-screen flex flex-col px-1 items-center justify-center bg-white dark:bg-black text-black dark:text-white text-center"
      >
        {/* Particle Background */}
        {init && (
          <Particles
            id="tsparticles"
            options={{
              fullScreen: { enable: false, zIndex: 0 },
              background: { color: "transparent" },
              particles: {
                number: { value: 75 },
                shape: { type: "line" },
                size: { value: 3 },
                move: { enable: true, speed: 2 },
                links: {
                  enable: true,
                  distance: 150,
                  color: darkMode ? "#ffffff" : "#01013d", // White for dark mode, dark blue for light mode
                  opacity: 0.5,
                },
              },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  onClick: { enable: true, mode: "push" },
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 },
                  push: { quantity: 4 },
                },
              },
            }}
            className="absolute top-0 left-0 w-full h-full z-0"
          />
        )}

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Hi, I'm <span className="text-blue-700">Collin Lanier</span>
        </h1>
        <p className="text-4xl md:text-5xl mb-6">Computer Science Capstone</p>

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

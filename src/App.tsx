/**
 * App.tsx
 *
 * This is the main entry point of the ePortfolio application.
 * It sets up the dark mode state and renders the main components of the portfolio.
 * The components include the Navbar, Hero, Self Assessment, Code Review, Projects, and Footer.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelfAssessment from "./components/SelfAssessment";
import Projects from "./components/Projects";
import CodeReview from "./components/CodeReview";

const App = () => {
  // Lift darkMode state to App
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
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="snap-y snap-mandatory scroll-smooth overflow-auto h-screen">
        <section id="hero" className="snap-center">
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>
        <section className="snap-center">
          <SelfAssessment />
        </section>
        <section className="snap-center">
          <CodeReview />
        </section>
        <section className="snap-start">
          <Projects />
        </section>
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;

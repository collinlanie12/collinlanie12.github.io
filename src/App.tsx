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
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // For the navbar to know which section is active
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  //Use the Intersection Observer API to detect which section is currently in view.
  useEffect(() => {
    // Only select sections that have an id
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />
      <div className="snap-y snap-mandatory scroll-smooth overflow-auto h-screen">
        <section id="hero" className="snap-center">
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>
        <section id="self-assess" className="snap-center">
          <SelfAssessment />
        </section>
        <section id="code-video" className="snap-center">
          <CodeReview />
        </section>
        <section id="projects" className="snap-start">
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

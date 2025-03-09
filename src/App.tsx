import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulate Loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFadeIn(true), 20); // Small delay for fade-in effect
    }, 2800);
    return () => clearTimeout(timer); // Clean up timeout
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={`flex flex-col min-h-screen bg-black text-white transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

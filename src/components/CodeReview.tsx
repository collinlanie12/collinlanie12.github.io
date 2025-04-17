/**
 * CodeReview.tsx
 *
 * This component represents the Code Review section of the ePortfolio.
 * It includes an embedded video of my code review.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

import { useRef, useEffect, useState } from "react";

const CodeReview = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Effect to handle the visibility of the video container
  // and to apply the animation when it comes into view.
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="code-video"
      className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#121212] text-black dark:text-white px-4"
    >
      <h1 className="text-5xl font-bold mb-8">Code Review</h1>

      {/* Animated wrapper */}
      <div
        ref={containerRef}
        className={`w-full max-w-4xl aspect-video border-4
          border-black dark:border-white rounded-xl pb-3 px-4 pt-2  overflow-hidden shadow-2xl
          opacity-0 ${inView ? "animate-slideUp" : ""}`}
      >
        <div className="w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/1IqiXAjxmqs"
            title="Code Review Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full rounded-lg h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CodeReview;

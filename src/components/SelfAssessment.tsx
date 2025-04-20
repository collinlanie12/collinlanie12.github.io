/**
 * SelfAssessment.tsx
 *
 * This component represents the Self Assessment section of the ePortfolio.
 * It includes a profile image, paragraphs of text, and a list of artifact introductions.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

import { useRef, useEffect, useState } from "react";
import { Assessment } from "../data/types";

interface SelfAssessmentProps {
  assessmentData: Assessment;
}

const SelfAssessment = ({ assessmentData }: SelfAssessmentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Effect to handle the visibility of the section to appear after scrolling past the Hero section
  // and to apply the transition when it comes into view.
  useEffect(() => {
    const rootEl = document.querySelector(".snap-mandatory");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: rootEl, threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="self-assess"
      className="w-full flex flex-col items-center justify-center bg-gray-300 dark:bg-black text-black dark:text-white"
    >
      <h1 className="text-5xl font-bold mb-8 mt-28 text-center">
        Self Assessment
      </h1>

      {/* Wrapper for fade-in animation when section is in view */}
      <div
        ref={sectionRef}
        className={`max-w-5xl mx-auto opacity-0 ${
          isVisible ? "animate-fadeIn" : ""
        }`}
      >
        <div className="prose lg:prose-lg dark:prose-invert relative">
          {/* Profile Image: floats right on larger screens and stacks on mobile */}
          <img
            src={assessmentData.image}
            alt="Picture of me at IBM"
            className="
            w-full max-w-xs mb-6 rounded-lg flex flex-col mx-auto
            md:float-right md:ml-6 md:mr-5 md:mb-4 md:w-1/3
          "
          />

          {/* Render each paragraph from the data file */}
          {assessmentData.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 px-4">
              {paragraph}
            </p>
          ))}

          {/* Render the list of artifact introduction */}
          {assessmentData.artifactExplained &&
            assessmentData.artifactExplained.length > 0 && (
              <ul className="list-disc list-inside space-y-2 pl-10 mb-4">
                {assessmentData.artifactExplained.map(
                  (artiExplained, index) => (
                    <li key={index} className="">
                      {artiExplained}
                    </li>
                  )
                )}
              </ul>
            )}

          {/* Render conclusion */}
          {assessmentData.conclusion && (
            <p className="mb-20 px-4">{assessmentData.conclusion}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;

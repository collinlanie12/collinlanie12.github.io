/**
 * Projects.tsx
 *
 * This component represents the Projects section of the ePortfolio.
 * It includes a grid of project cards that can be clicked to open a modal with more details.
 * The projects are imported from a data file.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import artifacts from "../data/projectData";
import { Project } from "../data/types";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // State to know when the grid container is in view
  const [gridInView, setGridInView] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  /**
   * Effect to handle the visibility of the grid container
   * and to apply the animation when it comes into view.
   * It uses the Intersection Observer API to detect when the grid is in view.
   */
  useEffect(() => {
    // Create the observer to monitor when the grid enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setGridInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full snap-start flex flex-col bg-gray-300 dark:bg-black text-white">
      <h1 className="text-5xl font-bold text-black dark:text-white mb-4 mt-32 mx-auto">
        Projects
      </h1>

      {/* Scroll container for the cards */}
      <div className="px-8 pb-8" ref={gridRef}>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 place-items-center">
          {artifacts.map((artifact, index) => (
            <ProjectCard
              key={artifact.id}
              project={artifact}
              onClick={() => setSelectedProject(artifact)}
              // Only apply the animation when the grid is in view.
              // Alternate between slide-in-left and slide-in-right.
              animationClass={
                gridInView
                  ? index % 2 === 0
                    ? "animate-slideInLeft"
                    : "animate-slideInRight"
                  : ""
              }
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;

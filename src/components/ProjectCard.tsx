/**
 * ProjectCard.tsx
 *
 * This component represents a single project card in the Projects section of the ePortfolio.
 * It displays the project title, short description, and an image.
 * When clicked, it triggers a callback function to open a modal with more details about the project.
 *
 * Author: Collin Lanier
 * Date: April 13, 2025
 */

import { Project } from "../data/types";

interface ProjectProps {
  project: Project;
  onClick: () => void;
  animationClass?: string;
}

const ProjectCard = ({ project, onClick, animationClass }: ProjectProps) => (
  <div
    onClick={onClick}
    className={`cursor-pointer group relative flex flex-col my-6 z-10
      bg-white dark:bg-gray-800 shadow-sm border border-slate-700 dark:border-white
      rounded-lg w-96 h-[450px] xl:h-[500px] xl:w-[500px] hover:shadow-lg hover:shadow-black dark:hover:shadow-white transition-shadow duration-300
      opacity-0 ${animationClass ? animationClass : ""}`}
  >
    {/* Image container */}
    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
      <img
        src={project.images ? project.images[0] : project.images}
        alt={project.title}
        className="
          w-full h-full object-cover
          transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          group-hover:scale-110
        "
      />
    </div>

    {/* Content area */}
    <div className="px-4 flex flex-col flex-grow justify-between">
      <div>
        <h2 className="text-2xl font-bold text-black dark:text-white">
          {project.title}
        </h2>
        <p className="mt-2 text-slate-800 dark:text-gray-300 leading-normal font-light text-sm xl:text-lg">
          {project.shortDesc}
        </p>
      </div>

      <span className="mt-4 mb-2 inline-block text-blue-700 dark:text-blue-400 font-medium">
        Read More: Narrative & GitHub Repository
      </span>
    </div>
  </div>
);

export default ProjectCard;

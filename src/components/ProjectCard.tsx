import { Project } from "../data/types";

interface ProjectProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectProps) => (
  <div
    className="bg-sky-200 dark:bg-gray-800 rounded-lg border-2 border-black dark:border-white shadow-none overflow-hidden h-full transition-shadow hover:shadow-lg hover:shadow-blue-700 dark:hover:shadow-gray-300 duration-300 cursor-pointer"
    onClick={onClick}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full object-cover rounded"
    />
    <div className="p-7">
      <h2 className="text-2xl font-bold text-black dark:text-white mt-4">
        {project.title}
      </h2>
      <p className="mt-2 text-black dark:text-gray-300">{project.shortDesc}</p>
      <span className="text-blue-700 underline dark:text-blue-500 mt-4 inline-block">
        Read More...
      </span>
    </div>
  </div>
);

export default ProjectCard;

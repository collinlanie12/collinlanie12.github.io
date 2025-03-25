import { Project } from "../data/types";

interface ProjectProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectProps) => (
  <div
    className="bg-gray-800 rounded-lg shadow-none overflow-hidden h-full transition-shadow hover:shadow-lg hover:shadow-gray-400 duration-300 cursor-pointer"
    onClick={onClick}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full object-cover rounded"
    />
    <div className="p-7">
      <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
      <p className="mt-2 text-gray-400">{project.shortDesc}</p>
      <span className="text-blue-500 mt-4 inline-block">Read More...</span>
    </div>
  </div>
);

export default ProjectCard;

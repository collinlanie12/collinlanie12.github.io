import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import artifacts from "../data/projectData";
import { Project } from "../data/types";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen w-full mx-auto flex flex-col items-center justify-center bg-gray-900 text-white"
    >
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 px-3 py-3 lg:grid-cols-8 gap-6">
        {artifacts.map((artifact, index) => (
          <div
            key={artifact.id}
            className={`bg-gray-800 rounded-lg shadow-none overflow-hidden h-full transition-shadow hover:shadow-lg hover:shadow-gray-400 duration-300"
            ${
              index === 0
                ? "md:col-start-2 md:col-span-4 md:row-start-1 lg:col-start-2 lg:col-span-3 lg:row-start-1"
                : ""
            }
            ${
              index === 1
                ? "md:col-start-2 md:col-span-4 md:row-start-2 lg:col-start-5 lg:col-span-3 lg:row-start-2"
                : ""
            }
            ${
              index === 2
                ? "md:col-start-2 md:col-span-4 md:row-start-3 lg:col-start-2 lg:col-span-3 lg:row-start-3"
                : ""
            }`}
          >
            <ProjectCard
              project={artifact}
              onClick={() => setSelectedProject(artifact)}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;

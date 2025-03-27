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
      className="min-h-screen w-full mx-auto flex flex-col items-center justify-center bg-gray-100 dark:bg-[#121212] text-white"
    >
      <h1 className="text-5xl font-bold text-black dark:text-white mb-12">
        Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 px-8 py-3 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact, index) => (
          <div
            key={artifact.id}
            className={`
            ${
              index === 0
                ? "md:col-start-2 md:col-span-4 md:row-start-1 lg:col-start-1 lg:col-span-1 lg:row-start-1"
                : ""
            }
            ${
              index === 1
                ? "md:col-start-2 md:col-span-4 md:row-start-2 lg:col-start-2 lg:col-span-1 lg:row-start-1"
                : ""
            }
            ${
              index === 2
                ? "md:col-start-2 md:col-span-4 md:row-start-3 lg:col-start-3 lg:col-span-1 lg:row-start-1"
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

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const artifacts = [
  {
    id: 1,
    title: "lorem ipsum 1",
    shortDesc:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. At viverra consectetur ridiculus congue malesuada curae. Sodales mus aliquet eros sapien auctor lorem.",
    fullDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam molestiae quos incidunt quia. Itaque, placeat tempora officiis totam ipsa enim cumque facilis ab incidunt harum ipsum voluptatum voluptatibus commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias maxime, ipsa dolorum cumque iste obcaecati voluptatibus, architecto earum iusto facilis iure rem illo ullam fugit eligendi inventore ea in. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, molestias rerum. Quia commodi voluptatem impedit officiis optio vel. Sequi nemo consectetur dolor! Aperiam cumque atque nostrum esse, autem quo blanditiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam atque rem neque architecto recusandae ratione aperiam, accusantium dolor libero inventore error reprehenderit dignissimos esse modi dicta laudantium eius sint. Obcaecati! \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad deleniti totam iste saepe itaque distinctio, quo aut. Reiciendis provident id earum voluptatibus doloribus magnam eius iusto at nobis consectetur? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime omnis esse. Nam voluptatem facere dolore voluptas quae nulla soluta ratione, veritatis nesciunt nemo fuga aliquid natus, cum impedit vero.",
    image: "/place-holder-project-image.png",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "lorem ipsum 2",
    shortDesc:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. At viverra consectetur ridiculus congue malesuada curae. Sodales mus aliquet eros sapien auctor lorem.",
    fullDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam molestiae quos incidunt quia. Itaque, placeat tempora officiis totam ipsa enim cumque facilis ab incidunt harum ipsum voluptatum voluptatibus commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias maxime, ipsa dolorum cumque iste obcaecati voluptatibus, architecto earum iusto facilis iure rem illo ullam fugit eligendi inventore ea in. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, molestias rerum. Quia commodi voluptatem impedit officiis optio vel. Sequi nemo consectetur dolor! Aperiam cumque atque nostrum esse, autem quo blanditiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam atque rem neque architecto recusandae ratione aperiam, accusantium dolor libero inventore error reprehenderit dignissimos esse modi dicta laudantium eius sint. Obcaecati! \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad deleniti totam iste saepe itaque distinctio, quo aut. Reiciendis provident id earum voluptatibus doloribus magnam eius iusto at nobis consectetur? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime omnis esse. Nam voluptatem facere dolore voluptas quae nulla soluta ratione, veritatis nesciunt nemo fuga aliquid natus, cum impedit vero.",
    image: "/place-holder-project-image.png",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "lorem ipsum 3",
    shortDesc:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. At viverra consectetur ridiculus congue malesuada curae. Sodales mus aliquet eros sapien auctor lorem.",
    fullDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam molestiae quos incidunt quia. Itaque, placeat tempora officiis totam ipsa enim cumque facilis ab incidunt harum ipsum voluptatum voluptatibus commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias maxime, ipsa dolorum cumque iste obcaecati voluptatibus, architecto earum iusto facilis iure rem illo ullam fugit eligendi inventore ea in. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, molestias rerum. Quia commodi voluptatem impedit officiis optio vel. Sequi nemo consectetur dolor! Aperiam cumque atque nostrum esse, autem quo blanditiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam atque rem neque architecto recusandae ratione aperiam, accusantium dolor libero inventore error reprehenderit dignissimos esse modi dicta laudantium eius sint. Obcaecati! \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad deleniti totam iste saepe itaque distinctio, quo aut. Reiciendis provident id earum voluptatibus doloribus magnam eius iusto at nobis consectetur? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime omnis esse. Nam voluptatem facere dolore voluptas quae nulla soluta ratione, veritatis nesciunt nemo fuga aliquid natus, cum impedit vero.",
    image: "/place-holder-project-image.png",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof artifacts)[0]
  >(null);

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
            key={index}
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

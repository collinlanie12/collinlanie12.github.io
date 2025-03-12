const artifacts = [
  {
    title: "lorem ipsum 1",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. At viverra consectetur ridiculus congue malesuada curae. Sodales mus aliquet eros sapien auctor lorem.",
    image: "/place-holder-project-image.png",
    link: "#",
  },
  {
    title: "lorem ipsum 2",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. At viverra consectetur ridiculus congue malesuada curae. Sodales mus aliquet eros sapien auctor lorem.",
    image: "/place-holder-project-image.png",
    link: "#",
  },
  {
    title: "lorem ipsum 3",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. At viverra consectetur ridiculus congue malesuada curae. Sodales mus aliquet eros sapien auctor lorem.",
    image: "/place-holder-project-image.png",
    link: "#",
  },
];

const Projects = () => {
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
            <img
              src={artifact.image}
              alt={artifact.title}
              className="w-full object-cover rounded"
            />
            <div className="p-7">
              <h2 className="text-2xl font-bold mt-4">{artifact.title}</h2>
              <p className="mt-2 text-gray-400">{artifact.description}</p>
              <a
                href={artifact.link}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

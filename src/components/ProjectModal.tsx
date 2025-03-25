import { useRef, useEffect } from "react";

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    shortDesc: string;
    paragraphs: string[];
    outcomes?: string[];
    conclusion?: string;
    image: string;
    githubUrl: string;
  };
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Disable scroll on open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      // Re-enable scroll on close
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg w-11/12 md:max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
        ref={modalRef}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 dark:text-white text-2xl font-bold"
        >
          &times;
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        {/* Render paragraphs */}
        {project.paragraphs.map((para, index) => (
          <p key={index} className="mb-4">
            {para}
          </p>
        ))}

        {/* Render outcomes as an indented list */}
        {project.outcomes && project.outcomes.length > 0 && (
          <ul className="list-decimal list-inside space-y-2 pl-6 mb-4">
            {project.outcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* Optional conclusion paragraph */}
        {project.conclusion &&
          project.conclusion.split("\n\n").map((para, index) => (
            <p key={index} className="mb-4">
              {para}
            </p>
          ))}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;

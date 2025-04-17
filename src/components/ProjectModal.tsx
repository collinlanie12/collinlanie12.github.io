/**
 * ProjectModal.tsx
 *
 * This component represents a modal that displays detailed information about a project.
 * It includes a title, description, images, and a link to the project's GitHub repository.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

import { useRef, useEffect, useState } from "react";

//This interface defines the structure of the project object passed to the modal
interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    shortDesc: string;
    paragraphs: string[];
    outcomes?: string[];
    conclusion?: string;
    images: string[];
    githubUrl: string;
  };
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to handle clicks outside the modal to close it
  // and to disable scroll when the modal is open
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

  // Handler to go to the previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Handler to go to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex z-50 items-center justify-center">
      <div
        ref={modalRef}
        className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg w-11/12 md:max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className=" text-gray-600 dark:text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Image Carousel */}
        <div className="relative">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full object-cover rounded mb-4"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-80 text-white text-2xl px-3 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-80 text-white text-2xl px-3 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
                aria-label="Next image"
              >
                &#8250;
              </button>
            </>
          )}
        </div>

        {/* Project Details */}
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        {project.paragraphs.map((para, index) => (
          <p key={index} className="mb-4 indent-8">
            {para}
          </p>
        ))}

        {project.outcomes && project.outcomes.length > 0 && (
          <ul className="list-decimal list-inside space-y-2 pl-6 mb-4">
            {project.outcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {project.conclusion &&
          project.conclusion.split("\n\n").map((para, index) => (
            <p key={index} className="mb-4 indent-8">
              {para}
            </p>
          ))}

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 hover:-translate-y-1 hover:scale-110 transition delay-150 ease-in-out"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;

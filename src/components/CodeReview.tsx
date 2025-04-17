/**
 * CodeReview.tsx
 *
 * This component represents the Code Review section of the ePortfolio.
 * It includes an embedded video of my code review.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

const CodeReview = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#121212] text-black dark:text-white px-4">
      <h1 className="text-5xl font-bold mb-8">Code Review</h1>

      <div
        className="
          w-full max-w-4xl aspect-video
          border-4 border-black dark:border-white
          rounded-xl overflow-hidden shadow-md px-4 pt-4 pb-4
        "
      >
        <div className="w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/1IqiXAjxmqs"
            title="Code Review Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full rounded-lg h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeReview;

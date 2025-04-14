/**
 * Footer.tsx
 *
 * This component represents the footer of the ePortfolio.
 * It includes links to my GitHub, LinkedIn, and LeetCode profiles.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

const Footer = () => {
  const links = [
    { label: "GitHub", href: "https://github.com/collinlanie12" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/collin-lanier-a32762169/",
    },
    { label: "LeetCode", href: "https://leetcode.com/u/collinlanie12/" },
  ];

  return (
    <footer className="bg-sky-200 text-black dark:text-white dark:bg-[#121212] z-0 p-4 border-t mt-0 md:mt-[19rem] lg:mt-0 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Collin Lanier. All rights reserved.
        </p>
        <ul className="flex space-x-4 mt-2 md:mt-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

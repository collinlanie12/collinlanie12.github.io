/**
 * types.ts
 *
 * This file contains the TypeScript interfaces for the project data.
 * It defines the structure of the project object used in the application.
 *
 * The assessment object is also defined here, which contains the paragraphs, images, and artifacts for the self-assessment section.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  paragraphs: string[];
  outcomes: string[];
  conclusion: string;
  images: string[];
  githubUrl: string;
}

export interface Assessment {
  id: number;
  paragraphs: string[];
  image: string;
  artifactExplained: string[];
  conclusion: string;
}

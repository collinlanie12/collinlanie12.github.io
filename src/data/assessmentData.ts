/**
 * This file contains the assessment data for the application.
 * It includes the paragraphs, image, and artifacts introduction for the self-assessment section.
 *
 * Author: Collin Lanier
 * Date: April 20, 2025
 */

import { Assessment } from "./types";

const assessmentData: Assessment = {
  id: 1,
  paragraphs: [
    "My journey into computer science began with a desire to build meaningful, scalable technology that could impact lives. Since enrolling at Southern New Hampshire University in 2022, I have developed both foundational and advanced competencies that position me well to pursue my goal of becoming a Full-Stack Web Developer. Completing the computer science program and creating this ePortfolio has allowed me to consolidate my strengths, reflect on my professional growth, and demonstrate a comprehensive range of technical skills, problem-solving strategies, and real-world application development.",
    "The capstone project, which allowed me to improve three previous code artifacts, has been one of the most profound experiences of my education path. These improvements were intentional efforts to align my software with real-world industry standards and evolving technologies. Over this time, I showed the capacity to use creative ideas in software development, database integration, data structures, and algorithm optimization. Every improvement shows a new side of my abilities—from front-end interactivity to backend logic and data administration.",
    "Prior to SNHU, I completed a Full-Stack Web Development Bootcamp at the University of North Carolina at Charlotte, where I gained hands-on experience with modern web technologies. Additionally, I completed internships in agile environments with both Amazon Alexa Devices and IBM. At Amazon, I developed automated performance testing solutions that improved the efficiency of the Alexa SDK, while at IBM, I designed automation blueprints and worked closely with stakeholders to streamline operations. These experiences taught me how to collaborate in a team, iterate in sprints, and communicate effectively with technical and non-technical audiences—skills I've carried with me throughout my academic and professional work.",
    "In addition to software development, I've also developed a deeper understanding of secure coding principles while attending SNHU. While working on a security audit for a financial web application in a previous course for Software Security, I conducted a vulnerability assessment and identified risks related to SQL injection, hardcoded credentials, and outdated dependencies. This experience allowed me to explore mitigation strategies like input validation, proper error handling, and safe cryptographic practices—all of which are critical for protecting user data and ensuring secure interactions in web applications.",
    "The artifacts presented in my ePortfolio are carefully selected to highlight my versatility as a developer. They all form a well-rounded representation of my skills:",
  ],
  image: "/assessment_picture.png",
  artifactExplained: [
    "Artifact 1 (Grand-Strand System Unit Tests) demonstrates my knowledge of test-driven development and clean code practices by converting and enhancing a Java testing suite into Python with Pytest",
    "Artifact 2 (TrackIt; Android Studio Mobile Application) showcases my ability to work with algorithms and data structures through an Android app that uses merge sort and a priority queue for efficient event tracking",
    "Artifact 3 (Grazioso Salvare Dashboard) is a full-stack web dashboard built with the MERN stack, highlighting my experience with database integration, API development, and responsive frontend design",
  ],
  conclusion:
    "Together, these projects reflect my growth as a software engineer and my readiness to contribute to professional development teams. As I move forward in my career, I'm equipped with the skills and experience to architect, develop, and refine impactful software solutions that meet real-world needs. My passion for full-stack development is matched by my commitment to continuous learning, collaboration, and building secure, user-centered applications.",
};

export default assessmentData;

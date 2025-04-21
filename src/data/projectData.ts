/**
 * projectData.ts
 *
 * This file contains the data for the projects section of the ePortfolio.
 *
 * Author: Collin Lanier
 * Date: April 12, 2025
 */

import { Project } from "./types";

const artifacts: Project[] = [
  {
    id: 1,
    title: "Software Engineering and Design",
    shortDesc:
      "This artifact is Grand Strand System Unit Tests. This artifact was a translation and enhancement of a Java-based unit testing framework into Python using pytest. The project includes classes for managing appointments, contacts, and tasks, with comprehensive unit tests and validation logic.",
    paragraphs: [
      'The artifact that I selected to enhance was a project from my previous course, CS-320: Software Testing, Automation, and Quality Assurance. This artifact is named “Grand Strand System Unit Tests," which consists of unit tests for 3 different services that would be a part of a future mobile application. The three services are contact, task, and appointment. The artifact was created in August 2024, and the enhancement that I made to this artifact was developed in March 2025. The original version of the code was written using Java and JUnit. The artifact was recreated and improved using Python and the pytest testing framework. It consists of modular service classes and related test cases for managing appointments, contacts, and tasks.',
      'I chose this artifact for my ePortfolio because it allows me to demonstrate my ability to apply industry-standard software development practices to real-world problems. Translating this code from Java to Python while retaining the functionality and improving the test coverage allowed me to showcase my understanding of test-driven development, clean code principles, cross-language software development, and my ability to adapt and implement innovative solutions. This artifact shows my growth in implementing reusable and testable components, writing maintainable Python code, and thorough (but not excessive) documentation. Specific components in my improvement within this artifact were replacing manual exception handling tests with “pytest.raises," using Python’s built-in data validation, and error handling strategies that return “True/False consistently.',
      "This artifact aligns with the following course outcomes:",
    ],
    outcomes: [
      "Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals",
      "Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision-making in the field of computer science",
    ],
    conclusion: `By translating and improving the original Java system into Python using modern testing frameworks, I used programming techniques and testing strategies that align with current industry expectations. Furthermore, I structured the project and documented it in a way that other developers could easily understand and contribute. This included meaningful documentation and consistent naming conventions. With the plan that I created in the beginning of this course, I can confirm that the goals and expectations that I set were met. \n\nWhile enhancing and modifying this artifact, I learned how to have an understanding between the two programming ecosystems, Java and Python, while retaining the core functionality and improving upon it. I deepened my knowledge of Python syntax, pytest testing patterns, and error-handling strategies. I also learned the importance of setting up a testable project structure in Python. One of my greatest challenges was managing Python imports across nested directories. I wanted to preserve the structure of the original code. Another challenge I faced was ensuring that there was consistent validation logic across all service classes and their related unit tests.`,

    images: ["/python_unit_tests.png", "python_unit_tests_2.png"],
    githubUrl: "https://github.com/collinlanie12/capstone-artifact-1",
  },
  {
    id: 2,
    title: "Algorithms and Data Structures",
    shortDesc:
      "TrackIt which is an event tracking mobile application to help users manage and track upcoming events such as meetings, concerts, and appointments. It includes features like adding, editing, and deleting events, with SMS notifications and clean UI.",
    paragraphs: [
      "TrackIt, which is an event-tracking mobile application to help users manage and track upcoming events such as meetings, concerts, and appointments. It includes features like adding, editing, and deleting events, with SMS notifications and a clean UI. This artifact is from the course CS-360 Mobile Architecture and Programming. For this project I created a mobile app named TrackIt using Android Studio. The requirements for the mobile application were a sign-up and login function, a database to store user credentials and event information, and SMS notifications. The original artifact was created in October 2024, and the enhanced artifact was created in March 2025. The artifact was enhanced by implementing a Merge Sort algorithm to arrange the events in chronological order based on their time and date. Also, the implementation of a Priority Queue to determine and display the upcoming event efficiently.",
      "I included this artifact in my ePortfolio because it allowed me to demonstrate my ability to implement efficient algorithms and data structures. I was able to showcase my understanding of sorting algorithms such as Merge Sort and how to leverage data structures such as Priority Queue. I improved this artifact by replacing basic list ordering with a custom merge sort for accurate date-time sorting. Priority Queue seemed to be the most beneficial data structure to use based on its applications in real-world scenarios such as event management systems, being leveraged to manage events based on their timing or importance. ",
      "This enhancement met the course outcomes that were planned, which are ",
    ],
    outcomes: [
      "Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices (data structures and algorithms)",
      "Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources",
    ],
    conclusion:
      "I was able to achieve this outcome through the solutions I used for my artifact. I implemented a merge sort to sort events chronologically. I used a PriorityQueue that would display data for the user of their “upcoming” event. I chose to replace and modify the data structures in my original artifact, such as using an ArrayList. Furthermore, I implemented a login and signup system with local data storage, using SQLite, to ensure users are required to authenticate before accessing or modifying event data. This system reflects my understanding of access control and user-level security.\n\n The process of enhancing and modifying this artifact was very challenging, and I had to overcome many obstacles. Originally, I had only planned to implement new data structures into my project. I tried to implement a HashMap for quicker event lookup by ID, but I had realized that it did not add meaningful value to the application based on how the data was being used. I improved my skills with debugging and logging during this enhancement. When I began to implement the Priority Queue data structure, my application crashed multiple times. I was able to overcome this obstacle by learning more about Java interfaces such as Comparable. Implementing a sorting algorithm greatly improved my artifact, but while implementing it, I did run into challenges with the sorted data being displayed on the UI.",

    images: ["/trackit_login.png", "/enhanced_android_artifact.png"],
    githubUrl: "https://github.com/collinlanie12/capstone-artifact-2/",
  },
  {
    id: 3,
    title: "Databases",
    shortDesc:
      "This artifact is a modern full-stack web application developed for the fictional animal shelter/rescue organization Grazioso Salvare. Originally built using Python and Dash, the application was enhanced into a MERN stack (MongoDB, Express, React, Node.js) solution.",
    paragraphs: [
      "The original Grazioso Salvare Dashboard artifact was to create a web dashboard using the Dash framework. It is an application developed for the fictional client Grazioso Salvare, which is an animal shelter/rescue organization. The Dash framework was used to create an interactive UI dashboard where users can apply filters to view data from the MongoDB. Utilizing a CRUD Python module to interact with the database. The original artifact was created in October 2024, and the enhanced artifact was created in April 2025. The application was enhanced and modernized into a scalable web application. It features a dynamic frontend with responsive data visualizations and a secure backend API with filters and pagination.",
      "I selected this artifact for my ePortfolio because it allowed me to demonstrate my ability to showcase a modern, scalable, and user-friendly full-stack solution using new technologies that align with industry standards. The application integrates a RESTful API built with Express and MongoDB for logical data querying. Furthermore, I implemented a dynamic React-based frontend that displays animal rescue data in a filtered, sortable table. Using Recharts (a dependency for the pie chart) and Leaflet maps (a dependency for the map), I was able to maintain the functionality of the original work, which included a graph (pie chart) and a geolocation map. This artifact also showcases my understanding of data filtering, service-based architecture, and asynchronous communication between client and server.",
      "The course outcome that I planned to meet with my enhancement was:",
    ],
    outcomes: [
      "Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.",
    ],
    conclusion:
      "By converting my original Python project into a full MERN stack application, I demonstrated functional and modern techniques in software engineering. Every element of this solution, from client-side rendering to API security and database design, complies with current industry standards. Through this enhancement, I utilized innovative tools and frameworks commonly used in the industry today. The project reflects my ability to translate evolving requirements into practical solutions using full-stack technologies and demonstrates my readiness to build applications that provide value. \n\n Enhancing this artifact was a great experience that sharpened my full-stack development skills, which I plan on pursuing a career in. One major challenge was implementing data filtering across both the backend and frontend. Another challenge was creating and integrating the MongoDB with the backend in a way that allowed data retrieval for the frontend. This process strengthened my understanding of how to connect backend services to a database and deliver that data to a frontend application. I gained experience in designing endpoints that allow for the manipulation of data. I also gained experience in querying data from a MongoDB database using Mongoose. The experience helped me better understand how query logic works behind the scenes and how to retrieve and structure data to support user needs.",

    images: ["/enhanced_artifact_1.png", "/enhanced_artifact_2.png"],
    githubUrl: "https://github.com/collinlanie12/capstone-artifact-3",
  },
];

export default artifacts;

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    radicalX,
    portfolio,
    sorting,
    threejs,
    chatMessenger,
    brandlingVilla,
    outlierLogo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "CV",
      title: "Download CV",
      download: true,
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
      // Outlier
      {
        title: "AI Trainer",
        company_name: "Outlier",
        icon: outlierLogo,
        iconBg: "#ffffff",
        date: "May 2024 - Present",
        points: [
          "Employed as an AI Trainer, focusing on ensuring the accuracy and integrity of artificial intelligence models by leveraging expertise in JavaScript,Python and Generalist.",
          "Created 30+ prompts daily to train and test AI models. Enhanced 50+ prompts monthly to achieve consistent accuracy across various formats.",
          "Identified and resolved 95% of reported errors within 24 hours. Utilized data analysis tools to track and measure the performance of AI models, achieving a 95% success rate in detecting anomalies and optimizing for efficiency."
        ],
      },

     // Brandling Villa
     {
      title: "Volunteer Frontend Developer",
      company_name: "Frank & Bird Ltd",
      icon: brandlingVilla,
      iconBg: "#ffffff",
      date: "February 2024 - March 2024",
      points: [
        "Developed a user-friendly restaurant website, leveraging JavaScript (React.js), as a Front-end Developer.",
        "Designed the website through Figma, driving a 40% boost in user engagement metrics.",
        "Collaborated with restaurant owners to refine menu layout and online ordering processes, culminating in a 25% uptick in customer footfall post-launch.",
      ],
    },
    //RadicalX
    {
      title: "Software Engineer Intern",
      company_name: "RadicalX AI",
      icon: radicalX,
      iconBg: "#ffffff",
      date: "November 2023 - January 2024",
      points: [
        "Leveraged OpenAI, Vertex AI, and TensorFlow to improve the functionality and performance of ReX, achieving a 20% increase in user engagement metrics.",
        "Established Git/GitHub-based version control and implemented CI/CD pipelines, reducing manual errors during testing, integration, and deployment by 40% which significantly improved the efficiency and reliability of software releases.",
        "Adopted agile methodologies to ensure regular updates, iterative improvements, and effective collaboration for a chat application project.",
      ],
    },

   
  ];
  
  
  const projects = [
    {
      name: "3D Porfolio",
      description:
        "My personal portfolio stands as a testament to my expertise and capabilities in the realm of web development. Leveraging a robust tech stack comprising React, Three.js, and Tailwind CSS, I showcase a seamless fusion of creativity and technical proficiency.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Shoaib-2/3D-Portfolio",
    },
    {
      name: "Sorting Visualization",
      description:
        "The overall aim of the project is to design and implement a web-based system to support lecturers and students on an algorithm design course, via a user-friendly interface and visualisation. The project is implemented using HTML, CSS, and JavaScript.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: sorting,
      source_code_link: "https://github.com/Shoaib-2/Sorting-Visualization",
    },
    {
      name: "GPT ChatMessenger",
      description:
        "This project entails developing a sophisticated chat messenger application integrating OpenAI API, powered by a tech stack comprising Node.js, Express, React, and MongoDB for seamless user experiences. Key features include intelligent responses, real-time communication, and scalable architecture.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: chatMessenger,
      source_code_link: "https://github.com/Shoaib-2/ChatMessengerAI",
    },
  ];
  
  export { services, technologies, experiences, projects };
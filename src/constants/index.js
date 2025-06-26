import {
    mobile,
    backend,
    web,
    radicalX,
    portfolio,
    sorting,
    chatMessenger,
    brandlingVilla,
    outlierLogo,
    VolunteerVilla,
    reactNative,
    seoTool,
    SendStream,
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
  ];
  
  const experiences = [
      // Outlier
      {
        title: "AI Prompt Engineer",
        company_name: "Outlier",
        icon: outlierLogo,
        iconBg: "#ffffff",
        date: "May 2024 - Present",
        points: [
          "Engineered and optimized prompt logic for NLP systems, increasing model response accuracy to 95%+ across 1,000+ edge cases.",
          "Automated test pipelines using JavaScript and Python, improving release stability and regression tracking.",
          "Collaborated cross-functionally with devs and data scientists to deploy scalable, real-time response systems."
        ],
      },

     // Brandling Villa
     {
      title: "Frontend Developer – Volunteer",
      company_name: "Frank & Bird Ltd",
      icon: brandlingVilla,
      iconBg: "#ffffff",
      date: "February 2024 - March 2024",
      points: [
        "Delivered a fully responsive, mobile-first web interface using React and Tailwind CSS, meeting WCAG 2.1 standards.",
        "Integrated dynamic API-driven content, cutting page load times by 30% and increasing booking conversion by 25%.",
        "Partnered with stakeholders to redesign user flow, improving site engagement through streamlined UI interactions.",
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
        "Shipped production-ready components in React and TypeScript for a live AI chat platform, boosting user retention by 20%.",
        "Reduced app latency by 35% through optimized rendering and caching strategies.",
        "Contributed to Agile sprints, Git-based workflows, and code reviews in a remote, distributed team.",
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
      source_code_link: "https://github.com/Shoaib-2/Personal-Portfolio",
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
      name: "The Brandling Villa",
      description:
        "A pub restaurant website for a client. This is a static version with limited number of features, yet scalable for future usage. This was a Volunteered project, when I started web development.",
      tags: [
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: VolunteerVilla,
      source_code_link: "https://villa-restaurant.vercel.app/",
    },

    {
      name: "Roar",
      description:
        "Built with React Native for seamless user experiences, Animatable for captivating animations, and integrated with the dependable backend systems of Appwrite, this app showcases impressive design and functionality, enabling seamless sharing of AI videos within the community. As a learning experience, this was one of the toughest project.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Expo",
          color: "pink-text-gradient",
        },
        {
          name: "Nativewind",
          color: "green-text-gradient",
        },
        {
          name: "Animatable",
          color: "pink-text-gradient",
        },
        {
          name: "Appwrite",
          color: "blue-text-gradient",
        },
      ],
      image: reactNative,
      source_code_link: "https://github.com/Shoaib-2/Roar-react-native-",
    },

    {
      name: "The SEO Sidekick",
      description:
        "This project is a comprehensive SEO analysis tool that helps users analyze and optimize their website's SEO performance. It includes features such as keyword tracking, SEO analysis, and export options for generating reports.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: seoTool,
      source_code_link: "https://github.com/Shoaib-2/SeoTool",
    },
     {
      name: "SendStream",
      description:
        "SendStream is a SaaS platform I built to automate, schedule, and analyze email campaigns with seamless Mailchimp integration. In beta, it has processed 1,000+ newsletters and managed over 10,000 subscribers for early users. Built with Next.js and Node.js, it delivers real-time analytics, secure flows, and a modern, user-friendly experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
      ],
      image: SendStream,
      source_code_link: "https://client-3ye4.onrender.com/",
    },
  ];
  
  
  export { services, experiences, projects };
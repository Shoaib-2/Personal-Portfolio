import {
    radicalX,
    portfolio,
    sorting,
    brandlingVilla,
    outlierLogo,
    humanityFounders,
    VolunteerVilla,
    reactNative,
    rankforge,
    SendStream,
    CuraLink,
    ResumeRocket,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React & Next.js",
    icon: "⚛️",
    description: "Building modern web applications",
  },
  {
    title: "Node.js",
    icon: "🟢",
    description: "Backend development and APIs",
  },
  {
    title: "TypeScript",
    icon: "💠",
    description: "Type-safe code for reliability",
  },
  {
    title: "MongoDB",
    icon: "🍃",
    description: "NoSQL database solutions",
  },
  {
    title: "PostgreSQL",
    icon: "🐘",
    description: "Relational database management",
  },
  {
    title: "Docker & Git",
    icon: "🐳",
    description: "DevOps and version control",
  },
];
  
  const experiences = [
      // Humanity Founders
      {
        title: "Full Stack Developer",
        company_name: "Humanity Founders",
        icon: humanityFounders,
        iconBg: "#ffffff",
        date: "Oct 2025 - Nov 2025",
        points: [
          "Architected a full-stack AI healthcare platform with role-based workflows, NLP search and AI-driven summarisation, delivering 95+ Lighthouse performance, <300ms API latency.",
          "Optimised patient–trial matching and expert workflows, achieving 3–5x more relevant matches, 40% higher expert engagement, +56% faster publication review, and <2s end-to-end chat latency."
        ],
      },

      // Outlier
      {
        title: "AI Prompt Engineer",
        company_name: "Outlier",
        icon: outlierLogo,
        iconBg: "#ffffff",
        date: "May 2024 - Apr 2025",
        points: [
          "Engineered data-analysis scripts and prompt-validation frameworks using JavaScript and Python, testing 80+ edge cases and enhancing AI model reliability and coverage.",
          "Developed automated testing and monitoring pipelines that increased model response stability by 70% and significantly reduced production regressions."
        ],
      },

     // Brandling Villa
     {
      title: "Front-End Developer",
      company_name: "The Brandling Villa",
      icon: brandlingVilla,
      iconBg: "#ffffff",
      date: "Feb 2024 - May 2024",
      points: [
        "Rebuilt the website and booking UI using React, Next.js and Tailwind CSS, improving user flow and increasing online bookings by 25%.",
        "Applied WCAG 2.1 accessibility standards and advanced performance techniques (code-splitting, lazy-loading, image optimisation), reducing page load time by 30% and improving overall site usability.",
      ],
    },

    // RadicalX
    {
      title: "Software Engineer Intern",
      company_name: "RadicalX AI",
      icon: radicalX,
      iconBg: "#ffffff",
      date: "Nov 2023 - Feb 2024",
      points: [
        "Delivered production-ready React + TypeScript components for a high-traffic AI chat platform, reducing latency by 35% through optimised rendering, caching strategies, and component-level performance tuning.",
        "Collaborated in Agile sprints across PR reviews and iterative feature delivery, improving UI/UX retention metrics by enhancing responsiveness, usability, and crossflow consistency.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "ResumeRocket",
      description:
        "A full-stack desktop application automating job applications end-to-end. Features AI-powered resume tailoring with ATS score analysis, intelligent browser automation for form auto-filling, and bulk job processing. Built with Electron, React, TypeScript, and Node.js, integrating multiple AI providers (Groq, Gemini, Mistral). Published on GitHub, Gumroad, and Microsoft Store. 🚀 Available for download with a 7-day free trial!",
      tags: [
        {
          name: "Electron",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Puppeteer",
          color: "green-text-gradient",
        },
      ],
      image: ResumeRocket,
      source_code_link: "https://resumerocketprol.vercel.app/",
    },

    {
      name: "CuraLink",
      description:
        "An innovative full-stack application connecting patients with clinical trials, medical experts, and research publications. Built with Next.js, Express.js, TypeScript, and PostgreSQL, featuring Google Gemini AI for intelligent matching and content summarization. Integrates PubMed, ClinicalTrials.gov, and ORCID APIs with real-time chat, forums, and responsive design. Deployed on Render and Vercel.",
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
          name: "PostgreSQL",
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
      image: CuraLink,
      source_code_link: "https://cura-link-hackathon-shoaib-mohammed.vercel.app/",
    },

     {
      name: "RankForge",
      description:
        "RankForge is a comprehensive, full-stack SEO analysis and optimization platform. It empowers users to analyze website SEO, track keyword rankings, and generate actionable AI-powered insights and reports. Built with React, Node.js, Tailwind CSS, and MongoDB, RankForge is designed for modern web performance and security.",
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
      image: rankforge,
      source_code_link: "https://seo-rankforge.vercel.app/",
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
      source_code_link: "https://send-stream.vercel.app/",
    },

     {
      name: "Sort Your Life with Algo",
      description:
        "  The Modern Sorting Tool is a responsive, web-based application built with React and Tailwind CSS that brings sorting algorithms to life. It allows users to visualize classic algorithms like Bubble Sort, Merge Sort, and more, with controls for interaction. The tool also includes a search feature and displays the time complexity of each algorithm, making it a great educational resource.",
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
      source_code_link: "https://sort-yourlife-with-algo.vercel.app/",
    },

    // {
    //   name: "3D Porfolio",
    //   description:
    //     "My personal portfolio stands as a testament to my expertise and capabilities in the realm of web development. Leveraging a robust tech stack comprising React, Three.js, and Tailwind CSS, I showcase a seamless fusion of creativity and technical proficiency.",
    //   tags: [
    //     {
    //       name: "React",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "ThreeJS",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "TailwindCSS",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: portfolio,
    //   source_code_link: "https://shoaib3-dportfolio.netlify.app/",
    // },
   
    // {
    //   name: "The Brandling Villa",
    //   description:
    //     "A pub restaurant website for a client. This is a static version with limited number of features, yet scalable for future usage. This was a Volunteered project, when I started web development.",
    //   tags: [
    //     {
    //       name: "React",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "HTML",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "CSS",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: VolunteerVilla,
    //   source_code_link: "https://villa-restaurant.vercel.app/",
    // },
    // {
    //   name: "Roar",
    //   description:
    //     "Built with React Native for seamless user experiences, Animatable for captivating animations, and integrated with the dependable backend systems of Appwrite, this app showcases impressive design and functionality, enabling seamless sharing of AI videos within the community. As a learning experience, this was one of the toughest project.",
    //   tags: [
    //     {
    //       name: "React Native",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Expo",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "Nativewind",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Animatable",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "Appwrite",
    //       color: "blue-text-gradient",
    //     },
    //   ],
    //   image: reactNative,
    //   source_code_link: "https://github.com/Shoaib-2/Roar-react-native-",
    // },
  ];
  
  
  export { services, experiences, projects };
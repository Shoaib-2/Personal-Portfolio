import {
    radicalX,
    portfolio,
    sorting,
    brandlingVilla,
    outlierLogo,
    VolunteerVilla,
    reactNative,
    rankforge,
    SendStream,
    CuraLink,
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
      source_code_link: "https://shoaib3-dportfolio.netlify.app/",
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
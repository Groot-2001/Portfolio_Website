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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  BackendImg,
  JS_Cert,
  DSA_Cert,
  Html_Cert,
  ResponsiveDesign_Cert,
  musicplayer_icon,
  pastebin_icon,
  movie_icon,
  codecollab_icon,
  funchat_icon,
  blog_icon,
  changelog_icon,
  omagleclone_icon,
  ChatApp_icon,
  fixerra
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
];

const services = [
  {
    title: "Backend Developement",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "MERN Stack Development",
    icon: backend,
  },
  {
    title: "Nodejs Development",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Fixerra",
    icon: fixerra,
    iconBg: "#383E56",
    date: "NOV 2024 - FEB 2025",
    points: [
      "Built backend automation pipelines supporting issuer communication workflows, automating issuer report generation pipelines and reducing manual effort by 80%",
      "Integrated Signzy NameMatch API, improving FD booking accuracy by 25%, and developed webhook pipelines increasing partner engagement by 60%. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Maintained relational and NoSQL databases supporting transaction-heavy workflows, ensuring strong integrity and performance with 50K+ transactions."
    ],
  },
  {
    title: "SDE-1 Backend",
    company_name: "Fixerra",
    icon: fixerra,
    iconBg: "#E6DEDD",
    date: "MAR 2025 - DEC 2025",
    points: [
      "Designed and implemented scalable backend services supporting multiple financial workflows, resulting in a 40% expansion of platform coverage. Integrated 5+ banking APIs, including SSFB verification API, IFSC search API, TDRD API, and Unity closure amount API, reducing API response latency by 30% using Redis caching strategies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Maintained high-availability integration pipelines supporting production fintech workloads with 99.9% uptime.",
      "Owned complete lifecycle of partner integrations, including implementation, debugging, monitoring, and optimization, improving reliability of distributed workflows involving webhook-triggered partner communication.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie-Reservation-System",
    description:
      "The service will allow users to browse movies, reserve seats for specific showtimes, and manage their reservations. The system will feature user authentication, movie and showtime management, seat reservation functionality, and reporting on reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: movie_icon,
    source_code_link:
      "https://github.com/Groot-2001/Movie-Reservation-System",
  },
  {
    name: "PasteBin",
    description:
      "Pastebin is a website where users can store plain text or code snippets and share them with others by sending them a unique URL. It is often used by developers to share code snippets and collaborate on programming projects, but it can be used for a variety of other purposes as well.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: pastebin_icon,
    source_code_link:
      "https://github.com/Groot-2001/PasteBin",
  },
  {
    name: "CodeCollab",
    description:
      "Open a codecollab editor, write or copy code, then share it with friends and colleagues. Pair program and troubleshoot together.",
    tags: [
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: codecollab_icon,
    source_code_link:
      "https://github.com/Groot-2001/codecollab",
  },
  {
    name: "Turing Music Player",
    description:
      "Music is the phenomenon which can change your emotion!.I love hearing music.while doing so i thought I should make one project on this. so, that i can understand how it's work in behind the scenes.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
    ],
    image: musicplayer_icon,
    source_code_link:
      "https://github.com/Groot-2001/Music_PlayX",
  },
  {
    name: "FunChat",
    description:
      "Social-media is the way to connect with different people around the world. FunChat is a social-media web application where we can connect with different people.",
    tags: [
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
    ],
    image: funchat_icon,
    source_code_link:
      "https://github.com/Groot-2001/Social-meadia-app",
  },
  {
    name: "BlogEggs",
    description:
      "BlogEggs is an blog web application which is responsible to creating different blog articles.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: blog_icon,
    source_code_link:
      "https://github.com/Groot-2001/BlogEggs",
  },
  {
    name: "ChangeLog",
    description:
      "A changelog is a log or record of all notable changes made to a project. The project is often a website or software project, and the changelog usually includes records of changes such as bug fixes, new features, etc. ",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: changelog_icon,
    source_code_link:
      "https://github.com/Groot-2001/ChangeLog",
  },
  {
    name: "Omegle-Clone",
    description:
      "Omegle is an online chat platform that connects a user with random strangers from all around the world. After login, the app pairs the user with a ”Stranger” based on shared subjects of interest. They can chat together privately through text, video, or using a built-in microphone.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "WebSocket",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
    ],
    image: omagleclone_icon,
    source_code_link:
      "https://github.com/Groot-2001/Omagle_Clone",
  },
  {
    name: "ChatApp",
    description:
      "Chat applications allow you to stay connected with other people who may be using the application even on the other side of the world. ",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: ChatApp_icon,
    source_code_link:
      "https://github.com/Groot-2001/ChatApp",
  },
];

const certificates = [
  {
    name: "Back End Development and APIs",
    organization: "freeCodeCamp",
    work: [
      {
        name: "Timestamp Microservice",
        color: "blue-text-gradient",
      },
      {
        name: "Request Header Parser Microservice",
        color: "green-text-gradient",
      },
      {
        name: "URL Shortener Microservice",
        color: "pink-text-gradient",
      },
      {
        name: "Exercise Tracker",
        color: "blue-text-gradient",
      },
      {
        name: "File Metadata Microservice",
        color: "green-text-gradient",
      },
    ],
    image: BackendImg,
    CERT_link:
      "https://www.freecodecamp.org/certification/fcc5360653b-fd76-4810-b516-838bde3e1869/back-end-development-and-apis",
  },
  {
    name: "JavaScript for Web Development",
    organization: "Udemy",
    work: [
      {
        name: "JavaScript Basic Foundation",
        color: "blue-text-gradient",
      },
    ],
    image: JS_Cert,
    CERT_link:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-435afa2d-7aa8-4b67-9232-7904e93f69c4.jpg",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    work: [
      {
        name: "Palindrome Checker",
        color: "blue-text-gradient",
      },
      {
        name: "Roman Numeral Converter",
        color: "green-text-gradient",
      },
      {
        name: "Caesars Cipher	",
        color: "pink-text-gradient",
      },
      {
        name: "Telephone Number Validator",
        color: "blue-text-gradient",
      },
      {
        name: "Cash Register	",
        color: "green-text-gradient",
      },
    ],
    image: DSA_Cert,
    CERT_link:
      "https://www.freecodecamp.org/certification/fcc5360653b-fd76-4810-b516-838bde3e1869/javascript-algorithms-and-data-structures",
  },
  {
    name: "HTML5 and CSS3 Build Two Responsive Websites",
    organization: "Udemy",
    work: [
      {
        name: "Landing Page website",
        color: "blue-text-gradient",
      },
    ],
    image: Html_Cert,
    CERT_link:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-799a671e-10fb-4552-8abd-4bb215acc766.jpg",
  },
  {
    name: "Responsive Web Design",
    organization: "freeCodeCamp",
    work: [
      {
        name: "Responsive Website",
        color: "blue-text-gradient",
      },
    ],
    image: ResponsiveDesign_Cert,
    CERT_link:
      "https://www.freecodecamp.org/certification/fcc5360653b-fd76-4810-b516-838bde3e1869/responsive-web-design",
  },
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
};

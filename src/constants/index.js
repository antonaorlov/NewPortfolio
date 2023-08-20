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
  nextjs,
  starbucks,
  car,
  tesla,
  shopify,
  Reacts,
  carrent,
  jobit,
  tripguide,
  threejs,
  Tenzies,
  Robot
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Redux Framework",
    icon: backend,
  },
  {
    title: "NextJS Framework",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
  }
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "PTP357 Studio",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2022 — Dec 2022",
    points: [
      "Provided creative direction to a graphic design team, ensuring quality and consistency of all deliverables.",
      "Developed websites using JavaScript, HTML, CSS",
      "Collaborated on projects in advertising, wedding shows, event planning, and photography",
      "Participating in code reviews and received constructive feedback",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Verizon, Accenture",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2021 — Aug 2021",
    points: [
      "Winner of a contest to create a Smart Can concept, advancing New York City's smart city objectives",
      "Built and deployed a website using HTML, CSS, JavaScript, and React (cleanercan.webflow.io).",
      "Awarded a National Academy Financial (NAF) Certification for contributions and skills",
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
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
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
    {
      name: "Carhub",
      description:
        "Carhub is a Next.js web app, akin to Renthub, for car rentals. It leverages Next.js14, React, and features like App Router and Server Side Rendering. It boasts Advanced Search, Filtering, Metadata, and SEO optimization. It crafts custom filter, combobox, and modal components while upholding organized file structure. TypeScript and Tailwind CSS are seamlessly integrated.",
        tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "green-text-gradient",
        },
        {
          name: "tailswind",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      link:"https://capable-wisp-43ff67.netlify.app/",
      source_code_link: "https://github.com/antonaorlov/Nextjs14-project",
    },
  {
    name: "VanVentures",
    description:
      "VanVentures is a React-based web application, similar to Airbnb, but for renting vans. Using React Router, it incorporates features such as relative and absolute paths, nested routes, search params, and more. The application provides a robust user experience with smooth transitions between views, thorough error handling, and an engaging interface. ",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React Router",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    link:"https://csb-ly5txw-jmgow2k25-antonaorlov.vercel.app/",
    source_code_link: "https://github.com/antonaorlov/VanVentures",
  },
  {
    name: "Responsive Robot Application",
    description:
      "This project uses APIs from https://robohash.org/ to create a dynamic React grid of robots. Users can search for robots, with results narrowing down for a better experience on various devices. It utilizes JavaScript, React for interfaces, HTML/CSS for structure/style, and npm packages for efficient development, resulting in a functional and visually engaging app. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Robot,
    link:"https://antonaorlov.github.io/Robot/",
    source_code_link: "https://github.com/antonaorlov/Robot",
  },
  {
    name: "React-Redux Application",
    description:
      "React/Redux Comprehensive Project is an expansive and robust application built to dive deep into the concepts and practical usage of Redux with React. This project provides real-world scenarios for managing states with Redux, dispatching actions with payloads, slicing states, utilizing the Redux Toolkit, managing HTTP states, providing user feedback with Redux, fetching data with Redux, and using Redux with useEffect. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    link:"https://csb-ng5s26-5v3zlnrdy-antonaorlov.vercel.app/",
    source_code_link: "https://github.com/antonaorlov/react-redux",
  },
  {
    name: "React-Concepts-Project",
    description:
      "The Comprehensive React Concepts Project is an extensive project designed to incorporate and demonstrate all major concepts of React. From the basic building blocks like components and states to more advanced concepts like context and portals.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },

    ],
    image: Reacts,
    link:"https://csb-7rsn8p-94wygdonm-antonaorlov.vercel.app/",
    source_code_link: "https://github.com/antonaorlov/React-Concepts-Project",
  },
  {
    name: "Tenzies",
    description:
      "Tenzies is a simple and fun dice-based game developed using React. It incorporates advanced React concepts such as components, event listeners, conditional rendering, forms, and side effects.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },

    ],
    image: Tenzies,
    link:"https://csb-nv3l6k-antonaorlov.vercel.app/",
    source_code_link: "https://github.com/antonaorlov/Tenzie-Game",
  },
];

export { services, technologies, experiences, testimonials, projects };

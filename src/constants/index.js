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
  Reacts,
  carrent,
  jobit,
  tripguide,
  threejs,
  Tenzies,
  Ai,
  nextjs,
  car,
  Robot,
  github,
  versel,
  netlify
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Framework",
    icon: mobile,
  },
  {
    title: "Designer",
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
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "versel",
    icon: versel,
  },
  {
    name: "netlify",
    icon: netlify,
  },
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
    name: "GymBuddy",
    description:
      "Gym Buddy Powered by Next 13's App Router and React, it boasts a sleek design with Tailwind's Shadcn UI. Backed by Prisma and MySQL for robust data management, and integrated with Stripe for secure payments. Using Openai, Replicate api keys; Stay connected and supported with Crisp chat. Embark on your tech-enhanced fitness journey today.",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Ai,
    link:"https://ai-96a7.vercel.app/",
    source_code_link: "https://github.com/antonaorlov/ai",
  },
  {
    name: "Carhub",
    description:
      "Carhub is a Next.js web app, akin to Renthub, for car rentals. It leverages Next.js14, React, and features like App Router and Server Side Rendering. It boasts Advanced Search, Filtering, Metadata, and SEO optimization. It crafts custom filter, combobox, and modal components while upholding organized file structure. TypeScript and Tailwind CSS are seamlessly integrated. ",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
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
    link:"https://csb-ly5txw.vercel.app/",
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
    name: "Tenzies",
    description:
      "Tenzies is a simple and fun dice-based game developed using React. Components: The application uses a modular design with reusable React components.Event Listeners: Interaction with the game is handled using event listeners. Conditional Rendering: The application makes use of conditional rendering. Forms are used for starting a new game, inputting player names, and more. Side Effects: This application handles side effects using the React useEffect hook.",
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
  {
    name: "API Project",
    description:
      "My Customized Dashboard is a versatile JavaScript project that aims to provide you with a concise yet comprehensive view of critical information through a simple and elegant UI. The project integrates three different APIs - Bitcoin API for the current bitcoin price, Unsplash API for beautiful random background images, and Weather API to provide you with the latest weather updates. The project can also be added as a Chrome extension, providing you with a powerful and productive new tab experience.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    link:"https://csb-zzt98c.netlify.app/",
    source_code_link: "https://github.com/antonaorlov/API-Project",
  },
 
];

export { services, technologies, experiences, testimonials, projects };

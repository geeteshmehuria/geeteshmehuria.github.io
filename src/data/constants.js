export const Bio = {
  name: "Geetesh Maihuria",
  roles: [
    "Full Stack Developer",
    "Svelte + FastAPI Engineer",
    "AI App Developer",
  ],
  description:
    "I build modern, AI-powered web applications end to end — from clean Svelte/SvelteKit interfaces to fast, well-structured FastAPI services backed by PostgreSQL. I enjoy turning legacy systems into maintainable, performant products and integrating LLMs to make apps genuinely useful.",
  github: "https://github.com/geeteshmehuria",
  // Resume is bundled in the repo (src/components/resume) and used directly by
  // the Navbar/Hero buttons; this link is kept for reference.
  resume:
    "https://drive.google.com/file/d/1c6n_AwdFxbPAmHn5Er7F27pLISPdTN6H/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/geetesh-mehuria/",
  insta: "https://www.instagram.com/this_is_geetesh_/",
  facebook: "https://www.facebook.com/m.geetesh/",
  email: "geeteshmaihuria@gmail.com",
  contact: "8299004960",
  location: "India",
};

// Skills are grouped and rendered as clean text chips (no external logo images,
// so nothing breaks and the section stays fast).
export const skills = [
  {
    title: "Frontend",
    items: [
      "Svelte",
      "SvelteKit",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "shadcn-svelte",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js"],
  },
  {
    title: "Database",
    items: ["PostgreSQL"],
  },
  {
    title: "AI / GenAI",
    items: ["Gemini API", "Claude API", "Prompt Engineering"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker (basics)", "uv", "pnpm"],
  },
  {
    title: "Testing & Deployment",
    items: [
      "Pytest (basics)",
      "Playwright (basics)",
      "GitHub Pages",
      "Cloud Deployment",
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    company: "Slashash",
    date: "March 2024 - Present",
    desc: "Building software that streamlines complex workflows for small/medium businesses and enterprises — both greenfield apps and modernization of existing systems.",
    bullets: [
      "Migrating a legacy (Wappler-based) system to a modern Svelte/SvelteKit + FastAPI stack, improving maintainability and performance.",
      "Designing and building FastAPI REST APIs and a PostgreSQL data layer for reliable, well-structured backends.",
      "Implementing authentication and security improvements as part of the platform overhaul.",
      "Rebuilding the UI/UX with SvelteKit, Tailwind, and shadcn-svelte for a cleaner, responsive experience.",
      "Integrating AI features using the Gemini and Claude APIs to add genuinely useful product capabilities.",
    ],
    skills: [
      "Svelte",
      "SvelteKit",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
      "AI APIs",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Masai School, Bangalore",
    date: "Jul 2023 - Apr 2024",
    degree: "Full Stack Web Development",
  },
  {
    id: 1,
    school: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    date: "Sep 2021 - Jun 2023",
    grade: "73.2%",
    degree: "Master of Business Administration (IT, HR)",
  },
  {
    id: 2,
    school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    date: "Aug 2016 - Oct 2020",
    grade: "78%",
    degree: "B.E., Electronics and Communication Engineering",
  },
];

// NOTE: Placeholder content — replace problem/features/links with real details.
// `image: null` renders a clean screenshot placeholder in the card.
export const projects = [
  {
    id: 1,
    title: "AlgoLens AI",
    problem:
      "An AI-powered platform that helps learners understand Data Structures & Algorithms with guided, interactive explanations.",
    description:
      "AlgoLens AI is an AI-powered DSA learning platform that breaks down algorithms and data structures into clear, interactive explanations to make problem-solving easier to learn.",
    tags: ["Svelte", "FastAPI", "Python", "PostgreSQL", "LLM API"],
    features: [
      "AI-guided explanations of DSA problems",
      "Interactive, learner-friendly UI",
      "FastAPI backend with PostgreSQL",
    ],
    image: null,
    github: "https://github.com/geeteshmehuria",
    webapp: "",
    featured: true,
  },
  {
    id: 2,
    title: "Chefbot (Prodigies)",
    problem:
      "An AI-powered recipe generator that helps users discover and create recipes for a seamless culinary experience.",
    description:
      "A single-page recipe generator built with React + TypeScript and Tailwind CSS on the frontend, and Node.js, Express.js, and MongoDB on the backend. It uses the OpenAI and DeepAI APIs to generate recipes and imagery, turning ingredients and ideas into ready-to-cook dishes.",
    tags: ["React + TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "OpenAI"],
    features: [
      "AI-generated recipes via the OpenAI API",
      "AI imagery using the DeepAI API",
      "Full-stack MERN architecture with a clean SPA UI",
    ],
    image:
      "https://github.com/SreeHarsha-Kamisetty/Prodigies/assets/146928943/43871c40-ea78-42a7-9035-105e54518a86",
    github: "https://github.com/geeteshmehuria/Prodigies",
    webapp: "https://chef-bot-six.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "AI Code Review Tool",
    problem:
      "Automating code review feedback using LLMs to speed up the development loop.",
    description:
      "A tool that uses LLM APIs to review code and surface actionable feedback, helping catch issues earlier and keep code quality high.",
    tags: ["Python", "FastAPI", "Claude API", "Gemini API"],
    features: [
      "LLM-powered code analysis and feedback",
      "Integrates Claude/Gemini APIs",
      "Prompt engineering for reliable reviews",
    ],
    image: null,
    github: "https://github.com/geeteshmehuria",
    webapp: "",
    featured: false,
  },
];

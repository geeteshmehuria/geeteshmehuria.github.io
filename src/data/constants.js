export const Bio = {
  name: "Geetesh Mehuria",
  roles: [
    "Full Stack Developer",
    "Svelte + FastAPI Engineer",
    "AI App Developer",
  ],
  experience: "2+ Years Experience",
  stack: "Svelte • Python • FastAPI • PostgreSQL • AI Apps",
  description:
    "Full Stack Developer with 2+ years of experience building modern web applications, SaaS features, and AI-powered tools. I work across frontend, backend, and database layers using Svelte, React, Python, FastAPI, Node.js, PostgreSQL, MongoDB, and Tailwind CSS — with a focus on clean UI, reliable APIs, and maintainable code.",
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
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Svelte",
      "SvelteKit",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Tailwind CSS v4",
      "shadcn-svelte",
      "Chakra UI",
      "Bootstrap",
      "SASS",
    ],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "Java", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL"],
  },
  {
    title: "AI / API Integration",
    items: [
      "Gemini API",
      "Claude API",
      "OpenAI API",
      "AI Integration",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Netlify",
      "Wappler",
      "Chart.js",
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    company: "Slashash",
    date: "March 2024 - Present",
    desc: "Working as a Full Stack Developer on SaaS-based business applications, including Perseptiv. I build frontend features with Svelte/SvelteKit, develop and integrate Python/FastAPI backend APIs, work with PostgreSQL data flows, improve UI/UX, debug production-style issues, and modernize complex business workflows.",
    bullets: [
      "Built and improved features for the Perseptiv SaaS platform using Svelte/SvelteKit, Tailwind, and shadcn-svelte.",
      "Designed and integrated Python/FastAPI REST APIs backed by a PostgreSQL data layer.",
      "Improved UI/UX and implemented authentication / protected-page flows for a cleaner, more secure experience.",
      "Debugged production-style issues and modernized complex business workflows for better maintainability.",
    ],
    skills: [
      "Svelte",
      "SvelteKit",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn-svelte",
      "JavaScript",
      "Wappler",
      "Node.js",
      "Bootstrap",
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

// Featured projects shown in the Projects section, in display order.
// `image: null` renders a clean screenshot placeholder in the card.
export const projects = [
  {
    id: 1,
    title: "DevReview AI",
    problem:
      "Manual code review is slow and inconsistent - security issues and technical debt slip through. DevReview AI gives developers an instant, structured AI review of any repository, pull request, or code snippet.",
    description:
      "DevReview AI is a production-deployed, full-stack AI code review platform. Developers sign in with GitHub, import repositories, and get AI-powered analysis in seconds: security vulnerabilities (OWASP/CWE), performance issues, code smells, and technical debt - each scored across six categories with actionable fix suggestions. Pull requests get a risk score and a merge verdict from the live diff. A provider-abstraction layer runs Google Gemini as the primary model with OpenAI and Claude fallbacks. Built with Next.js 15 + React 19 on the frontend and FastAPI + PostgreSQL + Redis on the backend, deployed on Vercel and Render with Docker-based local development.",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Google Gemini",
      "Docker",
    ],
    features: [
      "AI reviews of repos, PRs, and code snippets scored across 6 categories",
      "Security findings with severity, CWE tags, and concrete fixes",
      "PR risk scoring with an AI merge verdict from the live GitHub diff",
      "Repository health tracking with historical trend charts",
      "GitHub OAuth with JWT refresh rotation and edge-protected routes",
      "Gemini-first AI layer with OpenAI and Claude fallbacks",
    ],
    image:
      "https://raw.githubusercontent.com/geeteshmehuria/devreview-ai/main/docs/screenshots/dashboard.png",
    github: "https://github.com/geeteshmehuria/devreview-ai",
    webapp: "https://devreview-ai-mu.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "AlgoLens AI",
    problem:
      "An AI-powered DSA learning platform that brings learning, practice, AI feedback, and spaced-repetition revision into one place.",
    description:
      "AlgoLens AI is an AI-powered Data Structures & Algorithms learning platform. It helps users learn through structured topic notes, practice problems, AI-generated explanations and pseudocode, code review, spaced-repetition revision, progress tracking, and a modern learning dashboard. Built with SvelteKit and a FastAPI + PostgreSQL backend, using Google Gemini for AI features, with all AI output validated and cached.",
    tags: [
      "SvelteKit",
      "Tailwind CSS v4",
      "shadcn-svelte",
      "FastAPI",
      "Python",
      "PostgreSQL / Aiven",
      "Gemini API",
    ],
    features: [
      "AI-generated topic notes, explanations, hints, and code review",
      "Topic-wise curriculum, practice problems, and a learning dashboard",
      "Spaced-repetition revision queue and progress tracking",
      "Secure JWT auth with protected pages and role-based admin access",
      "SvelteKit frontend with a FastAPI + PostgreSQL (Aiven) backend",
    ],
    image:
      "https://github.com/user-attachments/assets/1ae1911e-a264-4fec-90fb-96ec88e05abc",
    github: "https://github.com/geeteshmehuria/algolens_ai",
    webapp: "https://algolens-ai.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Samrat-Hospital-Clone",
    problem:
      "A responsive healthcare website clone built to practice modern frontend development and healthcare-focused user flows.",
    description:
      "A responsive healthcare website clone inspired by Samrat Hospital, built to practice modern frontend development, routing, UI structure, responsive layouts, and healthcare-focused user flows. The project includes hospital-style sections, service presentation, clean navigation, and appointment/user-facing UI patterns.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Chakra UI",
      "Tailwind CSS",
      "JSON Server",
    ],
    features: [
      "Hospital-style sections with clear service presentation",
      "Responsive layouts and clean navigation",
      "Appointment / user-facing UI patterns",
      "Routing and structured UI built with React + Redux",
    ],
    image:
      "https://github.com/geeteshmehuria/c-sharp-samrat-2345/assets/70647591/edb60b30-2010-4bfb-9cf6-77abe5d4ff1e",
    github: "https://github.com/geeteshmehuria/c-sharp-samrat-2345",
    webapp: "https://c-sharp-sam.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Chefbot",
    subtitle: "Prodigies",
    problem:
      "A full-stack AI recipe generator that helps users discover and create recipes with AI-powered suggestions.",
    description:
      "A full-stack AI recipe generator that helps users discover and create recipes using AI-powered suggestions. Built with React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB, and integrating the OpenAI and DeepAI APIs to deliver a smooth and interactive cooking assistant experience.",
    tags: [
      "React + TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "DeepAI API",
    ],
    features: [
      "AI-generated recipes via the OpenAI API",
      "AI imagery using the DeepAI API",
      "Full-stack MERN architecture with a clean SPA UI",
    ],
    image:
      "https://github.com/SreeHarsha-Kamisetty/Prodigies/assets/146928943/43871c40-ea78-42a7-9035-105e54518a86",
    github: "https://github.com/geeteshmehuria/Prodigies",
    webapp: "https://chef-bot-six.vercel.app/",
    featured: false,
  },
];

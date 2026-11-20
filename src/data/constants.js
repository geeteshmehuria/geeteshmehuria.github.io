import mrMomoImg from "../images/mr-momo.png";

export const Bio = {
  name: "Geetesh Mehuria",
  roles: [
    "Full Stack Developer",
    "Python + FastAPI Engineer",
    "LLM Features in Production",
  ],
  experience: "2.5 Years Experience",
  stack: "Python • FastAPI • PostgreSQL • SvelteKit • LLM Integrations",
  description:
    "Full Stack Developer with 2.5 years building a B2B SaaS product (Perseptiv, ~500 users) on Python/FastAPI, PostgreSQL and SvelteKit. I led its 2-person migration from Wappler/Node.js to FastAPI + SvelteKit, built AI features its clients use, and took a 60-second timeout down to under 1 second. On my own I ship small real products, including an ordering app a real food stall runs on.",
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
  location: "Gurugram, Haryana, India · Open to Remote",
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
      "Svelte 5",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Tailwind CSS v4",
      "shadcn-svelte",
      "shadcn",
      "Next.js",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "SQLAlchemy (async)", "Pydantic", "REST APIs", "JWT auth", "WebSockets / Socket.IO", "ARQ background jobs", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQL", "Schema design", "Indexing", "EXPLAIN ANALYZE", "Migrations", "pgvector", "Redis"],
  },
  {
    title: "AI / API Integration",
    items: [
      "LiteLLM",
      "OpenRouter",
      "Claude API",
      "Gemini API",
      "OpenAI API",
      "Prompt chains",
      "Structured JSON output",
      "RAG (personal project)",
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
      "Render",
      "Docker",
      "Pytest",
      "Vitest",
      "Playwright",
      "pre-commit (Ruff, ESLint)",
      "Neon",
      "Capacitor",
      "Cursor",
      "Claude Code",
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    company: "Slashash Tech LLP",
    date: "Mar 2024 - Sep 2026 | Jodhpur, India",
    desc: "Full Stack Developer on Perseptiv, a B2B retirement-plan advisory SaaS (~500 users). Led its 2-person migration from Wappler/Node.js/Bootstrap to FastAPI + SvelteKit, and built AI features now used by its clients.",
    bullets: [
      "Led a 2-person migration of Perseptiv from Wappler/Node.js/Bootstrap to FastAPI + SvelteKit in 8 months (Jan–Aug 2026): ~340 legacy views rebuilt as 240 SvelteKit pages on 889 FastAPI endpoints, with 1,600+ commits.",
      "Built Content Studio end-to-end (FastAPI, SvelteKit, PostgreSQL, LLM): an AI tool that generates client presentations in under 5 minutes, live with Perseptiv clients.",
      "Built Evidence Marker Analysis: a two-pass LLM pipeline that scores vendor RFP responses against client evidence markers in under 1 minute, with structured output validated against the database; live with clients.",
      "Fixed a production endpoint that timed out at 60s for large firms: profiled it with EXPLAIN ANALYZE, added covering indexes and rewrote a lateral-join CTE, bringing it under 1 second.",
      "Built a dev-vs-prod PostgreSQL schema diff pipeline (diff report + migration SQL) run before every release; each check takes under 10 minutes and has caught schema mismatches before production.",
      "Set up the test suite from scratch and wrote most of its ~2,700 Pytest tests plus Vitest frontend tests (AI-assisted), including auth and IDOR regression tests, run in CI with pre-commit hooks.",
      "Fixed IDOR, JWT, SSRF and privilege-escalation vulnerabilities flagged by Aikido scanning, and applied resource + action permission checks to FastAPI endpoints.",
      "Before the migration (2024–2025), built and maintained Perseptiv features on the Wappler/Node.js stack.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SvelteKit",
      "LiteLLM",
      "Pytest",
      "Tailwind CSS",
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
      "pgvector (RAG)",
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
      "RAG chat over your repo: code chunking, pgvector embeddings, retrieval and an eval script",
      "97 backend tests",
    ],
    image:
      "https://raw.githubusercontent.com/geeteshmehuria/devreview-ai/main/docs/screenshots/dashboard.png",
    github: "https://github.com/geeteshmehuria/devreview-ai",
    webapp: "https://devreview-ai-mu.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "Mr. Momo",
    subtitle: "Food Ordering App",
    problem:
      "A busy momo stall needed customers to order ahead and pick up without queuing, and the owner needed one live view of every order instead of shouting across the counter.",
    description:
      "Mr. Momo is a live pickup-only ordering app used by a real momo stall and its customers. Customers sign in with an emailed OTP or Google, order from the live menu, choose a pickup time, pay cash on pickup, can call the stall in one tap, and watch their order status update in real time — with a \"ready\" beep and email when it's done. The owner runs everything from a real-time dashboard: the order queue, menu and stock, an Open/Paused store switch, daily reports, and customer feedback, plus an Android app (Capacitor) with Firebase push notifications. The FastAPI backend uses a feature-based layout with WebSocket channels for live updates, SQLAlchemy over PostgreSQL, and a Pytest suite per feature; the React + Vite frontend is deployed on Vercel with the API on Render.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "WebSockets",
      "Capacitor (Android)",
      "Firebase Push",
    ],
    features: [
      "Email OTP and Google sign-in with JWT sessions and rate-limited codes",
      "Live order status over WebSockets, with a \"ready\" beep and email",
      "Pickup time at checkout (now, 15, 30 or 45 min) and a \"Call the stall\" button",
      "Real-time owner dashboard: order queue, menu, stock, and store open/pause",
      "Daily reports and customer feedback for the owner",
      "Android app with Firebase push notifications via Capacitor",
      "Feature-based FastAPI backend with 154 Pytest tests",
    ],
    image: mrMomoImg,
    github: "https://github.com/geeteshmehuria/ro-yan-brews",
    webapp: "https://ro-yan-brews.vercel.app",
    featured: false,
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
      "PostgreSQL",
      "Gemini API",
    ],
    features: [
      "AI-generated topic notes, explanations, hints, and code review",
      "Topic-wise curriculum, practice problems, and a learning dashboard",
      "Spaced-repetition revision queue and progress tracking",
      "Secure JWT auth with protected pages and role-based admin access",
      "SvelteKit frontend with a FastAPI + PostgreSQL backend, 150 backend tests and Playwright e2e",
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
    subtitle: "Team project (3 developers)",
    problem:
      "A full-stack AI recipe generator that helps users discover and create recipes with AI-powered suggestions.",
    description:
      "A 3-person team project: a full-stack AI recipe generator that helps users discover and create recipes using AI-powered suggestions. Built with React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB, and integrating the OpenAI and DeepAI APIs to deliver a smooth and interactive cooking assistant experience.",
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

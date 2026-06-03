export interface Skill {
  name: string;
  pct: number;
}

export interface SkillGroup {
  label: string;
  color: string;
  skills: Skill[];
}

export interface ProjectStack {
  label: string;
  items: string[];
}

export interface Project {
  name: string;
  desc: string;
  fullDesc: string;
  color: string;
  status: 'live' | 'beta' | 'wip';
  stack: ProjectStack[];
  github: string;
  demo?: string;
}

export interface Education {
  level: string;
  school: string;
  desc: string;
  score: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    username: string;
    title: string;
    status: string;
    location: string;
    available: boolean;
    timezone: string;
    responseTime: string;
    roles: string[];
    summary: string;
  };
  education: Education[];
  skills: SkillGroup[];
  otherSkills: { name: string; emoji: string }[];
  projects: Project[];
  experience: Experience[];
  certifications: string[];
  achievements: string[];
  socials: {
    label: string;
    value: string;
    href: string;
    color: string;
    path: string;
  }[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Dev Sharma",
    username: "Devsharma08",
    title: "Full-Stack Developer | Cloud & DevOps",
    status: "Open to Internships & Full-Time Roles",
    location: "Uttarakhand, India",
    available: true,
    timezone: "IST (UTC+5:30)",
    responseTime: "< 12 hours",
    roles: [
      "Full-Stack Developer",
      "Cloud & DevOps Enthusiast",
      "MERN / MEAN Stack Developer"
    ],
    summary: "Full-Stack Developer with hands-on MERN/MEAN project and internship experience. Designed REST APIs, authentication flows, cloud apps, and PDF tools. Used Agile/Scrum sprints, unit testing, and DevOps workflows. Projects include microservices, Docker, AWS, PostgreSQL, and Prisma."
  },
  
  education: [
    {
      level: "B.Tech, Computer Science & Engineering",
      school: "BTKIT Dwarahat, Almora, Uttarakhand",
      desc: "Relevant coursework in Data Structures, Databases, Cloud Systems",
      score: "7.2 / 10 CGPA"
    },
    {
      level: "Class XII, Computer Science",
      school: "PSM Public School, Delhi",
      desc: "Completed with High First Division, Focus on Mathematics & C++",
      score: "Graduated 2022"
    }
  ],
  
  skills: [
    {
      label: "Languages",
      color: "#c678dd", // Purple
      skills: [
        { name: "TypeScript / JavaScript", pct: 95 },
        { name: "Python", pct: 85 },
        { name: "SQL", pct: 88 },
        { name: "C / C++", pct: 80 },
        { name: "Java", pct: 75 }
      ]
    },
    {
      label: "Frontend",
      color: "#61afef", // Blue
      skills: [
        { name: "React.js / Next.js", pct: 92 },
        { name: "Tailwind CSS", pct: 95 },
        { name: "Angular", pct: 80 },
        { name: "Monaco Editor Integration", pct: 88 },
        { name: "Responsive UI/UX", pct: 90 }
      ]
    },
    {
      label: "Backend & APIs",
      color: "#98c379", // Green
      skills: [
        { name: "Node.js / Express.js", pct: 90 },
        { name: "REST APIs & GraphQL", pct: 92 },
        { name: "WebRTC / Socket.IO", pct: 82 },
        { name: "JWT & RBAC Auth Middleware", pct: 88 }
      ]
    },
    {
      label: "Cloud & DevOps Enthusiast",
      color: "#e5c07b", // Yellow
      skills: [
        { name: "Vercel / Render / Linux", pct: 90 },
        { name: "AWS (EC2, S3, Lambda, ECR)", pct: 45 },
        { name: "Docker & Docker Compose", pct: 40 },
        { name: "GitHub Actions CI/CD", pct: 45 },
        { name: "Kubernetes & Terraform", pct: 35 }
      ]
    },
    {
      label: "Databases & ORMs",
      color: "#56b6c2", // Cyan
      skills: [
        { name: "PostgreSQL / MySQL", pct: 88 },
        { name: "MongoDB & Mongoose", pct: 90 },
        { name: "Prisma ORM", pct: 92 },
        { name: "Redis Caching", pct: 80 }
      ]
    }
  ],
  
  otherSkills: [
    { name: "Git Version Control", emoji: "🐙" },
    { name: "TDD & Unit Testing", emoji: "🧪" },
    { name: "Agile / Scrum Sprints", emoji: "🏂" },
    { name: "FFmpeg WASM & Video Processing", emoji: "🎥" },
    { name: "API Testing (Postman)", emoji: "🚀" },
    { name: "Oracle Cloud Infrastructure", emoji: "☁️" }
  ],
  
  experience: [
    {
      company: "Eascode",
      role: "Full-Stack Developer Intern",
      duration: "Jan 2026 - Mar 2026",
      location: "Remote",
      points: [
        "Refactored React rendering paths and tuned Node.js API flow; response time on key workflows dropped by 20%.",
        "Redesigned PDF generation for 100% template accuracy across tested export cases.",
        "Managed 30+ unit/regression test cases and documented 15+ workflow fixes for sprint review.",
        "Used clear communication in Agile/Scrum ceremonies to track 15+ handoff notes, edge cases, and expected outputs."
      ]
    },
    {
      company: "MobileCoderz",
      role: "MERN / MEAN Stack Intern",
      duration: "Jul 2025 - Aug 2025",
      location: "Remote",
      points: [
        "Delivered 20+ sprint features across React, Angular, Node.js, Express, and MongoDB.",
        "Implemented 2-layer access control with JWT authentication and RBAC middleware.",
        "Led reusable UI pattern cleanup that improved delivery speed by 15% across assigned sprint work."
      ]
    }
  ],
  
  projects: [
    {
      name: "BraceRCE",
      desc: "Remote Code Execution IDE & Telemetry Engine with sandboxed Docker executors and live feedback logs.",
      fullDesc: "BraceRCE is a secure, 3-tier remote code execution workspace. It couples a Monaco editor frontend with decoupled Node.js API executors run inside isolated Docker containers. Incorporates strict security controls including rate limiting, stripped capabilities, read-only mounts, and VM masking to eliminate runtime risks. Features live telemetry stream logs, durable run history, and pre-packaged test boilerplates.",
      color: "#61afef",
      status: "live",
      stack: [
        { label: "frontend", items: ["React.js", "Monaco Editor", "Tailwind CSS"] },
        { label: "backend", items: ["Node.js", "Docker Sandbox", "PostgreSQL", "Prisma ORM"] },
        { label: "cloud & devops", items: ["AWS", "GitHub Actions CI/CD", "Docker Compose"] }
      ],
      github: "https://github.com/Devsharma08/BraceRCE",
      demo: "https://bracerce.devsharma.dev"
    },
    {
      name: "CampusFinder",
      desc: "AI-Powered College Discovery & Admission Predictor Platform with real-time community Q&A and comparisons.",
      fullDesc: "CampusFinder is an AI-powered college discovery and admission predictor platform. It enables students to discover institutions with infinite scrolling, predict their admission chances using Google's Gemini 1.5 Flash API based on rank details, compare up to 3 institutions side-by-side on a floating tray, and discuss via a real-time Q&A community powered by Supabase Realtime Channels. Sourced dynamically via public HipoLabs Universities data with custom rank distribution schemas.",
      color: "#e5c07b",
      status: "live",
      stack: [
        { label: "frontend", items: ["React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lucide React"] },
        { label: "backend", items: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM"] },
        { label: "integrations", items: ["Google Gemini API", "Supabase Realtime Channels", "HipoLabs Universities API"] }
      ],
      github: "https://github.com/Devsharma08/College-Discovery-App",
      demo: "https://college-discovery-app-pzv7.vercel.app/"
    },
    {
      name: "GifLab",
      desc: "Browser-native GIF and video manipulation engine running locally via FFmpeg WASM.",
      fullDesc: "GifLab is a client-side media editor that processes GIF and MP4 conversions directly in the browser using FFmpeg WebAssembly. By processing video filters, stickers, text overlays, and compression completely on the client side, it eliminates server processing delays. Employs Cloudinary CDN compressions, dynamic API fetches, and infinite scroll viewports.",
      color: "#c678dd",
      status: "live",
      stack: [
        { label: "core engine", items: ["Vite", "React.js", "FFmpeg WASM", "Tailwind CSS"] },
        { label: "integrations", items: ["Cloudinary CDN", "Giphy API", "IntersectionObserver API"] }
      ],
      github: "https://github.com/Devsharma08/GifLab",
      demo: "https://gif-lab.vercel.app"
    }
  ],
  
  certifications: [
    "Oracle Cloud: OCI Generative AI Professional (2025-2026)",
    "Oracle Cloud: OCI AI Foundations Associate (2025-2026)",
    "Oracle Cloud: OCI Foundations Associate (2025-2026)"
  ],
  
  achievements: [
    "LeetCode: Solved 190+ data structures and algorithms problems across arrays, strings, trees, graphs, and DP.",
    "National Hackathon Finalist: Led team DeepShiva to the national finals; trained a tourism recommendation model and presented to the Governor.",
    "President, Computer Coding Club (BTKIT): Demonstrated leadership by organizing 8 workshops and 4 coding contests for 120+ students."
  ],
  
  socials: [
    {
      label: "Website",
      value: "devsharma.dev",
      href: "https://devsharma.dev",
      color: "#56b6c2",
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/dev-sharma-708074321",
      href: "https://linkedin.com/in/dev-sharma-708074321",
      color: "#0077b5",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    },
    {
      label: "GitHub",
      value: "github.com/Devsharma08",
      href: "https://github.com/Devsharma08",
      color: "#61afef",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      label: "Email",
      value: "devsharma08072004@gmail.com",
      href: "mailto:devsharma08072004@gmail.com",
      color: "#98c379",
      path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    }
  ]
};

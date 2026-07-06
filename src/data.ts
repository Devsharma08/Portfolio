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
  featured?: boolean;
  highlightTag?: string;
}

export interface UiChallenge {
  title: string;
  issue: string;
  solution: string;
}

export interface UiSample {
  name: string;
  desc: string;
  fullDesc: string;
  color: string;
  status: 'live' | 'beta' | 'wip';
  stack: ProjectStack[];
  github: string;
  demo: string;
  features: string[];
  challenges?: UiChallenge[];
  featured?: boolean;
  highlightTag?: string;
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
  uiSamples: UiSample[];
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
    title: "Full-Stack Developer | Cloud, DevOps & AI Integration",
    status: "Open to Internships & Full-Time Roles",
    location: "Uttarakhand, India",
    available: true,
    timezone: "IST (UTC+5:30)",
    responseTime: "< 12 hours",
    roles: [
      "Full-Stack Developer",
      "Cloud & DevOps Engineer",
      "AI & Real-Time Streaming Specialist"
    ],
    summary: "Full-Stack Developer with hands-on experience in MERN/MEAN and AI pipeline engineering. Specialized in deploying open-source AI models (Ollama, Hugging Face) over cloud infrastructure, designing real-time Server-Sent Events (SSE) token streaming architectures, and maintaining precise API reference documentation. Experienced with microservices, Docker containerization, AWS cloud systems, and databases."
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
      label: "Cloud & DevOps",
      color: "#e5c07b", // Yellow
      skills: [
        { name: "Vercel / Render / Linux / VPS", pct: 90 },
        { name: "AWS & Cloud AI Deployment (Ollama, Hugging Face)", pct: 85 },
        { name: "Docker & Docker Compose", pct: 80 },
        { name: "GitHub Actions CI/CD", pct: 75 },
        { name: "Kubernetes & Terraform", pct: 60 }
      ]
    },
    {
      label: "AI, Streaming & Docs",
      color: "#e06c75", // Red/Coral
      skills: [
        { name: "Ollama & Cloud AI Model Deployment", pct: 90 },
        { name: "Server-Sent Events (SSE) Streaming", pct: 92 },
        { name: "nomic-embed & RAG Pipelines", pct: 88 },
        { name: "OpenAPI Documentation & Swagger", pct: 90 }
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
      name: "VidSync",
      desc: "Post-stream YouTube video and livestream ingestion, transcript scraping, typing-latency timestamp alignment, and local RAG Q&A.",
      fullDesc: "VidSync is an advanced backend ingestion and semantic analysis pipeline. It scrapes video subtitles and live chat records using Python subprocesses, falling back dynamically to standard comments. Aligns chat records to transcript segments via typing-latency adjustments (shifting comments by 1.5 seconds per word). Compiles logs into 2-minute timeline blocks, assigns semantic embeddings locally with nomic-embed-text via Ollama, and powers context-guided RAG queries streaming response tokens from gemma3:1b over Server-Sent Events (SSE). Documentation and API endpoints conform to complete OpenAPI standards.",
      color: "#e5c07b",
      status: "live",
      stack: [
        { label: "backend & pipelines", items: ["Node.js", "Express.js", "TypeScript", "Python Subprocesses"] },
        { label: "ai & database", items: ["Ollama", "gemma3:1b (LLM)", "nomic-embed-text (Embeddings)", "Cosine Similarity Vector Search", "SSE Streaming"] },
        { label: "docs & deployment", items: ["OpenAPI / Swagger Reference", "VPS Cloud AI Model Deployment"] }
      ],
      github: "https://github.com/Devsharma08/yt-video",
      demo: "https://vidsync.docs.devsharma.dev/reference#description/introduction",
      featured: true,
      highlightTag: "TOP AI SYSTEM"
    },
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
      demo: "https://bracerce.devsharma.dev",
      featured: true,
      highlightTag: "FEATURED"
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
  
  uiSamples: [
    {
      name: "Apple iPhone 15 Pro Showcase",
      desc: "A high-performance, visually stunning interactive showcase of the Apple iPhone 15 Pro landing page.",
      fullDesc: "An advanced frontend clone focusing on Three.js 3D model rendering, scroll-bound entrance timelines, and high-fidelity video carousel progression. Focuses on premium Apple-standard animations and pixel-perfect layouts.",
      color: "#56b6c2",
      status: "live",
      stack: [
        { label: "frontend & 3D", items: ["React.js", "Vite", "Three.js", "React Three Fiber", "React Three Drei", "GSAP (ScrollTrigger)", "Tailwind CSS"] }
      ],
      github: "https://github.com/Devsharma08/apple-website-clone",
      demo: "https://apple-webpage-clone-dun.vercel.app/",
      features: [
        "3D Model Interaction: Real-time 3D models with controls to rotate and view from any angle.",
        "Dynamic Configurations: Custom switching of colors and screen sizes with immediate model/UI updates.",
        "Apple-style Video Carousel: Custom video transitions, progress indicators, and staggered text fades.",
        "GSAP Timeline Animations: Fluid entrance animations and scrub-bound transitions driven by ScrollTrigger."
      ],
      challenges: [
        {
          title: "WebGL Context Exhaustion",
          issue: "Browsers crashing or failing to load when instantiating multiple Canvas renderers across different grid items.",
          solution: "Used Drei's View utility to route multiple 3D scenes through a single global Canvas container, keeping resource usage to a minimum."
        },
        {
          title: "State-Driven Video Sync",
          issue: "Tracking progress buffers and triggering transitions on video end without causing infinite React render loops.",
          solution: "Managed the playhead metadata and tracking states using useRef and useEffect hooks to avoid triggering component-wide updates."
        },
        {
          title: "Typography Baseline Alignment",
          issue: "Mixed-size typography headers in headers appearing vertically misaligned relative to icons.",
          solution: "Leveraged Tailwind's items-baseline layout rules to align text elements by their typographic baselines."
        }
      ],
      featured: true,
      highlightTag: "VISUAL MASTERPIECE"
    },
    {
      name: "Brainwave AI Landing Page",
      desc: "A polished landing page replica for the Brainwave AI chat application, featuring premium dark aesthetics.",
      fullDesc: "A landing page recreation built to study modern SaaS landing designs. Implements smooth parallax scrolling elements, custom SVG-bordered vectors, conic gradients, and scroll lock controls to deliver a premium user experience.",
      color: "#98c379",
      status: "live",
      stack: [
        { label: "frontend", items: ["React 19", "Tailwind CSS v4", "Vite 8", "React Just Parallax", "Body Scroll Lock", "React Router DOM"] }
      ],
      github: "https://github.com/Devsharma08/Brainwave",
      demo: "https://brainwave-two-nu.vercel.app/",
      features: [
        "Header Navigation: Fixed position navbar with backdrop filters, custom mobile overlays, and body scroll lockout.",
        "Parallax Hero: Mouse-tracking parallax background rings, gradient outlines, and rotating orbit shapes.",
        "Clip-Path Features: Custom SVG clip-paths for complex feature cards and grid designs.",
        "Conic Gradients: Elegant colorful gradient borders enclosing pricing grids and roadmap cards."
      ],
      challenges: [
        {
          title: "Mobile Navigation Lockout",
          issue: "Preventing viewport scrolling on the main document body when the mobile navigation overlay is open.",
          solution: "Utilized a body scroll lock manager to restrict touch-move events exclusively on the document root while preserving internal menu scrolling."
        },
        {
          title: "Conic Gradient Vector Borders",
          issue: "Rendering high-resolution gradient borders that scale dynamically to complex card dimensions.",
          solution: "Engineered SVGs with absolute positioning layers, relative clip-paths, and gradient fills to act as background frames behind cards."
        }
      ],
      featured: true,
      highlightTag: "FEATURED"
    },
    {
      name: "OH Studio Showcase",
      desc: "A sleek, responsive, and highly interactive frontend replica of the OH Studio originally designed to showcase a modern design portfolio.",
      fullDesc: "OH Studio is a custom-designed frontend portfolio replica focusing heavily on high-end animations, interactive transitions, and modern aesthetics. Utilizes native Framer Motion timelines for fluid scrolling loops and hover-bound gestures. Includes high-resolution media handling with inline, muted, auto-playing background videos and responsive vector graphics.",
      color: "#c678dd",
      status: "live",
      stack: [
        { label: "frontend", items: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Lottie React", "Lucide React"] }
      ],
      github: "https://github.com/Devsharma08/oh-studio",
      demo: "https://oh-studio-eta.vercel.app/",
      features: [
        "Infinite Scrolling Carousel: Utilizes Framer Motion for a seamlessly looping, smooth-scrolling hero section.",
        "Draggable Interactions: Hovering or clicking pauses auto-scroll animations dynamically.",
        "Dynamic Lottie Animations: High-quality SVG animations implemented natively via lottie-react.",
        "Modern UI & Typography: Tight tracking, text-balance, and tailored CSS styles using Tailwind v4.",
        "Rich Media Support: Integrated AVIF images and inline auto-playing .mp4 video backgrounds."
      ],
      challenges: [
        {
          title: "Handling Default Exports across Modules",
          issue: "Vite dev and production builds crashing due to direct default imports from CJS-packaged animation modules.",
          solution: "Implemented robust loader guards checking wrapper formats (LottieImport.default || LottieImport) to safely instantiate components."
        },
        {
          title: "Auto-pausing CSS vs Framer Motion",
          issue: "Handling play/pause triggers uniformly under rapid pointer movement without breaking motion states.",
          solution: "Coupled React synthetic pointer states for control triggers with high-specificity CSS rules to assure reliable mouse interactions."
        }
      ]
    },
    {
      name: "Basic Agency Showcase",
      desc: "A pixel-perfect, highly detailed interactive frontend showcase of the Basic Agency landing page.",
      fullDesc: "A detailed frontend recreation of the design language of Basic Agency, showcasing staggered entrance animations, scroll-triggered theme shifts, and custom video transitions. Integrates IntersectionObserver to toggle application styles dynamically based on the user's scroll position.",
      color: "#61afef",
      status: "live",
      stack: [
        { label: "frontend", items: ["React 19", "Vite 8", "Tailwind CSS v4", "tailwindcss-animate"] }
      ],
      github: "https://github.com/Devsharma08/basic-agency",
      demo: "https://basic-agency-seven.vercel.app/",
      features: [
        "Preload Sequence: Entrance text fades in from the bottom, followed by a white background strip sliding up (800ms).",
        "Hero Video Entrance: Auto-playing hero video slides in from the bottom (1000ms) once preloading signals completion.",
        "Intersection Observer Theme Toggle: Seamless transition to dark theme once the user scrolls to the Connect section."
      ],
      challenges: [
        {
          title: "Preloader Animation Orchestration",
          issue: "Preventing race conditions between preloader exit transitions and hero entrance schedules.",
          solution: "Constructed a state-driven callback mechanism that ensures the child components wait for preloader's onFinish trigger before mounting entry transitions."
        },
        {
          title: "Fluid Theme Shifting",
          issue: "Achieving high-performance background color fades on scroll without causing repaint stuttering in mobile browsers.",
          solution: "Utilized dynamic root CSS custom variables triggered by the IntersectionObserver API, offloading color fades to hardware-accelerated paint pipelines."
        }
      ]
    },
    {
      name: "Backstage Talks Magazine",
      desc: "A pixel-perfect, fully responsive replica of the visually striking Backstage Talks magazine website.",
      fullDesc: "A detailed frontend clone showcasing synchronized scroll-spying, dynamically transitioning viewport backgrounds, and zero-dependency CSS snap-scrolling. Employs pointer-event overrides to allow smooth navigation interaction without layout conflicts.",
      color: "#e5c07b",
      status: "live",
      stack: [
        { label: "frontend", items: ["React.js", "Vite", "Tailwind CSS", "Intersection Observer API", "CSS Scroll Snapping"] }
      ],
      github: "https://github.com/Devsharma08/Backstage-talk",
      demo: "https://backstage-talk-pied.vercel.app/",
      features: [
        "Dynamic Background Transitions: The viewport background fluidly transitions its color scheme as issues scroll by.",
        "Scroll Snapping: CSS snap-scrolling (y mandatory, snap-stop always) centers pages perfectly inside the viewport.",
        "Scroll-Spy Navigation: High-efficiency IntersectionObserver tracks the active cover and highlights sidebar links.",
        "Responsive Overlay Layouts: Overlay structures adapt gracefully across mobile, tablet, and ultrawide viewports."
      ],
      challenges: [
        {
          title: "State Lifting for Global Context",
          issue: "Synchronizing background color shifts across separate sections behind fixed header overlays without tearing.",
          solution: "Lifted the active index/color state to the root layout container, keeping scroll panels separate from the floating UI layers."
        },
        {
          title: "Pointer Events Engineering",
          issue: "Fixed full-screen navigation overlays blocking scroll gestures on scrollable container rows.",
          solution: "Structured pointer-events-none layout wrappers, re-enabling pointer-events-auto exclusively on specific buttons/links."
        },
        {
          title: "Data-Attributes over Hardcoded IDs",
          issue: "Matching observer boundaries to active colors dynamically as pages scale.",
          solution: "Injected dynamic dataset variables (data-color, data-index) directly onto render loops, letting the intersection observer query parameters procedurally."
        }
      ]
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

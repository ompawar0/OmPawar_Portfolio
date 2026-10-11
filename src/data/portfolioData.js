export const personalInfo = {
  name: "Om Pawar",
  role: "Software Engineer & Frontend Developer",
  location: "Chh. Sambhajinagar, Maharashtra, India",
  phone: "+91 8459503932",
  email: "ompawar396@gmail.com",
  github: "https://github.com/ompawar0",
  githubUsername: "ompawar0",
  linkedin: "https://www.linkedin.com/in/om-pawar-301081330/",
  linkedinUsername: "om-pawar-301081330",
  leetcode: "https://leetcode.com/ompawar0",
  bio: "Computer Science engineer specializing in C++, Data Structures & Algorithms, and modern frontend architecture with React. Proven experience converting complex design systems into high-speed, accessible web applications and scaling AI-driven user interfaces.",
  stats: [
    { label: "DSA Problems Solved", value: "200+", detail: "LeetCode & CodeChef" },
    { label: "Load Speed Optimization", value: "25%", detail: "Calibers Infotech" },
    { label: "UI Dev Acceleration", value: "30%", detail: "Reusable Library" },
    { label: "Standards Compliance", value: "100%", detail: "Semantic & Responsive" },
  ]
};

export const experiences = [
  {
    role: "Front-End Developer",
    company: "Voke – AI-Powered Interview Preparation Platform",
    period: "Mar 2025 – Present",
    location: "Remote / Hybrid",
    badge: "Current Role",
    color: "from-sky-500 to-indigo-500",
    highlights: [
      "Engineered fluid, responsive user interfaces using React, Tailwind CSS, HTML5, and JavaScript, ensuring frictionless UX across all devices.",
      "Collaborated closely with product and design teams to build core interview simulation workflows and interactive feedback engines.",
      "Integrated front-end views with backend AI evaluation APIs, enabling sub-second real-time scoring and transcript generation.",
      "Mentored under Mr. Vivek Shridhar on scalable web architecture, state management patterns, and enterprise performance.",
      "Drove strategic community growth initiatives, including an upcoming partnership with Unstop to power collegiate tech hackathons."
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "AI Workflows", "Vite"]
  },
  {
    role: "Web Development Intern",
    company: "Calibers Infotech Nashik",
    period: "Jun 2024 – Aug 2024",
    location: "Nashik, Maharashtra",
    badge: "Internship",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Converted high-fidelity Figma specifications into pixel-perfect React web applications, increasing initial page load speed by 25%.",
      "Architected a modular, reusable UI component library that shortened feature turnaround time by 30% across multiple modules.",
      "Enforced semantic HTML structure, cross-browser compatibility, and WCAG accessibility standards, attaining 100% platform compliance.",
      "Collaborated in a 3-person Agile sprint team to ship deliverables on schedule, diagnosing and fixing 10+ critical UI/UX bottlenecks."
    ],
    tech: ["React", "Figma to Code", "HTML5", "CSS3", "JavaScript", "Agile / Scrum"]
  }
];

export const projects = [
  {
    id: "voke",
    title: "Voke — AI Interview Preparation Platform",
    subtitle: "AI-Powered Technical & Behavioral Simulator",
    description: "An AI-driven interview platform simulating real-time technical and behavioral interviews. Features automated speech evaluation, question generation, and instant feedback reports for tech students and engineers.",
    featured: true,
    category: "AI & Web Apps",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "AI Simulation", "Responsive Design"],
    metrics: "25% faster load speed • Real-time API Feedback",
    github: "https://github.com/ompawar0/voke-interview-platform",
    live: "https://voke.ai",
    featuredPoints: [
      "Interactive interview cockpit with real-time feedback",
      "Dynamic prompt evaluation hooked into backend AI endpoints",
      "Accessible modular components and cross-device responsiveness",
      "Mentored by Mr. Vivek Shridhar for production readiness"
    ]
  },
  {
    id: "algoforge",
    title: "AlgoForge — C++ DSA & Runtime Visualizer",
    subtitle: "Interactive Algorithmic State Engine",
    description: "An interactive algorithm visualizer and complexity analyzer built to illustrate memory dynamics, sorting mechanics, and graph pathfinding (Dijkstra, BFS, DFS) with live Big-O runtime comparisons.",
    featured: true,
    category: "Algorithms & Systems",
    tags: ["C++", "React", "Data Structures", "Algorithms", "Canvas API", "Big-O Analytics"],
    metrics: "200+ LeetCode Algorithms Modeled",
    github: "https://github.com/ompawar0/algoforge-visualizer",
    live: "https://github.com/ompawar0",
    featuredPoints: [
      "Step-by-step playback of graph traversals and DP states",
      "Memory stack visualization inspired by C++ pointers",
      "Runtime speed comparison against theoretical Big-O curves"
    ]
  },
  {
    id: "devpulse",
    title: "DevPulse — Modular Design System",
    subtitle: "High-Performance Accessible React UI Kit",
    description: "A production-tested, accessible React component library built upon principles developed at Calibers Infotech. Slashes development time by 30% with zero extraneous runtime overhead.",
    featured: false,
    category: "UI Systems",
    tags: ["React", "Tailwind CSS", "Accessibility (a11y)", "Design Systems", "Component Library"],
    metrics: "30% Development Time Saved",
    github: "https://github.com/ompawar0/devpulse-design-system",
    live: "https://github.com/ompawar0",
    featuredPoints: [
      "25+ accessible components adhering strictly to WCAG 2.1 AA",
      "Keyboard navigable modals, dropdowns, and toast notification queues",
      "Ultra-lightweight footprint with zero heavy dependencies"
    ]
  },
  {
    id: "campussync",
    title: "CampusSync — Hackathon & Event Portal",
    subtitle: "Community Hackathon Coordination Engine",
    description: "A full-featured event registration and team management engine engineered for student developers and collegiate hackathons, incorporating team matchmaking and rubric-based submissions.",
    featured: false,
    category: "Fullstack",
    tags: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Tailwind CSS"],
    metrics: "Unstop Hackathon Alignment",
    github: "https://github.com/ompawar0/campussync-hackathon-portal",
    live: "https://github.com/ompawar0",
    featuredPoints: [
      "Multi-step registration workflow with instant team code generation",
      "MongoDB aggregation pipeline for submission scoring",
      "Mobile-first responsive UI built with Tailwind"
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "C++", level: "Advanced", note: "DSA, OOP, STL, Memory Management" },
      { name: "C", level: "Proficient", note: "Systems Foundations, Pointers" },
      { name: "JavaScript", level: "Advanced", note: "ES6+, Async/Await, DOM, Event Loop" },
      { name: "Python", level: "Intermediate", note: "Scripting, AI Model basics" },
      { name: "Java", level: "Intermediate", note: "OOP Concepts, Class Hierarchy" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "layout",
    skills: [
      { name: "React", level: "Advanced", note: "Hooks, Context, Custom Hooks, Performance" },
      { name: "Tailwind CSS", level: "Advanced", note: "Design Tokens, Dark Mode, Responsive" },
      { name: "HTML5 & CSS3", level: "Mastery", note: "Semantic Structure, Flexbox, Grid, Animations" },
      { name: "Three.js / WebGL", level: "Working Knowledge", note: "3D Canvases, Shaders, Particles" },
      { name: "Vite & Tooling", level: "Proficient", note: "Fast HMR, Bundling, Optimization" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "cpu",
    skills: [
      { name: "Data Structures (DSA)", level: "Advanced", note: "Arrays, Trees, Graphs, HashMaps, Heaps" },
      { name: "Algorithms & Big-O", level: "Advanced", note: "Time/Space Optimization, 200+ Solved" },
      { name: "Object-Oriented (OOP)", level: "Advanced", note: "Encapsulation, Polymorphism, Inheritance" },
      { name: "Database Fundamentals", level: "Proficient", note: "Relational Queries, Normalization, Schema Design" }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "database",
    skills: [
      { name: "Node.js", level: "Intermediate", note: "Event-driven runtime, Express server" },
      { name: "REST APIs", level: "Proficient", note: "API Consumption, Endpoints, JSON CRUD" },
      { name: "MySQL", level: "Proficient", note: "Joins, Indexing, Transactions" },
      { name: "MongoDB", level: "Basics", note: "NoSQL Collections, Aggregation" }
    ]
  },
  {
    category: "DevOps, Tools & Workflows",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced", note: "Branching, Pull Requests, Merge Conflict Resolution" },
      { name: "VS Code", level: "Power User", note: "Extensions, Debugging, Snippets" },
      { name: "AWS (Basics)", level: "Foundational", note: "S3, Cloud Fundamentals" },
      { name: "Agile / Scrum", level: "Practiced", note: "Sprint Planning, Cross-Functional Collaboration" },
      { name: "CI / CD Concepts", level: "Foundational", note: "Build Pipelines, Automated Linting" }
    ]
  }
];

export const educationList = [
  {
    institution: "Mangaldeep College of Engineering",
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    period: "Aug 2025 – May 2028",
    status: "Currently in 3rd Year",
    badge: "Active • 3rd Year",
    isCurrent: true,
    description: "Currently in 3rd year of B.E. specializing in Computer Science. Actively studying advanced algorithms, distributed computing, database engineering, system design, and AI-driven frontend architectures."
  },
  {
    institution: "LoGIMEER Institute Nashik (MSBTE)",
    degree: "Diploma in Computer Science",
    period: "Sept 2021 – May 2025",
    status: "Completed",
    badge: "Completed",
    isCurrent: false,
    description: "Successfully completed Diploma in Computer Science with distinction in core computing fundamentals, C, C++, Java, Object-Oriented Programming, Data Structures, and Software Engineering."
  }
];

export const certifications = [
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    badge: "Gen AI"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Jul 2026",
    badge: "AI Core"
  },
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    date: "Oct 2024",
    badge: "Machine Learning"
  },
  {
    title: "C, C++, and Data Structures & Algorithms",
    issuer: "Core2Web Pune",
    date: "2024",
    badge: "DSA & Systems"
  },
  {
    title: "Hack for Green Bharat",
    issuer: "Tech Masters India / Unstop",
    date: "2026",
    badge: "Hackathon"
  },
  {
    title: "IndradhanU – AI for Climate Change",
    issuer: "PCCOE Pune",
    date: "2025–26",
    badge: "Competition"
  },
  {
    title: "FinWiz Competition",
    issuer: "Delhi Technological University",
    date: "Apr 2026",
    badge: "National Finalist"
  }
];

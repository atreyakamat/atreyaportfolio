// Content mirrors public/atreya_kamat_resume.pdf. Keep the two in sync.
export interface ResumeRole {
  role: string;
  org: string;
  place: string;
  period: string;
  points: string[];
}
export interface ResumeProject {
  name: string;
  stack: string;
  points: string[];
}

export const resumeSkills: { label: string; value: string }[] = [
  { label: "Software development", value: "Python, Java, C++, TypeScript (and JavaScript), HTML/CSS" },
  { label: "Frameworks & libraries", value: "Flask, React.js, SQLAlchemy, Pandas, NumPy, Astro.js, Node.js, Express.js" },
  { label: "Tools", value: "Git, Docker, Kubernetes, GitHub, Netlify, Vercel, Linux, Prometheus, SonarQube, Grafana, Jenkins, CI/CD pipelines" },
  { label: "Databases", value: "PostgreSQL, MySQL, MongoDB" },
];

export const resumeExperience: ResumeRole[] = [
  {
    role: "Trainee", org: "Revature", place: "Virtual", period: "July 2026 – September 2026",
    points: [
      "Completed hands-on training in Java and Python, gaining practical experience in software development and problem-solving.",
      "Worked with CI/CD and DevOps tools including Jenkins, Docker, Kubernetes, Prometheus, and Grafana, with a focus on deployment, monitoring, and automation.",
      "Successfully completed and passed all quality checks (QCs) throughout the training, maintaining an average score of 4/5 and demonstrating consistent technical performance and learning progress.",
    ],
  },
  {
    role: "Intern", org: "Infosys Springboard", place: "Virtual", period: "November 2025 – January 2026",
    points: [
      "Designed and developed an AI-powered chatbot using Streamlit and Ollama, focused on assisting users with coding-related tasks.",
      "Implemented OCR-based detection to extract and process content from documents and images, enabling automated task handling and code-related interactions.",
      "Collaborated within a structured internship environment to design, build, and iterate on functional chatbot components and AI-powered features.",
    ],
  },
  {
    role: "Junior Developer Intern", org: "SparkPlus Tech.", place: "Remote", period: "July 2025 – July 2026",
    points: [
      "Maintained and enhanced the company's core platform, ensuring high availability, performance, and reliability across production environments.",
      "Designed and developed internal monitoring tools to track website uptime, performance metrics, and system health for client-facing applications.",
      "Implemented automated monitoring and alerting workflows to proactively detect issues, reduce downtime, and improve operational stability.",
      "Collaborated with team members to deploy and manage live projects, continuously improving system efficiency and supporting active development initiatives.",
    ],
  },
  {
    role: "AI-ML Virtual Intern", org: "Google", place: "Virtual", period: "April 2024 – June 2024",
    points: [
      "Developed and refined object identification models using TensorFlow, gaining hands-on experience in designing, training, and optimizing machine learning algorithms.",
      "Worked on image recognition and computer vision tasks, applying advanced AI/ML techniques to address real-world problems in a virtual team environment.",
      "Collaborated on AI/ML projects, demonstrating strong problem-solving skills, adaptability, and effective teamwork in a fast-paced, technology-driven environment.",
    ],
  },
];

export const resumeProjects: ResumeProject[] = [
  {
    name: "VistaraBI", stack: "React, Ollama, AI/ML, Open Source",
    points: [
      "Built VistaraBI, an open-source AI-powered Business Intelligence platform designed to make data analysis and business insights more accessible.",
      "Implemented domain and KPI detection to automatically identify relevant business areas and key performance indicators from datasets.",
      "Developed AI-powered analysis, recommendations, and forecasting capabilities using Ollama, enabling users to uncover trends and generate actionable business insights.",
    ],
  },
  {
    name: "Lawyer Booking & CRM Platform", stack: "Next.js, n8n, WhatsApp Automation, CRM",
    points: [
      "Built a complete lawyer booking and CRM platform using Next.js, covering appointment management, client workflows, and operational tracking.",
      "Designed n8n-powered workflow automations to streamline booking and CRM processes, reducing manual intervention and improving operational efficiency.",
      "Implemented WhatsApp-based confirmation and notification automations to automatically communicate booking updates and confirmations with clients.",
    ],
  },
  {
    name: "Futsal Booking Platform", stack: "Next.js, RBAC, Analytics, AI/ML",
    points: [
      "Developed a complete futsal booking platform for AIEM Goa using Next.js, enabling users to discover, book, and manage futsal facilities through a streamlined web interface.",
      "Implemented Role-Based Access Control (RBAC) to provide tailored permissions and workflows for different user roles, improving platform security and administration.",
      "Integrated analytics and AI-driven insights to analyze booking activity, identify usage patterns, and support data-driven facility management.",
    ],
  },
  {
    name: "PulseWatch", stack: "React, Express, PostgreSQL, Drizzle ORM, Node.js",
    points: [
      "Built a full-stack uptime monitoring platform with configurable per-site checks, response-time tracking, incident logs, and uptime analytics across 24-hour, 7-day, and 30-day periods.",
      "Implemented automated monitoring and alerting using node-cron, PostgreSQL, and Drizzle ORM, with email notifications for downtime and service recovery events.",
      "Designed a production-ready architecture combining an Express API, Vite-powered React dashboard, shared schemas, and optimized build pipelines for scalable deployment.",
    ],
  },
  {
    name: "Track.now", stack: "Web Application, Product Development, Analytics",
    points: [
      "Built and launched Track.now, taking the product from initial development through deployment and user adoption.",
      "Focused on iterative product development and user experience improvements, incorporating user feedback to continuously refine the platform.",
      "Grew the platform to 100+ users, demonstrating successful product delivery, adoption, and independent execution from development to launch.",
    ],
  },
  {
    name: "Stix 'N' Vibes", stack: "E-commerce, Next.js, WhatsApp Integration, Analytics",
    points: [
      "Architected a modular e-commerce platform with scalable product, collection, and category data structures, enabling rapid customization and future expansion.",
      "Built a material-aware cart and dynamic pricing system supporting Paper and Vinyl products with configurable price multipliers and WhatsApp-based checkout.",
      "Designed extensible utilities for discounts, popularity-based recommendations, analytics, and product management, enabling continuous UI and feature iteration.",
    ],
  },
  {
    name: "Amthane Valley", stack: "Next.js, Booking System, SEO, Deployment",
    points: [
      "Built a client-facing website for Amthane Valley using Next.js, delivering a fast, SEO-optimized, and fully responsive user experience.",
      "Developed a self-hosted booking platform for farm activities, enabling customers to make direct reservations without relying on third-party booking services.",
      "Handled end-to-end deployment, routing, and performance optimization, ensuring a scalable, maintainable, and production-ready platform.",
    ],
  },
];

export const resumeEducation = [
  { degree: "B.E. in Computer Engineering", org: "Agnel Institute of Engineering and Management, Assagao, Goa", period: "2022 – 2026" },
  { degree: "Honours Computer Engineering in Artificial Intelligence and Machine Learning", org: "Goa University, Goa", period: "2023 – 2026" },
];

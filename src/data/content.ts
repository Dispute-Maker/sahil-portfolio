import {
  Chrome,
  Code2,
  Database,
  Figma,
  GitBranch,
  Github,
  Package,
  Send,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const journey = [
  { step: "Learning", note: "Fundamentals, curiosity, endless tabs." },
  { step: "Building", note: "Shipping small things, then bigger things." },
  { step: "Experimenting", note: "Breaking patterns to understand them." },
  { step: "Full-Stack", note: "Owning products from database to pixel." },
  { step: "What's next?", note: "Let's find out together." },
] as const;

export const focusAreas = [
  {
    index: "01",
    title: "Frontend",
    description:
      "Interfaces that feel considered — accessible, fast, and typographically precise. React, motion and design systems.",
  },
  {
    index: "02",
    title: "Backend",
    description:
      "APIs and data models that stay calm under load. Auth, realtime, caching and the boring parts done properly.",
  },
  {
    index: "03",
    title: "Full-Stack",
    description:
      "End-to-end ownership: from schema to deployment. One person, one coherent product, no hand-offs lost in translation.",
  },
  {
    index: "04",
    title: "Experiment",
    description:
      "Prototypes, AI-assisted tools and creative code. Small bets that keep the craft sharp and the ideas fresh.",
  },
] as const;

export const skillGroups = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Redux / Zustand"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "WebSockets", "Authentication", "Serverless"] },
  { group: "Database / Services", items: ["MongoDB", "PostgreSQL", "Prisma", "Appwrite", "Firebase", "Stripe"] },
  { group: "Programming", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"] },
] as const;

export const tools: { name: string; icon: LucideIcon }[] = [
  { name: "VS Code", icon: Code2 },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Vite", icon: Zap },
  { name: "npm", icon: Package },
  { name: "Postman", icon: Send },
  { name: "Figma", icon: Figma },
  { name: "Chrome DevTools", icon: Chrome },
  { name: "Appwrite", icon: Database },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/sahilbarve", handle: "@sahilbarve" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sahilbarve", handle: "/in/sahilbarve" },
  { label: "Email", href: "mailto:hello@sahilbarve.dev", handle: "hello@sahilbarve.dev" },
] as const;

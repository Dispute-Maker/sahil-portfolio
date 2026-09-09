import shareMarket from "@/assets/projects/share-market.jpg";
import storefront from "@/assets/projects/storefront.jpg";
import taskflow from "@/assets/projects/taskflow.jpg";
import pulsechat from "@/assets/projects/pulsechat.jpg";
import draftmind from "@/assets/projects/draftmind.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "share-market",
    title: "Share Market",
    category: "Full-Stack · Fintech",
    year: "2026",
    description:
      "A real-time stock tracking platform with live price feeds, watchlists, portfolio analytics and interactive charting. Built around a resilient data layer that keeps thousands of tickers in sync.",
    stack: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "Chart.js"],
    image: shareMarket,
    imageAlt: "Share Market dashboard with live lime-green stock charts on a dark interface",
    github: "https://github.com/sahilbarve",
    live: "https://github.com/sahilbarve",
  },
  {
    slug: "storefront",
    title: "Storefront",
    category: "Full-Stack · E-commerce",
    year: "2025",
    description:
      "A minimalist commerce experience with product discovery, cart persistence, secure checkout and an admin panel for inventory. Focused on speed, accessibility and calm visual hierarchy.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind"],
    image: storefront,
    imageAlt: "Storefront e-commerce product grid on a tablet",
    github: "https://github.com/sahilbarve",
    live: "https://github.com/sahilbarve",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    category: "Full-Stack · Productivity",
    year: "2025",
    description:
      "A collaborative kanban workspace with drag-and-drop boards, role-based access, activity history and optimistic updates so teams never wait on the network.",
    stack: ["React", "Appwrite", "TypeScript", "Zustand", "dnd-kit"],
    image: taskflow,
    imageAlt: "TaskFlow kanban board on a desktop monitor",
    github: "https://github.com/sahilbarve",
  },
  {
    slug: "pulsechat",
    title: "PulseChat",
    category: "Full-Stack · Realtime",
    year: "2024",
    description:
      "A realtime messaging app with presence indicators, typing status, read receipts and media sharing, backed by socket rooms and a lightweight REST API.",
    stack: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    image: pulsechat,
    imageAlt: "PulseChat messaging interface on a smartphone",
    github: "https://github.com/sahilbarve",
    live: "https://github.com/sahilbarve",
  },
  {
    slug: "draftmind",
    title: "DraftMind",
    category: "Experiment · AI",
    year: "2024",
    description:
      "An AI-assisted writing editor with inline suggestions, tone controls and version history. An experiment in streaming interfaces and careful, non-intrusive assistance.",
    stack: ["Next.js", "OpenAI API", "Vercel AI SDK", "PostgreSQL", "Tailwind"],
    image: draftmind,
    imageAlt: "DraftMind AI writing editor on a laptop",
    github: "https://github.com/sahilbarve",
  },
];

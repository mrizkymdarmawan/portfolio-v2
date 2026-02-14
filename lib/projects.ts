export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  year: number;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "inventory-dashboard",
    title: "Inventory Dashboard",
    summary: "Track stock levels, purchase orders, and warehouse alerts in one place.",
    description:
      "A full-stack dashboard for managing inventory operations with role-based access and reporting.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    year: 2026,
    liveUrl: "https://example.com/inventory-dashboard",
    repoUrl: "https://github.com/your-handle/inventory-dashboard",
  },
  {
    slug: "team-task-manager",
    title: "Team Task Manager",
    summary: "Plan sprints, assign tasks, and monitor team progress.",
    description:
      "A collaboration app focused on simple project planning, status tracking, and team visibility.",
    tech: ["React", "Node.js", "Express"],
    year: 2025,
    liveUrl: "https://example.com/team-task-manager",
    repoUrl: "https://github.com/your-handle/team-task-manager",
  },
  {
    slug: "realtime-chat-support",
    title: "Realtime Chat Support",
    summary: "Handle customer chats with queue management and analytics.",
    description:
      "A support chat system with realtime messaging, operator assignment, and conversation insights.",
    tech: ["Next.js", "WebSocket", "Redis"],
    year: 2025,
    liveUrl: "https://example.com/realtime-chat-support",
    repoUrl: "https://github.com/your-handle/realtime-chat-support",
  },
  {
    slug: "billing-automation-api",
    title: "Billing Automation API",
    summary: "Generate invoices, handle payments, and sync accounting workflows.",
    description:
      "A backend service for recurring billing automation with webhooks and retry mechanisms.",
    tech: ["NestJS", "PostgreSQL", "Docker"],
    year: 2024,
    repoUrl: "https://github.com/your-handle/billing-automation-api",
  },
  {
    slug: "hr-onboarding-portal",
    title: "HR Onboarding Portal",
    summary: "Automate onboarding checklists and document collection.",
    description:
      "An internal portal that helps HR and hiring managers streamline onboarding tasks.",
    tech: ["Next.js", "Prisma", "MySQL"],
    year: 2024,
    liveUrl: "https://example.com/hr-onboarding-portal",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    summary: "First personal portfolio focused on clean UI and quick loading.",
    description:
      "A personal website showcasing projects and writing, with a static-first architecture.",
    tech: ["React", "Tailwind CSS"],
    year: 2023,
    liveUrl: "https://example.com/portfolio-v1",
    repoUrl: "https://github.com/your-handle/portfolio-v1",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

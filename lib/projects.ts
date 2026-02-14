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
    slug: "portfolio",
    title: "portfolio",
    summary: "Personal portfolio website built with Next.js.",
    description:
      "A personal portfolio project focused on clean UI, performance, and maintainable front-end structure.",
    tech: ["TypeScript", "Next.js"],
    year: 2026,
    repoUrl: "https://github.com/mrizkymdarmawan/portfolio",
  },
  {
    slug: "cli-calculator",
    title: "cli-calculator",
    summary: "CLI calculator project to explore Rust fundamentals.",
    description:
      "A command-line calculator implemented in Rust as part of language and systems programming practice.",
    tech: ["Rust"],
    year: 2024,
    repoUrl: "https://github.com/mrizkymdarmawan/cli-calculator",
  },
  {
    slug: "sofiyandri-portfolio",
    title: "sofiyandri-portfolio",
    summary: "Portfolio website project built for a client profile.",
    description:
      "A TypeScript-based portfolio implementation with a focus on simple structure and reusable sections.",
    tech: ["TypeScript", "Next.js"],
    year: 2025,
    repoUrl: "https://github.com/mrizkymdarmawan/sofiyandri-portfolio",
  },
  {
    slug: "tiny-http",
    title: "tiny-http",
    summary: "Tiny HTTP server implementation in C.",
    description:
      "A lightweight HTTP server written in C to learn low-level networking and request handling.",
    tech: ["C"],
    year: 2024,
    repoUrl: "https://github.com/mrizkymdarmawan/tiny-http",
  },
  {
    slug: "go-basics",
    title: "go-basics",
    summary: "Go learning repository with core language exercises.",
    description:
      "A structured set of Go practice modules covering syntax, data structures, and basic concurrency patterns.",
    tech: ["Go"],
    year: 2024,
    repoUrl: "https://github.com/mrizkymdarmawan/go-basics",
  },
  {
    slug: "rust-basics",
    title: "rust-basics",
    summary: "Rust learning repository covering the language basics.",
    description:
      "A practice repository that explores ownership, borrowing, and common Rust development workflows.",
    tech: ["Rust"],
    year: 2024,
    repoUrl: "https://github.com/mrizkymdarmawan/rust-basics",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

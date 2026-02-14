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
    slug: "famous",
    title: "famous",
    summary: "Fleet Management System (FMS)",
    description:
      "A fleet management system for mining companies, designed to streamline the workflow for mining companies.",
    tech: ["React", "Express", "PostgreSQL", "IoT"],
    year: 2025,
    repoUrl: "https://github.com/Minergo-System",
    liveUrl: "https://famous.borneo-indobara.com/sign-in",
  },
  {
    slug: "uassist-onboard-unit",
    title: "uassist-onboard-unit",
    summary: "Onboarding Unit for UAssist",
    description:
      "A onboarding unit for UAssist, designed to streamline the workflow for mining companies.",
    tech: ["React Native", "TypeScript", "Firebase", "IoT"],
    year: 2025,
    repoUrl: "https://github.com/Minergo-System",
    liveUrl: "https://famous.borneo-indobara.com/sign-in",
  },
  {
    slug: "uassist",
    title: "uassist",
    summary: "Unified Hauling Assignment Management System",
    description:
      "A mobile application for managing and tracking hauling assignments, designed to streamline the workflow for mining companies.",
    tech: ["Flutter", "Dart", "Firebase"],
    year: 2025,
    repoUrl: "https://github.com/Minergo-System",
    liveUrl: "https://famous.borneo-indobara.com/sign-in",
  },
  {
    slug: "e-office-bkad",
    title: "e-office-bkad",
    summary: "E-Office Badan Keuangan Aset Daerah (BKAD) Kota Bogor.",
    description:
      "A web application for managing and tracking e-office activities, designed to streamline the workflow for BKAD Kota Bogor.",
    tech: ["Laravel", "PHP", "MySQL"],
    year: 2023,
    repoUrl: "https://github.com/mrizkymdarmawan/e-office-bkad",
    liveUrl: "https://bkad.kotabogor.go.id",
  },
  {
    slug: "sppay",
    title: "sppay",
    summary: "School tuition payment system.",
    description:
      "A school tuition payment system, designed to streamline the workflow for school tuition payment.",
    tech: ["Laravel", "PHP", "MySQL"],
    year: 2023,
    repoUrl: "https://github.com/mrizkymdarmawan/sppay",
  },
  {
    slug: "sowan",
    title: "sowan",
    summary: "Portfolio website for Solusi Wangsa Niaga (SOWAN).",
    description:
      "A portfolio website for Solusi Wangsa Niaga (SOWAN), designed to showcase the company's projects and services.",
    tech: ["Laravel", "PHP", "Bootstrap"],
    year: 2022,
    repoUrl: "https://github.com/mrizkymdarmawan/sowan",
  },
  {
    slug: "in-clinic",
    title: "in-clinic",
    summary: "Portfolio website for In Clinic.",
    description:
      "A portfolio website for In Clinic, designed to showcase the company's projects and services.",
    tech: ["Laravel", "PHP", "Bootstrap"],
    year: 2022,
    repoUrl: "https://github.com/mrizkymdarmawan/in-clinic",
  },
  {
    slug: "mood-prima",
    title: "mood-prima",
    summary: "Portfolio website for Mood Prima.",
    description:
      "A portfolio website for Mood Prima, designed to showcase the company's projects and services.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: 2021,
    repoUrl: "https://github.com/mrizkymdarmawan/mood-prima",
  },
  {
    slug: "al-qodiri-water",
    title: "al-qodiri-water",
    summary: "Portfolio website for Al Qodiri Mineral Water Company.",
    description:
      "A portfolio website for Al Qodiri Mineral Water Company, designed to showcase the company's projects and services.",
    tech: ["Wordpress", "Elementor"],
    year: 2020,
    repoUrl: "https://github.com/mrizkymdarmawan/al-qodiri-water",
    liveUrl: "https://airalqodiri.com",
  },
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

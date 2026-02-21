export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  year: number;
  previewImages?: { src: string; alt: string }[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "famous",
    title: "Famous",
    summary: "Fleet Management System (FMS) integrated with IoT devices",
    description:
      "A fleet management system for mining companies, designed to streamline the workflow for mining companies.",
    tech: ["React", "Express", "PostgreSQL", "IoT"],
    year: 2025,
    previewImages: [
      {
        src: "/project-previews/famous.png",
        alt: "Famous preview",
      },
    ],
    repoUrl: "https://github.com/Minergo-System",
    liveUrl: "https://famous.borneo-indobara.com/sign-in",
  },
  {
    slug: "uassist-onboard-unit",
    title: "UAssist Onboard Unit",
    summary: "IOT application for onboarding unit for UAssist",
    description:
      "A onboarding unit for UAssist, designed to streamline the workflow for mining companies.",
    tech: ["React Native", "TypeScript", "Firebase", "IoT"],
    year: 2025,
    previewImages: [
      {
        src: "/project-previews/uassist.png",
        alt: "UAssist onboard unit preview",
      },
    ],
    repoUrl: "https://github.com/Minergo-System",
    liveUrl: "https://famous.borneo-indobara.com/sign-in",
  },
  {
    slug: "uassist",
    title: "UAssist",
    summary: "Unified Hauling Assignment Management System",
    description:
      "A mobile application for managing and tracking hauling assignments, designed to streamline the workflow for mining companies.",
    tech: ["Flutter", "Dart", "Firebase"],
    year: 2025,
    previewImages: [
      {
        src: "/project-previews/uassist.png",
        alt: "UAssist mobile app preview",
      },
    ],
    repoUrl: "https://github.com/Minergo-System",
    liveUrl: "https://famous.borneo-indobara.com/sign-in",
  },
  {
    slug: "e-office-bkad",
    title: "E-Office BKAD Bogor",
    summary: "E-Office Badan Keuangan Aset Daerah (BKAD) Kota Bogor.",
    description:
      "A web application for managing and tracking e-office activities, designed to streamline the workflow for BKAD Kota Bogor.",
    tech: ["Laravel", "PHP", "MySQL"],
    year: 2023,
    previewImages: [
      {
        src: "/project-previews/eoffice.png",
        alt: "E-Office BKAD Bogor preview",
      },
    ],
    repoUrl: "https://github.com/mrizkymdarmawan/e-office-bkad",
    liveUrl: "https://bkad.kotabogor.go.id",
  },
  {
    slug: "sppay",
    title: "SPPAY",
    summary: "School tuition payment system.",
    description:
      "A school tuition payment system, designed to streamline the workflow for school tuition payment.",
    tech: ["Laravel", "PHP", "MySQL"],
    year: 2023,
    previewImages: [
      {
        src: "/project-previews/sppay.png",
        alt: "SPPAY preview",
      },
    ],
    repoUrl: "https://github.com/mrizkymdarmawan/sppay",
  },
  {
    slug: "sowan",
    title: "SOWAN",
    summary: "Portfolio website for Solusi Wangsa Niaga (SOWAN).",
    description:
      "A portfolio website for Solusi Wangsa Niaga (SOWAN), designed to showcase the company's projects and services.",
    tech: ["Laravel", "PHP", "Bootstrap"],
    year: 2022,
    previewImages: [
      {
        src: "/project-previews/sowan.png",
        alt: "SOWAN preview",
      },
    ],
    repoUrl: "https://github.com/mrizkymdarmawan/sowan",
  },
  {
    slug: "in-clinic",
    title: "In-Clinic",
    summary: "Portfolio website for In Clinic.",
    description:
      "A portfolio website for In Clinic, designed to showcase the company's projects and services.",
    tech: ["Laravel", "PHP", "Bootstrap"],
    year: 2022,
    previewImages: [
      {
        src: "/project-previews/inclinic.png",
        alt: "In-Clinic preview",
      },
    ],
    repoUrl: "https://github.com/mrizkymdarmawan/in-clinic",
  },
  {
    slug: "mood-prima",
    title: "Mood Prima",
    summary: "Portfolio website for Mood Prima.",
    description:
      "A portfolio website for Mood Prima, designed to showcase the company's projects and services.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: 2021,
    previewImages: [
      {
        src: "/project-previews/moodprima.png",
        alt: "Mood Prima preview",
      },
    ],
    repoUrl: "https://github.com/mrizkymdarmawan/mood-prima",
  },
  {
    slug: "al-qodiri-water",
    title: "Al-Qodiri Mineral Water",
    summary: "Portfolio website for Al Qodiri Mineral Water Company.",
    description:
      "A portfolio website for Al Qodiri Mineral Water Company, designed to showcase the company's projects and services.",
    tech: ["Wordpress", "Elementor"],
    year: 2020,
    previewImages: [
      {
        src: "/project-previews/alqodiri.png",
        alt: "Al-Qodiri Mineral Water preview",
      },
    ],
    repoUrl: "https://github.com/mrizkymdarmawan/al-qodiri-water",
    liveUrl: "https://airalqodiri.com",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio V1",
    summary: "Personal portfolio website built with Next.js.",
    description:
      "A personal portfolio project focused on clean UI, performance, and maintainable front-end structure.",
    tech: ["TypeScript", "Next.js"],
    year: 2026,
    repoUrl: "https://github.com/mrizkymdarmawan/portfolio",
  },
  {
    slug: "cli-calculator",
    title: "CLI Calculator",
    summary: "CLI calculator project to explore Rust fundamentals.",
    description:
      "A command-line calculator implemented in Rust as part of language and systems programming practice.",
    tech: ["Rust"],
    year: 2024,
    repoUrl: "https://github.com/mrizkymdarmawan/cli-calculator",
  },
  {
    slug: "sofiyandri-portfolio",
    title: "Sofiyandri Portfolio",
    summary: "Portfolio website project built for a client profile.",
    description:
      "A TypeScript-based portfolio implementation with a focus on simple structure and reusable sections.",
    tech: ["TypeScript", "Next.js"],
    year: 2025,
    repoUrl: "https://github.com/mrizkymdarmawan/sofiyandri-portfolio",
  },
  {
    slug: "tiny-http",
    title: "Tiny HTTP",
    summary: "Tiny HTTP server implementation in C.",
    description:
      "A lightweight HTTP server written in C to learn low-level networking and request handling.",
    tech: ["C"],
    year: 2024,
    repoUrl: "https://github.com/mrizkymdarmawan/tiny-http",
  },
  {
    slug: "go-basics",
    title: "Go Basics",
    summary: "Go learning repository with core language exercises.",
    description:
      "A structured set of Go practice modules covering syntax, data structures, and basic concurrency patterns.",
    tech: ["Go"],
    year: 2024,
    repoUrl: "https://github.com/mrizkymdarmawan/go-basics",
  },
  {
    slug: "rust-basics",
    title: "Rust Basics",
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

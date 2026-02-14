import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold tracking-wide">
            Kiky | Software Engineer
          </Link>
          <Link href="/" className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100">
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <section className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Project Archive
          </p>
          <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
          <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
            This page is fully data-driven. Add a new object in `lib/projects.ts` and it will
            appear here automatically.
          </p>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{project.summary}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {project.tech.join(" · ")}
              </p>
              <div className="mt-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-medium text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100"
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

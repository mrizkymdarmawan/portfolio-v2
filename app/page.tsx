import Link from "next/link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { projects } from "@/lib/projects";

export default function Home() {
  const selectedWork = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#welcome" className="text-sm font-semibold tracking-wide">
            Software Engineer Portfolio
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden gap-6 text-sm md:flex"
          >
            <a
              href="#about"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              About
            </a>
            <a
              href="#work"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Selected Work
            </a>
            <a
              href="#contact"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl space-y-20 px-6 py-16">
        <section id="welcome" className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Welcome
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I am Alex. I build reliable software products that solve real
            business problems.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            This is a simple portfolio showcasing my work as a software
            engineer. The content is currently dummy content and will be updated
            with real case studies.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            {/* <a
              href="https://www.linkedin.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>{" "} */}
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <MailIcon className="size-4" />
              Email
            </a>
          </div>
        </section>

        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="max-w-3xl leading-8 text-zinc-700 dark:text-zinc-300">
            I am a software engineer focused on building maintainable web
            applications, clean APIs, and pragmatic solutions. I enjoy turning
            ambiguous requirements into clear, well-tested implementations that
            teams can scale with confidence.
          </p>
        </section>

        <section id="work" className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              View project archive
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {selectedWork.map((item) => (
              <article
                key={item.slug}
                className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  {item.summary}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {item.tech.join(" · ")}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="text-sm font-medium text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100"
                  >
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Contact and Socials
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Interested in collaborating or discussing an opportunity? Reach out
            anytime.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              <MailIcon className="size-4" />
              hello@example.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <GitHubIcon className="size-4" />
              github.com/your-handle
            </a>
            {/* <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <LinkedInIcon className="size-4" />
              linkedin.com/in/your-handle
            </a> */}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div className="mx-auto w-full max-w-5xl px-6 text-sm text-zinc-600 dark:text-zinc-400">
          Built with Next.js 16 and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

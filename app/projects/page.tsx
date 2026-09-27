"use client";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a
          href="/"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-orange-400"
        >
          IH<span className="text-orange-500">.</span>
        </a>

        <a
          href="/"
          className="text-sm text-zinc-400 transition-colors hover:text-orange-400"
        >
          ← Back to Home
        </a>
      </nav>

      {/* ================= HEADER ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-12">

        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-orange-500" />

          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
            Selected Work
          </p>
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
          Projects<span className="text-orange-500">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
          A selection of projects I&apos;ve built while exploring
          software development, artificial intelligence, and research.
        </p>

      </section>

      {/* ================= PROJECT ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-12">

        <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-700 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-950/20">

          {/* PROJECT VISUAL */}
          <div className="relative h-[320px] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black sm:h-[420px]">

            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Orange glow */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl transition-all duration-700 group-hover:bg-orange-500/20" />

            {/* Portfolio mockup */}
            <div className="absolute left-1/2 top-1/2 w-[85%] max-w-4xl -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-700 group-hover:scale-[1.03]">

              <div className="overflow-hidden rounded-xl border border-zinc-700 bg-[#050505] shadow-2xl">

                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

                  <div className="ml-4 h-5 flex-1 rounded-md bg-zinc-800" />

                </div>

                {/* Website preview */}
                <div className="grid min-h-[190px] grid-cols-2 gap-6 p-6 sm:min-h-[250px] sm:p-10">

                  <div className="flex flex-col justify-center">

                    <p className="text-[8px] uppercase tracking-[0.3em] text-orange-400 sm:text-xs">
                      CSE Student · Researcher · Developer
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold sm:text-4xl">
                      Hi, I&apos;m
                      <br />
                      <span className="text-zinc-500">
                        Imam Hasain.
                      </span>
                    </h3>

                    <div className="mt-4 h-1 w-16 rounded-full bg-orange-500" />

                  </div>

                  <div className="flex items-center justify-center">

                    <div className="aspect-[4/5] w-24 rounded-xl border border-zinc-700 bg-zinc-800 sm:w-36" />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* PROJECT INFO */}
          <div className="p-7 sm:p-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
                  Personal Project
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Personal Portfolio Website
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">
                  A modern personal portfolio designed to showcase my
                  background, projects, research interests, achievements,
                  and technical skills in a clean and minimal interface.
                </p>

              </div>

              <span className="shrink-0 text-sm text-zinc-600">
                2026
              </span>

            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-8 flex flex-wrap gap-2">

              {[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* BOTTOM LINE */}
            <div className="mt-8 h-px w-full bg-zinc-900" />

            <div className="mt-5 flex items-center justify-between">

              <span className="text-sm text-zinc-600">
                Design · Development · Deployment
              </span>

              <span className="text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-400">
                ↗
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-600">
        © 2026 Imam Hasain. Built with passion and curiosity.
      </footer>

    </main>
  );
}
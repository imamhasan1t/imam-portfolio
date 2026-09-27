"use client";

import { motion } from "framer-motion";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="/"
          className="text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-orange-400"
        >
          IH<span className="text-orange-500">.</span>
        </a>

        <a
          href="/"
          className="text-sm text-zinc-500 transition-colors duration-300 hover:text-orange-400"
        >
          ← Back to Home
        </a>
      </nav>

      {/* ================= HEADER ================= */}

      <section className="mx-auto max-w-5xl px-6 pb-10 pt-16 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
              Research
            </p>
          </div>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
            Research
            <span className="text-orange-500">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            A space for my future research work, ideas, and academic
            exploration.
          </p>
        </motion.div>

      </section>

      {/* ================= RESEARCH BOX ================= */}

      <section className="mx-auto max-w-5xl px-6 pb-28 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12"
        >

          {/* Subtle orange glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-500/[0.04] blur-3xl" />

          {/* Animated top line */}

          <div className="absolute left-0 top-0 h-px w-full overflow-hidden bg-zinc-900">
            <div className="h-full w-28 animate-[researchLine_4s_linear_infinite] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>

          <div className="relative">

            {/* STATUS */}

            <div className="flex items-center gap-3">

              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-30" />

                <span className="relative h-3 w-3 rounded-full bg-orange-500" />
              </span>

              <span className="text-xs uppercase tracking-[0.25em] text-orange-400">
                Currently Exploring
              </span>

            </div>

            {/* MAIN TEXT */}

            <h2 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
              Research journey
              <span className="text-zinc-600">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
              I am currently building my foundation through learning,
              experimentation, and academic exploration. This space
              will be updated as my research journey develops.
            </p>

            {/* BOTTOM */}

            <div className="mt-10 border-t border-zinc-900 pt-6">

              <p className="text-sm text-zinc-600">
                No published research yet.
              </p>

              <p className="mt-2 text-sm text-zinc-700">
                This section will grow with my future research work.
              </p>

            </div>

            {/* COMING SOON */}

            <div className="mt-8 flex items-center gap-3">

              <span className="rounded-full border border-zinc-800 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Research Projects
              </span>

              <span className="text-xs text-zinc-700">
                Coming soon
              </span>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-900 px-6 py-5 text-center text-xs text-zinc-600">
        © 2026 Imam Hasain
      </footer>

    </main>
  );
}
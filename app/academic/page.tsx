"use client";

import { motion } from "framer-motion";

const education = [
  {
    institution: "Northern University Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    status: "CURRENTLY STUDYING",
    period: "Present",
    logo: "/academic/versity.jpg",
    link: "https://www.nub.ac.bd/",
    current: true,
  },
  {
    institution: "Cantonment College Cumilla",
    degree: "Higher Secondary Certificate (HSC)",
    status: "COMPLETED",
    period: "College",
    logo: "/academic/college.png",
    link: "https://ccc.edu.bd/",
    current: false,
  },
  {
    institution: "Debidwar Reaz Uddin Pilot Govt. Model High School",
    degree: "Secondary School Certificate (SSC)",
    status: "COMPLETED",
    period: "School",
    logo: "/academic/school.png",
    link: "http://www.dgrhs.edu.bd/",
    current: false,
  },
];

export default function AcademicPage() {
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

      <section className="mx-auto max-w-5xl px-6 pb-8 pt-12 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
              Education
            </p>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Academic Journey
            <span className="text-orange-500">.</span>
          </h1>

        </motion.div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-12">

        <div className="relative">

          {/* Timeline */}

          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-orange-500/60 via-zinc-700 to-transparent" />

          <div className="space-y-4">

            {education.map((item, index) => (

              <motion.div
                key={item.institution}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="relative pl-12"
              >

                {/* Timeline dot */}

                <div className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center">

                  <span
                    className={`relative h-3 w-3 rounded-full border-2 ${
                      item.current
                        ? "border-orange-400 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.55)]"
                        : "border-zinc-600 bg-zinc-900"
                    }`}
                  />

                </div>

                {/* CARD */}

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-5 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                    item.current
                      ? "border-orange-500/30 bg-zinc-950 hover:-translate-y-1 hover:border-orange-500/60"
                      : "border-zinc-800 bg-zinc-950/60 grayscale hover:-translate-y-1 hover:border-zinc-600 hover:grayscale-0"
                  }`}
                >

                  {/* LOGO */}

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border ${
                      item.current
                        ? "border-orange-500/20 bg-zinc-900"
                        : "border-zinc-800 bg-zinc-900"
                    }`}
                  >
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className={`h-full w-full object-contain p-2 ${
                        item.current
                          ? "opacity-100"
                          : "opacity-60 group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  {/* INFO */}

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <h2
                        className={`text-base font-semibold sm:text-lg ${
                          item.current
                            ? "text-zinc-100 group-hover:text-orange-300"
                            : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {item.institution}
                      </h2>

                      {item.current && (
                        <span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-orange-400">
                          Current
                        </span>
                      )}

                    </div>

                    <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                      {item.degree}
                    </p>

                  </div>

                  {/* STATUS */}

                  <div className="hidden shrink-0 text-right sm:block">

                    <p
                      className={`text-[9px] uppercase tracking-[0.2em] ${
                        item.current
                          ? "text-orange-400"
                          : "text-zinc-600"
                      }`}
                    >
                      {item.status}
                    </p>

                    <p className="mt-1 text-xs text-zinc-700">
                      {item.period}
                    </p>

                  </div>

                  {/* ARROW */}

                  <span className="text-zinc-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-400">
                    ↗
                  </span>

                </a>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-900 px-6 py-5 text-center text-xs text-zinc-600">
        © 2026 Imam Hasain
      </footer>

    </main>
  );
}
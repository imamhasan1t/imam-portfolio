"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skills = {
  languages: [
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python",
    },
    {
      name: "C++",
      icon: "https://cdn.simpleicons.org/cplusplus",
    },
    {
      name: "C",
      icon: "https://cdn.simpleicons.org/c",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
    },
  ],

  learning: [
    {
      name: "Artificial Intelligence",
      icon: "https://cdn.simpleicons.org/tensorflow",
    },
    {
      name: "Robotics",
      icon: "https://cdn.simpleicons.org/robotframework",
    },
    {
      name: "Deep Learning",
      icon: "https://cdn.simpleicons.org/pytorch",
    },
  ],

  tools: [
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git",
    },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github",
    },
    
      {
        name: "VS Code",
        icon: "https://cdn.simpleicons.org/visualstudiocode",
      },
    {
      name: "Code::Blocks",
      icon: "https://cdn.simpleicons.org/codeblocks",
    },
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          GUIDY STYLE ANIMATED BACKGROUND
          ===================================================== */}

      <div className="guidy-background" aria-hidden="true">
        <div className="guidy-grid">
          <div className="guidy-column" />
          <div className="guidy-column" />
          <div className="guidy-column" />
          <div className="guidy-column" />
          <div className="guidy-column" />
          <div className="guidy-column" />
        </div>
      </div>


      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-12">

        <a
          href="/"
          className="text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-orange-400"
        >
          IH<span className="text-orange-500">.</span>
        </a>

        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          {[
            "Home",
            "About",
            "Academic",
            "Projects",
            "Research",
            "Achievements",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={
                item === "Projects"
                  ? "/projects"
                  : item === "Academic"
                  ? "/academic"
                  : item === "Research"
                  ? "/research"
                  : item === "Achievements"
                  ? "/achievements"
                  : `#${item.toLowerCase()}`
              }
              className="group relative transition-colors duration-300 hover:text-orange-400"
            >
              {item}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-200 transition-colors hover:border-orange-500/50 hover:text-orange-400 md:hidden"
        >
          <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>

        {/* MOBILE NAVIGATION LINKS */}
        {menuOpen && (
          <div className="absolute left-4 right-4 top-full mt-1 flex flex-col gap-1 rounded-2xl border border-zinc-800 bg-[#090909] p-3 shadow-2xl sm:left-6 sm:right-6 md:hidden">
            {[
              "Home",
              "About",
              "Academic",
              "Projects",
              "Research",
              "Achievements",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={
                  item === "Projects"
                    ? "/projects"
                    : item === "Academic"
                    ? "/academic"
                    : item === "Research"
                    ? "/research"
                    : item === "Achievements"
                    ? "/achievements"
                    : `#${item.toLowerCase()}`
                }
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-orange-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}

        <div className="hidden h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_#f97316] md:block" />

      </nav>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl grid-cols-[minmax(0,1fr)_minmax(105px,0.62fr)] items-start gap-3 px-4 py-10 sm:gap-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-20"
      >

        {/* LEFT SIDE */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs uppercase tracking-[0.22em] text-orange-400 sm:text-sm sm:tracking-[0.35em]"
          >
            CSE Student · Researcher · Developer
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-2xl font-semibold leading-[1.08] tracking-tight min-[380px]:text-3xl sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m
            <br />

            <span className="text-zinc-400">
              Imam Hasain.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 max-w-xl text-xs leading-5 text-zinc-400 min-[380px]:text-sm sm:mt-8 sm:text-lg sm:leading-8"
          >
            Exploring Artificial Intelligence, Robotics, and Software
            Development through learning, experimentation, and problem solving.
          </motion.p>


          {/* =================================================
              SKILLS / MARQUEE
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 hidden space-y-2 overflow-hidden border-t border-zinc-800/80 pt-2 sm:mt-12 lg:block"
          >

            <SkillMarquee
              title="Languages & Technologies"
              items={skills.languages}
              direction="left"
              duration={24}
            />

            <SkillMarquee
              title="Currently Learning"
              items={skills.learning}
              direction="right"
              duration={27}
            />

            <SkillMarquee
              title="Developer Tools"
              items={skills.tools}
              direction="left"
              duration={25}
            />

          </motion.div>

        </div>


        {/* =================================================
            RIGHT SIDE — 3D PHOTO
            ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="group relative z-10 mx-auto block w-full min-w-0 max-w-[min(100%,420px)] lg:max-w-md"
        >

          <div
            className="
              relative
              isolate
              block
              aspect-[4/5]
              min-h-0
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-zinc-700
              bg-zinc-950
              shadow-2xl
              shadow-purple-950/20
              transition-all
              duration-700
              [transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)]
              lg:[transform:perspective(1200px)_rotateY(-8deg)_rotateX(4deg)]
              lg:hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)]
              hover:border-purple-500/40
              hover:shadow-purple-500/10
            "
          >

            <img
              src="/profile.jpg"
              alt="Imam Hasain"
              loading="eager"
              className="absolute inset-0 block h-full w-full object-cover object-center grayscale transition-all duration-500 group-hover:grayscale-0"
            />

            {/* Subtle photo highlight */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-tr
                from-transparent
                via-white/[0.04]
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

          </div>

        </motion.div>

        {/* Mobile skills: place below the side-by-side intro and photo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-2 mt-7 space-y-2 overflow-hidden border-t border-zinc-800/80 pt-2 lg:hidden"
        >
          <SkillMarquee title="Languages & Technologies" items={skills.languages} direction="left" duration={24} />
          <SkillMarquee title="Currently Learning" items={skills.learning} direction="right" duration={27} />
          <SkillMarquee title="Developer Tools" items={skills.tools} direction="left" duration={25} />
        </motion.div>

      </section>


      {/* =====================================================
          ABOUT
          ===================================================== */}

      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl border-t border-zinc-900/80 px-4 py-20 sm:px-6 sm:py-28 lg:px-12"
      >

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            About Me
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Building with curiosity.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-zinc-400">

            <p>
              I am Imam Hasain, a Computer Science and Engineering student
              with a strong interest in{" "}
              <strong className="font-semibold text-zinc-200">
                Artificial Intelligence
              </strong>
              ,{" "}
              <strong className="font-semibold text-zinc-200">
                Robotics
              </strong>
              , and{" "}
              <strong className="font-semibold text-zinc-200">
                Software Development
              </strong>
              .
            </p>

            <p>
              I enjoy{" "}
              <strong className="font-semibold text-zinc-200">
                building software
              </strong>
              , exploring{" "}
              <strong className="font-semibold text-zinc-200">
                intelligent and robotic systems
              </strong>
              , and continuously improving my technical skills through{" "}
              <strong className="font-semibold text-zinc-200">
                problem solving
              </strong>
              , experimentation, and hands-on learning.
            </p>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          FIND ME
          ===================================================== */}

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl overflow-hidden border-t border-zinc-900/80 px-4 py-20 sm:px-6 sm:py-28 lg:px-12"
      >

        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-purple-500/[0.04] blur-3xl" />


        <div className="relative">

          <div className="flex items-center gap-4">

            <span className="h-px w-12 bg-orange-500" />

            <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
              Connect
            </p>

          </div>


          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Find me
            <span className="text-zinc-600">.</span>
          </h2>


          <p className="mt-5 max-w-xl text-zinc-500">
            Let&apos;s connect, collaborate, and build something
            meaningful together.
          </p>


          {/* Animated line */}

          <div className="relative mt-12 h-px w-full overflow-hidden bg-zinc-900">

            <div className="absolute left-0 top-0 h-px w-32 animate-[slide_3s_linear_infinite] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          </div>


          {/* =================================================
              SOCIAL CARDS
              ================================================= */}

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2">


            {/* GitHub */}

            <a
              href="https://github.com/imamhasan1t"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/70
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-orange-500/40
                hover:bg-zinc-900
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition-all duration-300 group-hover:border-orange-500/40 group-hover:text-orange-400">
                    GH
                  </div>

                  <div>

                    <p className="text-sm text-zinc-500">
                      Code & Projects
                    </p>

                    <h3 className="mt-1 text-lg font-medium">
                      GitHub
                    </h3>

                  </div>

                </div>

                <span className="text-zinc-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-400">
                  ↗
                </span>

              </div>

            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/imam-hasan-a41420417/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/70
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-orange-500/40
                hover:bg-zinc-900
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition-all duration-300 group-hover:border-orange-500/40 group-hover:text-orange-400">
                    in
                  </div>

                  <div>

                    <p className="text-sm text-zinc-500">
                      Professional
                    </p>

                    <h3 className="mt-1 text-lg font-medium">
                      LinkedIn
                    </h3>

                  </div>

                </div>

                <span className="text-zinc-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-400">
                  ↗
                </span>

              </div>

            </a>

          </div>


          {/* Email */}

          <a
            href="mailto:imamhasan1t@gmail.com"
            className="group mt-5 flex w-fit items-center gap-3 text-zinc-500 transition-colors duration-300 hover:text-orange-400"
          >

            <span className="h-px w-6 bg-zinc-700 transition-all duration-300 group-hover:w-10 group-hover:bg-orange-500" />

            <span className="text-sm">
              imamhasan1t@gmail.com
            </span>

            <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              ↗
            </span>

          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="relative z-10 border-t border-zinc-900 px-4 py-8 text-center text-xs text-zinc-600 sm:px-6 sm:text-sm">
        © 2026 Imam Hasain. Built with passion and curiosity.
      </footer>

    </main>
  );
}


/* =========================================================
   SKILL MARQUEE
   ========================================================= */

function SkillMarquee({
  title,
  items,
  direction,
  duration,
}: {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
  direction: "left" | "right";
  duration: number;
}) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="group relative overflow-hidden border-b border-zinc-900/70 py-5">

      {/* Row title */}

      <div className="mb-4 px-1">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
          {title}
        </span>
      </div>


      {/* Moving items */}

      <div
        className={`flex w-max gap-5 ${
          direction === "left"
            ? "animate-skill-left"
            : "animate-skill-right"
        }`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >

        {repeatedItems.map((item, index) => (

          <div
            key={`${item.name}-${index}`}
            className="
              flex
              shrink-0
              items-center
              gap-3
              rounded-full
              border
              border-zinc-800/70
              bg-zinc-950/60
              px-4
              py-2.5
              text-zinc-600
              opacity-60
              grayscale
              transition-all
              duration-300
              hover:border-purple-500/50
              hover:bg-zinc-900
              hover:text-zinc-200
              hover:opacity-100
              hover:grayscale-0
            "
          >

            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className="h-5 w-5 object-contain"
            />

            <span className="whitespace-nowrap text-sm font-medium">
              {item.name}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
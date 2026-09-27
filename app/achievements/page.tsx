"use client";

import { useState } from "react";

const achievements = [
  {
    id: 1,
    title: "My Achievement",
    subtitle: "Certificate / Award",
    date: "2026",
    image: "/achievements/certificate-1.jpg.jpeg",
  },

  // ভবিষ্যতে নতুন achievement এখানে add করবে
  // {
  //   id: 2,
  //   title: "Another Achievement",
  //   subtitle: "Certificate / Award",
  //   date: "2026",
  //   image: "/achievements/certificate-2.jpg",
  // },
];

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<(typeof achievements)[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
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

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-12">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-orange-500" />

          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
            Recognition
          </p>
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
          Achievements<span className="text-orange-500">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
          A collection of certificates, awards, and milestones from
          my academic and professional journey.
        </p>
      </section>

      {/* Achievement Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <button
              key={achievement.id}
              type="button"
              onClick={() => setSelectedAchievement(achievement)}
              className="group text-left"
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-950/20"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Certificate */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/35" />

                  {/* View button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="rounded-full border border-white/20 bg-black/70 px-5 py-2 text-sm backdrop-blur-md">
                      View Certificate ↗
                    </span>
                  </div>
                </div>

                {/* Information */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-orange-400">
                      {achievement.subtitle}
                    </p>

                    <span className="text-xs text-zinc-600">
                      {achievement.date}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-medium text-zinc-100">
                    {achievement.title}
                  </h2>

                  <div className="mt-5 h-px w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedAchievement(null)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-xl text-zinc-400 transition-colors hover:border-orange-500 hover:text-orange-400"
            >
              ×
            </button>

            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="max-h-[85vh] max-w-full rounded-xl border border-zinc-700 object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-600">
        © 2026 Imam Hasain. Built with passion and curiosity.
      </footer>
    </main>
  );
}
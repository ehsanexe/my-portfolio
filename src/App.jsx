import React from "react";
import BackgroundBubbles from "./components/BackgroundBubbles";

const profile = {
  name: "Muhammad Ehsan Shafique",
  location: "Karachi, Pakistan",
  phone: "+92-312-2720308",
  email: "m.ehsanshafique@gmail.com",
  github: "https://github.com/ehsanexe",
  linkedin: "https://linkedin.com/in/ehsan-shafique-0a366a1b6",
  title:
    "Senior Software Engineer at Techlogix (Adalfi) | React | React Native | JavaScript | TypeScript",
  summary:
    "Software Engineer with 4+ years of experience specializing in frontend and mobile application development using React, React Native, and modern JavaScript/TypeScript frameworks. Proven ability to build scalable, high-performance applications and reusable UI components.",
};

const experience = [
  {
    role: "Senior Software Engineer — Techlogix (Adalfi)",
    period: "Mar 2025 – Present",
    bullets: [
      "Lead a team of 5+ engineers to develop and maintain the Adalfi Portal (fintech).",
      "Refactored legacy codebase reducing technical debt by 30%.",
      "Designed and implemented v2 of 15+ reusable UI components.",
    ],
  },
  {
    role: "Senior Software Engineer — Techlogix (AtlasHXM)",
    period: "Jul 2023 – Feb 2025",
    bullets: [
      "Achieved 80%+ unit test coverage using Jest.",
      "Integrated 100+ feature flags for controlled feature releases.",
      "Built and maintained 15+ reusable UI components.",
    ],
  },
  {
    role: "Software Engineer — Techlogix (AtlasHXM)",
    period: "Mar 2022 – Jun 2023",
    bullets: [
      "Developed and maintained a React-based HRM platform deployed in 160+ countries.",
      "Collaborated with a distributed team of 60+ engineers using micro-frontend architecture.",
    ],
  },
  {
    role: "React Native Developer — Technomites",
    period: "Dec 2020 – Feb 2022",
    bullets: [
      "Delivered 8+ high-performance mobile apps for iOS and Android.",
      "Led 20+ app releases to Apple App Store and Google Play Store.",
    ],
  },
  {
    role: "Intern — NED University VR Center",
    period: "Aug 2019 – Sep 2019",
    bullets: [
      "Contributed to AirSim, a 3D flying simulator using Unity and C#.",
    ],
  },
];

const skills = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  frameworks: [
    "React",
    "React Native",
    "Redux",
    "TanStack Query",
    "Jest",
    "Tailwind CSS",
    "Shadcn",
  ],
  tools: ["Git", "GitHub", "Storybook", "Webpack", "Vite", "Firebase", "Figma"],
};

const projects = [
  {
    title: "Episode Bookmark Manager",
    desc: "Episode Bookmark Manager is a Google Chrome extension that automates the task of bookmarking the last watched episode of your favorite shows. No more manual bookmarking and keeping track of your progress. With this extension, you can easily resume your shows right where you left off.",
    link: "https://chromewebstore.google.com/detail/episode-bookmark-manager/fbacjjfkhoipheiadbdpmokpgcofploa/related?hl=en&authuser=1&pli=1",
  },
  {
    title: "Movie Hub",
    desc: "React app which allows user to search movies and tv shows, deployed using firebase.",
    link: "https://movie-hub-771cb.firebaseapp.com/",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased relative">
      <BackgroundBubbles />
      <header className="max-md:hidden fixed top-6 right-6 z-40">
        <nav>
          <div className="flex flex-col gap-2">
            <a
              href="#about"
              className="group relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 opacity-60 group-hover:opacity-100 group-hover:bg-indigo-300 transition-all duration-200 group-hover:scale-125"></div>
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <a
              href="#work"
              className="group relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 opacity-60 group-hover:opacity-100 group-hover:bg-indigo-300 transition-all duration-200 group-hover:scale-125"></div>
              <span className="relative z-10">Experience</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <a
              href="#projects"
              className="group relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 opacity-60 group-hover:opacity-100 group-hover:bg-indigo-300 transition-all duration-200 group-hover:scale-125"></div>
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <a
              href="#skills"
              className="group relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 opacity-60 group-hover:opacity-100 group-hover:bg-indigo-300 transition-all duration-200 group-hover:scale-125"></div>
              <span className="relative z-10">Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <a
              href="#education"
              className="group relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 opacity-60 group-hover:opacity-100 group-hover:bg-indigo-300 transition-all duration-200 group-hover:scale-125"></div>
              <span className="relative z-10">Education</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <a
              href="#contact"
              className="group relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 opacity-60 group-hover:opacity-100 group-hover:bg-indigo-300 transition-all duration-200 group-hover:scale-125"></div>
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12 relative z-10">
        {/* HERO */}
        <section
          id="about"
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden group"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              {/* Name with gradient */}
              <h1 className="text-3xl md:text-4xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-indigo-200 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              {/* Title with animated underline */}
              <div className="relative inline-block">
                <p className="text-xl md:text-2xl font-medium text-indigo-300 mb-4">
                  Senior Software Engineer
                </p>
                <div className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Summary */}
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                {profile.summary}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600/50 rounded-xl hover:from-gray-700/80 hover:to-gray-800/80 hover:border-gray-500/50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 group-hover/btn:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.49 3.16-1.18 3.16-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.69.42.37.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  <span className="font-medium text-gray-300 group-hover/btn:text-white transition-colors duration-200">
                    GitHub
                  </span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-700/50 rounded-xl hover:from-blue-800/60 hover:to-indigo-800/60 hover:border-blue-600/50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl shadow-lg hover:shadow-blue-500/25"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400 group-hover/btn:text-blue-300 transition-colors duration-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-medium text-blue-300 group-hover/btn:text-blue-200 transition-colors duration-200">
                    LinkedIn
                  </span>
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl hover:from-purple-800/60 hover:to-pink-800/60 hover:border-purple-600/50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl shadow-lg hover:shadow-purple-500/25"
                >
                  <svg
                    className="h-5 w-5 text-purple-400 group-hover/btn:text-purple-300 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium text-purple-300 group-hover/btn:text-purple-200 transition-colors duration-200">
                    Email
                  </span>
                </a>
              </div>
            </div>

            {/* Optional: Profile image or additional content space */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work">
          <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-60"></div>

            {experience.map((job, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                {/* Timeline connector line extending into card */}
                <div className="absolute left-8 top-6 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>

                {/* Timeline dot - positioned to intersect with card */}
                <div className="absolute left-8 top-4 -ml-2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-gray-900 z-20 shadow-lg">
                  <div className="absolute inset-0.5 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-20 relative">
                  <article className="bg-gradient-to-br from-gray-800 to-gray-850 p-6 rounded-xl shadow-xl border-l-4 border-indigo-500 hover:shadow-2xl hover:border-l-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                    {/* Timeline integration visual cue */}
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-indigo-500 rounded-full opacity-30"></div>

                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-900 to-purple-900 text-indigo-100 rounded-full mb-4 shadow-md">
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                      {job.period}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {job.role}
                    </h3>

                    <ul className="space-y-3">
                      {job.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-300 text-sm leading-relaxed"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-2 mr-3 shadow-sm"></div>
                          <span className="hover:text-gray-200 transition-colors duration-200">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Subtle card number indicator */}
                    <div className="absolute top-2 right-3 text-xs text-gray-600 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-800/80 to-gray-850/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700/50 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {p.title}
                    </h4>
                    <div className="text-xs text-gray-600 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-200">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-purple-400 transition-colors duration-200 group-hover:translate-x-1 transform"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="bg-gradient-to-br from-gray-800/80 to-gray-850/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700/50 hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-indigo-300">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-indigo-900/80 to-indigo-800/80 text-indigo-100 rounded-full hover:from-indigo-800 hover:to-indigo-700 transition-all duration-200 hover:scale-105 cursor-default border border-indigo-700/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-rose-300">
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-rose-900/80 to-rose-800/80 text-rose-100 rounded-full hover:from-rose-800 hover:to-rose-700 transition-all duration-200 hover:scale-105 cursor-default border border-rose-700/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-green-300">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-green-900/80 to-green-800/80 text-green-100 rounded-full hover:from-green-800 hover:to-green-700 transition-all duration-200 hover:scale-105 cursor-default border border-green-700/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2 className="text-2xl font-semibold mb-8">Education</h2>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-850/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700/50 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                NED University — BE Software Engineering
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-gradient-to-r from-purple-900/80 to-indigo-900/80 text-purple-100 rounded-full border border-purple-700/50">
                <div className="w-2 h-2 bg-current rounded-full"></div>
                2016 - 2020 • CGPA 3.346
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-gradient-to-br from-gray-800/80 to-gray-850/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700/50 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact
            </h2>
          </div>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I usually respond within 24–48 hours. For quick contact, email me or
            connect on LinkedIn.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-blue-300">Email</div>
                <a
                  href={`mailto:${profile.email}`}
                  className="block font-medium text-gray-100 hover:text-blue-400 transition-colors duration-200"
                >
                  {profile.email}
                </a>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-blue-300">Phone</div>
                <div className="font-medium text-gray-100">{profile.phone}</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-blue-300">
                  Location
                </div>
                <div className="font-medium text-gray-100">
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 flex flex-col justify-between">
              <form
                action={`mailto:${profile.email}`}
                method="GET"
                encType="text/plain"
                className="space-y-4"
              >
                <input
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-600/50 rounded-lg px-4 py-3 bg-gray-900/50 text-gray-100 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200 backdrop-blur-sm"
                />
                <textarea
                  name="body"
                  rows={4}
                  placeholder="Message"
                  className="w-full border border-gray-600/50 rounded-lg px-4 py-3 bg-gray-900/50 text-gray-100 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200 backdrop-blur-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-6 text-xs text-gray-400 text-center">
                Or connect on{" "}
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                /{" "}
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 py-6">
          © {new Date().getFullYear()} {profile.name} — Built with React +
          Tailwind
        </footer>
      </main>
    </div>
  );
}

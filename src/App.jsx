import React from "react";

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
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <header className="bg-gray-800 shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3"></div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#work" className="hover:text-indigo-600">
              Experience
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
            <a href="#education" className="hover:text-indigo-600">
              Education
            </a>
            <a
              href="#contact"
              className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:opacity-95"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-12">
        {/* HERO */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-gray-300 max-w-2xl">
              {profile.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.49 3.16-1.18 3.16-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.69.42.37.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"
                    fill="white"
                  />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-4">
            {experience.map((job, i) => (
              <article key={i} className="bg-gray-800 p-5 rounded-lg shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{job.role}</h3>
                    <div className="text-sm text-gray-400">{job.period}</div>
                  </div>
                </div>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {job.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-400">{p.desc}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:text-indigo-400"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm text-gray-400">Languages</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.languages.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 bg-indigo-900 text-indigo-100 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400">Frameworks & Libraries</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.frameworks.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 bg-rose-900 text-rose-100 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400">Tools</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 bg-green-900 text-green-100 rounded-md"
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
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
            <div>
              <div className="font-medium">
                NED University — BE Software Engineering (CGPA 3.346)
              </div>
              <div className="text-sm text-gray-500">2016 - 2020</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-gray-300">
            I usually respond within 24–48 hours. For quick contact, email me or
            connect on LinkedIn.
          </p>

          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-md bg-gray-800">
              <div className="text-sm text-gray-400">Email</div>
              <a
                href={`mailto:${profile.email}`}
                className="block font-medium text-gray-100"
              >
                {profile.email}
              </a>

              <div className="mt-3 text-sm text-gray-400">Phone</div>
              <div className="font-medium text-gray-100">{profile.phone}</div>

              <div className="mt-3 text-sm text-gray-400">Location</div>
              <div className="font-medium text-gray-100">
                {profile.location}
              </div>
            </div>

            <div className="p-4 rounded-md bg-gray-800 flex flex-col justify-between">
              <form
                action={`mailto:${profile.email}`}
                method="GET"
                encType="text/plain"
                className="space-y-3"
              >
                <input
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-700 rounded-md px-3 py-2 bg-gray-900 text-gray-100"
                />
                <textarea
                  name="body"
                  rows={4}
                  placeholder="Message"
                  className="w-full border border-gray-700 rounded-md px-3 py-2 bg-gray-900 text-gray-100"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  Send
                </button>
              </form>
              <div className="mt-4 text-xs text-gray-400">
                Or connect on{" "}
                <a
                  className="underline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                /{" "}
                <a
                  className="underline"
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

import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 sm:p-20 flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Manuel D. Andaya</h1>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-400">Software Developer</p>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          <a href="mailto:mdandaya.dev@gmail.com" className="underline">
            mdandaya.dev@gmail.com
          </a>{" "}
          • Vancouver, BC
        </p>
        <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          <a href="https://github.com/mdandaya" className="underline mr-2">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mdandaya" className="underline">
            LinkedIn
          </a>
        </p>
      </header>

      <main className="w-full max-w-4xl grid gap-8 sm:grid-cols-2">
        {/* Skills */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-left">
          <h2 className="font-semibold text-xl mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-medium mb-1">Front-End</h3>
              <p>React.js • React Native • Next.js (SSR) • Expo • Redux • Context API • WebSocket • Memoization • Zod</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">UI & Styling</h3>
              <p>Tailwind CSS • JSS / Module CSS • Emotion (CSS-in-JS) • MUI • Responsive Design • Atomic Design</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Back-End & Cloud</h3>
              <p>Node.js • Express • PostgreSQL • REST APIs • Firebase • AWS (S3, Cognito) • Google APIs • ASP.NET (MVC)</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Languages & Tools</h3>
              <p>TypeScript • JavaScript (ES6+) • Java • C# • Python • SQL • Git • Jest • Confluence • Jira</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-left">
          <h2 className="font-semibold text-xl mb-4">Work Experience</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-4">
            <li>
              <strong>Senior Developer</strong> – Tuktu Care, Vancouver, BC
              <br />
              <span className="italic text-gray-500 dark:text-gray-400">Mar 2021 – Present</span>
              <br />
              Led product launches across web, iOS, and Android. Built features in React, Next.js, and TypeScript. Integrated AWS & Google APIs. Mentored
              juniors and optimized UI/UX with Tailwind.
            </li>

            <li>
              <strong>Front-End Developer (Contract)</strong> – EarthON Foundation, Remote
              <br />
              <span className="italic text-gray-500 dark:text-gray-400">Jan 2025 – Aug 2025</span>
              <br />
              Developed Ekta Web, a mobile-first AI chatbot using React, Next.js, TypeScript, Tailwind. Integrated AWS S3 and Cognito.
            </li>

            <li>
              <strong>Software Developer (Internship)</strong> – Payment Source, Vancouver, BC
              <br />
              <span className="italic text-gray-500 dark:text-gray-400">Mar 2020 – May 2020</span>
              <br />
              Developed Zenwallet React/Redux web form for prepaid card transactions with Jest testing.
            </li>

            <li>
              <strong>Application Developer</strong> – airG Inc., Vancouver, BC
              <br />
              <span className="italic text-gray-500 dark:text-gray-400">Sep 2019 – Dec 2019</span>
              <br />
              Built screen mirroring solution for boardroom presentations. Developed ASP.NET Core API on Raspberry Pi and scripts for mass deployment. Adapted
              open source Python/C++ tools and implemented security features.
            </li>
          </ul>
        </div>
      </main>

      <section className="mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Projects Coming Soon</h2>
        <p className="text-gray-600 dark:text-gray-400">I’m currently building my portfolio to showcase web and mobile projects. Check back soon!</p>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Manuel D. Andaya. All rights reserved.
      </footer>
    </div>
  );
}

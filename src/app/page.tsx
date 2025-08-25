export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 sm:px-20 py-12 flex flex-col">
      {/* Header */}
      <header className="text-center sm:text-left mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2">Manuel D. Andaya</h1>
        <p className="text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400">Software Developer</p>
        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">mdandaya.dev@gmail.com • (604) 356-5333 • Vancouver, BC</p>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
          <a href="https://github.com/mdandaya" className="underline hover:text-gray-700 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
            github.com/mdandaya
          </a>{" "}
          •{" "}
          <a
            href="https://linkedin.com/in/mdandaya"
            className="underline hover:text-gray-700 dark:hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mdandaya
          </a>{" "}
          •{" "}
          <a href="https://mdandaya.github.io" className="underline hover:text-gray-700 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
            mdandaya.github.io
          </a>
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 space-y-8">
        {/* Summary */}
        <section>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            Software Developer with 4+ years building scalable web and mobile applications, experienced in back-end services and API integrations. Strong
            front-end expertise with proven ability to contribute across the full stack.
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Front-End:</strong> React.js, React Native, Next.js (SSR), Expo, Redux, Context API, WebSocket, Memoization, Zod (Schema Validation)
            </li>
            <li>
              <strong>UI & Styling:</strong> Tailwind CSS, JSS / Module CSS, Emotion, MUI, Responsive Design, Atomic Design
            </li>
            <li>
              <strong>Back-End & Cloud:</strong> Node.js, Express, PostgreSQL, REST APIs, Firebase, AWS (S3, Cognito), Google APIs (Auth, Maps, Places), ASP.NET
              (MVC)
            </li>
            <li>
              <strong>Languages & Tools:</strong> TypeScript, JavaScript (ES6+, ESNext), Java, C#, Python, SQL, Git, Jest, Confluence, Jira
            </li>
          </ul>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold">Senior Developer – Tuktu Care, Vancouver, BC</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2021 – Present</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Led 4 major product launches across web, iOS, and Android, reaching 2,000+ active users.</li>
                <li>Extended React Native mobile apps with custom Android and iOS native modules.</li>
                <li>Built core web app features in React, Next.js, and TypeScript with Atomic Design.</li>
                <li>Designed and implemented back-end services with Python, PostgreSQL, and REST APIs.</li>
                <li>Optimized components with memoization and lazy loading, improving performance by 10%.</li>
                <li>Redesigned UI/UX with Tailwind CSS, JSS, and Module CSS for responsive, accessible interfaces.</li>
                <li>Integrated AWS and Google APIs for authentication, location services, and file storage.</li>
                <li>Monitored production systems, maintaining a sub-1% crash rate.</li>
                <li>Mentored junior developers and contributed to API design.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Front-End Developer (Contract) – EarthON Foundation, Remote</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2025 – Aug 2025</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Developed Ekta Web, a mobile-first AI chatbot with React, Next.js, TypeScript, and Tailwind.</li>
                <li>Implemented back-end integrations via AWS S3 and Cognito, expanding chatbot functionality.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="text-gray-700 dark:text-gray-300">British Columbia Institute of Technology, Burnaby, BC</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Diploma in Computer Systems Technology – Client Server Option (Sep 2018 – Jun 2020)</p>
        </section>

        {/* Coming Soon */}
        <section className="text-center mt-12">
          <h3 className="text-3xl font-bold">More Projects Coming Soon</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Check back soon for updates and new projects!</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Manuel D. Andaya</footer>
    </div>
  );
}

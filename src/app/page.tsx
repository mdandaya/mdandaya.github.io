export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-8 sm:p-20 flex flex-col items-center gap-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Manuel D. Andaya</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Software Developer</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Vancouver, BC •{" "}
          <a href="mailto:mdandaya.dev@gmail.com" className="underline hover:text-blue-500">
            mdandaya.dev@gmail.com
          </a>
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          <a href="https://github.com/mdandaya" className="underline hover:text-blue-500">
            GitHub
          </a>{" "}
          •{" "}
          <a href="https://linkedin.com/in/mdandaya" className="underline hover:text-blue-500">
            LinkedIn
          </a>
        </p>
        <p className="mt-4 max-w-xl mx-auto text-center">
          Software Developer with 4+ years building scalable web and mobile applications, experienced in back-end services and API integrations. Strong
          front-end expertise with proven ability to contribute across the full stack.
        </p>
      </header>

      {/* Technical Skills */}
      <section className="w-full max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-1">Front-End</h3>
            <p>React.js • React Native • Next.js (SSR) • Expo • Redux • Context API • WebSocket • Memoization • Zod (Schema Validation)</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">UI & Styling</h3>
            <p>Tailwind CSS • JSS / Module CSS • Emotion (CSS-in-JS) • MUI • Responsive Design • Atomic Design</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Back-End & Cloud</h3>
            <p>Node.js • Express • PostgreSQL • REST APIs • Firebase • AWS (S3, Cognito) • Google APIs (Auth, Maps, Places) • ASP.NET (MVC)</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Languages & Tools</h3>
            <p>TypeScript • JavaScript (ES6+, ESNext) • Java • C# • Python • SQL • Git • Jest • Confluence • Jira</p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="w-full max-w-4xl flex flex-col gap-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Senior Developer / Team Lead – Tuktu Care, Vancouver, BC</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 2021 – Present</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Led 4 major product launches –{" "}
              <a href="https://apps.apple.com/ca/app/tuktu/id1588765065" className="underline hover:text-blue-500">
                Tuktu
              </a>
              ,{" "}
              <a href="https://apps.apple.com/us/app/tuktu-provider/id1613415952" className="underline hover:text-blue-500">
                Tuktu Provider
              </a>
              ,{" "}
              <a href="https://pulse.tuktu.ai/" className="underline hover:text-blue-500">
                Tuktu Pulse
              </a>
              ,{" "}
              <a href="https://connect.tuktu.ai/" className="underline hover:text-blue-500">
                Tuktu Connect
              </a>{" "}
              – across web, iOS, and Android, reaching 2,000+ active users.
            </li>
            <li>Extended React Native mobile apps with custom Android and iOS native modules.</li>
            <li>Built core web app features in React, Next.js, and TypeScript with Atomic Design.</li>
            <li>Designed and implemented back-end services with Python, PostgreSQL, and REST APIs.</li>
            <li>Optimized components with memoization and lazy loading, improving performance by 10%.</li>
            <li>
              Redesigned UI/UX with Tailwind CSS, JSS, and Module CSS, delivering responsive, accessible interfaces supporting 6,000+ hours of care services.
            </li>
            <li>Integrated AWS (S3, Cognito) and Google APIs (Maps, Places, Auth) for secure authentication, location services, and file storage.</li>
            <li>Monitored and debugged production systems with Firebase and Google Analytics, maintaining a sub-1% crash rate.</li>
            <li>Mentored junior developers, contributed to API design, and standardized coding practices in sprints.</li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Front-End Developer – EarthON Foundation, Remote</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">January 2025 – June 2025</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Developed{" "}
              <a href="https://web.ekta.chat/" className="underline hover:text-blue-500">
                Ekta Web
              </a>
              , a mobile-first AI chatbot powered by OpenAI GPT APIs, with React, Next.js, TypeScript, and Tailwind.
            </li>
            <li>
              Implemented back-end integrations via AWS S3 (image/audio uploads) and Cognito (OTP-based login), expanding chatbot functionality and secure user
              access.
            </li>
            <li>Authored Confluence handoff documentation, ensuring seamless team transition.</li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Web Developer – Surya Energy Consulting, Remote</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">July 2020 – August 2020</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Deployed and hosted the site on DigitalOcean for reliable performance.</li>
            <li>Designed a responsive layout to effectively showcase company services.</li>
          </ul>
        </div>
      </section>

      {/* Internships */}
      <section className="w-full max-w-4xl flex flex-col gap-8">
        <h2 className="text-2xl font-semibold mb-4">Internships</h2>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Software Developer Intern – Payment Source Inc., Vancouver, BC</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 2020 – May 2020</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Developed the{" "}
              <a href="https://zenwallet.ca/cardlogin" className="underline hover:text-blue-500">
                Zenwallet React/Redux web form
              </a>{" "}
              for prepaid card transactions in a 3-person team, implementing Jest tests for rendering, form data, and API responses.
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Software Developer – airG Inc., Vancouver, BC</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">September 2019 – December 2019</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Assembled a screen mirroring solution to allow a presenter to mirror their smartphone screen onto a boardroom display. When idle, it showed
              current and next scheduled meetings.
            </li>
            <li>
              Adapted open-source LazyCast and R Pi Play (Python & C++). Developed an ASP.NET Core Web API on Raspberry Pi to fetch and process meeting
              schedules from Microsoft Exchange Web Service.
            </li>
            <li>Evaluated VPNs for remote presentations and MAC filtering to block unauthorized users. Created scripts for mass deployment and AutoStart.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="w-full max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="font-medium">Computer Systems Technology (College Diploma) – British Columbia Institute of Technology, Burnaby, BC</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">September 2018 – June 2020</p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Client Server Option focused on MVC patterns in C# ASP.NET</li>
          <li>Graduated with Distinction (GPA 4.0/4.33)</li>
        </ul>
      </section>
    </div>
  );
}

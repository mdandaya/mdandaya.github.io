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
      <section className="w-full max-w-4xl flex flex-col gap-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium mb-1">Front-End</h3>
              <p>React.js • React Native • Next.js (SSR) • Expo • Redux • Context API • Memoization • WebSocket • Zod (Schema Validation)</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">UI & Styling</h3>
              <p>Tailwind CSS • JSS / Module CSS • Emotion (CSS-in-JS) • MUI • Responsive Design • Atomic Design</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Back-End & Cloud</h3>
              <p>Node.js • Express • REST APIs • PostgreSQL • AWS (S3, Cognito, EC2) • Firebase • Google APIs • Stripe • ASP.NET (MVC) • WordPress</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Languages & Tools</h3>
              <p>TypeScript • JavaScript (ES6+, ESNext) • Java • C# • Python • SQL • Git • GitHub Actions • Jest • Confluence • Jira</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="w-full max-w-4xl flex flex-col gap-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Senior Developer / Team Lead – Tuktu Care (Healthcare Platform), Vancouver, BC</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 2021 – Present</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Directed 4 major product launches –{" "}
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
            <li>Mentored 3 junior developers on a 6-person team, standardized coding practices, and contributed to API design.</li>
            <li>Architected back-end with Python, PostgreSQL, and REST APIs on AWS EC2.</li>
            <li>Engineered front-end features in React, Next.js, and TypeScript with Atomic Design.</li>
            <li>Extended React Native apps with custom Android and iOS native modules.</li>
            <li>Integrated Google Maps, Firebase, Stripe, and AWS APIs for location services, notifications, payments, storage, and authentication.</li>
            <li>Boosted performance by 10% through memoization and lazy loading strategies.</li>
            <li>Redesigned UI/UX with Tailwind CSS and Module CSS, supporting 6,000+ hours of care services.</li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Front-End Developer (Contract) – EarthON Foundation (Non-Profit), Remote</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">January 2025 – August 2025</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Developed{" "}
              <a href="https://web.ekta.chat/" className="underline hover:text-blue-500">
                Ekta Web
              </a>
              , a mobile-first AI chatbot for farmers with Next.js, TypeScript, and Tailwind.
            </li>
            <li>Designed and implemented responsive voice recording, image capture, and file upload features for both mobile and desktop.</li>
            <li>Collaborated with back-end to design and integrate OpenAI GPT APIs for chatbot functionality.</li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">Web Developer – Surya Energy Consulting, Remote</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">July 2020 – August 2020</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Built{" "}
              <a href="https://www.suryaenergyconsulting.com/" className="underline hover:text-blue-500">
                suryaenergyconsulting.com
              </a>
              , a responsive, SEO-friendly website using WordPress and custom themes.
            </li>
            <li>Managed hosting and deployment on DigitalOcean, ensuring stable uptime and performance.</li>
            <li>Optimized content and layout for user experience and accessibility.</li>
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
            <li>Developed a boardroom screen mirroring system with idle meeting schedule display; built deployment scripts for easy mass rollout.</li>
            <li>
              Adapted LazyCast (Python) and RPiPlay (C++), and created an ASP.NET Core API on Raspberry Pi to fetch Exchange schedules; added VPN support and
              MAC filtering for secure remote presentations.
            </li>
          </ul>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="w-full max-w-4xl flex flex-col gap-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-1">mdandaya.github.io</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">June 2020 – Present</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Engineered a personal portfolio site using Next.js, React.js, Tailwind CSS, and TypeScript. Automated deployment and build processes via GitHub
              Actions YAML workflow.
            </li>
          </ul>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400 italic">More coming soon…</p>
      </section>

      {/* Education */}
      <section className="w-full max-w-4xl flex flex-col gap-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="font-medium">Diploma in Computer Systems Technology – British Columbia Institute of Technology, Burnaby, BC</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">September 2018 – June 2020</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Specialized in MVC Patterns in C# ASP.NET (Client Server Option)</li>
            <li>Graduated with Distinction (GPA 4.0+)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

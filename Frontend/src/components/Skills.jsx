const Skills = () => {
  return (
    <section
      id="Skills"
       className="py-20 px-6 md:px-20 bg-[#eef7ff] dark:bg-[#081b29] dark:text-white"
    >
      <h2 className="text-center text-4xl font-bold mb-12">
        My <span className="dark:text-blue-400 text-blue-600">Skills</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-12 animate-fade-up">

        {/* Skill Category */}
        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-xl font-bold  text-blue-400 mb-4">Languages</h3>
          <ul className="space-y-2 text-[#082f49] dark:text-gray-300">
            <li>Java</li>
            <li>JavaScript</li>
            <li>C</li>
          </ul>
        </div>

        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend</h3>
          <ul className="space-y-2 text-[#082f49] dark:text-gray-300">
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Backend</h3>
          <ul className="space-y-2 text-[#082f49] dark:text-gray-300">
            <li>Spring Boot</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Databases</h3>
          <ul className="space-y-2 text-[#082f49] dark:text-gray-300">
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Tools & Concepts</h3>
          <ul className="space-y-2 text-[#082f49] dark:text-gray-300">
            <li>Data Structures & Algorithms</li>
            <li>OOP</li>
          </ul>
        </div>

        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Operating Systems</h3>
          <ul className="space-y-2 text-[#082f49] dark:text-gray-300">
            <li>Linux (RHEL)</li>
            <li>Windows</li>
          </ul>
        </div>
        </div>
    </section>
  );
};

export default Skills;

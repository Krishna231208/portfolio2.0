const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-20 bg-[#eef7ff] dark:bg-[#081b29] dark:text-white"
    >
      <h2 className="text-center text-4xl font-bold mb-12">
        My <span className="text-blue-600 dark:text-blue-400">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 animate-fade-up">

        {/* Service 1 */}
        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <i className="fas fa-code text-4xl text-blue-400 mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
          <p className="text-[#082f49] dark:text-gray-300">
            I build full MERN stack applications with a seamless frontend and powerful backend.
          </p>
        </div>

        {/* Service 2 */}
        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <i className="fas fa-cogs text-4xl text-blue-400 mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Backend & API Development</h3>
          <p className="text-[#082f49] dark:text-gray-300">
            Building secure and scalable REST APIs using Node, Express, and Spring Boot.
          </p>
        </div>

        {/* Service 3 */}
        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <i className="fas fa-layer-group text-4xl text-blue-400 mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Database Management</h3>
          <p className="text-[#082f49] dark:text-gray-300">
            Designing SQL and NoSQL database structures for optimized performance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;

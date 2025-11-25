const Projects = () => {
  return (
    <section id="projects"  className="py-20 px-6 md:px-20 bg-[#eef7ff] dark:bg-[#081b29] dark:text-white">

      
      <h2 className="text-center text-4xl font-bold mb-12">
        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 animate-fade-up">

        {/* Project 1 */}
        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-3">MyTurn Appointment Booking</h3>
           <p className="text-[#082f49] dark:text-gray-300">

            A secure MERN application with role-based dashboards and real-time appointment handling.
            Features Cloudinary uploads and admin controls.
          </p>
          <a 
            href="https://www.linkedin.com/posts/krishna-kumar-144338258_webdev-softwareengineering-mernstack-activity-7374039693170163714-mxco"
            target="_blank"
            className="text-blue-400 hover:underline font-semibold"
          >
            View Project →
          </a>
        </div>

        {/* Project 2 */}
        <div className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 p-6 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-3">Full-Stack MERN eCommerce</h3>
          <p className="text-[#082f49] dark:text-gray-300">
            A complete MERN eCommerce platform with dynamic UI, secure admin panel, CRUD, JWT Auth
            and image management using Multer.
          </p>
          <a 
            href="https://www.linkedin.com/posts/krishna-kumar-144338258_mernstack-reactjs-nodejs-activity-7373324809772048384-6P5C"
            target="_blank"
            className="text-blue-400 hover:underline font-semibold"
          >
            View Project →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;

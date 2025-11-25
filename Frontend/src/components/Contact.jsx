const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-[#eef7ff] dark:bg-[#081b29] text-[#082f49] dark:text-white  text-center animate-fade-up"
    >
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-blue-600 dark:text-blue-400">Contact</span> Me
      </h2>

      <p className="text-black-300 max-w-xl mx-auto mb-8 dark:text-white ">
        I'm seeking new opportunities and collaborations. Let's connect!
      </p>

      <div className="space-y-4">

        <div className="flex justify-center items-center gap-3">
          <i className="fas fa-envelope text-blue-300"></i>
          <span>krishnanand231208@gmail.com</span>
        </div>

        <div className="flex justify-center items-center gap-3">
          <i className="fas fa-phone text-blue-300"></i>
          <span>+91 63939 01968</span>
        </div>

        <div className="flex justify-center items-center gap-3">
          <i className="fas fa-map-marker-alt text-blue-300"></i>
          <span>Uttar Pradesh, India</span>
        </div>

      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/krishna-kumar-144338258"
          target="_blank"
          className="text-blue-400 text-2xl hover:scale-110 transition"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          className="text-blue-400 text-2xl hover:scale-110 transition"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;

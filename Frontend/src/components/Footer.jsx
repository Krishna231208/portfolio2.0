import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#dff0ff] dark:bg-black text-[#082f49] dark:text-white py-10">


      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold">Krishna Kumar</h2>
          <p className="text-gray-900 dark:text-gray-400 mt-2">
            Thanks for visiting my portfolio. Let's build something great!
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="text-black dark:text-gray-300 space-y-2">
            <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#Skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#certificates" className="hover:text-blue-400">Certificates</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
          <div className="flex gap-4 text-gray-300">
            <a href="https://github.com" target="_blank" className="hover:text-blue-400">
              <FaGithub className="text-black dark:text-white w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/krishna-kumar-144338258" target="_blank" className="hover:text-blue-400">
              <FaLinkedin className="text-blue-500 w-7 h-7" />
            </a>
          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10 text-sm">
        © 2025 Krishna Kumar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

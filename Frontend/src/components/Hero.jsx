import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Hero = () => {
  const [text, setText] = useState("");
  const [profile, setProfile] = useState(null);  // ✅ FIXED: Added state

  const word = "Web Designer";
  const speed = 120;

  // Typing Effect
  useEffect(() => {
    let i = 0;

    const type = () => {
      if (i <= word.length) {
        setText(word.slice(0, i));
        i++;
        setTimeout(type, speed);
      }
    };

    type();
  }, []);

  // Fetch profile from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log("Error loading profile:", err));
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 pt-32 bg-[#eef7ff] dark:bg-[#081b29]"
    >
      {/* Left Text */}
      <div className="dark:text-white text-blue-950 max-w-xl animate-slide-up">
        <h1 className="text-5xl font-extrabold">
          {profile ? profile.name : "Loading..."}
        </h1>

        <h2 className="text-2xl md:text-3xl mt-3">
          I'm a <span className="text-blue-600 dark:text-blue-400">{profile?.role}</span>
        </h2>

        <p className="mt-4 text-[#082f49] dark:text-gray-300 leading-relaxed">
          {profile?.desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap">
          <a
            href={profile?.resume}
           className="px-5 py-2 border-2 border-blue-800 dark:border-blue-400 
            text-blue-600 dark:text-blue-300 font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-400 hover:text-black transition"
          >
            View CV
          </a>

          <a
            href={profile?.resume}
            download="Krishna_Kumar_Resume.pdf"
            className="px-5 py-2 border-2 border-blue-800 dark:border-blue-400 
            text-blue-600 dark:text-blue-300 font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-400 hover:text-black transition"
          >
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/krishna-kumar-144338258"
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-blue-800 flex items-center justify-center border-blue-800 dark:border-blue-400 
            text-blue-600 dark:text-blue-300 text-blue-800 dark:hover:bg-blue-400 hover:text-black transition hover:bg-blue-800 "
          >
            <FaLinkedin className="text-blue-600 w-7 h-7" />
          </a>

          <a
            href="https://github.com/Krishna231208"
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-blue-800 flex items-center justify-center border-blue-800 dark:border-blue-400 
            text-blue-600 dark:text-blue-300 text-blue-800 dark:hover:bg-blue-400 hover:text-black transition hover:bg-blue-800"
          >
            <FaGithub className="text-black dark:text-white w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="
          relative 
          w-64 h-64 md:w-72 md:h-72 
          rounded-full 
          shadow-[0_0_20px_8px_rgba(0,172,255,0.7)]
          transition
        "
      >
        <img
          src={
            profile
              ? `${profile.profilePic}`
              : "/kk.png"
          }
          alt="Krishna Kumar"
          className="
            w-full h-full 
            rounded-full object-cover 
            border-4 border-blue-400
          "
        />
      </div>
    </section>
  );
};

export default Hero;

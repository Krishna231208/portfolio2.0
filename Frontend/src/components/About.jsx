import { useEffect, useState } from "react";
const About = () => {
  const [profile, setProfile] = useState(null);
    useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log("Error loading profile:", err));
  }, []);
  return (
   <section id="about" className="py-20 bg-[#eef7ff] dark:bg-[#081b29]">

      <h2 className="text-center text-4xl font-bold mb-12">
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-up">
        
     <div
  className="
    relative 
    w-64 h-64 md:w-72 md:h-72 
    rounded-full 
    shadow-[0_0_20px_8px_rgba(0,172,255,0.7)]
    hover:shadow-[0_0_25px_12px_rgba(0,172,255,0.8)]
    transition hover:scale-105
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


        {/* Content */}
        <div className="max-w-xl">
          <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 underline mb-4">
            Information Technology Student
          </h3>

          
          <p className="text-[#082f49] dark:text-gray-300 leading-7">

            I am a dedicated B.Tech Information Technology student at 
            <strong className="text-gray-700 dark:text-white"> Rajkiya Engineering College, Banda</strong>.  
            My interest lies in building full-stack web applications using the 
            <strong className="text-gray-700 dark:text-white"> MERN stack</strong> and exploring backend systems.  

            <br /><br />
            I also hold the <strong className="text-gray-700 dark:text-white">RHCSA certification</strong>, showcasing my skills in 
            Linux system administration. I love solving problems, learning new technologies, and turning ideas into working applications.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;

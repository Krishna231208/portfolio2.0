import { useEffect, useState } from "react";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/certificates")
      .then(res => res.json())
      .then(data => setCertificates(data))
      .catch(err => console.log("Error fetching certificates:", err));
  }, []);
   return (
    <section
      id="certificates"
      className="py-20 px-6 md:px-20 bg-[#eef7ff] dark:bg-[#081b29] dark:text-white"
    >
      <h2 className="text-center text-4xl font-bold mb-12">
        My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 justify-items-center animate-fade-up">

        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            className="dark:bg-[#0d2a3f] hover:shadow-blue-600/20 bg-slate-200 w-72 rounded-xl shadow-lg dark:hover:shadow-blue-500/20 transition hover:-translate-y-2"
          >
            <img
              src={cert.img}
              className="rounded-t-xl"
              alt={cert.title}
            />

            <div className="p-4">
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-800 dark:text-gray-300 text-sm mt-2">
                {cert.desc}
              </p>
              <p className="text-blue-400 mt-2 text-sm">{cert.issued}</p>
            </div>
          </a>
        ))}

      </div>
    </section>
  );
};

export default Certificates;



import { motion } from "framer-motion";
import { FaMusic, FaCode, FaPalette } from "react-icons/fa";

const projects = [
  {
    title: "Visualizador Musical Interactivo",
    desc: "App web que analiza audio en tiempo real y genera visuales generativos sincronizados con el beat.",
    tags: ["React", "Web Audio API", "Canvas", "Framer Motion"],
    icon: <FaMusic size={24} />,
    color: "from-pink-500 to-purple-600",
  },
  {
    title: "API de Recomendación Musical",
    desc: "Microservicio que analiza metadata de canciones y sugiere artistas similares usando machine learning.",
    tags: ["Node.js", "Python", "Spotify API", "PostgreSQL"],
    icon: <FaCode size={24} />,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Landing Page para Artistas",
    desc: "Plantilla moderna para músicos independientes con integración de Spotify, YouTube y redes sociales.",
    tags: ["React", "Tailwind", "Spotify Embed", "SEO"],
    icon: <FaPalette size={24} />,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Beat Store Platform",
    desc: "E-commerce para productores musicales con reproducción, licencias y descarga automática de beats.",
    tags: ["Next.js", "Stripe", "Audio Player", "Auth"],
    icon: <FaMusic size={24} />,
    color: "from-green-500 to-teal-600",
  },
];

function DualProjects() {
  return (
    <section
      id="proyectos-duales"
      className="relative min-h-screen py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4"
        >
          Proyectos que Conectan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
        >
          Donde la música encuentra al código. Proyectos que integran ambas
          disciplinas en una sola experiencia.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shrink-0`}
                >
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{project.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DualProjects;

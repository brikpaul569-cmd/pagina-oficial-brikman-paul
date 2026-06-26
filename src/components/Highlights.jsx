import { motion, useScroll, useTransform } from "framer-motion";
import { FaMusic, FaCode } from "react-icons/fa";

const musicItems = [
  "Composición & Producción",
  "Beatmaking",
  "Grabación & Mastering",
  "Distribución Digital",
  "Sonido Experimental",
];

const techItems = [
  "Frontend & Backend",
  "APIs Musicales",
  "UX/UI Interactivo",
  "Integración Digital",
  "Automatización & Data",
];

function Highlights() {
  const { scrollYProgress } = useScroll();
  const gradient = useTransform(scrollYProgress, [0, 1], ["#ec4899", "#8b5cf6"]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.3], [-80, -30]);

  return (
    <motion.section
      style={{
        backgroundImage: "url('/images/auriculares.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-white"
    >
      <motion.div
        style={{ background: gradient }}
        className="absolute inset-0 z-0 opacity-30 bg-black"
      />

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-20 max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <motion.h2
            style={{ opacity: titleOpacity, y: titleY }}
            className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-6 drop-shadow text-center md:text-left"
          >
            <FaMusic className="text-white" size={32} />
            Mente & Alma
          </motion.h2>

          <ul className="space-y-4">
            {musicItems.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center gap-3 text-lg md:text-xl"
              >
                <span className="w-3 h-3 rounded-full shrink-0 bg-gradient-to-r from-blue-400 to-green-400" />
                <span className="drop-shadow">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <motion.h2
            style={{ opacity: titleOpacity, y: titleY }}
            className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-6 drop-shadow text-center md:text-left"
          >
            <FaCode className="text-green-400" size={32} />
            Desarrollo & Código
          </motion.h2>

          <ul className="space-y-4">
            {techItems.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center gap-3 text-lg md:text-xl"
              >
                <span className="w-3 h-3 rounded-full shrink-0 bg-gradient-to-r from-blue-400 to-green-400" />
                <span className="drop-shadow">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Highlights;

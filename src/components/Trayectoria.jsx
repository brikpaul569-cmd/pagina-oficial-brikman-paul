import { useState, useCallback } from "react";
import {
  FaLaptopCode,
  FaHeadphonesAlt,
  FaChalkboardTeacher,
  FaMicrochip,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: 2010,
    label: "Inicio Profesional",
    icon: <FaChalkboardTeacher size={32} />,
    description:
      "Inicio en la producción musical, explorando Sistemas como Steinberg Cubase y Reason",
  },
  {
    year: 2014,
    label: "Primeros Proyectos",
    icon: <FaLaptopCode size={32} />,
    description:
      "Desarrollo de los primeros proyectos de software y producción de beats profesionales.",
  },
  {
    year: 2018,
    label: "Desarrollo y Producción",
    icon: <FaHeadphonesAlt size={32} />,
    description:
      "Consolidación como desarrollador Full-Stack y Productor.",
  },
  {
    year: 2022,
    label: "Especialización",
    icon: <FaChalkboardTeacher size={32} />,
    description: "Discografía General.",
  },
  {
    year: 2025,
    label: "Ingeniero y Productor",
    icon: <FaMicrochip size={32} />,
    description:
      "Profesional completo en ingeniería de sistemas y producción musical, creando proyectos integrales innovadores.",
  },
];

function Trayectoria() {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-200px" });

  const toggle = useCallback(
    (idx) => setActive((prev) => (prev === idx ? null : idx)),
    []
  );

  return (
    <section
      id="trayectoria"
      ref={sectionRef}
      className="relative w-full min-h-screen px-6 pt-10 md:pt-16 lg:pt-20 pb-10 text-white overflow-hidden flex flex-col justify-start"
    >
      <div className="absolute inset-0 z-0">
        {inView && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=2Nwb1O0IeDo"
            loop
            muted
            playing
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        )}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-purple-900 via-black/80 to-yellow-500 opacity-90" />
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-yellow-400/50 via-black/70 to-purple-700/90" />
      </div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-12 text-center drop-shadow"
        >
          Trayectoria
        </motion.h2>

        <div className="relative overflow-x-auto">
          <div className="flex items-center justify-center flex-nowrap gap-6 sm:gap-12 lg:gap-20 mx-auto px-4 w-full max-w-7xl">
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className="flex flex-col items-center flex-shrink-0 cursor-pointer focus:outline-none"
                onClick={() => toggle(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    toggle(idx);
                  }
                }}
                tabIndex={0}
                style={{ width: 120, scrollSnapAlign: "center" }}
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: idx === active ? 1.3 : 1,
                    rotate: idx === active ? 360 : 0,
                    boxShadow:
                      idx === active
                        ? "0 0 15px rgba(203, 213, 255, 0.8)"
                        : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="rounded-full p-4 bg-purple-700/20 hover:bg-purple-500/40"
                  title={item.label}
                >
                  <div className="text-white">{item.icon}</div>
                </motion.div>

                <div
                  className={`mt-2 font-semibold text-center ${
                    idx === active ? "text-white" : "text-purple-300"
                  }`}
                >
                  {item.label}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    idx === active
                      ? "font-bold text-yellow-300"
                      : "text-purple-400"
                  }`}
                >
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto mt-10 md:mt-12 p-6 text-center rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, #3b0764 0%, #000000 50%, #facc15 100%)",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              <p className="text-lg m-0">{timeline[active].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Trayectoria;

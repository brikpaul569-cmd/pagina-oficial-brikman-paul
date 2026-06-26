import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ReactPlayer from "react-player";

function Intro() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-200px" });

  return (
    <motion.section
      id="intro"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#5B00A7] to-[#9F5CFF] text-white flex items-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {inView && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JGBlMMR8YzM"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0 z-0 pointer-events-none"
        />
      )}

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        <div className="flex justify-center md:justify-end -mt-20 md:-mt-24 px-4">
          <motion.img
            src="/images/personaje_intro.png"
            alt="Brikman Paul — ilustración del personaje representando al artista"
            className="w-1/3 md:w-1/3 max-w-md mix-blend-lighten opacity-90 rounded-full shadow-2xl backdrop-blur-sm object-cover object-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Productor Músical & <br className="hidden md:block" />
            Desarrollador de Software
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            Creo sonidos que cuentan historias y sistemas que resuelven problemas.
            Este es mi espacio para mostrarte lo que soy capaz de construir.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Intro;

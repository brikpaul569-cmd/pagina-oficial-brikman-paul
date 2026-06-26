import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ReactPlayer from "react-player";

function Details() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-200px" });

  return (
    <section
      id="details"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-20 text-white"
    >
      {inView && (
        <ReactPlayer
          url="https://youtu.be/RXnVWnfvEcA"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0 z-0 pointer-events-none"
        />
      )}

      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-md" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row md:items-center md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            src="images/10691784.png"
            alt="Brikman Paul — representación visual del manifiesto artístico"
            className="w-full md:w-[600px] max-w-none mix-blend-lighten opacity-95 backdrop-blur-sm"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Mi Especialidad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed text-justify md:text-left backdrop-blur-sm"
          >
            Soy Brikman Paul Morales, Desarrollador creativo
            que desde 2010 fusiona música y tecnología para dar forma a ideas que
            nacen en lo profundo de mi Alma Mental. Produzco beats cargados de
            atmósferas oscuras, románticas y místicas, explorando la electrónica,
            el EDM y el hip hop como vehículos para transformar emociones y
            percepciones.
            <br /><br />
            Al mismo tiempo, como Ingeniero de Sistemas, diseño y desarrollo
            interfaces y soluciones tecnológicas que potencian la experiencia
            humana. Mi objetivo siempre ha sido crear puentes entre el arte y el
            usuario, combinando sonido, imagen y código para narrar historias que
            trasciendan lo cotidiano.
            <br /><br />
            Fundé Mente Y Alma Récords y el proyecto Spiritual Sounds porque creo
            que cada beat y cada línea de código son portales para alterar la
            realidad, expandir la imaginación y reinventar la forma en que vivimos
            el arte.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Details;

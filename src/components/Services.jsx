import { motion } from "framer-motion";
import { FaMusic, FaCode, FaHeadphones, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaMusic size={28} />,
    title: "Producción Musical",
    items: [
      "Composición & Producción",
      "Beatmaking",
      "Grabación & Mastering",
      "Mezcla profesional",
      "Distribución Digital",
    ],
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: <FaCode size={28} />,
    title: "Desarrollo Web",
    items: [
      "Frontend & Backend",
      "APIs y Microservicios",
      "UX/UI Interactivo",
      "Landing Pages",
      "Automatización",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <FaHeadphones size={28} />,
    title: "Música + Código",
    items: [
      "Visualizadores de Audio",
      "Apps musicales web",
      "Plataformas para artistas",
      "Herramientas de producción",
      "Instalaciones interactivas",
    ],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Consultoría",
    items: [
      "Asesoría en producción",
      "Arquitectura de software",
      "Branding digital",
      "Estrategia de contenido",
      "Presencia en streaming",
    ],
    color: "from-green-500 to-teal-500",
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 hover:border-white/30 transition-all"
    >
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 text-white`}
      >
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
      <ul className="space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-gray-200 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Services() {
  return (
    <section
      id="servicios"
      className="relative min-h-screen flex items-center py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #1a0033 0%, #2d1b69 50%, #1a0033 100%)",
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
          Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
        >
          Dos mundos, un solo creador. Música y tecnología no están separadas:
          son las dos caras de la misma expresión creativa.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

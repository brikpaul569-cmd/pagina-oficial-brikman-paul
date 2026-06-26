import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";

const contactMethods = [
  {
    icon: <FaWhatsapp size={28} />,
    title: "WhatsApp",
    desc: "Respuesta rápida",
    action: "Escribir",
    href: "https://wa.me/573001234567?text=Hola%20Brikman%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte",
    color: "hover:bg-green-600 border-green-500/30",
    bg: "from-green-600 to-green-800",
  },
  {
    icon: <FaEnvelope size={28} />,
    title: "Email",
    desc: "Para propuestas formales",
    action: "Enviar correo",
    href: "mailto:contacto@brikmanpaul.dev",
    color: "hover:bg-purple-600 border-purple-500/30",
    bg: "from-purple-600 to-purple-800",
  },
];

function Contact() {
  return (
    <section id="contacto" className="relative">
      <div
        className="min-h-screen flex items-center py-20 px-6"
        style={{
          background:
            "linear-gradient(180deg, #1a0033 0%, #0d0d0d 50%, #1a0033 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4"
          >
            Conectemos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-12 max-w-xl mx-auto text-lg"
          >
            ¿Tenés un proyecto en mente? Una colaboración, un beat o una app.
            Estoy abierto a conversar.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`block p-6 rounded-2xl border bg-white/5 backdrop-blur-sm ${method.color} transition-all group`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.bg} flex items-center justify-center text-white mb-4`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.desc}</p>
                <span className="text-purple-400 group-hover:text-white font-semibold text-sm transition">
                  {method.action} &rarr;
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-purple-400" />
              Bogotá, Colombia — Disponible para proyectos remotos
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Contact;

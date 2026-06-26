import { motion } from "framer-motion";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { SOCIAL_LINKS } from "../config/social";

const releases = [
  {
    title: "Mente & Alma",
    type: "Álbum",
    year: 2024,
    image: "/images/1.jpg",
    links: {
      spotify: SOCIAL_LINKS.spotify.url,
      apple: SOCIAL_LINKS.appleMusic.url,
      youtube: SOCIAL_LINKS.youtube.url,
    },
  },
  {
    title: "Spiritual Sounds",
    type: "EP",
    year: 2023,
    image: "/images/2.png",
    links: {
      spotify: SOCIAL_LINKS.spotify.url,
      apple: SOCIAL_LINKS.appleMusic.url,
    },
  },
];

function MusicPortfolio() {
  return (
    <section
      id="musica"
      className="relative min-h-screen py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #0d0d0d 100%)",
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
          Música
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        >
          Beats, atmósferas y sonidos que trascienden. Explora mi discografía en
          las plataformas digitales.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {releases.map((release, idx) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={release.image}
                alt={`${release.title} — ${release.type} ${release.year}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs text-purple-400 uppercase tracking-wider">
                  {release.type} &middot; {release.year}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{release.title}</h3>
                <div className="flex gap-3 mt-4">
                  {release.links.spotify && (
                    <a
                      href={release.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition"
                      aria-label="Escuchar en Spotify"
                    >
                      <FaSpotify size={24} />
                    </a>
                  )}
                  {release.links.apple && (
                    <a
                      href={release.links.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                      aria-label="Escuchar en Apple Music"
                    >
                      <FaApple size={24} />
                    </a>
                  )}
                  {release.links.youtube && (
                    <a
                      href={release.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 transition"
                      aria-label="Ver en YouTube"
                    >
                      <FaYoutube size={24} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex gap-4">
            <a
              href={SOCIAL_LINKS.spotify.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <FaSpotify size={20} />
              Spotify
            </a>
            <a
              href={SOCIAL_LINKS.appleMusic.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <FaApple size={20} />
              Apple Music
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MusicPortfolio;

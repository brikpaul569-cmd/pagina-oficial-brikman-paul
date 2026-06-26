import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaSpotify, FaApple } from "react-icons/fa";
import { SOCIAL_LINKS } from "../config/social";

const ICON_MAP = {
  FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaSpotify, FaApple,
};

function Footer() {
  return (
    <footer
      id="footer"
      className="min-h-[40vh] text-white flex items-center justify-center"
      style={{
        background: `linear-gradient(
          180deg,
          #FFD600 40%,
          #FFF9C4 60%,
          rgba(255, 255, 255, 0.8) 100%
        )`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-3 text-black">Conectemos</h2>
        <div className="flex justify-center space-x-6 text-2xl text-black">
          {Object.values(SOCIAL_LINKS).map(({ url, label, ariaLabel, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="hover:text-gray-700 transition"
              >
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-gray-900">
          &copy; {new Date().getFullYear()} Brikman Paul. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

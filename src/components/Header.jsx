import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "@fontsource/inter";
import { NAV_LINKS } from "../config/navigation";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      controls.start({
        y: 0,
        scale: 0.97,
        transition: { duration: 0.4, ease: "easeOut" },
      });

      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      });

      contentControls.start({
        opacity: 0,
        y: -10,
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    }
  }, [scrolled, controls, contentControls]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      animate={controls}
      className="fixed top-0 w-full z-50"
      style={{
        background: "transparent",
        boxShadow: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center font-[Inter]">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient"
          animate={contentControls}
          initial={{ opacity: 0, y: -10 }}
        >
          Brikman Paul
        </motion.h1>

        {/* Botón hamburguesa solo en móvil */}
        <button
          className="text-white md:hidden ml-4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú normal en desktop */}
        <div className="hidden md:flex space-x-6 ml-8">
          {NAV_LINKS.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className="text-white hover:text-cyan-400 text-base font-medium transition-colors"
              animate={contentControls}
              initial={{ opacity: 0, y: -10 }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden px-4 pb-4"
        >
          <ul className="flex flex-col space-y-4">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-cyan-400 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}

export default Header;

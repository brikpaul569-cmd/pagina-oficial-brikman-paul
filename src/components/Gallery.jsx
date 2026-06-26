import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const BASE = import.meta.env.BASE_URL;
const images = [
  `${BASE}images/1.jpg`,
  `${BASE}images/2.png`,
  `${BASE}images/3.png`,
  `${BASE}images/4.png`,
  `${BASE}images/5.png`,
  `${BASE}images/6.png`,
  `${BASE}images/7.png`,
  `${BASE}images/8.png`,
  `${BASE}images/9.png`,
  `${BASE}images/10.png`,
];

function AnimatedImage({ src, alt, onClick, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className="w-[300px] h-[170px] object-cover rounded-lg shadow-lg flex-shrink-0 cursor-pointer"
      loading="lazy"
      draggable={false}
      onClick={onClick}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 15px 30px rgba(0,0,0,0.35)",
      }}
    />
  );
}

function Gallery() {
  const scrollContainerRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const scrollLeft = useCallback(() => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }, []);

  const openImage = useCallback((idx) => setExpandedIndex(idx), []);
  const closeModal = useCallback(() => setExpandedIndex(null), []);

  const goNext = useCallback(() => {
    setExpandedIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  }, []);

  const goPrev = useCallback(() => {
    setExpandedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (expandedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandedIndex, goNext, goPrev, closeModal]);

  return (
    <section
      id="gallery"
      className="w-full py-6 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#d8b012" }}
    >
      <div className="w-full flex items-center space-x-4 px-4">
        <button
          onClick={scrollLeft}
          aria-label="Anterior"
          className="text-4xl font-bold opacity-50 hover:opacity-90 select-none bg-none border-none cursor-pointer"
        >
          &#60;
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 flex-grow scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((src, idx) => (
            <AnimatedImage
              key={src}
              src={src}
              alt={`Galería de Brikman Paul — imagen ${idx + 1}`}
              onClick={() => openImage(idx)}
              index={idx}
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          aria-label="Siguiente"
          className="text-4xl font-bold opacity-50 hover:opacity-90 select-none bg-none border-none cursor-pointer"
        >
          &#62;
        </button>
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 overflow-hidden"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={images[expandedIndex]}
              alt="Brikman Paul — imagen expandida de la galería"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl pointer-events-auto"
              initial={{ scale: 0.8, x: 0 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0.8, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50 && expandedIndex < images.length - 1) {
                  setExpandedIndex(expandedIndex + 1);
                } else if (info.offset.x > 50 && expandedIndex > 0) {
                  setExpandedIndex(expandedIndex - 1);
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;

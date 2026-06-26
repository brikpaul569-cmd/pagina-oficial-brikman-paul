import { useEffect, useState } from "react";

export function useScrollSection(sections) {
  const [bgColor, setBgColor] = useState(sections[0].color);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observers = [];
    const handleIntersect = (entry) => {
      if (entry.isIntersecting) {
        const section = sections.find((s) => s.id === entry.target.id);
        if (section) {
          setBgColor(section.color);
          setActiveSection(section.id);
          const hash = `#${section.id}`;
          if (window.location.hash !== hash) {
            window.history.replaceState(null, "", hash);
          }
        }
      }
    };

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) handleIntersect(entry);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return { bgColor, activeSection };
}

import Header from './components/Header';
import Intro from './components/Intro';
import Highlights from './components/Highlights';
import Services from './components/Services';
import Details from './components/Details';
import DualProjects from './components/DualProjects';
import Trayectoria from './components/Trayectoria';
import MusicPortfolio from './components/MusicPortfolio';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SEOHead from './components/layout/SEOHead';
import { useScrollSection } from './hooks/useScrollSection';
import { useCallback } from 'react';

const sections = [
  {
    id: 'intro',
    color: '#5B00A7',
    seo: { title: 'Productor Musical & Desarrollador de Software', description: 'Brikman Paul — Productor musical y desarrollador de software. Fusión de música electrónica, EDM, hip hop y tecnología.' },
  },
  {
    id: 'highlights',
    color: '#f238a5',
    seo: { title: 'Proyectos — Música y Código', description: 'Explorá los proyectos de Brikman Paul: producción musical, beatmaking, frontend, backend y APIs musicales.' },
  },
  {
    id: 'servicios',
    color: '#1a0033',
    seo: { title: 'Servicios — Producción Musical y Desarrollo Web', description: 'Servicios de Brikman Paul: producción musical, beatmaking, desarrollo web, APIs y consultoría creativa.' },
  },
  {
    id: 'details',
    color: '#9f7dfb',
    seo: { title: 'Mi Especialidad — Fusión de Arte y Tecnología', description: 'Brikman Paul fusiona música y tecnología desde 2010. Mente & Alma Records, beats, electrónica y desarrollo de software.' },
  },
  {
    id: 'proyectos-duales',
    color: '#24243e',
    seo: { title: 'Proyectos que Conectan — Música y Código', description: 'Proyectos de Brikman Paul que integran música y desarrollo: visualizadores, APIs musicales, plataformas para artistas.' },
  },
  {
    id: 'trayectoria',
    color: '#FF6F00',
    seo: { title: 'Trayectoria — 15 Años de Música y Código', description: 'Línea de tiempo de Brikman Paul: desde 2010 hasta hoy, su evolución como productor musical e ingeniero de sistemas.' },
  },
  {
    id: 'musica',
    color: '#1a1a2e',
    seo: { title: 'Música — Discografía y Lanzamientos', description: 'Explorá la música de Brikman Paul en Spotify, Apple Music y YouTube. Beats, EDM y atmósferas experimentales.' },
  },
  {
    id: 'gallery',
    color: '#FFD54F',
    seo: { title: 'Galería — Visuales y Arte Digital', description: 'Galería de imágenes y arte visual de Brikman Paul. Diseño, estética y concepto visual del proyecto Mente & Alma.' },
  },
  {
    id: 'contacto',
    color: '#0d0d0d',
    seo: { title: 'Contacto — Conectemos', description: 'Contactate con Brikman Paul. Seguilo en LinkedIn, GitHub, Spotify, YouTube, Instagram y Apple Music.' },
  },
];

function App() {
  const { bgColor, activeSection } = useScrollSection(sections);
  const currentSeo = useCallback(
    () => sections.find((s) => s.id === activeSection)?.seo,
    [activeSection]
  );

  const seo = currentSeo();

  return (
    <div style={{ backgroundColor: bgColor, transition: 'background-color 0.8s ease' }}>
      <SEOHead title={seo?.title} description={seo?.description} />
      <Header />
      <section id="intro"><Intro /></section>
      <section id="highlights"><Highlights /></section>
      <section id="servicios"><Services /></section>
      <section id="details"><Details /></section>
      <section id="proyectos-duales"><DualProjects /></section>
      <section id="trayectoria"><Trayectoria /></section>
      <section id="musica"><MusicPortfolio /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contacto"><Contact /></section>
    </div>
  );
}

export default App;

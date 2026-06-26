import { lazy, Suspense, useCallback } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import SEOHead from './components/layout/SEOHead';
import { useScrollSection } from './hooks/useScrollSection';

const Highlights = lazy(() => import('./components/Highlights'));
const Services = lazy(() => import('./components/Services'));
const Details = lazy(() => import('./components/Details'));
const DualProjects = lazy(() => import('./components/DualProjects'));
const Trayectoria = lazy(() => import('./components/Trayectoria'));
const MusicPortfolio = lazy(() => import('./components/MusicPortfolio'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));

function SectionFallback() {
  return <div className="min-h-screen" />;
}

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
      <section id="highlights"><Suspense fallback={<SectionFallback />}><Highlights /></Suspense></section>
      <section id="servicios"><Suspense fallback={<SectionFallback />}><Services /></Suspense></section>
      <section id="details"><Suspense fallback={<SectionFallback />}><Details /></Suspense></section>
      <section id="proyectos-duales"><Suspense fallback={<SectionFallback />}><DualProjects /></Suspense></section>
      <section id="trayectoria"><Suspense fallback={<SectionFallback />}><Trayectoria /></Suspense></section>
      <section id="musica"><Suspense fallback={<SectionFallback />}><MusicPortfolio /></Suspense></section>
      <section id="gallery"><Suspense fallback={<SectionFallback />}><Gallery /></Suspense></section>
      <section id="contacto"><Suspense fallback={<SectionFallback />}><Contact /></Suspense></section>
    </div>
  );
}

export default App;

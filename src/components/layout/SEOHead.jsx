import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "../../config/site";

const BASE_URL = SITE_CONFIG.domain;
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-image.jpg`;

export default function SEOHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  keywords,
}) {
  const siteName = SITE_CONFIG.name;
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | ${SITE_CONFIG.tagline}`;
  const metaDescription = description || SITE_CONFIG.description;
  const metaOgTitle = ogTitle || fullTitle;
  const metaOgDescription = ogDescription || metaDescription;
  const metaKeywords =
    keywords ||
    "Brikman Paul, productor musical, desarrollador de software, Mente y Alma, música electrónica, EDM, hip hop, beats, ingeniero de sistemas";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      <meta property="og:title" content={metaOgTitle} />
      <meta property="og:description" content={metaOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl || BASE_URL} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:title" content={metaOgTitle} />
      <meta name="twitter:description" content={metaOgDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

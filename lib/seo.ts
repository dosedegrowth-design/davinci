// ============================================================
// SEO central — Da Vinci Aesthetic
// ============================================================
import { PROTOCOLOS, INSTAGRAM } from "./content";

export const SITE_URL = "https://davinciestetica.com.br";
export const SITE_NAME = "Da Vinci Aesthetic";
export const OG_IMAGE = `${SITE_URL}/og.jpg`;

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Da Vinci Aesthetic — Estética Avançada",
  description:
    "Clínica de harmonização facial e estética avançada em São Paulo. Toxina botulínica, preenchimento, bioestimuladores e skinboosters com avaliação facial completa, conduzidos pela Dra. Ana Carolina Martins, biomédica esteta.",
  city: "São Paulo",
  region: "SP",
  country: "BR",
  areas: [
    "São Paulo",
    "Conceição",
    "São Judas",
    "Santa Cruz",
    "Vila Mariana",
    "Zona Sul de São Paulo",
  ],
  // ⚠️ atualizar com o telefone oficial da clínica antes de divulgar
  telephone: "",
  priceRange: "$$$",
  founder: "Dra. Ana Carolina Martins",
  founderTitle: "Biomédica Esteta",
};

// Keywords-base por procedimento (complementa as keywords da página)
export const PROC_KEYWORDS: Record<string, string[]> = {
  "harmonizacao-facial": [
    "harmonização facial São Paulo",
    "harmonização facial preço",
    "harmonização facial natural",
    "proporção áurea rosto",
  ],
  "toxina-botulinica": [
    "toxina botulínica São Paulo",
    "botox testa",
    "botox rugas de expressão",
    "aplicação de botox SP",
  ],
  preenchimento: [
    "preenchimento facial São Paulo",
    "preenchimento labial",
    "preenchimento de olheiras",
    "ácido hialurônico rosto",
  ],
  "skinboosters-bioestimuladores": [
    "skinbooster São Paulo",
    "bioestimulador de colágeno",
    "qualidade de pele",
    "firmeza da pele",
  ],
  "laser-tecnologias": [
    "laser facial São Paulo",
    "tratamento de manchas",
    "melasma",
    "renovação da pele",
  ],
  "emagrecimento-definicao": [
    "emagrecimento São Paulo",
    "definição corporal",
    "gordura localizada",
    "contorno corporal",
  ],
  "harmonizacao-intima": [
    "harmonização íntima São Paulo",
    "estética íntima",
    "saúde íntima feminina",
  ],
  "protocolo-assinado": [
    "protocolo facial personalizado",
    "plano de harmonização facial",
    "avaliação facial São Paulo",
  ],
};

/** Schema.org da clínica (MedicalClinic) com catálogo de serviços. */
export function clinicJsonLd() {
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "HealthAndBeautyBusiness"],
    "@id": `${SITE_URL}/#clinica`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    image: OG_IMAGE,
    logo: `${SITE_URL}/brand/logos/davinci-dourado.png`,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "BRL",
    areaServed: BUSINESS.areas.map((name) => ({ "@type": "City", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    medicalSpecialty: "PlasticSurgery",
    sameAs: [INSTAGRAM],
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
      jobTitle: BUSINESS.founderTitle,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamentos estéticos",
      itemListElement: PROTOCOLOS.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: p.title,
          url: `${SITE_URL}/tratamentos/${p.slug}`,
        },
      })),
    },
  };
  if (BUSINESS.telephone) ld.telephone = BUSINESS.telephone;
  return ld;
}

/** Schema.org do site (WebSite). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#clinica` },
  };
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const SITE_URL = "https://davinciestetica.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Da Vinci Aesthetic · Harmonização Facial e Estética Avançada em SP",
    template: "%s · Da Vinci Aesthetic",
  },
  description:
    "Clínica de harmonização facial e estética avançada em São Paulo. Toxina botulínica, preenchimento e bioestimuladores com avaliação facial completa. Dra. Ana Carolina Martins, biomédica esteta.",
  keywords: [
    "harmonização facial São Paulo",
    "preenchimento facial",
    "toxina botulínica",
    "leitura facial",
    "estética avançada",
    "skinboosters",
    "Da Vinci Aesthetic",
    "biomédica esteta SP",
  ],
  authors: [{ name: "Da Vinci Aesthetic" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Da Vinci Aesthetic",
    title: "Da Vinci Aesthetic · A Arte do Refinamento",
    description:
      "Harmonização facial com leitura de conjunto. Realce a sua beleza natural, com técnica e segurança.",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Da Vinci Aesthetic",
    description:
      "Clínica de estética avançada e harmonização facial em São Paulo.",
    image: `${SITE_URL}/brand/logos/davinci-dourado.png`,
    url: SITE_URL,
    areaServed: ["Conceição", "Santa Cruz", "Vila Mariana", "São Paulo"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    medicalSpecialty: "Aesthetic",
    founder: {
      "@type": "Person",
      name: "Dra. Ana Carolina Martins",
      jobTitle: "Biomédica Esteta",
    },
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bodoni_Moda, Archivo_Narrow, Inter } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const archivo = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://davinciestetica.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Da Vinci Aesthetic · Atelier de Estética Avançada em São Paulo",
    template: "%s · Da Vinci Aesthetic",
  },
  description:
    "Atelier de harmonização facial em São Paulo. Leitura facial assinada, protocolo customizado — cada rosto é uma encomenda. Dra. Ana Carolina Martins, biomédica esteta.",
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
      "Harmonização facial como leitura de conjunto. Antes da agulha, vem o estudo.",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
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
      "Atelier de estética avançada e harmonização facial em São Paulo.",
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
    <html lang="pt-BR" className={`${bodoni.variable} ${archivo.variable} ${inter.variable}`}>
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

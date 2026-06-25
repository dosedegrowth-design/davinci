import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SITE_URL, OG_IMAGE, clinicJsonLd, websiteJsonLd } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#1a2438",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Harmonização Facial em São Paulo · Da Vinci Aesthetic",
    template: "%s · Da Vinci Aesthetic",
  },
  description:
    "Clínica de harmonização facial e estética avançada em São Paulo. Toxina botulínica, preenchimento, bioestimuladores e skinboosters com avaliação facial completa. Dra. Ana Carolina Martins, biomédica esteta.",
  keywords: [
    "harmonização facial São Paulo",
    "harmonização facial",
    "preenchimento facial",
    "preenchimento labial",
    "toxina botulínica",
    "botox São Paulo",
    "bioestimulador de colágeno",
    "skinboosters",
    "estética avançada São Paulo",
    "clínica de estética Vila Mariana",
    "biomédica esteta SP",
    "Da Vinci Aesthetic",
  ],
  authors: [{ name: "Da Vinci Aesthetic" }],
  creator: "Da Vinci Aesthetic",
  category: "Health & Beauty",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Da Vinci Aesthetic",
    title: "Da Vinci Aesthetic · Harmonização Facial em São Paulo",
    description:
      "Harmonização facial com leitura de conjunto. Realce a sua beleza natural, com técnica e segurança.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Da Vinci Aesthetic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Vinci Aesthetic · Harmonização Facial em São Paulo",
    description:
      "Estética avançada e harmonização facial. Realce a sua beleza natural, com técnica e segurança.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png", sizes: "256x256" },
      { url: "/icon-512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png?v=2",
    shortcut: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [clinicJsonLd(), websiteJsonLd()],
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
        {children}
      </body>
    </html>
  );
}

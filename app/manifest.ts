import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Da Vinci Aesthetic",
    short_name: "Da Vinci",
    description:
      "Harmonização facial e estética avançada em São Paulo. Realce a sua beleza natural, com técnica e segurança.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a2438",
    theme_color: "#1a2438",
    lang: "pt-BR",
    icons: [
      { src: "/favicon.png", sizes: "256x256", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

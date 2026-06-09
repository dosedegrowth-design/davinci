import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatsAppFab from "@/components/WhatsAppFab";
import {
  Marquee,
  Manifesto,
  Pilares,
  Protocolos,
  Galeria,
  Ana,
  Cofundadores,
  Depoimentos,
  Pracas,
  CtaFinal,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Pilares />
        <Protocolos />
        <Galeria />
        <Ana />
        <Cofundadores />
        <Depoimentos />
        <Pracas />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

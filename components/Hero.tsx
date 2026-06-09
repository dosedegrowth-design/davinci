import Image from "next/image";
import { whatsappHref } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden hex-field"
    >
      {/* fundo: noite renascentista (Azul Renascença) */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,#2a3858_0%,#1a2438_58%)]" />
      <div className="canvas-grain" />

      {/* glow dourado que respira */}
      <div className="breathe pointer-events-none absolute right-[-10%] top-1/2 h-[70vmin] w-[70vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.30),transparent_62%)]" />

      {/* marca: Gioconda (logo vertical oficial) */}
      <div className="pointer-events-none absolute right-[3%] top-1/2 hidden h-[82vmin] w-[58vmin] -translate-y-1/2 lg:block">
        <Image
          src="/brand/logos/davinci-vertical-gioconda.png"
          alt="Da Vinci Aesthetic"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pt-28 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-7 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[var(--color-gold)]" />
            Estética Avançada · Harmonização Facial · São Paulo
          </p>

          <h1 className="font-display text-[12vw] leading-[0.94] tracking-tight sm:text-7xl lg:text-[5rem]">
            A arte da
            <br />
            <span className="display-italic text-[var(--color-gold)]">
              harmonização facial.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--color-cream-dim)] sm:text-lg">
            Toxina botulínica, preenchimento e bioestimuladores com a precisão da
            proporção áurea. Um estudo completo do seu rosto antes de qualquer
            procedimento. Tudo para realçar a sua beleza natural, com segurança e sem
            exageros.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold justify-center"
            >
              Agende sua avaliação
            </a>
            <a href="#protocolos" className="btn-ghost justify-center">
              Ver protocolos
            </a>
          </div>

          {/* régua de números */}
          <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--color-gold)]/20 pt-7">
            {[
              { n: "φ 1.618", l: "Proporção áurea" },
              { n: "100%", l: "Protocolo assinado" },
              { n: "2", l: "Endereços em SP" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl text-cream sm:text-3xl">
                  {s.n}
                </p>
                <p className="mt-1 font-accent text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-cream-mute)]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-accent text-[0.6rem] uppercase tracking-[0.3em] text-[var(--color-cream-mute)]">
          Role
        </span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
      </div>
    </section>
  );
}

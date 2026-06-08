import Image from "next/image";
import { whatsappHref } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden hex-field"
    >
      {/* fundo: noite renascentista */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,#141a26_0%,#0a0d13_55%)]" />
      <div className="canvas-grain" />

      {/* glow dourado que respira */}
      <div className="breathe pointer-events-none absolute right-[-10%] top-1/2 h-[70vmin] w-[70vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,161,76,0.28),transparent_62%)]" />

      {/* vitruviano */}
      <div className="pointer-events-none absolute right-[2%] top-1/2 hidden h-[78vmin] w-[78vmin] -translate-y-1/2 opacity-[0.5] lg:block">
        <Image
          src="/brand/decorativos/vitruviano-completo.png"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* aresta neon (street) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[var(--color-neon)]/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pt-28 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-7 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[var(--color-gold)]" />
            Atelier de Estética Avançada · São Paulo
          </p>

          <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.2rem]">
            Antes da agulha,
            <br />
            <span className="display-italic text-[var(--color-gold)]">
              vem o estudo.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--color-cream-dim)] sm:text-lg">
            Harmonização facial como leitura de conjunto. Leitura facial
            assinada, protocolo customizado — cada rosto é uma encomenda única.
            Não competimos com clínicas. Competimos com galerias de arte.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold justify-center"
            >
              Agende sua leitura facial
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

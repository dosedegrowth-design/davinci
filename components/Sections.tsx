import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  PILARES,
  PROTOCOLOS,
  DEPOIMENTOS,
  PRACAS,
  FRASES,
  whatsappHref,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
} from "@/lib/content";

/* ---------- Faixa marquee de frases ---------- */
export function Marquee() {
  const items = [...FRASES, ...FRASES];
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-gold)]/15 bg-[var(--color-night-2)] py-5">
      <div className="marquee-track">
        {items.map((f, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display italic text-xl text-[var(--color-cream-dim)] sm:text-2xl">
              {f}
            </span>
            <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-[var(--color-gold)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Manifesto ---------- */
export function Manifesto() {
  return (
    <section id="atelier" className="relative overflow-hidden py-28 md:py-40">
      <div className="canvas-grain" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-5 md:px-10 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <p className="eyebrow mb-7">A nossa filosofia</p>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            Leonardo encontrou no corpo a proporção perfeita. Nós buscamos a mesma
            harmonia <span className="display-italic text-[var(--color-gold)]">no seu rosto.</span>
          </h2>
          <div className="mt-9 space-y-5 text-[var(--color-cream-dim)] leading-relaxed">
            <p>
              Harmonização facial não é "arrumar a boca" ou "levantar o nariz"
              isolado. É leitura de conjunto: entender cada milímetro do rosto e
              tratar de forma integrada, com ácido hialurônico, toxina botulínica e
              bioestimuladores.
            </p>
            <p>
              Por isso, antes de qualquer procedimento vem o estudo: uma avaliação
              facial completa que define o seu protocolo. A anatomia é estudada
              antes de ser tratada, e o resultado é conduzido e assinado pela
              própria Dra. Ana.
            </p>
            <p className="text-cream">
              O objetivo nunca é o artificial. É revelar a sua beleza natural, a
              versão de você que o tempo, o cansaço e a rotina deixaram para trás.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full border border-[var(--color-gold)]/25" />
          <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.12),transparent_70%)]" />
          <Image
            src="/brand/grafismos/selo-vitruviano.png"
            alt="Selo Vitruviano Da Vinci"
            fill
            className="object-contain p-8"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pilares ---------- */
export function Pilares() {
  return (
    <section className="relative bg-[var(--color-night-2)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-5">Quatro colunas · nada negociável</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Os pilares da marca
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-sm bg-[var(--color-gold)]/15 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="group relative bg-[var(--color-night-2)] p-8 transition-colors duration-500 hover:bg-[var(--color-night-3)]"
            >
              <span className="font-display text-5xl italic text-[var(--color-gold)]/40 transition-colors group-hover:text-[var(--color-gold)]">
                {p.n}
              </span>
              <h3 className="mt-5 font-accent text-sm font-600 uppercase tracking-[0.2em] text-cream">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-cream-mute)]">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Protocolos / Serviços ---------- */
export function Protocolos() {
  return (
    <section id="protocolos" className="theme-light relative overflow-hidden bg-[var(--color-night-2)] py-24 md:py-32">
      <div className="pattern-light" />
      <div className="absolute right-0 top-1/4 h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.10),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Tratamentos</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Procedimentos estéticos com <span className="display-italic text-[var(--color-gold)]">leitura de conjunto.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-cream-mute)]">
            Técnicas consolidadas e seguras, conduzidas pela Dra. Ana. A
            avaliação facial completa vem antes de qualquer procedimento. Nada
            de pacote pronto.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden bg-[var(--color-gold)]/12 sm:grid-cols-2 lg:grid-cols-4">
          {PROTOCOLOS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 80} className="bg-[var(--color-night)]">
              <Link
                href={`/tratamentos/${s.slug}`}
                className="group relative flex h-full flex-col p-8 transition-colors duration-500 hover:bg-[var(--color-night-3)]"
              >
                <div className="relative mb-6 h-12 w-12">
                  <Image
                    src={`/brand/icones/${s.icon}-dourado.png`}
                    alt={s.title}
                    fill
                    className="object-contain object-left transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display text-xl text-cream">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-cream-mute)]">
                  {s.desc}
                </p>
                <span className="mt-6 font-accent text-[0.62rem] uppercase tracking-[0.25em] text-[var(--color-gold)] opacity-60 transition-opacity group-hover:opacity-100">
                  Ver tratamento →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Galeria obra-primas (antes/depois) ---------- */
export function Galeria() {
  const posts = ["post-01", "post-04", "post-07", "post-02", "post-05", "post-08"];
  return (
    <section id="galeria" className="relative bg-[var(--color-night-2)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-5">Resultados · Antes & Depois</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Naturalidade que se <span className="display-italic text-[var(--color-gold)]">reconhece no espelho.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-cream-mute)]">
            Resultados reais de pacientes, registrados com o mesmo padrão de luz
            e enquadramento. Harmonização facial sem exageros: você, na sua
            melhor versão. Galeria atualizada a cada novo caso.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal
              key={p}
              delay={(i % 3) * 80}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--color-gold)]/15"
            >
              <Image
                src={`/aplicacoes/instagram/${p}.png`}
                alt="Obra-prima Da Vinci Aesthetic"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 font-accent text-[0.6rem] uppercase tracking-[0.25em] text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                @ cliente · com autorização
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Ver mais no Instagram · {INSTAGRAM_HANDLE}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Ana ---------- */
export function Ana() {
  return (
    <section id="ana" className="theme-light relative overflow-hidden bg-[var(--color-night)] py-24 md:py-36">
      <div className="pattern-light" />
      <div className="canvas-grain" />
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1fr]">
        {/* retrato - placeholder on-brand até a captação */}
        <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-[var(--color-gold)]/25 bg-[var(--color-night-3)]">
          <div className="hex-field absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-night)] via-transparent to-transparent" />
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <Image
              src="/brand/logos/monograma-dv.png"
              alt=""
              width={120}
              height={120}
              className="opacity-70"
            />
            <p className="font-accent text-[0.6rem] uppercase tracking-[0.3em] text-[var(--color-cream-mute)]">
              Retrato · captação profissional
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow mb-6">A especialista</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Dra. Ana Carolina <span className="display-italic text-[var(--color-gold)]">Martins</span>
          </h2>
          <p className="mt-3 font-accent text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-cream-mute)]">
            Biomédica Esteta · CRBM · São Paulo
          </p>

          <blockquote className="mt-9 border-l-2 border-[var(--color-gold)] pl-6">
            <p className="font-display text-2xl italic leading-snug text-cream sm:text-3xl">
              “Cada rosto pede uma leitura própria. Antes do procedimento, vem o
              estudo.”
            </p>
          </blockquote>

          <p className="mt-8 max-w-xl leading-relaxed text-[var(--color-cream-dim)]">
            Biomédica esteta com sólida formação técnica em harmonização facial.
            A Dra. Ana conduz pessoalmente cada avaliação e cada procedimento,
            com transparência sobre processo, materiais e resultado, sempre a
            favor da naturalidade.
          </p>

          <div className="mt-9 grid max-w-md grid-cols-3 gap-6">
            {[
              { n: "Ciência", l: "Estudo & protocolo" },
              { n: "Registro", l: "Biomédica CRBM" },
              { n: "Natural", l: "A favor da naturalidade" },
            ].map((c) => (
              <div key={c.n} className="border-t border-[var(--color-gold)]/20 pt-4">
                <p className="font-display text-lg text-cream">{c.n}</p>
                <p className="mt-1 font-accent text-[0.58rem] uppercase tracking-[0.2em] text-[var(--color-cream-mute)]">
                  {c.l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Depoimentos ---------- */
export function Depoimentos() {
  return (
    <section className="relative bg-[var(--color-night-2)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-5">Prova social</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Quem se reconheceu no espelho de novo
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="flex flex-col rounded-sm border border-[var(--color-gold)]/15 bg-[var(--color-night-3)] p-8"
            >
              <span className="font-display text-5xl leading-none text-[var(--color-gold)]/50">
                “
              </span>
              <p className="-mt-2 flex-1 leading-relaxed text-[var(--color-cream-dim)]">
                {d.quote}
              </p>
              <div className="mt-6 border-t border-[var(--color-gold)]/15 pt-4">
                <p className="font-accent text-[0.7rem] uppercase tracking-[0.18em] text-cream">
                  {d.author}
                </p>
                <p className="mt-1 font-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-cream-mute)]">
                  {d.local}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Praças ---------- */
export function Pracas() {
  return (
    <section id="pracas" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-5">Onde estamos · São Paulo</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Dois endereços. <span className="display-italic text-[var(--color-gold)]">Um mesmo padrão.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {PRACAS.map((p, i) => (
            <Reveal
              key={p.nome}
              delay={i * 100}
              className="group relative overflow-hidden rounded-sm border border-[var(--color-gold)]/15 bg-[var(--color-night-2)] p-9 transition-colors hover:border-[var(--color-gold)]/40"
            >
              <div className="hex-field pointer-events-none absolute inset-0 opacity-[0.05]" />
              <p className="font-accent text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">
                {p.sub}
              </p>
              <h3 className="mt-3 font-display text-3xl text-cream">{p.nome}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-[var(--color-cream-mute)]">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */
export function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 hex-field opacity-[0.06]" />
      <div className="breathe absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.18),transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-7 justify-center">Agende sua avaliação</p>
          <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            O seu rosto merece um <span className="display-italic text-[var(--color-gold)]">olhar de especialista.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-[var(--color-cream-dim)]">
            A avaliação facial é o primeiro passo, sem pressão e sem venda
            agressiva. Uma conversa técnica sobre o conjunto do seu rosto e o que
            é possível, de verdade.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold justify-center"
            >
              Agende sua avaliação facial
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-center">
              Acompanhe no Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-gold)]/15 bg-[var(--color-night-2)] py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Image
              src="/brand/logos/davinci-cream.png"
              alt="Da Vinci Aesthetic"
              width={180}
              height={48}
              className="mb-5"
            />
            <p className="font-display italic text-[var(--color-cream-mute)]">
              A Arte do Refinamento.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-cream-mute)]">
              Clínica de estética avançada e harmonização facial em São Paulo.
              Realçar a sua beleza natural, com técnica e segurança.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="eyebrow mb-4">Navegação</p>
              <ul className="space-y-2.5 text-sm text-[var(--color-cream-mute)]">
                <li><a href="#protocolos" className="hover:text-[var(--color-gold)]">Tratamentos</a></li>
                <li><a href="#galeria" className="hover:text-[var(--color-gold)]">Resultados</a></li>
                <li><a href="#ana" className="hover:text-[var(--color-gold)]">Dra. Ana</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Onde</p>
              <ul className="space-y-2.5 text-sm text-[var(--color-cream-mute)]">
                <li>Conceição · São Judas</li>
                <li>Santa Cruz · V. Mariana</li>
                <li>São Paulo · Brasil</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Contato</p>
              <ul className="space-y-2.5 text-sm text-[var(--color-cream-mute)]">
                <li>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-gold)]/10 pt-7 sm:flex-row">
          <p className="font-accent text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-cream-mute)]">
            Da Vinci Aesthetic · MMXXVI · São Paulo
          </p>
          <p className="font-accent text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-cream-mute)]">
            Feito por Dose de Growth
          </p>
        </div>
      </div>
    </footer>
  );
}

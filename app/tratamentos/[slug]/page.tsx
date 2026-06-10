import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Footer } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import { PROTOCOLOS, getProtocolo, whatsappHref } from "@/lib/content";
import { SITE_URL, OG_IMAGE, PROC_KEYWORDS } from "@/lib/seo";

export function generateStaticParams() {
  return PROTOCOLOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProtocolo(slug);
  if (!p) return {};
  const url = `${SITE_URL}/tratamentos/${p.slug}`;
  return {
    title: `${p.title} em São Paulo`,
    description: p.seoDesc,
    keywords: PROC_KEYWORDS[p.slug],
    alternates: { canonical: url },
    openGraph: {
      title: `${p.title} · Da Vinci Aesthetic`,
      description: p.seoDesc,
      url,
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: p.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.title} · Da Vinci Aesthetic`,
      description: p.seoDesc,
      images: [OG_IMAGE],
    },
  };
}

export default async function TratamentoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProtocolo(slug);
  if (!p) notFound();

  const outros = PROTOCOLOS.filter((x) => x.slug !== p.slug).slice(0, 4);

  const url = `${SITE_URL}/tratamentos/${p.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        name: p.title,
        description: p.seoDesc,
        url,
        procedureType: "https://schema.org/NoninvasiveProcedure",
        bodyLocation: "Face",
        provider: { "@id": `${SITE_URL}/#clinica` },
        howPerformed: p.etapas.map((e) => `${e.t}: ${e.d}`).join(" "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Tratamentos", item: `${SITE_URL}/#protocolos` },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero do tratamento */}
        <section className="relative overflow-hidden hex-field pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_15%,#2a3858_0%,#1a2438_60%)]" />
          <div className="canvas-grain" />
          <div className="relative mx-auto max-w-[1280px] px-5 md:px-10">
            <nav className="mb-10 font-accent text-[0.62rem] uppercase tracking-[0.25em] text-[var(--color-cream-mute)]">
              <Link href="/" className="hover:text-[var(--color-gold)]">Início</Link>
              <span className="mx-2 text-[var(--color-gold)]/50">/</span>
              <Link href="/#protocolos" className="hover:text-[var(--color-gold)]">Tratamentos</Link>
              <span className="mx-2 text-[var(--color-gold)]/50">/</span>
              <span className="text-[var(--color-cream-dim)]">{p.title}</span>
            </nav>

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <div className="relative mb-7 h-16 w-16">
                  <Image src={`/brand/icones/${p.icon}-dourado.png`} alt="" fill className="object-contain object-left" />
                </div>
                <p className="eyebrow mb-4">{p.tagline}</p>
                <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                  {p.title}
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-cream-dim)]">
                  {p.intro[0]}
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-gold justify-center">
                    Agende sua avaliação
                  </a>
                  <Link href="/#protocolos" className="btn-ghost justify-center">
                    Ver todos os tratamentos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corpo — respiro claro */}
        <section className="theme-light relative overflow-hidden bg-[var(--color-night)] py-20 md:py-28">
          <div className="pattern-light" />
          <div className="relative z-10 mx-auto grid max-w-[1280px] gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Texto + como funciona */}
            <Reveal>
              <div className="space-y-5 text-[var(--color-cream-dim)] leading-relaxed">
                {p.intro.slice(1).map((par, i) => (
                  <p key={i} className={i === 0 ? "text-lg" : ""}>{par}</p>
                ))}
              </div>

              <h2 className="mt-14 mb-8 font-display text-3xl text-cream">Como funciona</h2>
              <ol className="space-y-6">
                {p.etapas.map((e, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="font-display text-3xl italic text-[var(--color-gold)]">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-accent text-sm font-600 uppercase tracking-[0.18em] text-cream">
                        {e.t}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-cream-mute)]">
                        {e.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* Card lateral: benefícios + indicações + CTA */}
            <Reveal delay={120}>
              <div className="rounded-sm border border-[var(--color-gold)]/25 bg-[var(--color-night-3)] p-8">
                <p className="eyebrow mb-5">O que entrega</p>
                <ul className="space-y-3">
                  {p.beneficios.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--color-cream-dim)]">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--color-gold)]" />
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mb-5 mt-9">Indicado para</p>
                <ul className="space-y-3">
                  {p.indicacoes.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--color-cream-dim)]">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--color-gold)]" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-gold mt-9 w-full justify-center">
                  Falar sobre {p.title.toLowerCase()}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--color-gold)]/10 py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <Reveal>
              <p className="eyebrow mb-5">Perguntas frequentes</p>
              <h2 className="mb-10 font-display text-3xl text-cream sm:text-4xl">
                Dúvidas comuns sobre {p.title.toLowerCase()}
              </h2>
            </Reveal>
            <div className="divide-y divide-[var(--color-gold)]/12 border-y border-[var(--color-gold)]/12">
              {p.faq.map((f, i) => (
                <Reveal key={i} delay={i * 70} className="py-6">
                  <h3 className="font-display text-xl text-cream">{f.q}</h3>
                  <p className="mt-2 leading-relaxed text-[var(--color-cream-mute)]">{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 hex-field opacity-[0.06]" />
          <div className="breathe absolute left-1/2 top-1/2 h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.16),transparent_65%)]" />
          <div className="relative mx-auto max-w-2xl px-5 text-center md:px-10">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Vamos estudar o <span className="display-italic text-[var(--color-gold)]">seu rosto?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[var(--color-cream-dim)]">
                A avaliação facial é o primeiro passo, sem pressão e sem venda agressiva. Uma conversa técnica sobre o que faz sentido para você.
              </p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-gold mt-9 justify-center">
                Agende sua avaliação
              </a>
            </Reveal>
          </div>
        </section>

        {/* Outros tratamentos */}
        <section className="bg-[var(--color-night-2)] py-20 md:py-24">
          <div className="mx-auto max-w-[1280px] px-5 md:px-10">
            <Reveal className="mb-10">
              <p className="eyebrow mb-4">Outros tratamentos</p>
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Explore o conjunto</h2>
            </Reveal>
            <div className="grid gap-px overflow-hidden bg-[var(--color-gold)]/12 sm:grid-cols-2 lg:grid-cols-4">
              {outros.map((s, i) => (
                <Reveal key={s.slug} delay={i * 70} className="bg-[var(--color-night)]">
                  <Link
                    href={`/tratamentos/${s.slug}`}
                    className="group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-[var(--color-night-3)]"
                  >
                    <div className="relative mb-5 h-10 w-10">
                      <Image src={`/brand/icones/${s.icon}-dourado.png`} alt="" fill className="object-contain object-left" />
                    </div>
                    <h3 className="font-display text-lg text-cream">{s.title}</h3>
                    <span className="mt-4 font-accent text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-gold)] opacity-60 transition-opacity group-hover:opacity-100">
                      Ver tratamento →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

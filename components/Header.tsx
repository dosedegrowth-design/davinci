"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV, whatsappHref } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-night)]/85 backdrop-blur-md border-b border-[var(--color-gold)]/15 py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 md:px-10">
        <a href="/" className="relative block h-9 w-[150px] shrink-0">
          <Image
            src="/brand/logos/davinci-cream.png"
            alt="Da Vinci Aesthetic"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-accent text-[0.72rem] font-600 uppercase tracking-[0.25em] text-[var(--color-cream-mute)] transition-colors hover:text-[var(--color-gold)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* CTA desktop (wrapper controla o display p/ não conflitar com .btn-gold) */}
          <div className="hidden lg:block">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !px-6 !py-3"
            >
              Agende sua avaliação
            </a>
          </div>

          {/* CTA mobile discreto: pill com ícone de WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agende pelo WhatsApp"
            className="flex h-9 items-center gap-1.5 rounded-full border border-[var(--color-gold)]/45 px-3 text-[var(--color-gold)] transition-colors active:bg-[var(--color-gold)]/10 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.005zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="font-accent text-[0.6rem] font-500 uppercase tracking-[0.18em]">
              Agende
            </span>
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-px w-6 bg-[var(--color-gold)] transition-all ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-[var(--color-gold)] transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-[var(--color-gold)] transition-all ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-[var(--color-night)] px-8 pt-28 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-7">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-cream"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="eyebrow mr-3 align-middle">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-gold mt-12 justify-center"
        >
          Agende sua avaliação facial
        </a>
      </div>
    </header>
  );
}

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
        <a href="#top" className="relative block h-9 w-[150px] shrink-0">
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

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-gold !px-6 !py-3 sm:inline-flex"
          >
            Agende sua avaliação
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

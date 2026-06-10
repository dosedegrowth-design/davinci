"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RESULTADOS } from "@/lib/content";

const N = RESULTADOS.length;
const LOOP = [...RESULTADOS, ...RESULTADOS]; // duplica para loop infinito

export default function ResultadosCarousel() {
  const [i, setI] = useState(0);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(false);
  const dragX = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // carrega as fotos assim que o carrossel se aproxima da tela (não compete com o hero)
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => v + 1), 3600);
    return () => clearInterval(t);
  }, [paused]);

  // loop infinito: ao entrar na 2ª cópia, recua N sem animação
  const onEnd = useCallback(() => {
    if (i >= N) {
      setAnim(false);
      setI((v) => v - N);
    }
  }, [i]);

  useEffect(() => {
    if (!anim) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnim(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [anim]);

  const go = (d: number) => setI((v) => v + d);

  // swipe / drag
  const onDown = (x: number) => (dragX.current = x);
  const onUp = (x: number) => {
    if (dragX.current === null) return;
    const dx = x - dragX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    dragX.current = null;
  };

  return (
    <div
      ref={rootRef}
      className="coverflow relative left-1/2 w-screen -translate-x-1/2 select-none py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchEnd={(e) => onUp(e.changedTouches[0].clientX)}
      onPointerDown={(e) => onDown(e.clientX)}
      onPointerUp={(e) => onUp(e.clientX)}
    >
      <div
        className="flex items-center"
        onTransitionEnd={onEnd}
        style={{
          transform: `translateX(calc(50% - (${i} + 0.5) * var(--step)))`,
          transition: anim
            ? "transform 0.8s cubic-bezier(0.16,1,0.3,1)"
            : "none",
        }}
      >
        {LOOP.map((r, idx) => {
          const d = idx - i;
          const ad = Math.abs(d);
          const destaque = ad <= 1;
          const peek = ad === 2;
          return (
            <div
              key={idx}
              className="coverflow-card shrink-0"
              style={{
                transform: `scale(${destaque ? 1 : peek ? 0.8 : 0.66})`,
                opacity: destaque ? 1 : peek ? 0.45 : 0,
                filter: destaque ? "none" : "blur(2px)",
                transition:
                  "transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.8s, filter 0.8s",
              }}
            >
              <button
                onClick={() => d !== 0 && go(d)}
                aria-label={r.label}
                className="group relative block w-full overflow-hidden rounded-sm border border-[var(--color-gold)]/25"
                tabIndex={destaque ? 0 : -1}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={r.src}
                    alt={`Resultado ${r.label} — Da Vinci Aesthetic`}
                    fill
                    sizes="(max-width:768px) 74vw, 26vw"
                    className="object-cover"
                    loading={active ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/55 via-transparent to-transparent" />
                </div>
              </button>
              <p
                className="mt-4 text-center font-accent text-[0.62rem] uppercase tracking-[0.25em] text-[var(--color-gold)] transition-opacity duration-500"
                style={{ opacity: d === 0 ? 1 : 0 }}
              >
                {r.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* setas */}
      <button
        onClick={() => go(-1)}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-night)]/70 text-[var(--color-gold)] backdrop-blur transition-colors hover:bg-[var(--color-night)] md:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Próximo"
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-night)]/70 text-[var(--color-gold)] backdrop-blur transition-colors hover:bg-[var(--color-night)] md:flex"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
      </button>
    </div>
  );
}

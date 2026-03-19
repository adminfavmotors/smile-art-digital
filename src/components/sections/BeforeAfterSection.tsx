import { useRef, useCallback, useEffect, useState } from 'react';

const cases = [
  { before: 'Przebarwienia i osad', after: 'Piękny, czysty uśmiech' },
  { before: 'Zniszczone wypełnienia', after: 'Nowe licówki porcelanowe' },
  { before: 'Brak zęba przedniego', after: 'Implant z koroną cyrkonową' },
];

function BASlider({ beforeLabel, afterLabel }: { beforeLabel: string; afterLabel: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updatePos(clientX);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [updatePos]);

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-col-resize select-none bg-primary-mid">
      {/* Before side */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-2xl text-primary-foreground opacity-40">PRZED</div>
          <p className="text-light text-sm mt-1 font-body">{beforeLabel}</p>
        </div>
      </div>
      {/* After side */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(213 53% 25%), hsl(214 50% 18%))' }}>
          <div className="text-center">
            <div className="font-heading text-2xl text-gold opacity-80">PO</div>
            <p className="text-light text-sm mt-1 font-body">{afterLabel}</p>
          </div>
        </div>
      </div>
      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-gold cursor-col-resize z-10"
        style={{ left: `${pos}%` }}
        onMouseDown={() => { dragging.current = true; }}
        onTouchStart={() => { dragging.current = true; }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
          <span className="text-primary font-bold text-xs">⟷</span>
        </div>
      </div>
      {/* Labels */}
      <span className="absolute bottom-3 left-3 bg-navy text-primary-foreground text-xs px-2 py-1 rounded-full font-body font-semibold">PRZED</span>
      <span className="absolute bottom-3 right-3 bg-gold text-primary text-xs px-2 py-1 rounded-full font-body font-semibold">PO</span>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl text-center text-foreground mb-12 reveal">
          Efekty naszej pracy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="reveal" data-delay={String(i * 0.15)}>
              <BASlider beforeLabel={c.before} afterLabel={c.after} />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-6 font-body">
          * Zdjęcia za zgodą pacjentów. Wyniki indywidualne.
        </p>
      </div>
    </section>
  );
}

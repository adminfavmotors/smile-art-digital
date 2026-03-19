import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    name: 'Higienizacja',
    desc: 'Profilaktyczne czyszczenie i polerowanie',
    price: 'od 200 zł',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <path d="M20 12v4m0 8v4M12 20h4m8 0h4" stroke="currentColor" strokeWidth="2" className="text-gold"/>
        <circle cx="20" cy="20" r="3" fill="currentColor" className="text-gold"/>
      </svg>
    ),
  },
  {
    name: 'Leczenie próchnicy',
    desc: 'Kompozytowe wypełnienia bez bólu',
    price: 'od 200 zł',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 5c-6 0-8 4-8 8 0 6 4 12 6 16 .5 1 1 2 2 2s1.5-1 2-2c2-4 6-10 6-16 0-4-2-8-8-8z" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <path d="M15 16l3 3 7-7" stroke="currentColor" strokeWidth="2" className="text-gold"/>
      </svg>
    ),
  },
  {
    name: 'Wybielanie zębów',
    desc: 'Profesjonalne wybielanie gabinetowe',
    price: 'od 500 zł',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" className="text-gold"/>
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4M12 12l3 3M25 25l3 3M28 12l-3 3M15 25l-3 3" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
      </svg>
    ),
  },
  {
    name: 'Implanty',
    desc: 'Trwałe implanty tytanowe Nobel i Straumann',
    price: 'od 2 500 zł',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="16" y="6" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <path d="M17 16h6v3l-1 2h-4l-1-2v-3z" stroke="currentColor" strokeWidth="1.5" className="text-gold"/>
        <path d="M18 21l-1 13M22 21l1 13" stroke="currentColor" strokeWidth="1.5" className="text-primary" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    name: 'Ortodoncja',
    desc: 'Aparaty stałe, ceramiczne i Invisalign',
    price: 'od 1 800 zł',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="16" width="6" height="8" rx="2" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <rect x="17" y="14" width="6" height="10" rx="2" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <rect x="26" y="16" width="6" height="8" rx="2" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <path d="M8 20h24" stroke="currentColor" strokeWidth="1.5" className="text-gold"/>
      </svg>
    ),
  },
  {
    name: 'Stomatologia dziecięca',
    desc: 'Przyjazna opieka dla dzieci od 3 lat',
    price: 'od 80 zł',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 8c-4 0-6 3-6 6 0 5 3 9 5 12 .3.7.6 1 1 1s.7-.3 1-1c2-3 5-7 5-12 0-3-2-6-6-6z" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <path d="M18 18c1 1 3 1 4 0" stroke="currentColor" strokeWidth="1.5" className="text-gold"/>
        <circle cx="17" cy="15" r="0.5" fill="currentColor" className="text-gold"/>
        <circle cx="23" cy="15" r="0.5" fill="currentColor" className="text-gold"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section id="uslugi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Nasze usługi</h2>
          <p className="text-muted-foreground text-lg font-body">Kompleksowa opieka stomatologiczna pod jednym dachem</p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-accent-light transition-colors" aria-label="Przewiń w lewo">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          {canScrollRight && (
            <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-accent-light transition-colors" aria-label="Przewiń w prawo">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {services.map((s, i) => (
              <div
                key={s.name}
                className="reveal min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start bg-card rounded-lg border-t-[3px] border-accent p-6 shadow-card hover:-translate-y-1.5 transition-all duration-300 hover:shadow-card-hover"
                data-delay={String(i * 0.1)}
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-body font-bold text-lg text-foreground mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 font-body">{s.desc}</p>
                <span className="inline-block bg-accent-light text-foreground text-sm font-bold font-body px-3 py-1 rounded-full mb-4">{s.price}</span>
                <div>
                  <Link to="/cennik" className="text-gold text-sm font-body font-semibold hover:underline">
                    Dowiedz się więcej →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/cennik" className="text-gold font-body font-semibold hover:underline text-lg">
            → Zobacz pełny cennik
          </Link>
        </div>
      </div>
    </section>
  );
}

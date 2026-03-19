import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr Monika Zielińska',
    spec: 'Stomatologia estetyczna, protetyka',
    edu: 'UJ CM Kraków, kurs licówek w Mediolanie',
    exp: '11 lat',
    quote: '„Każdy uśmiech traktuję jak dzieło sztuki."',
    initials: 'MZ',
  },
  {
    name: 'Dr Piotr Adamski',
    spec: 'Implantologia, chirurgia stomatologiczna',
    edu: 'UM Kraków, certyfikat EAO, Nobel Biocare',
    exp: '8 lat',
    quote: '„Precyzja i spokój — to moje zasady w gabinecie."',
    initials: 'PA',
  },
  {
    name: 'Dr Zofia Lis',
    spec: 'Ortodoncja, Invisalign Provider',
    edu: 'UJ CM, certyfikat Invisalign Diamond',
    exp: '7 lat',
    quote: '„Piękne zęby to inwestycja w pewność siebie."',
    initials: 'ZL',
  },
];

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl text-center text-foreground mb-12 reveal">
          Nasz zespół
        </h2>

        <div className="relative">
          <button onClick={() => scrollRef.current?.scrollBy({ left: -360, behavior: 'smooth' })} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-card items-center justify-center hover:bg-accent-light transition-colors hidden md:flex" aria-label="Poprzedni lekarz">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scrollRef.current?.scrollBy({ left: 360, behavior: 'smooth' })} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-card items-center justify-center hover:bg-accent-light transition-colors hidden md:flex" aria-label="Następny lekarz">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            {doctors.map((doc, i) => (
              <div
                key={doc.name}
                className="reveal min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start bg-background rounded-lg p-8 shadow-card hover:-translate-y-1.5 transition-all duration-300 text-center"
                data-delay={String(i * 0.15)}
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full border-3 border-accent bg-navy mx-auto mb-6 flex items-center justify-center" style={{ borderWidth: '3px' }}>
                  <span className="text-gold font-heading text-2xl">{doc.initials}</span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-1">{doc.name}</h3>
                <p className="text-gold text-sm font-body font-semibold mb-3">{doc.spec}</p>
                <p className="text-muted-foreground text-xs font-body mb-1">{doc.edu}</p>
                <p className="text-muted-foreground text-xs font-body mb-4">Doświadczenie: {doc.exp}</p>
                <p className="text-foreground italic font-body text-sm">{doc.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

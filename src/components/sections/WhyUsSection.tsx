import { Check } from 'lucide-react';

const points = [
  'Znieczulenie komputerowe — koniec z bólem igły',
  'Sprzęt RTG 3D (CBCT) — precyzyjna diagnostyka',
  'Przyjęcia do 21:00 — dla pracujących',
  'Bezpłatna pierwsza konsultacja',
  'Leczenie w ratach 0% — MediRaty',
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute top-12 left-8 text-[240px] leading-none font-heading text-accent-light opacity-40 select-none pointer-events-none" aria-hidden="true">
        „
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="font-heading text-3xl md:text-[52px] md:leading-tight text-foreground mb-6">
              Dlaczego pacjenci nam ufają?
            </h2>
            <div className="w-16 h-1 bg-gold rounded mb-6" />
            <p className="text-muted-foreground text-lg font-body leading-relaxed">
              Od ponad dekady dbamy o uśmiechy mieszkańców Krakowa. Stawiamy na nowoczesną technologię, bezbolesne zabiegi i indywidualne podejście do każdego pacjenta.
            </p>
          </div>

          <div className="space-y-4">
            {points.map((point, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-4 bg-background rounded-lg p-4 shadow-card hover:-translate-y-1 transition-all duration-300"
                data-delay={String(i * 0.1)}
              >
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span className="font-body font-semibold text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

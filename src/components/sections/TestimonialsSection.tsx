import { useState, useEffect } from 'react';

const reviews = [
  { text: '„Najlepszy dentysta w Krakowie. Pani Monika wykonała mi licówki — wynik niesamowity. Ból zerowy."', author: 'Agnieszka W.' },
  { text: '„Implant wszczepiony w jeden dzień. Dr Adamski jest niesamowicie precyzyjny. Polecam każdemu."', author: 'Rafał K.' },
  { text: '„Invisalign u dr Zofii — po 14 miesiącach mam zęby z reklamy. Warto było!"', author: 'Natalia B.' },
  { text: '„Higienizacja co kwartał od 3 lat. Perfekcyjna robota, miła atmosfera."', author: 'Marek S.' },
  { text: '„Byłam przerażona dentystą. Tutaj to się zmieniło — spokój, profesjonalizm, zero bólu."', author: 'Ewa T.' },
  { text: '„Syn ma 8 lat i LUBI chodzić do dentysty. To mówi wszystko."', author: 'Marta i Kacper L.' },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-12 reveal">
          Co mówią nasi pacjenci
        </h2>

        <div className="relative max-w-3xl mx-auto min-h-[180px]">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="glass-card rounded-lg p-8 md:p-10">
                <p className="text-primary-foreground text-lg md:text-xl font-body leading-relaxed mb-4">
                  {r.text}
                </p>
                <p className="text-gold font-body font-semibold">— {r.author}</p>
                <p className="text-gold text-sm mt-1">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold w-6' : 'bg-accent/30'
              }`}
              aria-label={`Opinia ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-light text-sm mt-8 font-body">
          ★ 4,9 / 5 na podstawie 1 500+ opinii · Google Maps
        </p>
      </div>
    </section>
  );
}

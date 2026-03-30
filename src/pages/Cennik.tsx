import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { absoluteUrl } from '@/lib/site';

const categories = ['Wszystkie', 'Higiena', 'Leczenie', 'Estetyka', 'Implanty', 'Ortodoncja', 'Dzieci'];

interface ServiceItem {
  name: string;
  desc: string;
  price: string;
  category: string;
}

const services: ServiceItem[] = [
  { name: 'Przegląd stomatologiczny', desc: 'Kompleksowa kontrola jamy ustnej', price: 'od 0 zł', category: 'Higiena' },
  { name: 'Higienizacja (scaling + piaskowanie)', desc: 'Profesjonalne czyszczenie zębów', price: 'od 200 zł', category: 'Higiena' },
  { name: 'Fluoryzacja', desc: 'Wzmocnienie szkliwa fluorem', price: 'od 80 zł', category: 'Higiena' },
  { name: 'Wypełnienie kompozytowe', desc: 'Estetyczne wypełnienie ubytku', price: 'od 200 zł', category: 'Leczenie' },
  { name: 'Leczenie kanałowe (1 kanał)', desc: 'Endodoncja z mikroskopem', price: 'od 400 zł', category: 'Leczenie' },
  { name: 'Leczenie kanałowe (wielokanałowe)', desc: 'Endodoncja zębów bocznych', price: 'od 800 zł', category: 'Leczenie' },
  { name: 'Ekstrakcja zęba', desc: 'Usunięcie zęba z znieczuleniem', price: 'od 150 zł', category: 'Leczenie' },
  { name: 'Wybielanie gabinetowe Beyond', desc: 'Profesjonalne wybielanie lampą', price: 'od 800 zł', category: 'Estetyka' },
  { name: 'Wybielanie nakładkowe', desc: 'Nakładki domowe z żelem', price: 'od 500 zł', category: 'Estetyka' },
  { name: 'Licówki porcelanowe', desc: 'Idealna estetyka przednich zębów', price: 'od 1 800 zł', category: 'Estetyka' },
  { name: 'Korona cyrkonowa', desc: 'Trwała i estetyczna korona', price: 'od 1 500 zł', category: 'Estetyka' },
  { name: 'Implant (Nobel Biocare)', desc: 'Wszczepienie implantu tytanowego', price: 'od 2 500 zł', category: 'Implanty' },
  { name: 'Implant (Straumann)', desc: 'Implant premium szwajcarski', price: 'od 3 000 zł', category: 'Implanty' },
  { name: 'Korona na implancie', desc: 'Odbudowa protetyczna na implancie', price: 'od 2 000 zł', category: 'Implanty' },
  { name: 'Podniesienie dna zatoki', desc: 'Sinus lift przed implantacją', price: 'od 2 000 zł', category: 'Implanty' },
  { name: 'Aparat stały metalowy', desc: 'Klasyczny aparat ortodontyczny', price: 'od 1 800 zł', category: 'Ortodoncja' },
  { name: 'Aparat ceramiczny', desc: 'Dyskretny aparat biały', price: 'od 3 500 zł', category: 'Ortodoncja' },
  { name: 'Invisalign', desc: 'Przezroczyste nakładki ortodontyczne', price: 'od 6 000 zł', category: 'Ortodoncja' },
  { name: 'Retainer (utrzymywacz)', desc: 'Stabilizacja po leczeniu', price: 'od 400 zł', category: 'Ortodoncja' },
  { name: 'Przegląd dziecięcy', desc: 'Kontrola od 3 roku życia', price: 'od 0 zł', category: 'Dzieci' },
  { name: 'Lakowanie zębów', desc: 'Ochrona bruzd zębowych u dzieci', price: 'od 80 zł', category: 'Dzieci' },
  { name: 'Fluoryzacja dziecięca', desc: 'Wzmocnienie zębów mlecznych', price: 'od 60 zł', category: 'Dzieci' },
  { name: 'Wypełnienie zęba mlecznego', desc: 'Leczenie próchnicy u dzieci', price: 'od 120 zł', category: 'Dzieci' },
];

export default function Cennik() {
  const [active, setActive] = useState('Wszystkie');
  useScrollReveal();

  const filtered = active === 'Wszystkie' ? services : services.filter((service) => service.category === active);

  return (
    <>
      <SEOHead
        title="Usługi i cennik — SmileArt Dental Kraków"
        description="Sprawdź cennik usług stomatologicznych SmileArt Dental w Krakowie. Implanty, ortodoncja, wybielanie, leczenie — transparentne ceny."
        canonical={absoluteUrl('/cennik')}
      />

      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light text-sm font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">
              Strona główna
            </Link>{' '}
            / Usługi i cennik
          </p>
          <h1 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-4">
            Usługi i cennik
          </h1>
          <p className="text-light text-lg font-body">
            Sprawdź nasze usługi i ceny — bez ukrytych opłat
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-30 bg-background border-b border-border py-3">
        <div
          className="container mx-auto px-4 flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-body font-semibold transition-all ${
                active === cat ? 'bg-gold text-primary' : 'bg-card text-muted-foreground hover:bg-accent-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, i) => (
              <div
                key={service.name}
                className="reveal bg-card rounded-lg border-t-[3px] border-accent p-6 shadow-card hover:-translate-y-1.5 transition-all duration-300"
                data-delay={String(i * 0.05)}
              >
                <span className="inline-block bg-accent-light text-foreground text-xs font-body font-bold px-2 py-1 rounded-full mb-3">
                  {service.category}
                </span>
                <h3 className="font-body font-bold text-lg text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm font-body mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-accent-light text-foreground text-sm font-bold font-body px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                  <Button variant="goldOutline" size="sm" asChild>
                    <a href="/#kontakt">Zapytaj o wizytę →</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy rounded-lg p-8 md:p-12 text-center reveal">
            <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
              Raty 0%
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-accent-light text-primary text-sm font-body font-bold px-4 py-1.5 rounded-full">
                MediRaty
              </span>
              <span className="bg-accent-light text-primary text-sm font-body font-bold px-4 py-1.5 rounded-full">
                Twisto
              </span>
            </div>
            <p className="text-light font-body max-w-xl mx-auto">
              Rozłóż płatność za leczenie na wygodne raty 0%. Nie musisz czekać — zacznij
              leczenie już dziś i płać w ratach bez dodatkowych kosztów.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

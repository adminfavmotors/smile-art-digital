import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { absoluteUrl, siteConfig } from '@/lib/site';

export default function PolitykaPriv() {
  return (
    <>
      <SEOHead
        title="Polityka prywatności — SmileArt Dental Kraków"
        description="Informacje o przetwarzaniu danych w portfolio projektu SmileArt Dental."
        canonical={absoluteUrl('/polityka-prywatnosci')}
      />
      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light text-sm font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">
              Strona główna
            </Link>{' '}
            / Polityka prywatności
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground">
            Polityka prywatności
          </h1>
        </div>
      </section>
      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl text-foreground">1. Charakter strony</h2>
          <p>
            Witryna {siteConfig.name} jest projektem portfolio służącym do prezentacji warstwy
            wizualnej i front-endowej. Strona nie obsługuje rejestracji pacjentów ani rzeczywistej
            sprzedaży usług medycznych.
          </p>

          <h2 className="font-heading text-2xl text-foreground">2. Formularz kontaktowy</h2>
          <p>
            Formularz dostępny na stronie ma charakter demonstracyjny. Dane wpisane w pola
            formularza nie są zapisywane po stronie serwera, nie trafiają do CRM i nie tworzą
            realnej rezerwacji wizyty.
          </p>

          <h2 className="font-heading text-2xl text-foreground">3. Zakres danych</h2>
          <p>
            Strona może chwilowo przetwarzać dane wpisane przez użytkownika wyłącznie w pamięci
            przeglądarki, aby wyświetlić stan interfejsu. Projekt nie wykorzystuje własnych
            mechanizmów analitycznych ani marketingowych.
          </p>

          <h2 className="font-heading text-2xl text-foreground">4. Usługi zewnętrzne</h2>
          <p>
            W serwisie mogą być osadzane treści zewnętrzne, takie jak Google Maps. Korzystanie z
            takich elementów może wiązać się z przetwarzaniem danych przez ich dostawców na
            zasadach określonych w ich własnych politykach.
          </p>

          <h2 className="font-heading text-2xl text-foreground">5. Kontakt</h2>
          <p>
            W sprawach dotyczących tej demonstracyjnej witryny skontaktuj się przez:{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gold underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [honey, setHoney] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honey) return; // honeypot
    setSubmitted(true);
    // GTM event
    window.dataLayer?.push({
      event: 'form_submission',
      form_type: 'appointment_request',
      clinic: 'SmileArt Dental',
    });
  };

  return (
    <section id="kontakt" className="scroll-mt-28 py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form side */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2 reveal">
              Zostaw numer — oddzwonimy w 1 godzinę
            </h2>
            <div className="w-16 h-1 bg-gold rounded mb-8" />

            {submitted ? (
              <div className="bg-background rounded-lg p-12 text-center shadow-card reveal">
                <div className="w-16 h-16 rounded-full bg-success mx-auto mb-4 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2">Dziękujemy!</h3>
                <p className="text-muted-foreground font-body">Zadzwonimy do Ciebie wkrótce.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 reveal" data-delay="0.1">
                {/* Honeypot */}
                <input
                  name="_honey"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body font-semibold text-foreground mb-1">Imię i nazwisko *</label>
                    <input id="name" required type="text" maxLength={100} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-body font-semibold text-foreground mb-1">Numer telefonu *</label>
                    <input id="phone" required type="tel" maxLength={20} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-body font-semibold text-foreground mb-1">Wybierz usługę</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="">— Wybierz —</option>
                    <option>Przegląd</option>
                    <option>Higienizacja</option>
                    <option>Leczenie</option>
                    <option>Wybielanie</option>
                    <option>Implant</option>
                    <option>Aparat</option>
                    <option>Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-body font-semibold text-foreground mb-1">Preferowany termin</label>
                  <input id="date" type="date" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body font-semibold text-foreground mb-1">Wiadomość</label>
                  <textarea id="message" rows={3} maxLength={1000} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                </div>

                <div className="space-y-2">
                  <label className="flex items-start gap-2 text-sm font-body text-muted-foreground cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-accent" />
                    <span>Wyrażam zgodę na przetwarzanie danych osobowych. <a href="/polityka-prywatnosci" className="text-gold underline">Polityka prywatności</a> *</span>
                  </label>
                  <label className="flex items-start gap-2 text-sm font-body text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="mt-1 accent-accent" />
                    <span>Wyrażam zgodę na komunikację marketingową</span>
                  </label>
                </div>

                <Button variant="gold" size="lg" type="submit" className="w-full md:w-auto">
                  Umów wizytę →
                </Button>
              </form>
            )}
          </div>

          {/* Info + map side */}
          <div className="lg:col-span-5 reveal" data-delay="0.2">
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-body text-foreground">ul. Józefa 14/2, 31-056 Kraków</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <a href="tel:+48123456789" className="font-body text-foreground hover:text-gold transition-colors">+48 12 345 67 89</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <a href="mailto:kontakt@smileartdental.pl" className="font-body text-foreground hover:text-gold transition-colors">kontakt@smileartdental.pl</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-foreground">Pn–Pt 9:00–21:00 | Sb 9:00–16:00</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <a href="https://wa.me/48123456789" target="_blank" rel="noopener noreferrer" className="font-body text-foreground hover:text-gold transition-colors">WhatsApp</a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-card">
              <iframe
                title="SmileArt Dental lokalizacja"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d19.9476!3d50.0516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAzJzA1LjgiTiAxOcKwNTYnNTEuNCJF!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

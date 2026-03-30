import { type FormEvent, useState } from 'react';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import {
  CalendarDays,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [honey, setHoney] = useState('');
  const [preferredDate, setPreferredDate] = useState<Date>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honey) return;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="scroll-mt-28 py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2 reveal">
              Zostaw numer - oddzwonimy w 1 godzinę
            </h2>
            <div className="w-16 h-1 bg-gold rounded mb-8" />

            {submitted ? (
              <div className="bg-background rounded-lg p-12 text-center shadow-card reveal">
                <div className="w-16 h-16 rounded-full bg-success mx-auto mb-4 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2">Dziękujemy!</h3>
                <p className="text-muted-foreground font-body">Zadzwonimy do Ciebie wkrótce.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 reveal" data-delay="0.1">
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-body font-semibold text-foreground mb-1"
                    >
                      Imię i nazwisko *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-body font-semibold text-foreground mb-1"
                    >
                      Numer telefonu *
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-body font-semibold text-foreground mb-1"
                  >
                    Wybierz usługę
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">- Wybierz -</option>
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
                  <label
                    htmlFor="date"
                    className="block text-sm font-body font-semibold text-foreground mb-1"
                  >
                    Preferowany termin
                  </label>
                  <input
                    id="date"
                    type="hidden"
                    value={preferredDate ? format(preferredDate, 'yyyy-MM-dd') : ''}
                  />
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          'w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-left text-foreground focus:outline-none focus:ring-2 focus:ring-accent flex items-center justify-between gap-3',
                          !preferredDate && 'text-muted-foreground',
                        )}
                        aria-label="Wybierz preferowany termin"
                      >
                        <span>
                          {preferredDate
                            ? format(preferredDate, 'd MMMM yyyy', { locale: pl })
                            : 'Wybierz datę'}
                        </span>
                        <CalendarDays className="h-5 w-5 text-gold flex-shrink-0" aria-hidden="true" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={preferredDate}
                        onSelect={setPreferredDate}
                        initialFocus
                        locale={pl}
                        weekStartsOn={1}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-body font-semibold text-foreground mb-1"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-start gap-2 text-sm font-body text-muted-foreground cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-accent" />
                    <span>
                      Wyrażam zgodę na przetwarzanie danych osobowych.{' '}
                      <a href="/polityka-prywatnosci" className="text-gold underline">
                        Polityka prywatności
                      </a>{' '}
                      *
                    </span>
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

          <div className="lg:col-span-5 reveal" data-delay="0.2">
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-body text-foreground">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="font-body text-foreground hover:text-gold transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-body text-foreground hover:text-gold transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-foreground">{siteConfig.contact.hoursFull}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-foreground hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
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

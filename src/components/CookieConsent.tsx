import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: string) => {
    localStorage.setItem('cookie_consent', type);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-navy p-4 md:p-6 shadow-2xl border-t border-accent/20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-primary-foreground">
          <span className="text-2xl">🍪</span>
          <p className="text-sm text-light">
            Używamy plików cookies, aby zapewnić najlepsze wrażenia.{' '}
            <Link to="/polityka-cookies" className="text-gold underline">Więcej informacji</Link>
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="heroOutline" size="sm" onClick={() => accept('essential')}>
            Odrzuć opcjonalne
          </Button>
          <Button variant="gold" size="sm" onClick={() => accept('all')}>
            Akceptuj wszystkie
          </Button>
        </div>
      </div>
    </div>
  );
}

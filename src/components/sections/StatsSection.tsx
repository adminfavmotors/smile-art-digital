import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 1500, suffix: '+', label: 'Pacjentów' },
  { value: 10, suffix: '', label: 'Lat praktyki' },
  { value: 98, suffix: '%', label: 'Zadowolonych' },
  { value: 4.9, suffix: ' ★', label: 'Ocena Google', decimal: true },
];

function StatItem({ value, suffix, label, decimal }: { value: number; suffix: string; label: string; decimal?: boolean }) {
  const end = decimal ? Math.round(value * 10) : value;
  const { count, ref } = useCountUp(end);
  const display = decimal ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className="text-center px-4 md:px-8">
      <div className="text-gold text-4xl md:text-5xl font-body font-bold">
        {display}{suffix}
      </div>
      <div className="text-light text-sm mt-2 font-body">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center divide-x divide-accent/20">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

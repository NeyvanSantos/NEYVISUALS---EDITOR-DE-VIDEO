'use client';

import { useEffect, useRef, useState } from 'react';

const STATS_DATA = [
  { value: 150, suffix: '+', label: 'Projetos Entregues' },
  { value: 5, suffix: '+', label: 'Anos de Experiência' },
  { value: 80, suffix: '+', label: 'Clientes Atendidos' },
  { value: 10, suffix: 'K+', label: 'Horas de Edição' },
];

import { useLanguage } from '@/context/LanguageContext';

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-n" ref={ref}>
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  const { t, language } = useLanguage();

  const statsData = [
    { value: 200, suffix: language === 'PT' ? 'mil+' : 'K+', label: t('stats.projects') },
    { value: 3, suffix: '+', label: t('stats.experience') },
    { value: 5, suffix: '+', label: t('stats.clients') },
    { value: 5, suffix: 'K+', label: t('stats.hours') },
  ];

  return (
    <section className="stats">
      <div className="stats-inner">
        {statsData.map((stat) => (
          <div className="stat" key={stat.label}>
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <div className="stat-l">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

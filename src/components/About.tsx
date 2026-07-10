'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="sobre">
      <div className="about-inner">
        <div className="about-photo">
          <img
            src="/images/profile.jpg"
            alt="Neyvan Santos"
            width={400}
            height={640}
            loading="lazy"
          />
          <div className="about-name-tag">NEYVAN SANTOS — VIDEO EDITOR</div>
        </div>

        <div className="about-txt">
          <div className="sec-tag">{t('about.tag')}</div>
          <div className="about-body">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

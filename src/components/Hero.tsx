'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <div className="hero-video-wrap">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-bg-anim" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-tag">{t('hero.tag')}</div>

        <h1 className="hero-hl">
          <em className="accent">{t('hero.hl_exp')}</em> {t('hero.hl_visuais')} {t('hero.hl_que_fazem')}<br />
          <em className="accent">{t('hero.hl_marcas')}</em> {t('hero.hl_e_criadores')}<br />
          <em className="accent">{t('hero.hl_crescerem')}</em>
        </h1>

        <p className="hero-sub">
          {t('hero.sub')}
        </p>

        <div className="ctas">
          <a href="#portfolio" className="btn-p">{t('hero.cta1')}</a>
          <a href="#contato" className="btn-s">{t('hero.cta2')}</a>
        </div>
      </div>

      <div className="scroll-ind">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

'use client';

import { useLanguage } from '@/context/LanguageContext';

const SHORTS_ITEMS = [
  { title: 'Behind the Scenes', label: 'Short' },
  { title: 'Quick Edit Tips', label: 'Tutorial' },
  { title: 'Before & After', label: 'Showcase' },
  { title: 'Color Grade Demo', label: 'Demo' },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <polygon points="5,3 19,12 5,21" fill="rgba(255,255,255,0.45)" />
    </svg>
  );
}

export default function Shorts() {
  const { t } = useLanguage();

  return (
    <section className="section-wrap" id="shorts">
      <div className="wrap">
        <div className="section-header">
          <div className="sec-tag">{t('shorts.tag')}</div>
          <h2 className="section-hl">
            {t('shorts.hl1')} <em>{t('shorts.hl2')}</em>
          </h2>
        </div>
      </div>

      <div className="shorts-track">
        {SHORTS_ITEMS.map((item, i) => (
          <div className="short-item" key={i}>
            <div className="vid-ph">
              <div className="vid-ph-icon">
                <PlayIcon />
              </div>
              <span>{item.label}</span>
            </div>
            <div className="short-overlay">
              <div className="port-title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

const PORTFOLIO_ITEMS = [
  {
    title: 'Video 1',
    label: 'Video Edit',
    videoUrl: 'https://youtu.be/DQEXmznrwis?si=H6eiASHQ0Sdl1sL7',
    thumbnail: 'https://img.youtube.com/vi/DQEXmznrwis/maxresdefault.jpg',
  },
  {
    title: 'Video 2',
    label: 'Video Edit',
    videoUrl: 'https://youtu.be/j8OFYyUnNvo?si=3tSYgza5fZ7T18LO',
    thumbnail: 'https://img.youtube.com/vi/j8OFYyUnNvo/maxresdefault.jpg',
  },
  {
    title: 'Video 3',
    label: 'Video Edit',
    videoUrl: 'https://youtu.be/sMAEGXL055k?si=itlt5Cx32-fZnhUC',
    thumbnail: 'https://img.youtube.com/vi/sMAEGXL055k/maxresdefault.jpg',
  },
  {
    title: 'Video 4',
    label: 'Video Edit',
    videoUrl: 'https://youtu.be/OFFSKSm7PXo?si=ca9O-LKgE-zyT3yT',
    thumbnail: 'https://img.youtube.com/vi/OFFSKSm7PXo/maxresdefault.jpg',
  },
  {
    title: 'Video 5',
    label: 'Video Edit',
    videoUrl: 'https://youtu.be/zz-O8EitzK8?si=95MgHeB99SmgO3o6',
    thumbnail: 'https://img.youtube.com/vi/zz-O8EitzK8/maxresdefault.jpg',
  },
  {
    title: 'Video 6',
    label: 'Video Edit',
    videoUrl: 'https://www.youtube.com/watch?v=NF_HR5OAS4w',
    thumbnail: 'https://img.youtube.com/vi/NF_HR5OAS4w/maxresdefault.jpg',
  },
  {
    title: 'Video 7',
    label: 'Video Edit',
    videoUrl: 'https://www.youtube.com/watch?v=DnUQQd903Us&t=45s',
    thumbnail: 'https://img.youtube.com/vi/DnUQQd903Us/maxresdefault.jpg',
  },
  {
    title: 'Video 8',
    label: 'Video Edit',
    videoUrl: 'https://www.youtube.com/watch?v=eoRC-2sDCJI&t=3s',
    thumbnail: 'https://img.youtube.com/vi/eoRC-2sDCJI/maxresdefault.jpg',
  },
  {
    title: 'Video 9',
    label: 'Video Edit',
    videoUrl: 'https://www.youtube.com/watch?v=tIRmXnqy5vg&t=70s',
    thumbnail: 'https://img.youtube.com/vi/tIRmXnqy5vg/maxresdefault.jpg',
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <polygon points="8,5 19,12 8,19" fill="currentColor" />
    </svg>
  );
}

import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();
  const duplicated = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS];

  return (
    <section className="section-wrap" id="portfolio">
      <div className="wrap">
        <div className="section-header">
          <div className="sec-tag">{t('portfolio.tag')}</div>
          <h2 className="section-hl">
            {t('portfolio.hl1')} <em>{t('portfolio.hl2')}</em>
          </h2>
        </div>
      </div>

      <div className="port-scroll-wrap">
        <div className="port-scroll-track">
          {duplicated.map((item, i) => (
            <a
              href={item.videoUrl}
              target={item.videoUrl !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="port-item"
              key={i}
              style={{ cursor: item.videoUrl !== '#' ? 'pointer' : 'default' }}
            >
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="port-img"
                />
              ) : null}
              <div
                className="vid-ph"
                style={{
                  zIndex: 1,
                  background: item.thumbnail ? 'transparent' : 'rgba(0,0,0,0.6)',
                  border: item.thumbnail ? 'none' : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="vid-ph-icon">
                  <PlayIcon />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

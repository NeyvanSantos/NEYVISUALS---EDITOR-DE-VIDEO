'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const handleLanguageChange = (lang: 'PT' | 'EN') => {
    setLanguage(lang);
    // Fechar menu no mobile se estiver aberto
    if (window.innerWidth <= 900) {
      closeMobile();
    }
  };

  const navLinks = [
    { href: '#inicio', label: t('nav.home') },
    { href: '#sobre', label: t('nav.about') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#contato', label: t('nav.contact') },
  ];

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-logo">
            <img src="/images/logo.png" alt="NeyVisuals Logo" />
            <span>Ney<em className="accent">Visuals</em></span>
          </a>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="lang-toggle">
              <button
                className={`lang-btn ${language === 'PT' ? 'active' : ''}`}
                onClick={() => setLanguage('PT')}
              >
                PT
              </button>
              <button
                className={`lang-btn ${language === 'EN' ? 'active' : ''}`}
                onClick={() => setLanguage('EN')}
              >
                EN
              </button>
            </div>
            <button
              className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-mobile-content">
          <div className="nav-mobile-links">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={closeMobile}>
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="nav-mobile-divider" />
          
          <div className="nav-mobile-lang">
            <span className="lang-label">{language === 'PT' ? 'Idioma' : 'Language'}</span>
            <div className="lang-toggle-mobile">
              <button
                className={`lang-btn-mobile ${language === 'PT' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('PT')}
              >
                PT
              </button>
              <button
                className={`lang-btn-mobile ${language === 'EN' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('EN')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

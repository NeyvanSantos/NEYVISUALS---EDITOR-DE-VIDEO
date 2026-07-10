'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'PT' | 'EN';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  PT: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      portfolio: 'Portfólio',
      shorts: 'Shorts',
      contact: 'Contato',
    },
    hero: {
      tag: 'Video Editor & Motion Designer',
      hl_exp: 'EXPERIÊNCIAS',
      hl_visuais: 'VISUAIS',
      hl_que_fazem: 'QUE FAZEM',
      hl_marcas: 'MARCAS',
      hl_e_criadores: 'E CRIADORES',
      hl_crescerem: 'CRESCEREM.',
      sub: 'Transformo ideias em experiências visuais cinematográficas. Edição de vídeo, motion design e storytelling visual que eleva sua marca ao próximo nível.',
      cta1: 'Ver Portfólio',
      cta2: 'Fale Comigo',
    },
    stats: {
      projects: 'Visualizações Minhas Edições',
      experience: 'Anos de Experiência',
      clients: 'Clientes Atendidos',
      hours: 'Horas de Edição',
    },
    about: {
      tag: 'Sobre Mim',
      p1: 'Olá! Sou editor de vídeo com 23 anos e conto com 3 anos de experiência prática no mercado digital. A minha trajetória começou de forma autodidata, criando e editando conteúdos para os meus próprios canais no YouTube (como o SimulaZone e o Neyzada). O que começou como uma necessidade de edição básica para gameplays transformou-se numa paixão técnica e profissional.',
      p2: 'Hoje, possuo total domínio e confiança nas principais ferramentas de edição do mercado, garantindo um fluxo de trabalho ágil e resultados de alta qualidade. Especializei em alguns nichos como vlogs, gameplays, reels, tutoriais e reviews.',
      p3: 'Sempre fui fascinado por entender como a magia dos vídeos acontece por trás das câmeras. Foi esse desejo de dominar cada corte e efeito que me motivou a tornar-me editor, onde hoje sinto a liberdade de ter o controle criativo absoluto sobre o resultado final.',
    },
    portfolio: {
      tag: 'Trabalhos Selecionados',
      hl1: 'MEU',
      hl2: 'PORTFÓLIO',
    },
    shorts: {
      tag: 'Conteúdo Vertical',
      hl1: 'MEUS',
      hl2: 'SHORTS',
    },
    clients: {
      tag: 'Quem Confia no Meu Trabalho',
      hl: 'CLIENTES',
    },
    contact: {
      tag: 'Vamos Conversar',
      hl1: 'PRONTO PARA',
      hl2: 'CRIAR?',
      sub: 'Tem um projeto em mente? Quer elevar sua marca com edições cinematográficas? Entre em contato e vamos transformar suas ideias em realidade.',
      placeholderName: 'Seu Nome',
      placeholderEmail: 'Seu E-mail',
      emailNotice: '* Use um e-mail real e ativo para que eu possa te responder.',
      placeholderSubject: 'Assunto',
      placeholderMessage: 'Sua Mensagem',
      submit: 'ENVIAR MENSAGEM',
      sending: 'ENVIANDO...',
      success: '✓ ENVIADO!',
      error: '✗ ERRO, TENTE NOVAMENTE',
    },
  },
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      shorts: 'Shorts',
      contact: 'Contact',
    },
    hero: {
      tag: 'Video Editor & Motion Designer',
      hl_exp: 'VISUAL',
      hl_visuais: 'EXPERIENCES THAT',
      hl_que_fazem: 'MAKE',
      hl_marcas: 'BRANDS',
      hl_e_criadores: '& CREATORS',
      hl_crescerem: 'GROW.',
      sub: 'I turn ideas into cinematic visual experiences. Video editing, motion design, and visual storytelling that raises your brand to the next level.',
      cta1: 'View Portfolio',
      cta2: 'Contact Me',
    },
    stats: {
      projects: 'Views of My Edits',
      experience: 'Years of Experience',
      clients: 'Clients Served',
      hours: 'Editing Hours',
    },
    about: {
      tag: 'About Me',
      p1: 'Hi! I\'m a 23-year-old video editor with 3 years of hands-on experience in the digital market. My journey started as a self-taught creator, producing and editing content for my own YouTube channels (like SimulaZone and Neyzada). What began as a basic editing need for gameplays turned into a technical and professional passion.',
      p2: 'Today, I have full command and confidence in the industry\'s leading editing tools, ensuring an agile workflow and high-quality results. I specialize in niches like vlogs, gameplays, reels, tutorials, and reviews.',
      p3: 'I\'ve always been fascinated by understanding how video magic happens behind the scenes. It was this desire to master every cut and effect that motivated me to become an editor, where today I feel the freedom to have absolute creative control over the final result.',
    },
    portfolio: {
      tag: 'Selected Works',
      hl1: 'MY',
      hl2: 'PORTFOLIO',
    },
    shorts: {
      tag: 'Vertical Content',
      hl1: 'MY',
      hl2: 'SHORTS',
    },
    clients: {
      tag: 'Who Trusts My Work',
      hl: 'CLIENTS',
    },
    contact: {
      tag: 'Let\'s Talk',
      hl1: 'READY TO',
      hl2: 'CREATE?',
      sub: 'Have a project in mind? Want to elevate your brand with cinematic editing? Get in touch and let\'s turn your ideas into reality.',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your E-mail',
      emailNotice: '* Use a real and active email so I can reply back to you.',
      placeholderSubject: 'Subject',
      placeholderMessage: 'Your Message',
      submit: 'SEND MESSAGE',
      sending: 'SENDING...',
      success: '✓ SENT!',
      error: '✗ ERROR, TRY AGAIN',
    },
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('PT');

  const t = (keyPath: string) => {
    const keys = keyPath.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return keyPath;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

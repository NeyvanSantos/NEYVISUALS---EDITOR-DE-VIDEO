'use client';

import { FormEvent, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Validação robusta de e-mail no lado do cliente
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    const payload = {
      access_key: 'dac06436-6a10-41eb-9e7b-d180aeeb9c34',
      from_name: 'NeyVisuals',
      subject: `NeyVisuals | Novo Contato - ${name}`,
      'Nome': name,
      'E-mail': email,
      'Assunto': subject || 'Sem assunto',
      'Mensagem': message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return t('contact.sending');
      case 'success':
        return t('contact.success');
      case 'error':
        return t('contact.error');
      default:
        return t('contact.submit');
    }
  };

  return (
    <section className="contact" id="contato">
      <div className="contact-inner">
        <div className="contact-left">
          <div className="sec-tag">{t('contact.tag')}</div>
          <h2>
            {t('contact.hl1')}<br />
            <em>{t('contact.hl2')}</em>
          </h2>
          <p>
            {t('contact.sub')}
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t('contact.placeholderName')}
            required
            id="contact-name"
            disabled={status === 'loading'}
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.placeholderEmail')}
            required
            id="contact-email"
            disabled={status === 'loading'}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Por favor, insira um e-mail válido com domínio (ex: nome@dominio.com)"
          />
          <div className="email-notice">{t('contact.emailNotice')}</div>
          <input
            type="text"
            name="subject"
            placeholder={t('contact.placeholderSubject')}
            id="contact-subject"
            disabled={status === 'loading'}
          />
          <textarea
            name="message"
            placeholder={t('contact.placeholderMessage')}
            required
            id="contact-message"
            disabled={status === 'loading'}
          />
          <button type="submit" className="btn-p" disabled={status === 'loading'}>
            {getButtonText()}
          </button>
        </form>
      </div>
    </section>
  );
}

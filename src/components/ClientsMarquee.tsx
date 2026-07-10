'use client';

import { useLanguage } from '@/context/LanguageContext';

const CLIENTS = [
  { name: 'Akino', image: '/images/clients/akino.jpg', initial: 'A' },
  { name: 'Neyzada', image: '/images/clients/neyzada.jpg', initial: 'N' },
  { name: 'SimulaZone', image: '/images/clients/simulazone.png', initial: 'S' },
];

export default function ClientsMarquee() {
  // Repete a lista de clientes para garantir elementos suficientes na tela para a animação infinita
  const repeatedClients = Array(5).fill(CLIENTS).flat();
  const duplicated = [...repeatedClients, ...repeatedClients];
  const { t } = useLanguage();

  return (
    <section className="section-wrap">
      <div className="wrap">
        <div className="section-header">
          <div className="sec-tag">{t('clients.tag')}</div>
          <h2 className="section-hl">
            <em>{t('clients.hl')}</em>
          </h2>
        </div>
      </div>

      <div className="clients-marquee-wrap">
        <div className="clients-track">
          {duplicated.map((client, i) => (
            <div className="client-item" key={`${client.name}-${i}`}>
              <div className="client-logo-wrap" style={{ overflow: 'hidden' }}>
                {client.image ? (
                  <img
                    src={client.image}
                    alt={client.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  client.initial
                )}
              </div>
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

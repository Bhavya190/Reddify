'use client';

import React from 'react';

const coreServices = [
  {
    title: 'Post & Seed',
    description: 'Daily threads aligned to search trends and strategy workflows.',
    icon: '💬'
  },
  {
    title: 'Comment & Guide',
    description: 'Nuanced responses that steer sentiment and set the narrative.',
    icon: '🗯️'
  },
  {
    title: 'Rank & Curate',
    description: 'Positioning content where people are looking for recommendations.',
    icon: '📈'
  },
  {
    title: 'Ask & Answer',
    description: 'Managing responses to queries across community subreddits.',
    icon: '❔'
  }
];

export const WhatWeDo: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0', background: 'rgba(230, 46, 86, 0.02)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
          What we do
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted-foreground)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          The complete Reddit strategy for brands and creators.
        </p>

        <div className="feature-grid">
          {coreServices.map((service, index) => (
            <div key={index} className="feature-card-v2" style={{ textAlign: 'left' }}>
              <div className="icon-circle">
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';

const methodologies = [
  {
    title: 'In-House Strategy',
    description: 'Research, narrative design, sentiment plans, and reporting accountability.',
    icon: '📚'
  },
  {
    title: 'AI-Farm Orchestration',
    description: 'Owned profiles, AI-assisted ops, guardrails for tone, compliance, and consistency.',
    icon: '📊'
  },
  {
    title: 'r-Vibers Network',
    description: '10k+ human operators activated by LARK (Location, Age, Relevance, Karma) targeting.',
    icon: '👥'
  },
  {
    title: 'Quality & Safety',
    description: 'Editorial checks, moderator-friendly patterns, and reputation-first governance.',
    icon: '🛡️'
  }
];

export const HowWeOperate: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
          How we operate
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted-foreground)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          Our proven methodology for Reddit reputation engineering
        </p>

        <div className="feature-grid">
          {methodologies.map((item, index) => (
            <div key={index} className="feature-card-v2" style={{ textAlign: 'left', padding: '2rem' }}>
              <div className="icon-square">
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

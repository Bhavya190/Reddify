'use client';

import React from 'react';

const features = [
  {
    title: 'Social Validation',
    description: 'Authentic conversations build trust before purchase, lowering CAC and raising conversion.',
    icon: '★'
  },
  {
    title: 'Reputation Shaping',
    description: 'Clarify misconceptions and steer sentiment with credible voices and timely responses.',
    icon: '!'
  },
  {
    title: 'Generative SEO',
    description: 'Threads rank for long-tail queries and feed AI answers. Be present where the future searches.',
    icon: '⚡'
  }
];

export const DecisionEngine: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="grid-70-30">
          {/* Main Content (Left) */}
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Reddit is the decision engine.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', maxWidth: '650px', marginBottom: '3rem', lineHeight: 1.6 }}>
              It&apos;s where people ask, compare, trust, and decide. Generative search now amplifies Reddit conversations—making narrative control mission-critical.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {features.map((feature, index) => (
                <div key={index} className="decision-card">
                  <div className="decision-icon">
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div style={{ position: 'relative' }}>
            <div className="summary-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                   ★
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>At a Glance</h3>
              </div>

              <ul className="arrow-list">
                <li><strong>10,000 +</strong> r-Vibers (human operators)</li>
                <li>Profiles by karma: <strong>0-500 (Verified), 500-1000 (Credible), 1000+ (Influencing)</strong></li>
                <li>Quality controls: narrative guidelines, moderation checks, compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

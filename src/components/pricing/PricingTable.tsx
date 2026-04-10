'use client';

import React from 'react';

const plans = [
  {
    name: 'Seed',
    description: 'Establish presence & visibility.',
    features: [
      '15 comments / month',
      '3 new threads / month',
      'Email support (48h TAT)'
    ],
    buttonText: 'Get Started',
    buttonClass: 'muted'
  },
  {
    name: 'Shape',
    description: 'Influence sentiment & comparisons.',
    features: [
      '50 comments / month',
      '5 new threads / month',
      'Email + WhatsApp (24h TAT)'
    ],
    buttonText: 'Get Started',
    buttonClass: 'primary',
    popular: true
  },
  {
    name: 'Scale',
    description: 'Dominate discussions & visibility.',
    features: [
      '100 comments / month',
      '10 new threads / month',
      'Email + WhatsApp + POC (4h TAT)'
    ],
    buttonText: 'Get Started',
    buttonClass: 'muted'
  },
  {
    name: 'Special',
    description: 'High-stakes narrative control, bespoke orchestration.',
    features: [
      'LARK-specific operators',
      'Advanced analytics & war rooms',
      'Custom support & SLAs'
    ],
    buttonText: 'Contact Sales',
    buttonClass: 'muted'
  }
];

export const PricingTable: React.FC = () => {
  return (
    <section id="packages" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem' }}>
          Choose Your Package
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted-foreground)', marginBottom: '4rem' }}>
          All plans include governance, content QA, and monthly analytics
        </p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
              {plan.popular && <div className="popular-badge">POPULAR</div>}
              
              <div className="pricing-pill">{plan.name}</div>
              
              <p style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.4, marginBottom: '2.5rem', textAlign: 'left', minHeight: '3.5rem' }}>
                {plan.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', textAlign: 'left' }}>
                {plan.features.map((feature, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', fontSize: '1rem', color: 'var(--foreground)', alignItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`pricing-button ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

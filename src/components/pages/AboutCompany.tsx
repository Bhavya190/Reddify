'use client';

import React from 'react';

const stats = [
  { number: '500+', label: 'Brands Served' },
  { number: '10M+', label: 'Upvotes Generated' },
  { number: '15+', label: 'Core Industries' },
  { number: '2h', label: 'Avg. Response Time' }
];

const values = [
  {
    title: 'Trust-First',
    description: 'We prioritize authentic community trust over manufactured hype.',
    icon: '🤝'
  },
  {
    title: 'Sovereign Communities',
    description: 'Respecting the rules and culture of every subreddit we enter.',
    icon: '🏛️'
  },
  {
    title: 'Measured Impact',
    description: 'Every action is tracked, reported, and optimized for growth.',
    icon: '📊'
  }
];

export const AboutCompany: React.FC = () => {
  return (
    <div style={{ padding: '4rem 0' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '6rem' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1, marginBottom: '2rem' }}>
          Redefining Reputation <br /> on <span style={{ color: 'var(--primary)' }}>Reddit</span>
        </h1>
        <div style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '2rem' }}>
            We started as a small team of Reddit power users who realized that traditional marketing agencies were fundamentally "doing it wrong" on the platform.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
            Reddify was born from a simple belief: that brands shouldn't just "advertise" to subreddits—they should belong to them. Today, we help global enterprises and high-growth startups engineer their reputation through authentic engagement, strategic sentiment shaping, and data-driven visibility.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <section style={{ marginTop: '6rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Our Core Pillars</h2>
        <p style={{ color: 'var(--muted-foreground)', marginBottom: '3rem' }}>The philosophy that drives our Reddit strategy.</p>
        
        <div className="values-grid">
          {values.map((value, i) => (
            <div key={i} className="feature-card-v2">
              <div className="icon-circle" style={{ background: 'rgba(230, 46, 86, 0.1)' }}>
                {value.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>{value.title}</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

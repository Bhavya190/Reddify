'use client';

import React from 'react';
import { solutionsData } from '@/lib/solutions_data';
import Link from 'next/link';

interface SolutionDetailsProps {
  slug: string;
  bookingLink: string;
}

export const SolutionDetails: React.FC<SolutionDetailsProps> = ({ slug, bookingLink }) => {
  const data = solutionsData[slug];

  if (!data) return <div className="container">Solution not found.</div>;

  return (
    <div style={{ paddingBottom: '8rem' }}>
      {/* Hero */}
      <section className="solution-hero">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>
              {data.title}
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--foreground)', marginBottom: '1.5rem' }}>
              {data.description}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
              {data.leadText}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Key Capabilities</h2>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '4rem' }}>Technical precision for community-driven results.</p>
          
          <div className="capabilities-grid">
            {data.capabilities.map((item, i) => (
              <div key={i} className="feature-card-v2">
                <div className="icon-circle" style={{ background: 'rgba(230, 46, 86, 0.1)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{ padding: '6rem 0', background: 'var(--muted)', borderRadius: '4rem 4rem 0 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Operational Workflow</h2>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '6rem' }}>How we deliver {data.title} across your target subreddits.</p>
          
          <div className="phase-container">
            {data.workflow.map((step, i) => (
              <div key={i} className="phase-card">
                <div className="phase-number">{i + 1}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', marginTop: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="form-card" style={{ maxWidth: '800px', margin: '0 auto', background: '#e62e56', color: 'white', border: 'none' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>Ready to deploy?</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem', color: 'white' }}>
              Speak with a senior strategist about engineering your reputation on Reddit.
            </p>
            <Link href={bookingLink} className="btn-secondary" style={{ display: 'inline-block', padding: '1.25rem 3rem', background: 'white', color: '#e62e56' }}>
              Request Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

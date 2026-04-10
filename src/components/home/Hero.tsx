'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink } from '@/lib/navigation';

export const Hero: React.FC = () => {
  const pathname = usePathname();

  return (
    <section className="hero-gradient" style={{ padding: '6rem 0 4rem', textAlign: 'center' }}>
      <div className="container">
        {/* Badge */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="pill-badge">
            <span style={{ height: '8px', width: '8px', background: 'var(--foreground)', borderRadius: '50%' }}></span>
            AI-Powered · Strategic · Quality First
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, maxWidth: '900px', margin: '0 auto 2rem', letterSpacing: '-0.02em' }}>
          Shape the narrative <br />
          before the market <br />
          makes it for you.
        </h1>

        {/* Subtext */}
        <p style={{ fontSize: '1.2rem', color: 'var(--muted-foreground)', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          CODE RED is an AI-powered Reddit reputation & demand engine. We seed your presence, shape sentiment, and scale influence so your brand becomes the <span className="highlight-underline">recommended choice</span> where buying decisions are made.
        </p>

        {/* CTA Actions */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <Link href={getRegionalLink('/contact-us', pathname)} className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Get Started <span style={{ fontSize: '1.2rem' }}>›</span>
          </Link>
          <Link href={getRegionalLink('/pricing', pathname)} className="btn-secondary" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem' }}>
            <span style={{ fontSize: '1.2rem' }}>⭐</span> View Packages
          </Link>
        </div>

        {/* Tags Row */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span className="hero-tag">
            <span style={{ fontSize: '1rem' }}>★</span> Seed → Shape → Scale → Special
          </span>
          <span className="hero-tag">
            <span style={{ fontSize: '1rem' }}>○</span> 10k+ r-Vibers Network
          </span>
          <span className="hero-tag">
            <span style={{ fontSize: '1rem' }}>★</span> AI-Farm Orchestration
          </span>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink } from '@/lib/navigation';

const footerData = {
  solutions: [
    { name: 'Account Optimization', href: '/solutions/reddit-account-optimization' },
    { name: 'Sentiment Analysis', href: '/solutions/reddit-sentiment-analysis' },
    { name: 'Reddit Posting', href: '/solutions/reddit-posting' },
    { name: 'Engagement', href: '/solutions/reddit-engagement' },
    { name: 'Growth Campaigns', href: '/solutions/reddit-growth-campaigns' },
  ],
  industry: [
    { name: 'SaaS', href: '/industry/saas' },
    { name: 'D2C', href: '/industry/d2c' },
    { name: 'B2B', href: '/industry/b2b' },
    { name: 'FinTech', href: '/industry/fintech' },
    { name: 'Health & Wellness', href: '/industry/health-wellness' },
  ],
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blogs', href: '/blogs' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]
};

export const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer style={{ backgroundColor: 'var(--muted)', marginTop: '4rem', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <Link href={getRegionalLink('/', pathname)} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              Reddify
            </Link>
            <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              The ultimate platform for Reddit strategy and brand growth. Optimize, engage, and scale with ease.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Solutions</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
              {footerData.solutions.map(link => (
                <li key={link.name}>
                  <Link href={getRegionalLink(link.href, pathname)}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Industries</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
              {footerData.industry.map(link => (
                <li key={link.name}>
                  <Link href={getRegionalLink(link.href, pathname)}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
              {footerData.company.map(link => (
                <li key={link.name}>
                  <Link href={getRegionalLink(link.href, pathname)}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
          <p>&copy; {new Date().getFullYear()} Reddify. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {footerData.legal.map(link => (
              <Link key={link.name} href={getRegionalLink(link.href, pathname)}>{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

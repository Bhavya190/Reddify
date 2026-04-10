'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink, getToggleLink } from '@/lib/navigation';

const solutions = [
  { name: 'Account Optimization', href: '/solutions/reddit-account-optimization' },
  { name: 'Sentiment Analysis', href: '/solutions/reddit-sentiment-analysis' },
  { name: 'Reddit Posting', href: '/solutions/reddit-posting' },
  { name: 'Brand Presence', href: '/solutions/reddit-brand-presence' },
  { name: 'Content Engineering', href: '/solutions/reddit-content-thread-engineering' },
  { name: 'Growth Campaigns', href: '/solutions/reddit-growth-campaigns' },
  { name: 'SEO & GEO Insights', href: '/solutions/reddit-insights-seo-geo' },
  { name: 'Analytics & Reporting', href: '/solutions/reddit-analytics-reporting' },
  { name: 'Reddit Engagement', href: '/solutions/reddit-engagement' },
  { name: 'Reddit Upvotes', href: '/solutions/reddit-upvotes' },
  { name: 'Reddit Commenting', href: '/solutions/reddit-commenting' },
];

const industries = [
  { name: 'SaaS', href: '/industry/saas' },
  { name: 'D2C', href: '/industry/d2c' },
  { name: 'B2B', href: '/industry/b2b' },
  { name: 'Health & Wellness', href: '/industry/health-wellness' },
  { name: 'FinTech', href: '/industry/fintech' },
  { name: 'B2C', href: '/industry/b2c' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="glass">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', height: '100%' }}>
          <Link href={getRegionalLink('/', pathname)} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
            Reddify
          </Link>
          
          <nav style={{ display: 'flex', gap: '1.5rem', height: '100%' }}>
            {/* Solutions Dropdown */}
            <div className="dropdown-container">
              <div className="dropdown-trigger" style={{ fontWeight: 500, color: pathname.includes('/solutions') ? 'var(--primary)' : 'inherit' }}>
                Solutions
              </div>
              <div className="dropdown-menu megamenu">
                {solutions.map((link) => (
                  <Link 
                    key={link.name} 
                    href={getRegionalLink(link.href, pathname)}
                    className="dropdown-link"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industry Dropdown */}
            <div className="dropdown-container">
              <div className="dropdown-trigger" style={{ fontWeight: 500, color: pathname.includes('/industry') ? 'var(--primary)' : 'inherit' }}>
                Industries
              </div>
              <div className="dropdown-menu">
                {industries.map((link) => (
                  <Link 
                    key={link.name} 
                    href={getRegionalLink(link.href, pathname)}
                    className="dropdown-link"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href={getRegionalLink('/pricing', pathname)} style={{ display: 'flex', alignItems: 'center', fontWeight: 500, color: pathname.includes('/pricing') ? 'var(--primary)' : 'inherit' }}>
              Pricing
            </Link>
            <Link href={getRegionalLink('/about-us', pathname)} style={{ display: 'flex', alignItems: 'center', fontWeight: 500, color: pathname.includes('/about-us') ? 'var(--primary)' : 'inherit' }}>
              About
            </Link>
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href={getToggleLink(pathname)} style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', border: '1px solid var(--border)', borderRadius: '4px' }}>
            {pathname.startsWith('/us') ? '🇮🇳 India Version' : '🇺🇸 USA Version'}
          </Link>
          <Link href={getRegionalLink('/book-a-appointment', pathname)} className="btn-primary" style={{ fontSize: '0.9rem' }}>
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

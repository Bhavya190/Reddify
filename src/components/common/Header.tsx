'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink, getToggleLink } from '@/lib/navigation';

const navLinks = [
  { name: 'Solutions', href: '/solutions/reddit-account-optimization' },
  { name: 'Industry', href: '/industry/saas' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blogs', href: '/blogs' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="glass">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href={getRegionalLink('/', pathname)} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
            Reddify
          </Link>
          
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={getRegionalLink(link.href, pathname)}
                style={{ 
                  fontWeight: 500, 
                  color: pathname.includes(link.href) ? 'var(--primary)' : 'inherit' 
                }}
              >
                {link.name}
              </Link>
            ))}
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

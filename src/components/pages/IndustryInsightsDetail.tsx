'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink } from '@/lib/navigation';
import { Insight } from '@/lib/insights_data';

interface IndustryInsightsDetailProps {
  insight: Insight;
}

export const IndustryInsightsDetail: React.FC<IndustryInsightsDetailProps> = ({ insight }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {/* Article Header & Breadcrumbs */}
      <section className="section-detail">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm font-medium mb-12">
            <Link href={getRegionalLink('/', pathname)} className="text-muted hover:text-primary transition-colors">Home</Link>
            <span className="text-muted">/</span>
            <Link href={getRegionalLink('/industry-insights', pathname)} className="text-muted hover:text-primary transition-colors">Insights</Link>
            <span className="text-muted">/</span>
            <span className="text-primary truncate max-w-[200px]">{insight.title}</span>
          </nav>

          <div className="max-w-5xl">
            <div className="flex flex-wrap gap-6 items-center text-sm text-muted mb-8">
              <span className="badge">{insight.category}</span>
              <span className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {insight.readTime}</span>
              <span className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> {insight.date}</span>
            </div>
            
            <h1 className="h1 mb-10 text-gradient">{insight.title}</h1>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="pb-24 relative">
        {/* Floating Share Bar (Desktop Only) */}
        <div className="hidden xl:block absolute left-12 top-0 h-full">
          <div className="sticky top-40 flex flex-col gap-6 items-center p-4 glass rounded-full shadow-lg border-primary/20">
            <button className="text-muted hover:text-primary transition-colors p-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></button>
            <button className="text-muted hover:text-primary transition-colors p-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></button>
            <button className="text-muted hover:text-primary transition-colors p-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></button>
            <div className="w-8 h-[1px] bg-border my-2"></div>
            <button className="text-muted hover:text-primary transition-colors p-2" title="Copy Link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></button>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Content Body */}
            <div className="lg:col-span-8">
              <div className="glass overflow-hidden rounded-[2.5rem] mb-16 shadow-2xl border-none">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-[550px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="max-w-4xl">
                <p className="p-lg font-medium text-foreground mb-12 leading-relaxed italic border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-3xl">
                  {insight.description}
                </p>

                <article className="insight-content">
                  <div dangerouslySetInnerHTML={{ __html: insight.content }} />
                </article>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-40 space-y-12">
                <div className="glass p-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-background to-background shadow-2xl border-primary/20">
                  <h3 className="h4 mb-4">Deep Insights for <span className="text-primary">Redditors</span></h3>
                  <p className="p-sm mb-8">
                    Get the latest Reddit trends and marketing strategies delivered monthly.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="business@email.com" 
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-shadow"
                    />
                    <button className="btn-primary w-full py-3 shadow-lg hover:shadow-primary/20 transition-all">
                      Join the Hub
                    </button>
                  </form>
                </div>

                <div className="p-10 rounded-[2rem] bg-muted relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <h3 className="h5 mb-4 relative z-10">Consult with Experts</h3>
                  <p className="p-sm mb-8 relative z-10">
                    Ready to implement these insights? Our team of Reddit specialists is here to help.
                  </p>
                  <Link href={getRegionalLink('/book-a-appointment', pathname)} className="btn-primary w-full text-center py-3 relative z-10">
                    Book Strategy Session
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

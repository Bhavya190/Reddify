'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink } from '@/lib/navigation';
import { insightsData } from '@/lib/insights_data';

interface IndustryInsightsLandingProps {
  region: 'USA' | 'India';
}

export const IndustryInsightsLanding: React.FC<IndustryInsightsLandingProps> = ({ region }) => {
  const pathname = usePathname();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(insightsData.map(i => i.category))];

  const filteredInsights = insightsData.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(search.toLowerCase()) || 
                          insight.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || insight.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container text-center">
          <div className="badge mb-4">Knowledge Hub</div>
          <h1 className="h1 mb-6">Industry <span className="text-gradient">Insights</span></h1>
          <p className="p max-w-2xl mx-auto mb-8">
            Expert strategies, trends, and deep dives into the world of Reddit marketing. 
            Tailored for the {region} market.
          </p>

          {/* Search & Filter Bar */}
          <div className="glass mx-auto max-w-4xl p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center mb-12">
            <div className="flex-1 relative w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="Search insights..." 
                className="w-full bg-transparent border-none pl-10 focus:ring-2 outline-none py-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all whitespace-nowrap ${
                    activeCategory === cat ? 'bg-primary text-white shadow-lg' : 'hover:bg-muted/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section bg-muted/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight) => (
              <Link 
                key={insight.slug}
                href={getRegionalLink(`/industry-insights/${insight.slug}`, pathname)}
                className="group glass-card flex flex-col h-full overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-glass text-xs">{insight.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h3 className="h4 mb-3 group-hover:text-primary transition-colors">{insight.title}</h3>
                  <p className="p-sm mb-6 flex-1 text-muted">
                    {insight.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Read Article <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-20">
              <h3 className="h3 text-muted mb-4">No results found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="glass p-12 rounded-3xl text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h2 className="h2 mb-4">Need a Custom Strategy?</h2>
            <p className="p max-w-xl mx-auto mb-8">
              Our experts are ready to help you navigate the complex Reddit ecosystem with a tailored plan for your brand.
            </p>
            <Link href={getRegionalLink('/book-a-appointment', pathname)} className="btn-primary">
              Book a Free Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

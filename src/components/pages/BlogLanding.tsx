'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink } from '@/lib/navigation';
import { blogsData } from '@/lib/blogs_data';

interface BlogLandingProps {
  region: 'USA' | 'India';
}

export const BlogLanding: React.FC<BlogLandingProps> = ({ region }) => {
  const pathname = usePathname();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogsData.map(i => i.category))];

  const filteredPosts = blogsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container text-center">
          <div className="badge mb-4">Reddify Blog</div>
          <h1 className="h1 mb-6">Latest <span className="text-gradient">Blogs</span></h1>
          <p className="p max-w-2xl mx-auto mb-8">
            Expert tips, strategic insights, and behind-the-scenes looks at Reddit marketing. 
            Curated for our {region} audience.
          </p>

          {/* Search Bar */}
          <div className="glass mx-auto max-w-4xl p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center mb-12">
            <div className="flex-1 relative w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="Search articles..." 
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

      {/* Blog Grid */}
      <section className="section bg-muted/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                key={post.slug}
                href={getRegionalLink(`/blogs/${post.slug}`, pathname)}
                className="group glass-card flex flex-col h-full overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-glass text-xs">{post.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                    <div className="text-xs">
                      <p className="font-semibold">{post.author.name}</p>
                      <p className="text-muted">{post.date}</p>
                    </div>
                  </div>
                  <h3 className="h4 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="p-sm mb-6 flex-1 text-muted line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Read Post <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="h3 text-muted mb-4">No blogs found</h3>
              <p>Try searching for something else.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section">
        <div className="container">
          <div className="glass p-12 rounded-3xl text-center bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
            <h2 className="h2 mb-4">Stay Ahead of the Curve</h2>
            <p className="p max-w-xl mx-auto mb-8">
              Get weekly Reddit marketing tips and platform updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-background border border-border rounded-xl px-6 py-3 outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

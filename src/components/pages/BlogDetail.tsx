'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRegionalLink } from '@/lib/navigation';
import { BlogPost } from '@/lib/blogs_data';

interface BlogDetailProps {
  post: BlogPost;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {/* Blog Header */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <Link 
            href={getRegionalLink('/blogs', pathname)}
            className="flex items-center gap-2 text-primary font-medium mb-8 hover:gap-3 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg> Back to Blogs
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted mb-6">
              <span className="badge-glass" style={{ color: 'var(--primary)', background: 'rgba(230, 46, 86, 0.1)' }}>{post.category}</span>
              <span className="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {post.readTime}</span>
            </div>
            
            <h1 className="h1 mb-8">{post.title}</h1>
            
            <div className="flex items-center gap-4 mb-10">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
              <div>
                <p className="font-bold">{post.author.name}</p>
                <p className="text-xs text-muted">{post.author.role} • {post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="glass overflow-hidden rounded-3xl mb-12 shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-[450px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80';
                  }}
                />
              </div>

              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div 
                  className="insight-content"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </article>

              <div className="mt-16 p-8 rounded-3xl bg-muted/30 border border-border flex items-center gap-6">
                <img src={post.author.avatar} alt={post.author.name} className="w-20 h-20 rounded-full" />
                <div>
                  <h4 className="h5 mb-2">About {post.author.name}</h4>
                  <p className="p-sm text-muted">
                    {post.author.name} is the {post.author.role} at Reddify, specializing in deep community insights and platform growth strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="glass p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent">
                  <h3 className="h5 mb-4">Subscribe to our newsletter</h3>
                  <p className="text-sm text-muted mb-6">
                    Weekly Reddit marketing wisdom, delivered fresh.
                  </p>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 mb-4 text-sm outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="btn-primary w-full">Join 5,000+ Marketers</button>
                </div>

                <div className="glass p-8 rounded-2xl">
                  <h3 className="h6 mb-6">Need expert help?</h3>
                  <Link href={getRegionalLink('/book-a-appointment', pathname)} className="btn-primary w-full text-center text-sm">
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

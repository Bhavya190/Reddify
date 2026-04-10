import React from 'react';

interface PageProps {
  title: string;
  description: string;
  region: 'India' | 'USA';
}

export const DemoPage: React.FC<PageProps> = ({ title, description, region }) => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>{title}</h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>Target Region: {region}</p>
      <section style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
        <h2>Overview</h2>
        <p>{description}</p>
        <div style={{ marginTop: '1rem', height: '200px', background: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
          Demo Content Placeholder for {title}
        </div>
      </section>
      <footer style={{ marginTop: '4rem', color: '#888' }}>
        <p>&copy; 2026 Reddify - {region} Branch</p>
      </footer>
    </main>
  );
};

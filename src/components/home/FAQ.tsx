'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      style={{
        background: 'var(--muted)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        marginBottom: '1rem',
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 600, 
          margin: 0,
          color: 'var(--foreground)'
        }}>
          {question}
        </h3>
        <span style={{ 
          fontSize: '1.5rem', 
          color: 'var(--muted-foreground)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
        }}>
          {isOpen ? '−' : '+'}
        </span>
      </div>
      
      <div style={{ 
        maxHeight: isOpen ? '200px' : '0',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        marginTop: isOpen ? '1rem' : '0'
      }}>
        <p style={{ 
          color: 'var(--muted-foreground)', 
          margin: 0, 
          lineHeight: 1.6,
          fontSize: '1.1rem'
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Conversation & sentiment map",
      answer: "Top threads, tone shifts, objection themes, and the wins that matter to conversions."
    },
    {
      question: "Competitor radar",
      answer: "Monitor competitor mentions, sentiment shifts, and share of voice to stay ahead in your niche."
    },
    {
      question: "Visibility metrics",
      answer: "Detailed tracking of brand reach, subreddit presence, and community engagement levels."
    },
    {
      question: "Action plan",
      answer: "Data-driven recommendations and tactical steps to optimize your Reddit reputation."
    }
  ];

  return (
    <section id="faq" style={{ padding: '6rem 0', background: 'var(--background)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          fontWeight: 700, 
          marginBottom: '3rem',
          textAlign: 'left',
          color: 'var(--foreground)'
        }}>
          FAQ
        </h2>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .faq-item:hover {
          border-color: var(--primary) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .faq-item.open {
          border-color: var(--primary) !important;
          background: var(--background) !important;
        }
      `}</style>
    </section>
  );
};

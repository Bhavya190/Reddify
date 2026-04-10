'use client';

import React, { useState } from 'react';

export const AppointmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-card" style={{ textAlign: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✅</div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Success!</h3>
        <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem' }}>
          Your request for a discovery call has been sent. <br />
          Our senior strategist will reach out within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            className="input-field" 
            placeholder="Enter your name" 
            required 
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="input-field" 
            placeholder="email@company.com" 
            required 
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="message">How can we help?</label>
          <textarea 
            id="message" 
            className="input-field textarea-field" 
            placeholder="Tell us about your brand/project and what you're looking to achieve" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="cta-button" 
          style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
        >
          Request Discovery Call
        </button>

        <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          <div className="trust-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            We typically respond in 2 hours
          </div>
          <div className="trust-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            No credit card required
          </div>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.6 }}>
          {/* Mock Security Badges */}
          <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', border: '2px solid currentColor', padding: '2px 6px', borderRadius: '4px' }}>QUALYS</div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', border: '2px solid currentColor', padding: '2px 6px', borderRadius: '4px' }}>SOC2 TYPE II</div>
        </div>
      </form>
    </div>
  );
};

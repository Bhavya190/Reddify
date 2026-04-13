export interface IndustryData {
  title: string;
  description: string;
  leadText: string;
  capabilities: { title: string; desc: string; icon: string }[];
  workflow: { title: string; desc: string }[];
}

export const industryData: Record<string, IndustryData> = {
  'b2b': {
    title: 'Reddit for B2B',
    description: 'Connect with decision-makers and industry experts in professional Reddit communities.',
    leadText: 'B2B marketing on Reddit requires a shift from corporate speak to peer-level expertise. We help you build authority where professionals actually talk.',
    capabilities: [
      { title: 'Thought Leadership', desc: 'Positioning your executives as subject matter experts in niche professional subreddits.', icon: '🎓' },
      { title: 'Lead Intelligence', desc: 'Monitoring industry discussions to identify pain points and potential high-value leads.', icon: '🔍' },
      { title: 'Technical Narrative', desc: 'Breaking down complex B2B solutions into community-friendly discussions.', icon: '⚙️' }
    ],
    workflow: [
      { title: 'Ecosystem Mapping', desc: 'Identifying the specific professional silos where your buyers congregate.' },
      { title: 'Authority Seeding', desc: 'Contributing technical value before introducing brand solutions.' },
      { title: 'Relationship Engineering', desc: 'Moving discussions from public threads to private advocacy.' }
    ]
  },
  'b2c': {
    title: 'Reddit for B2C',
    description: 'Engage consumers authentically through passion-driven community management.',
    leadText: 'Consumers on Reddit hate being sold to, but they love being helped. We bridge that gap with authentic engagement.',
    capabilities: [
      { title: 'Trend Hijacking', desc: 'Identifying and participating in viral consumer trends relevant to your brand.', icon: '🚀' },
      { title: 'Feedback Loops', desc: 'Using Reddit as a real-time focus group for product features and marketing.', icon: '🔄' },
      { title: 'Hype Engineering', desc: 'Building organic momentum for product launches and seasonal events.', icon: '🔥' }
    ],
    workflow: [
      { title: 'Sentiment Baseline', desc: 'Understanding existing community perception of your brand category.' },
      { title: 'Native Gifting', desc: 'Strategic, non-intrusive product placements and community giveaways.' },
      { title: 'Viral Maintenance', desc: 'Managing the narrative as consumer interest scales across subreddits.' }
    ]
  },
  'd2c': {
    title: 'Reddit for D2C',
    description: 'Drive direct sales by becoming a trusted member of product-focused communities.',
    leadText: 'D2C brands live and die by their reputation. We ensure yours is built on a foundation of community trust and advocacy.',
    capabilities: [
      { title: 'Social Proofing', desc: 'Coordinating organic user reviews and testimonials in relevant subreddits.', icon: '⭐' },
      { title: 'Problem Solving', desc: 'Answering specific user questions that lead directly to your product solution.', icon: '✅' },
      { title: 'Subreddit Sponsorship', desc: 'Managing official community partnerships and AMA events.', icon: '🤝' }
    ],
    workflow: [
      { title: 'Review Mining', desc: 'Finding and amplifying genuine user praise across the platform.' },
      { title: 'Direct Response Seeding', desc: 'Providing value-first comments that link naturally to your store.' },
      { title: 'Community Loyalty', desc: 'Developing "brand champions" who defend and promote you organically.' }
    ]
  },
  'fintech': {
    title: 'Reddit for Fintech',
    description: 'Navigate the complex world of finance and crypto with precision and compliance.',
    leadText: 'Financial discussions on Reddit are high-stakes and highly skeptical. We provide the expertise to navigate them safely.',
    capabilities: [
      { title: 'Compliance-First Engagement', desc: 'Ensuring all interactions meet industry legal and brand safety standards.', icon: '⚖️' },
      { title: 'De-Mystification', desc: 'Explaining complex financial products in accessible, community-first language.', icon: '💡' },
      { title: 'Crisis Mitigation', desc: 'Rapidly addressing FUD (Fear, Uncertainty, Doubt) in financial subreddits.', icon: '🛡️' }
    ],
    workflow: [
      { title: 'Topic Authority', desc: 'Building a history of credible, data-backed financial commentary.' },
      { title: 'Community Pulse', desc: 'Monitoring retail investor sentiment and market trends in real-time.' },
      { title: 'Educational Narrative', desc: 'Focusing on user education to build long-term platform trust.' }
    ]
  },
  'health-wellness': {
    title: 'Reddit for Health & Wellness',
    description: 'Empathetic engagement in wellness-focused and patient-led communities.',
    leadText: 'Health is personal. We help wellness brands contribute to communities with empathy, accuracy, and sensitivity.',
    capabilities: [
      { title: 'Empathetic Outreach', desc: 'Participating in sensitive health discussions with a supportive, non-commercial tone.', icon: '🌿' },
      { title: 'Misinformation Defense', desc: 'Providing evidence-based information to counter harmful health myths.', icon: '🔬' },
      { title: 'Patient Advocacy', desc: 'Supporting patient communities while naturally building brand awareness.', icon: '💓' }
    ],
    workflow: [
      { title: 'Vulnerability Mapping', desc: 'Identifying subreddits where empathy and support are paramount.' },
      { title: 'Safe-Space Engagement', desc: 'Interacting without disrupting the supportive nature of the community.' },
      { title: 'Credential Building', desc: 'Establishing your brand as a helpful, expert resource in the space.' }
    ]
  },
  'saas': {
    title: 'Reddit for SaaS',
    description: 'Acquire users and reduce churn through technical and community-driven support.',
    leadText: 'Reddit is where developers and power-users live. We help you win their hearts and minds through technical excellence.',
    capabilities: [
      { title: 'Dev-Rel Strategy', desc: 'Engaging developer communities on their own terms (and with their own tools).', icon: '💻' },
      { title: 'Feature Validation', desc: 'Getting real-time feedback on your roadmap from power-users.', icon: '🧪' },
      { title: 'Integration Seeding', desc: 'Highlighting how your SaaS solves specific workflow problems discussed online.', icon: '🔗' }
    ],
    workflow: [
      { title: 'Stack Analysis', desc: 'Identifying the subreddits where your target technical stack is discussed.' },
      { title: 'Technical Seeding', desc: 'Solving user problems using your SaaS features as the solution.' },
      { title: 'Power-User Nurturing', desc: 'Turning active Redditors into your most vocal early adopters.' }
    ]
  }
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogsData: BlogPost[] = [
  {
    slug: 'reddit-for-brand-growth',
    title: 'Why Reddit is the Ultimate Growth Engine for Brands',
    description: 'Discover how authentic community engagement on Reddit can outperform traditional social media ads.',
    category: 'Growth',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Strategy',
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    date: 'April 12, 2024',
    readTime: '5 min read',
    image: '/blogs/growth.png',
    content: `
      <p>In an era where consumers are increasingly blind to traditional advertising, Reddit offers a unique alternative. It's the only platform where users actively seek out product discussions and value brand participation—if done correctly.</p>
      
      <h3>The Power of Community Trust</h3>
      <p>On Reddit, trust isn't built through polished million-dollar ad campaigns. It's built through consistent, helpful, and transparent interactions. When a brand representative answers a technical question or admits a mistake, they gain more loyalty than any TV spot could buy.</p>
      
      <h3>Scalable Authenticity</h3>
      <p>Many brands fear Reddit because they can't "control" the narrative. But that lack of control is exactly why it's so powerful. When the community defends your brand, it carries 10x the weight of an official statement.</p>
      
      <blockquote>"Reddit is the front page of the internet, but more importantly, it's the heartbeat of consumer sentiment."</blockquote>
      
      <p>We've helped hundreds of brands find their voice on Reddit, turning skeptics into champions.</p>
    `
  },
  {
    slug: 'reddit-seo-secrets',
    title: 'Unlocking Reddit SEO: Dominating Google Search',
    description: 'How to leverage the high authority of Reddit to boost your brand\'s visibility in search results.',
    category: 'SEO',
    author: {
      name: 'David Miller',
      role: 'SEO Specialist',
      avatar: 'https://i.pravatar.cc/150?u=david'
    },
    date: 'April 8, 2024',
    readTime: '7 min read',
    image: '/blogs/seo.png',
    content: `
      <p>Google loves Reddit. Have you noticed how "reddit" is often one of the top suggested search terms? This is a massive opportunity for brands to capture high-intent traffic without a massive ad budget.</p>
      
      <h3>The "Reddit Keyword" Phenomenon</h3>
      <p>Users are training Google to show them Reddit results because they trust peer reviews over marketing copy. By seeding valuable information in relevant subreddits, you're effectively optimizing for Google AND Reddit at the same time.</p>
      
      <h3>Long-Tail Keyword Harvesting</h3>
      <p>Reddit is a goldmine for long-tail keywords. People ask questions in their own natural language. By answering these specifically, you capture the "Zero-Click" searches and building authority in your niche.</p>
    `
  },
  {
    slug: 'community-management-best-practices',
    title: 'Modern Community Management: The Reddit Way',
    description: 'Expert tips on managing sensitive discussions and building a loyal fan base on the platform.',
    category: 'Management',
    author: {
      name: 'Anita Roy',
      role: 'Community Lead',
      avatar: 'https://i.pravatar.cc/150?u=anita'
    },
    date: 'April 2, 2024',
    readTime: '6 min read',
    image: '/blogs/management.png',
    content: `
      <p>Managing a community on Reddit is a delicate balance. It's not about moderation; it's about facilitation. You're not the "boss" of the community; you're its most helpful member.</p>
      
      <h3>Developing a Brand Persona</h3>
      <p>Your brand needs a voice that sounds like a person, not a committee. We help you develop a persona that is knowledgeable, slightly self-deprecating, and fiercely helpful.</p>
      
      <h3>Crisis Management in Real-Time</h3>
      <p>Things move fast on Reddit. A negative thread can go viral in hours. We teach your team how to address criticism head-on, with empathy and facts, before it spirals into a PR crisis.</p>
    `
  }
];

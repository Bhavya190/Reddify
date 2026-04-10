export interface SolutionData {
  title: string;
  description: string;
  leadText: string;
  capabilities: { title: string; desc: string; icon: string }[];
  workflow: { title: string; desc: string }[];
}

export const solutionsData: Record<string, SolutionData> = {
  'reddit-account-optimization': {
    title: 'Reddit Account Optimization',
    description: 'Ensure your profiles are aligned with subreddit expectations and community standards.',
    leadText: 'Success on Reddit starts with a credible presence. We engineer accounts that don\'t just look human—they look influential.',
    capabilities: [
      { title: 'Karma Architecture', desc: 'Strategic organic growth of account reputation and age.', icon: '📈' },
      { title: 'Niche Calibration', desc: 'Tailoring profiles to match specific subreddit demographics.', icon: '🎯' },
      { title: 'Trust Engineering', desc: 'Ensuring account history provides immediate social proof.', icon: '🛡️' }
    ],
    workflow: [
      { title: 'Profile Audit', desc: 'Analyzing current reputation and identifying alignment gaps.' },
      { title: 'Organic Weighting', desc: 'Building history through non-promotional, high-value engagement.' },
      { title: 'Influencer Launch', desc: 'Deploying the account into high-stakes discussions.' }
    ]
  },
  'reddit-brand-presence': {
    title: 'Reddit Brand Presence',
    description: 'Build an authentic voice for your brand within the world\'s largest conversation platform.',
    leadText: 'Brands that "broadcast" on Reddit fail. We help you "participate" in a way that builds long-term loyalty.',
    capabilities: [
      { title: 'Voice Guidelines', desc: 'Developing a platform-specific tone of voice that resonates.', icon: '🗣️' },
      { title: 'Subreddit Hosting', desc: 'Managing your official brand subreddit and community.', icon: '🏠' },
      { title: 'Sentiment Guard', desc: 'Proactive monitoring and steering of brand mentions.', icon: '🚨' }
    ],
    workflow: [
      { title: 'Cultural Mapping', desc: 'Identifying the subreddits where your brand belongs.' },
      { title: 'Value Seeding', desc: 'Contributing to existing threads without selling.' },
      { title: 'Authority Building', desc: 'Becoming a trusted resource for community members.' }
    ]
  },
  'reddit-upvotes': {
    title: 'Strategic Reddit Upvotes',
    description: 'Drive visibility through organic, distributed upvoting networks.',
    leadText: 'Visibility on Reddit is a function of timing and community consensus. We ensure your best content gets seen.',
    capabilities: [
      { title: 'Velocity Control', desc: 'Matching upvote speed to subreddit organic patterns.', icon: '⚡' },
      { title: 'Geo-Distribution', desc: 'Ensuring global reach through localized operator networks.', icon: '🌎' },
      { title: 'Silo Isolation', desc: 'Strict separation of accounts to prevent detection.', icon: '🔒' }
    ],
    workflow: [
      { title: 'Timing Analysis', desc: 'Identifying the optimal windows for peak visibility.' },
      { title: 'Distributed Support', desc: 'Activating the network to support high-potential threads.' },
      { title: 'Visibility Audit', desc: 'Tracking reach and front-page performance.' }
    ]
  },
  'reddit-commenting': {
    title: 'Reddit Commenting Strategy',
    description: 'Steer the narrative through nuanced, high-value commentary.',
    leadText: 'The real conversation happens in the comments. We ensure your perspective is a part of it.',
    capabilities: [
      { title: 'Sentiment Steering', desc: 'Nuanced responses that shift thread tone naturally.', icon: '🧭' },
      { title: 'Debunking & Guard', desc: 'Countering misinformation with fact-based responses.', icon: '🛡️' },
      { title: 'Topic Authority', desc: 'Establishing expertise in technical or niche discussions.', icon: '🎓' }
    ],
    workflow: [
      { title: 'Alert Triggers', desc: 'Real-time notification for relevant keyword mentions.' },
      { title: 'Contextual Drafts', desc: 'Crafting responses that fit the specific thread vibe.' },
      { title: 'Community Feedback', desc: 'Iterating based on community reception and upvotes.' }
    ]
  },
  'reddit-posting': {
    title: 'Reddit Posting & Seeding',
    description: 'Launch high-impact threads that drive massive engagement.',
    leadText: 'Effective posting is part science, part storytelling. We engineer threads that communities love.',
    capabilities: [
      { title: 'Thread Engineering', desc: 'Crafting headlines and content designed for virality.', icon: '🏗️' },
      { title: 'Seeding Timing', desc: 'Optimizing launch windows across 28 global timezones.', icon: '⏰' },
      { title: 'Narrative Arcs', desc: 'Planning multi-thread campaigns for long-term impact.', icon: '📈' }
    ],
    workflow: [
      { title: 'Concept Creation', desc: 'Developing story angles that fit subreddit styles.' },
      { title: 'Stealth Launch', desc: 'Posting from established, credible community members.' },
      { title: 'Engagement Support', desc: 'Managing the initial hour of discussion for momentum.' }
    ]
  },
  'reddit-growth-campaigns': {
    title: 'Reddit Growth Campaigns',
    description: 'Full-funnel growth strategies engineered for the Reddit userbase.',
    leadText: 'Scale your userbase through performance campaigns that feel like community initiatives.',
    capabilities: [
      { title: 'Sovereign Growth', desc: 'Building user bases within specific subreddit niches.', icon: '🚀' },
      { title: 'Referral Engines', desc: 'Incentivizing organic mentions and user advocacy.', icon: '🔗' },
      { title: 'Conversion Shaping', desc: 'Bridging the gap between Reddit threads and your product.', icon: '💎' }
    ],
    workflow: [
      { title: 'Audience Mining', desc: 'Defining the psychographics of your ideal users.' },
      { title: 'Incentive Design', desc: 'Creating value props that Redditors actually care about.' },
      { title: 'Scaling Phase', desc: 'Distributing success across dozens of related subreddits.' }
    ]
  },
  'reddit-engagement': {
    title: 'Community Engagement',
    description: 'Managing ongoing interactions for consistent brand visibility.',
    leadText: 'Consistency builds reputation. We manage your daily community interactions at scale.',
    capabilities: [
      { title: 'Daily Presence', desc: 'Consistent, low-friction interactions across the board.', icon: '📅' },
      { title: 'Crisis Response', desc: 'Rapid, calm intervention in negative-sentiment threads.', icon: '🆘' },
      { title: 'User Advocacy', desc: 'Identifying and nurturing your brand\'s biggest fans.', icon: '👑' }
    ],
    workflow: [
      { title: 'Queue Management', desc: 'Monitoring thousands of subreddit mentions daily.' },
      { title: 'Nuanced Reply', desc: 'Engaging with users in their preferred community style.' },
      { title: 'Insight Looping', desc: 'Feeding community feedback back to your product team.' }
    ]
  },
  'reddit-analytics-reporting': {
    title: 'Reddit Analytics & Reporting',
    description: 'Translucent metrics on sentiment, reach, and ROI.',
    leadText: 'Reddit is often a "black box" for CMOs. We provide the data you need to justify every dollar.',
    capabilities: [
      { title: 'Sentiment Heatmaps', desc: 'Visualizing how community tone shifts over time.', icon: '🌡️' },
      { title: 'Competitor Intel', desc: 'Tracking rival brands and their subreddit performance.', icon: '🕵️' },
      { title: 'ROI Attribution', desc: 'Linking Reddit activity to your core business goals.', icon: '💰' }
    ],
    workflow: [
      { title: 'Data Ingestion', desc: 'Aggregating mentions from across 100k+ subreddits.' },
      { title: 'AI Categorization', desc: 'Processing sentiment and intent at scale.' },
      { title: 'Impact Delivery', desc: 'Weekly reports with actionable executive summaries.' }
    ]
  },
  'reddit-sentiment-analysis': {
    title: 'Sentiment Analysis',
    description: 'Deep-dive into community perspectives and brand inhibitors.',
    leadText: 'What is Reddit actually saying about you? No vanity metrics, just the raw truth.',
    capabilities: [
      { title: 'Root-Cause Discovery', desc: 'Finding the origin of positive or negative trends.', icon: '🔍' },
      { title: 'Emotional Mapping', desc: 'Understanding the specific feelings (anger, joy, skepticism) driving threads.', icon: '🧠' },
      { title: 'Predictive Trends', desc: 'Spotting potential PR issues before they go viral.', icon: '🔮' }
    ],
    workflow: [
      { title: 'Keyword Broadening', desc: 'Identifying hidden conversations using synonyms and slang.' },
      { title: 'Tone Verification', desc: 'Ensuring human context isn\'t lost in automated analysis.' },
      { title: 'Correction Strategy', desc: 'Developing the content plan to shift detected sentiment.' }
    ]
  },
  'reddit-content-thread-engineering': {
    title: 'Content & Thread Engineering',
    description: 'Bespoke content creation designed to be "upvote-native".',
    leadText: 'Marketing copy doesn\'t work on Reddit. We build engineering-grade content that does.',
    capabilities: [
      { title: 'Native Storytelling', desc: 'Transforming brand messages into subreddit-native stories.', icon: '📖' },
      { title: 'Visual Optimization', desc: 'Designing assets (images/infographics) for high upvote ratios.', icon: '🖼️' },
      { title: 'Format Innovation', desc: 'Using polls, AMAs, and custom formats to drive reach.', icon: '💡' }
    ],
    workflow: [
      { title: 'Asset Production', desc: 'Creating the core content based on subreddit culture.' },
      { title: 'Distribution Plan', desc: 'Planning the sequence of posts for maximum halo effect.' },
      { title: 'Retention Seeding', desc: 'Building "evergreen" threads that stay relevant for months.' }
    ]
  },
  'reddit-insights-seo-geo': {
    title: 'Reddit Insights & SEO/GEO',
    description: 'Dominate Google Search results through high-authority Reddit threads.',
    leadText: 'Google loves Reddit. We ensure your brand dominates search results through "Reddit SEO".',
    capabilities: [
      { title: 'Google Dominance', desc: 'Ranking Reddit threads for your branded keywords.', icon: '🔍' },
      { title: 'Geometric Targeting', desc: 'Tailoring content for hyper-local subreddit communities.', icon: '📍' },
      { title: 'Index Engineering', desc: 'Ensuring your best threads are quickly indexed by search engines.', icon: '📄' }
    ],
    workflow: [
      { title: 'SERP Audit', desc: 'Identifying "leakage" where competitors are ranking on Reddit.' },
      { title: 'Keyword Hijacking', desc: 'Creating superior threads that outrank current results.' },
      { title: 'Link Echoing', desc: 'Building the cross-platform mentions that keep threads ranked.' }
    ]
  }
};

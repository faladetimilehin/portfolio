// All site content lives here, so you can update the portfolio without touching components.

export const profile = {
  name: 'Timilehin Falade',
  firstName: 'Timilehin',
  lastName: 'Falade',
  title: 'Senior Software Engineer',
  stack: ['React', 'TypeScript', 'Node.js', 'AWS', 'Fintech'],
  rotatingRoles: ['payment platforms', 'SaaS products', 'fintech interfaces', 'AI features'],
  location: 'Birmingham, UK',
  email: 'faladetimilehin@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/faladetimilehin/',
  github: 'https://github.com/faladetimilehin', // ← change if your GitHub username is different
  cv: '/assets/Timi-Falade-CV.pdf',
  // ← Paste your Calendly event link here (Calendly → Event types → Copy link)
  calendly: 'https://calendly.com/faladetimilehin/30min',
  // ← Optional: add a professional headshot at public/assets/timi.jpg and set this to '/assets/timi.jpg'
  photo: '/assets/timi.jpg' as string,
};

// Scrolls across the page under the hero
export const marquee = ['NIBSS', 'CBN', 'PerfectScope', 'Severus', 'Jethro', 'Outlier', 'Paycrow','PatterPlace','7thLeo Couture', 'Softcom', 'Baby Connect', 'Opeketé Foundation'];

export const stats = [
  { value: 8, suffix: '+', label: 'Years building software' },
  { value: 6, suffix: ' yrs', label: 'National payment infrastructure at NIBSS' },
  { value: 30, suffix: '%', label: 'Faster customer signup at Jethro' },
  { value: 29, suffix: '%', label: 'Better API integration efficiency at NIBSS' },
];

export const pillars = [
  { tone: 'accent', title: 'Fintech at national scale', body: 'Bulk salary and remittance payments, QR collections, USSD, 2FA and real-time transaction status at NIBSS.' },
  { tone: 'ai', title: 'AI-native products', body: 'LLM assistants and AI insights shipped inside real products: Severus (Snape) and Baby Connect.' },
  { tone: 'ok', title: 'Full-stack ownership', body: 'Next.js + TypeScript frontends, Express APIs, MongoDB, queues, RBAC, payments and CI/CD.' },
  { tone: 'accent', title: 'Built for the UK market', body: 'GDPR-aware childcare platform, Direct Debit via GoCardless, and a staffing agency portal.' },
] as const;

export const aiCards = [
  { k: 'LLM product features', title: 'AI assistants in SaaS', body: 'Working on Snape, the AI assistant inside the Severus workspace. It answers from selected sources and helps draft work, with source checks built in.', where: 'Severus · Asynk IO' },
  { k: 'AI integration', title: 'Claude SDK insights', body: 'Integrated the Anthropic Claude SDK into Baby Connect to generate AI insights, running through BullMQ background jobs so the API stays fast.', where: 'Baby Connect · Node.js + BullMQ' },
  { k: 'Model evaluation', title: 'LLM quality & reasoning', body: 'As an ML researcher at Outlier, I evaluated LLM reasoning, accuracy and code quality. I use the same judgement to test AI features before they ship.', where: 'Outlier · MSc Data Science' },
];

export const aiPipeline = [
  ['prompt + retrieval', 'structured output (typed, validated)'],
  ['queue heavy LLM calls', 'BullMQ workers, retries, rate limits'],
  ['guardrails', 'source citations, RBAC-scoped data, human review'],
  ['evaluate', 'test prompts, regression checks, cost tracking'],
];

export type Job = {
  period: string;
  type: string;
  current?: boolean;
  role: string;
  company: string;
  points: string[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    period: 'Oct 2025 – Present', type: 'Full-time', current: true,
    role: 'Senior Software Engineer', company: 'PerfectScope',
    points: [
      'Build fintech and e-commerce platforms in React and TypeScript for clients including luxury fashion brand 7thLeo Couture.',
      'Integrated REST APIs for payments, customer authentication, analytics and transaction management.',
      'Delivered recommendation, predictive-analytics dashboards and search features that improve user experience and operational efficiency.',
      'Work with product managers, designers and backend engineers to scope, build and release features.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Analytics'],
  },
  {
    period: 'Aug 2025 – Mar 2026', type: 'Part-time · Remote',
    role: 'Machine Learning Researcher', company: 'Outlier',
    points: ['Evaluated and improved the reasoning, accuracy and code output of large language models through expert review and structured feedback.'],
    tags: ['LLMs', 'AI Evaluation', 'NLP'],
  },
  {
    period: 'Jan 2020 – May 2026', type: 'Full-time',
    role: 'Senior Frontend Developer', company: 'Nigeria Inter-Bank Settlement System (NIBSS)',
    points: [
      'Built the frontend for NIBSSPay, a bulk payment platform for salaries, remittances and multi-beneficiary transfers used by corporates, banks and government.',
      'Built merchant and customer interfaces for NQR, the national QR payments platform, plus USSD merchant payments that work without internet.',
      'Contributed to the frontend of the BVN biometric verification ecosystem, strengthening security across Nigerian banking.',
      'Built an in-house authentication system that improved API integration efficiency by 29% and cut manual operations work.',
      'Built real-time analytics dashboards over REST and GraphQL APIs, working in CI/CD with Dockerised builds and peer code review.',
    ],
    tags: ['React', 'GraphQL', 'Docker', '2FA', 'Payments', 'Jest'],
  },
  {
    period: 'Feb 2019 – Dec 2019', type: 'Full-time · UK',
    role: 'Software Developer', company: 'Jethro',
    points: [
      'Helped build a mobile-first bank giving everyone equal access to financial services, online or offline.',
      'Built a custom login tool that cut customer signup time by 30% and doubled signups within 6 months.',
      'Built a unit-testing setup that cut reported bugs by 11% month over month, and enforced coding standards that cut bug resolution time by 33%.',
      'Implemented CI/CD pipelines to automate build, test and cloud deployment.',
    ],
    tags: ['React/Redux', 'CI/CD', 'Jest', 'Cloud'],
  },
  {
    period: 'Mar 2018 – Feb 2019', type: 'Part-time',
    role: 'System Engineer', company: 'Softcom Limited',
    points: [
      'Built an ID creation, sharing and authentication tool that cut manual ID processing time by 40%.',
      'Worked directly with 3 clients to deliver sites that met their needs, with over 95% customer satisfaction.',
    ],
    tags: ['JavaScript', 'Automation', 'Systems'],
  },
];

export type Project = {
  name: string;
  sub: string;
  status: 'Live' | 'In development' | 'Client';
  body: string;
  points: string[];
  link?: { href: string; label: string };
  note?: string;
  feature?: boolean;
  arch?: { title: string; rows: { label: string; kind?: 'a' | 'i' }[][] };
};

export const projects: Project[] = [
  {
    name: 'Severus', sub: 'AI workspace for teams · Developer, Asynk IO team', status: 'Live', feature: true,
    body: "One workspace that connects a team's projects, meetings and decisions: requests and approvals, projects with tasks and milestones, a file library, calendar, finance records and meeting summaries. Snape, the built-in AI assistant, answers from selected sources and helps draft work.",
    points: ["AI assistant answering from a workspace's own sources", 'Approval routing and workflow automation', 'Tiered SaaS plans with seats and AI credits'],
    link: { href: 'https://severusflow.com/', label: 'Visit severusflow.com ↗' },
    arch: { title: 'Product surface', rows: [
      [{ label: 'Requests', kind: 'a' }, { label: 'Projects', kind: 'a' }, { label: 'Files', kind: 'a' }, { label: 'Meetings', kind: 'a' }],
      [{ label: 'Approvals & automation' }, { label: 'Calendar' }, { label: 'Finance' }],
      [{ label: 'Snape AI assistant · source-grounded answers', kind: 'i' }],
    ] },
  },
  {
    name: 'Baby Connect', sub: 'UK childminding & parent platform · Solo build', status: 'In development', feature: true,
    body: 'A simple platform connecting childminders, nurseries, parents and new mums across the UK, covering bookings, communication, billing and AI insights. Designed with UK GDPR in mind. Web is in progress, with native iOS and Android apps planned.',
    points: ['Monorepo: Next.js 14 + TypeScript frontend, Express API', '93 passing backend tests', 'Role-based access with six built-in roles and per-permission toggles', 'Direct Debit payments via GoCardless', 'Claude SDK AI insights run through BullMQ workers'],
    link: { href: 'https://github.com/faladetimilehin/baby-connect', label: 'Code ↗' },
    note: 'Live demo coming soon',
    arch: { title: 'Architecture', rows: [
      [{ label: 'Next.js 14 · Zustand · SWR', kind: 'a' }],
      [{ label: 'Express API · RBAC', kind: 'a' }, { label: 'Jest · 93 tests' }],
      [{ label: 'MongoDB Atlas' }, { label: 'BullMQ jobs' }, { label: 'GoCardless' }],
      [{ label: 'Anthropic Claude SDK · AI insights', kind: 'i' }],
    ] },
  },
  {
    name: 'Kerry Collins Staff Portal', sub: 'Staffing agency platform · Social care & education', status: 'Client',
    body: 'Full-stack staff management for a UK staffing agency, covering the whole lifecycle from onboarding to timesheets.',
    points: ['Digital onboarding and document management', 'Scheduling, bookings, timesheets and two-way messaging', '46 routes on Next.js 14, TypeScript, MongoDB, NextAuth'],
    note: 'Private client project · walkthrough on request',
  },
  {
    name: '7thLeo Couture', sub: 'Luxury fashion e-commerce · via PerfectScope', status: 'Live',
    body: 'A high-end commerce experience for a Nigerian couture brand: brand-led UI, product discovery and a smooth path to purchase.',
    points: ['React frontend with a responsive, luxury-styled UI', 'Search and recommendation features'],
    link: { href: 'https://7thleo.com/', label: 'Visit site ↗' },
  },
  {
    name: 'Opeketé Foundation', sub: 'Non-profit platform', status: 'Live',
    body: 'A digital home for a non-profit that empowers the next generation of female leaders through education and advocacy.',
    points: ['Responsive, accessible design that content editors can update'],
    link: { href: 'https://www.opeketefoundation.org/', label: 'Visit site ↗' },
  },
  {
    name: 'This portfolio', sub: 'Open source · React + TypeScript', status: 'Live',
    body: 'Built with React 18, TypeScript, Vite and Framer Motion. It respects reduced-motion settings, and type checks, tests and builds run in GitHub Actions on every push.',
    points: ['Vitest + Testing Library unit tests', 'Light/dark theme saved per visitor', 'Freelance enquiries via Netlify Forms + Calendly'],
    link: { href: 'https://github.com/faladetimilehin/portfolio', label: 'Code ↗' },
  },
];

export const cases = [
  { title: 'NIBSSPay: bulk payments', items: [['Problem', 'Corporates and government needed to pay salaries and many beneficiaries safely in a single run.'], ['What I built', 'Payment-run frontends, account validation, 2FA flows and real-time transaction status.'], ['Stack', 'React, REST APIs, CI/CD']] },
  { title: 'NQR: QR payments', items: [['Problem', 'Merchants needed contactless, low-cost collections across all banks.'], ['What I built', 'Merchant onboarding, customer payment UI, notifications and real-time validation.'], ['Stack', 'React, API integration']] },
  { title: 'Enterprise authentication', items: [['Problem', 'Manual, slow API onboarding and access management.'], ['What I built', 'An in-house authentication system integrated across services.'], ['Impact', '29% better API integration efficiency and less manual work.']] },
];

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js 14 (App Router)', 'TypeScript', 'Redux', 'Zustand', 'SWR', 'Tailwind CSS', 'Framer Motion', 'Vue.js'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'REST', 'GraphQL', 'BullMQ', 'NextAuth.js', 'RBAC'] },
  { group: 'AI & Data', ai: true, items: ['LLM integration', 'Anthropic Claude SDK', 'AI assistants', 'LLM evaluation', 'AI-assisted development', 'Machine learning'] },
  { group: 'Data stores', items: ['MongoDB Atlas', 'Redis'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Netlify / Vercel'] },
  { group: 'Payments, quality & delivery', items: ['Bulk & QR payments', 'GoCardless', '2FA', 'Jest', 'Vitest', 'TDD', 'Agile / Scrum', 'Jira'] },
];

export const services = [
  'Web app / SaaS build',
  'Frontend (React / Next.js)',
  'AI feature integration',
  'Fintech / payments integration',
  'Website for a business',
  'Code review / technical consulting',
  'Other',
];

export const budgets = ['Under £1,000', '£1,000 – £5,000', '£5,000 – £15,000', '£15,000+', 'Not sure yet'];
export const timelines = ['ASAP', 'Within 1 month', '1 – 3 months', 'Flexible'];

export const NAV = [
  { id: 'home',       icon: '⌂', label: 'Home'       },
  { id: 'about',      icon: '◈', label: 'About'      },
  { id: 'skills',     icon: '◉', label: 'Skills'     },
  { id: 'education',  icon: '◎', label: 'Education'  },
  { id: 'experience', icon: '▣', label: 'Experience' },
  { id: 'projects',   icon: '▦', label: 'Projects'   },
  { id: 'contact',    icon: '✉', label: 'Contact'    },
];

export const AUTHOR = {
  name:       'Lucy Nwokoye',
  title:      'Fullstack Web Developer',
  tagline:    'Software Engineer',
  bio:        "A Fullstack Web developer with a passion for creating dynamic, user-friendly, and visually appealing web applications. I specialise in building responsive interfaces with React, ensuring seamless performance across all devices.",
  email:      'nwokoyelucy@gmail.com',
  phone:      '+234-706-756-1427',
  avatar:     '/profile-pic.jpeg',
  socials: {
    github:    'https://github.com/BabyLucyJoan',
    linkedin:  'https://linkedin.com/in/nwokoye-lucy-5b924128b',
    tiktok:    'https://www.tiktok.com/@njl_splendour?_t=ZS-8zv7i5MHple&_r=1',
    telegram:  'https://t.me/techNteach',
    facebook:  'https://facebook.com/lucy.nwokoye',
    instagram: 'https://instagram.com/njl_splendour',
  },
};

export const SKILLS = [
  { name: 'React',              pct: 88, cat: 'frontend' },
  { name: 'JavaScript (ES6+)', pct: 85, cat: 'frontend' },
  { name: 'HTML5',              pct: 92, cat: 'frontend' },
  { name: 'CSS3',               pct: 90, cat: 'frontend' },
  { name: 'TypeScript',        pct: 78, cat: 'frontend' },
  { name: 'Vite',              pct: 80, cat: 'frontend' },
  { name: 'Node.js',           pct: 68, cat: 'backend'  },
  { name: 'MongoDB',           pct: 65, cat: 'backend'  },
  { name: 'Git & GitHub',      pct: 85, cat: 'tooling'  },
  { name: 'Postman',           pct: 75, cat: 'tooling'  },
  { name: 'Vercel Deployments',pct: 80, cat: 'tooling'  },
  { name: 'Axios / REST APIs', pct: 78, cat: 'tooling'  },
];

export const CAT_COLORS = {
  frontend: 'var(--acc)',
  backend:  'var(--acc3)',
  tooling:  'var(--acc2)',
};

export const EDUCATION = [
  {
    year:        2024,
    degree:      "Bachelor of Science",
    field:       'Geography and Environmental Management',
    institution: 'University of Port Harcourt',
    url:         'https://www.uniport.edu.ng',
  },
  {
    year:        2023,
    degree:      'Certification',
    field:       'Fullstack Web Development',
    institution: 'Smartech Global',
    url:         '',
  },
  {
    year:        2022,
    degree:      'Certification',
    field:       'Frontend Web Development',
    institution: 'Codecademy',
    url:         'https://www.codecademy.com/',
  },
  {
    year:        2018,
    degree:      'Vocational Training',
    field:       'Pattern Drafting & Sewing',
    institution: 'Fashion Design Training',
    url:         '',
  },
];

export const EXPERIENCE = [
  {
    period:  '2025 – Present',
    role:    'Frontend Developer',
    company: 'Xynder',
    tags:    ['React', 'TypeScript', 'Vite', 'Axios', 'Git'],
    accent:  'var(--acc)',
    desc:    'Building and shipping features on Zealock Admin — implemented scheduled notification systems using setInterval in React/TypeScript, added manual fallback buttons with failure-state UI, and contributed to pull request workflows and team collaboration in a production codebase.',
  },
  {
    period:  '2024 – 2025',
    role:    'Freelance React Developer',
    company: 'SyncGrass Limited',
    tags:    ['React', 'Vercel', 'CSS', 'localStorage', 'Carousel'],
    accent:  'var(--acc2)',
    desc:    'Converted a static website to a full React application deployed on Vercel. Delivered dark/light mode toggle with localStorage override logic, a scrolling marquee component, carousel enhancements, service detail pages, and a clean component architecture.',
  },
];

export const PROJECTS = [
  {
    title:   'Tech And Teach Community',
    tech:    'Community · Telegram · Africa',
    desc:    'A vibrant Tech community of over a thousand people from across Africa — a space where learners, enthusiasts, and professionals explore technology, share knowledge, and grow through interactive tutorials, challenges, and discussions.',
    live:    'https://t.me/techNteach',
    github:  '',
    bgColor: 'linear-gradient(135deg,#0a1a2e,#1a0a2e)',
    icon:    '🌍',
    accent:  'var(--acc)',
  },
  {
    title:   'NJL Splendour E-commerce',
    tech:    'React.js · Next.js · Tailwind CSS · Vercel',
    desc:    'Luxury fashion storefront showcasing modern UI and responsive design. Built with Next.js and Tailwind for a fast, elegant shopping experience.',
    live:    'https://njlsplendourecommerce.vercel.app/',
    github:  '',
    bgColor: 'linear-gradient(135deg,#2e0a1a,#1a0a2e)',
    icon:    '👗',
    accent:  'var(--acc3)',
  },
  {
    title:   'NoteAngel',
    tech:    'React.js · Tailwind CSS · Vercel',
    desc:    'A clean and minimal note-taking app that lets users create and organize notes with ease. Focused on simplicity and smooth UX.',
    live:    'https://noteangel.vercel.app/',
    github:  '',
    bgColor: 'linear-gradient(135deg,#0a2e1a,#0a1a2e)',
    icon:    '📝',
    accent:  'var(--acc2)',
  },
  {
    title:   'AtmosphereNow',
    tech:    'React.js · OpenWeatherMap API · CSS · Vercel',
    desc:    'A real-time weather app that provides instant updates on current conditions with a clean and responsive interface.',
    live:    'https://atmosphere-now.vercel.app',
    github:  '',
    bgColor: 'linear-gradient(135deg,#0a1a2e,#0a2e2e)',
    icon:    '🌤',
    accent:  'var(--acc)',
  },
  {
    title:   'Zealock Admin — Notifications',
    tech:    'React · TypeScript · Vite · setInterval',
    desc:    'Scheduled notification system with manual fallback trigger and failure-state UI. Built at Xynder as part of the Zealock Admin internal product.',
    live:    '',
    github:  '',
    bgColor: 'linear-gradient(135deg,#1a0a2e,#0a1a2e)',
    icon:    '🔔',
    accent:  'var(--acc)',
  },
  {
    title:   'SyncGrass Limited Website',
    tech:    'React · Vercel · Dark/Light Mode',
    desc:    'Full React conversion of a business website with animated marquee, enhanced carousel, theme toggle, and service detail pages.',
    live:    '',
    github:  '',
    bgColor: 'linear-gradient(135deg,#0a2e1a,#0a1a2e)',
    icon:    '🌿',
    accent:  'var(--acc2)',
  },
];

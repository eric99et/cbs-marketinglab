// Content lives here so it is easy to update without touching the pages.
// Placeholders from Instagram/LinkedIn until the board sends the real lists.

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const img = (n: string) => `${base}/img/${n}.webp`;
export const url = (p = '') => `${base}/${p}`;

export const EMAIL = 'general.marketinglab@gmail.com';
export const PARTNER_EMAIL = 'marketinglab.partnerships@gmail.com';

export const socials = [
  { name: 'Instagram', handle: '@marketinglab', href: 'https://www.instagram.com/marketinglab/' },
  { name: 'LinkedIn', handle: 'CBS Marketing Lab', href: 'https://www.linkedin.com/company/marketinglab-copenhagen/' },
];

export type Event = { date: string; title: string; with: string; place: string; photo: string; tone: 'sage' | 'paper' | 'mauve'; blurb: string };
export const upcoming: Event[] = [];
export const gcal = (e: { title: string; place: string; blurb: string; iso?: string }) => {
  if (!e.iso) return '';
  const d = e.iso.replace(/[-:]/g, '');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.title)}&dates=${d}/${d}&location=${encodeURIComponent(e.place)}&details=${encodeURIComponent(e.blurb)}`;
};
export const past: Event[] = [
  { date: '08.10.2026', title: 'Station Community Dinner', with: 'Bold Scandinavia / NoA', place: 'Station', photo: 'dinner', tone: 'sage', blurb: 'Long tables, good food and the people behind some of Scandinavia’s boldest brands.' },
  { date: '08.10.2026', title: 'AI in marketing', with: 'Bold Scandinavia', place: 'Station', photo: 'event-bold-talk', tone: 'paper', blurb: 'What AI actually changes for creative work, straight from the agency floor.' },
  { date: '27.04.2026', title: 'Building brands with creative distinctiveness', with: 'Christian Langballe, Bold', place: 'Arena at Station', photo: 'poster-bold', tone: 'mauve', blurb: 'Bold’s Co-CEO & Executive Creative Director on why distinctive beats safe.' },
  { date: '2021', title: 'Is the future plant-based?', with: 'Nielsen x Arla', place: 'CBS', photo: 'listening', tone: 'paper', blurb: 'Data meets dairy: a live case on one of food’s biggest shifts.' },
  { date: '2018', title: 'The Agency', with: 'Dziobak Larp Studios', place: 'CBS', photo: 'camera', tone: 'sage', blurb: 'A reality-fiction simulation of life inside a media agency. Yes, really.' },
];

export const partners = ['Bold Scandinavia', 'NoA', "L'Oréal", 'Google x WeStart', 'DEPT', 'Nielsen', 'Arla', 'WeThink', 'FirstMind', 'Mimer', 'Female Invest'];

export const perks = ['real company cases', 'new friends', 'a CV that pops', 'citizenship point', 'free coffee'];

export const faq = [
  { q: 'Who can apply?', a: 'Any CBS student who cares about marketing. No experience needed, curiosity is.' },
  { q: 'When can I apply?', a: 'We recruit at the start of each semester. Follow @marketinglab so you don’t miss it.' },
  { q: 'How much time does it take?', a: 'A few hours a week, depending on your team. Exam season is respected.' },
  { q: 'What do I get?', a: 'Hands-on cases with real companies, a network, a student citizenship point and friends for life (probably).' },
];

export const nav = [
  { href: url(''), label: 'start', note: 'back to the top', key: 'home' },
  { href: url('about/'), label: 'who we are', note: 'since 2012', key: 'about' },
  { href: url('events/'), label: 'events', note: 'free pizza (probably)', key: 'events' },
  { href: url('partners/'), label: 'partners', note: 'got a brief?', key: 'partners' },
  { href: url('join/'), label: 'join us', note: 'your CV called', key: 'join' },
  { href: url('contact/'), label: 'say hi', note: "we don't bite", key: 'contact' },
];

// Board: fill in names, photos (public/img/board-<key>.webp) and LinkedIn URLs when the board confirms.
export const board: { key: string; role: string; name: string; photo?: string; linkedin?: string }[] = [
  { key: 'president', role: 'President', name: 'Arshdip Kang', photo: 'board-president' },
  { key: 'partnerships', role: 'VP & Head of Partnerships', name: 'Vanessa Begovic', photo: 'board-partnerships' },
  { key: 'marketing', role: 'Head of Marketing', name: 'Neda Elze Stundzyte', photo: 'board-marketing' },
  { key: 'operations', role: 'Head of Operations', name: 'Tuva Lagerdahl Bauer', photo: 'board-operations' },
  { key: 'digital', role: 'Head of Digital', name: 'Eric Sjölin' },
];

// From the partnership brochure 2026/27
export const MEMBERS = 21;
export const teams = ['Partnerships', 'Operations', 'Marketing', 'Digital', 'Finance'];
export const vision = 'A marketing industry that learns from its next generation, not just recruits from it.';
export const mission = 'We bring CBS students and the marketing industry together around real challenges. Our members work on the problems companies face today, and companies get fresh perspectives from the generation they want to reach.';
export const values = [
  { title: 'Practice over theory', text: 'Real briefs, real constraints, real feedback from the people who set them.' },
  { title: 'Debate over consensus', text: 'Different views on one stage, because that is where good ideas get tested.' },
  { title: 'Craft in every detail', text: 'Every event is planned and designed by us, with the same care as a real campaign.' },
];

// Everything shown on the homepage. Edit text here; the page picks it up.

export const profile = {
  name: 'Fuad',
  fullName: 'Md Fuadul Islam',
  handle: 'fooaad',
  tagline: 'Software engineer, LLM systems & evaluation',
  location: 'Tampa, FL',
  email: 'hi.fooaad@gmail.com',
};

export const intro = [
  "I'm a software engineer working on LLM systems and how we evaluate them. I've built real-time media and transcription pipelines, picked models by measuring quality and cost on messy real-world audio, and worked on the plumbing behind an LLM-driven coding agent.",
  "Before that I spent three years at Samsung R&D building iOS and Android apps, from push-to-talk calling for first responders to wearable apps for early Alzheimer's detection research. I came up through competitive programming and still enjoy a hard algorithm problem.",
];

export const interests = [
  'Evaluating AI coding tools and agents',
  'LLM orchestration',
  'Reliable, trustworthy developer tooling',
];

export const work = [
  { org: 'Re:cruit', role: 'Software engineering consultant', dates: '2026' },
  { org: 'Samsung R&D', role: 'Senior software engineer, Wearables', dates: '2024 – 2025' },
  { org: 'Samsung R&D', role: 'Software engineer, Service eXperience', dates: '2022 – 2024' },
];

export const research = [
  {
    title: 'Sentiment Analysis of COVID-19 Vaccination in Bangla with Code-Mixed Text from Social Media',
    venue: 'IEEE',
    year: '2022',
    note: 'First code-mixed Bangla–English sentiment corpus (CoVaxBD); fine-tuned mBERT to 97.3% validation accuracy.',
    url: '',
  },
];

export const competitive = [
  'Codeforces Expert (max rating 1856)',
  '24th, ICPC Dhaka Regional 2019',
  'Senior trainer, IUT Computer Society (2020 – 2022)',
];

export const education = [
  { school: 'Islamic University of Technology', degree: 'B.Sc. Software Engineering', dates: '2022' },
];

// Links with an empty url are hidden.
export const links = [
  { label: 'GitHub', url: 'https://github.com/fooaad' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/fooaad' },
  { label: 'Google Scholar', url: '' },
  { label: 'Codeforces', url: 'https://codeforces.com/profile/fuad' },
  { label: 'CV', url: '' }, // set to '/cv.pdf' once a public (phone-free) CV is in public/
];

// Everything shown on the homepage. Edit text here; the page picks it up.

export const profile = {
  name: 'Fuad',
  fullName: 'Md Fuadul Islam',
  handle: 'fooaad',
  tagline: 'Software engineer (ex-Samsung R&D) · Prospective graduate student, Fall 2027',
  location: 'Tampa, FL',
  email: 'hi.fooaad@gmail.com',
};

export const intro = [
  "I'm a software engineer applying to graduate programs for Fall 2027. Over the past four years I've built systems that have to hold up in the real world: push-to-talk calling for first responders and wearable apps for early Alzheimer's detection research at Samsung R&D, and most recently real-time media and transcription pipelines built around large language models.",
  "I like problems where careful measurement decides the answer. I've chosen models by testing quality and cost on messy real-world audio, and co-authored the first code-mixed Bangla–English sentiment corpus. I came up through competitive programming and still enjoy a hard algorithm problem.",
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
    url: 'https://ieeexplore.ieee.org/abstract/document/10088478',
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
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=Jq_-yXYAAAAJ' },
  { label: 'Codeforces', url: 'https://codeforces.com/profile/Fuad' },
  { label: 'CV', url: '/cv.pdf' }, // public copy, phone number removed
];

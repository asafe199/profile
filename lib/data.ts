import {link} from "node:fs";

export const profile = {
  name: 'Asafe Oliveira',
  handle: 'asafe199',
  role: 'Software Engineer',
  headline: 'Java · Spring Framework · JavaScript · NodeJS',
  location: 'Goiânia, Goiás, Brazil',
  summary: "Experienced professional with a background in both Business Administration and Systems Development Engineer. With nearly 6 years of hands-on experience as a Software Engineer, I have honed my skills in Java, JavaScript, TypeScript, NodeJS, microservices architecture, relational and NoSQL databases. I also have practical experience building applications with Flutter. Currently, working with web scraping and reverse engineering on a payment platform.",
};

export const contact = {
  email: 'asafe.adm@gmail.com',
  phone: '+55 62 99280-4781',
  github: 'https://github.com/asafe199',
  linkedin: 'https://www.linkedin.com/in/asafe-oliveira-a7b211a0',
};

export const socials = [
  { label: 'Github', href: contact.github },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'Email', href: `mailto:${contact.email}` },
];

export type Experience = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Trustly',
    title: 'FIC Engineer — Full Stack',
    period: 'Nov 2021 — Present',
    location: 'Brazil - Remotely',
    summary: 'I help connect merchants and customers through our payment platform.',
    achievements: [
      'Developed solutions to bypass CAPTCHAs and other automation challenges using Node.js, Playwright and Crawlee.',
      'Designed and maintained web crawlers using Vanilla JavaScript and Java / Spring to extract data from multiple websites for merchants in North America.',
      'Contributed to the implementation of an internal Android Server using reverse engineering techniques.',
      'Automated business processes, resulting in significant time and cost savings.',
      'Implementing the Open Banking pattern across the US and Europe.',
    ],
    stack: [
      'Java 21',
      'TypeScript',
      'JavaScript',
      'Spring Framework',
      'JUnit',
      'TestNG',
      'New Relic',
      'RabbitMQ',
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'AWS',
      'Elasticsearch',
      'Grafana',
      'Playwright',
    ],
  },
  {
    company: 'Memora Processos Inovadores S/A',
    title: 'Full Stack Developer',
    period: 'Apr 2019 — Jul 2021',
    location: 'Goiãnia GO - Brazil',
    summary:
      'Part of the innovation team at the Traffic Department of Goiás, modernizing systems and improving internal tools.',
    achievements: [
      'Contributed to an official mobile app built with Flutter.',
      "Maintained and shipped new features for the department's internal website.",
      'Replaced an expensive third-party digital signature solution with a custom JavaFX desktop tool, enabling in-house document signing and reducing costs.',
    ],
    stack: [
      'Java 8',
      'Dart',
      'Mobile',
      'JavaScript',
      'Spring Framework',
      'JavaFX',
      'Flutter',
      'JUnit',
      'RabbitMQ',
      'MySQL',
      'MongoDB',
      'Elasticsearch',
    ],
  },
  {
    company: 'Soluti Digital',
    title: 'Customer Support Professional',
    period: 'Feb 2018 — May 2019',
    location: 'Goiãnia GO - Brazil',
    summary:
      'Helped clients set up their digital certifications.',
    achievements: [
      'Remote access support across Windows, macOS and Unix.',
      'Technical troubleshooting.',
      'Certificate issuance and validation support.',
      'Security and compliance assistance.',
    ],
    stack: ['Windows', 'macOS', 'Unix', 'Digital Certificates'],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Dart'],
  },
  {
    label: 'frameworks',
    items: ['Spring', 'Spring Boot', 'NodeJS', 'JavaFX', 'Flutter'],
  },
  {
    label: 'data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    label: 'messaging',
    items: ['Kafka', 'RabbitMQ'],
  },
  {
    label: 'cloud & ops',
    items: ['AWS', 'S3', 'MongoDB', 'Grafana', 'Bamboo', 'Docker'],
  },
  {
    label: 'automation',
    items: ['Playwright', 'Crawlee', 'Reverse Engineering', 'Web Scraping'],
  },
  {
    label: 'testing',
    items: ['JUnit', 'Mockito', 'TestNG'],
  },
  {
    label: 'tools',
    items: ['Maven', 'Git', 'GitHub', 'Jira', 'Confluence'],
  },
];

export const education = [
  {
    school: 'Estácio de Sá University',
    degree: 'Systems Development Engineer',
    period: '2017 — 2021',
  },
  {
    school: 'Padrão University',
    degree: 'Bachelor of Business Administration (BBA)',
    period: '2012 — 2016',
  },
];

export const certifications = [
  'AWS Cloud Practitioner',
  'Cambly Certificate of Accomplishment',
];

export const languages = [
  { name: 'Portuguese', level: 'Native / Bilingual' },
  { name: 'English', level: 'Professional working proficiency' },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: 'Payment Platform Automation',
    description: 'Automation layer for a global payment platform: CAPTCHA bypass, resilient web crawlers and reverse-engineered integrations powering Open Banking flows across the US and Europe.',
    tags: ['Node.js', 'Playwright', 'Crawlee', 'Reverse Engineering'],
  },
  {
    name: 'Web Crawler',
    description: 'High-throughput crawler that retrieves data from multiple websites, engineered to withstand traffic spikes around massive sports events.',
    tags: ['TypeScript', 'Crawling', 'Scalability'],
  },
  {
    name: 'In-house Digital Signature Tool',
    description: 'Custom JavaFX desktop application that replaced an expensive third-party digital signature vendor, enabling in-house document signing and cutting costs.',
    tags: ['Java', 'JavaFX', 'Desktop'],
  },
  {
    name: 'Mobile Application - Flutter',
    description: `I worked in a Traffic Department replacing two separate mobile applications—one for Android and one for iOS—with a single cross-platform application built using Flutter and Dart.`,
    href: 'https://apps.apple.com/br/app/detran-go-on/id1246450732',
    tags: ['Flutter', 'Dart', 'Mobile'],
  },
];

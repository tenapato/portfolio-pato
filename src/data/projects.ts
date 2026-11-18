export type Category = 'All' | 'Apps & platforms' | 'Developer tools' | 'Experiments';

export interface Project {
  id: string;
  title: string;
  category: Exclude<Category, 'All'>;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageLayout?: 'screen' | 'portrait' | 'logo' | 'code';
  githubUrl?: string;
  externalLinks?: { label: string; url: string }[];
  sourceVisibility?: 'private';
}

export const projects: Project[] = [
  {
    id: 'ruut', title: 'RUUT', category: 'Apps & platforms',
    description: 'The backend behind an investment app. I built its services from the ground up, then worked on trading, ledgers, and payment integrations.',
    tags: ['TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    image: '/projects/ruut.png',
    externalLinks: [
      { label: 'App Store', url: 'https://apps.apple.com/mx/app/ruut/id1636922548' },
    ],
  },
  {
    id: 'build-hub', title: 'Build Hub', category: 'Developer tools',
    image: '/projects/build-hub-screenshot.jpg',
    imageAlt: 'Build Hub mobile builds dashboard showing iOS apps and build activity',
    imageLayout: 'screen',
    description: 'A self-hosted platform for builds and deployments. Manages GitHub Actions runners, Docker workloads, and native iOS and Android builds on my own hardware.',
    tags: ['Go', 'React', 'Docker', 'Xcode'],
    sourceVisibility: 'private',
  },
  {
    id: 'bkr', title: 'BKR', category: 'Apps & platforms',
    image: '/projects/bkr-screenshot.jpg',
    imageAlt: 'BKR mobile app class schedule and booking screen',
    imageLayout: 'portrait',
    description: 'A mobile app and administration platform for class bookings, payments, and community features, with a shared backend serving members and staff.',
    tags: ['Expo', 'React Native', 'Cloudflare Workers', 'Supabase'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Web app', url: 'https://www.bkracademy.com' },
    ],
  },
  {
    id: 'postulat', title: 'PostulaT', category: 'Apps & platforms',
    image: '/projects/postulat-screenshot.jpg',
    imageAlt: 'PostulaT and People Evolution talent management platform landing page',
    imageLayout: 'screen',
    description: 'Recruiting software for managing vacancies, candidates, and applications. A full stack platform connecting hiring workflows with an administration panel.',
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'Supabase'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Website', url: 'https://www.people-evolution.mx' },
    ],
  },
  {
    id: 'lithographic', title: 'Litho-Graphic', category: 'Apps & platforms',
    image: '/projects/lithographic-screenshot.jpg',
    imageAlt: 'Litho-Graphic quotation platform sign-in page',
    imageLayout: 'screen',
    description: 'Print quotation software with configurable pricing formulas, approval workflows, and versioned quotes. Generates PDFs and lets customers review and respond to quotations.',
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'D1', 'R2'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Web app', url: 'https://app.litho-graphic.com' },
    ],
  },
  {
    id: 'kasane', title: 'Kasane', category: 'Developer tools',
    image: '/projects/kasane-screenshot.jpg',
    imageAlt: 'Kasane project landing page with its persistent agent memory product',
    imageLayout: 'screen',
    description: 'A self-hosted memory service for AI agents. Project knowledge persists across sessions, with an MCP endpoint and searchable PostgreSQL-backed storage.',
    tags: ['Go', 'PostgreSQL', 'Qdrant', 'MCP'],
    githubUrl: 'https://github.com/tenapato/kasane-mcp',
    externalLinks: [
      { label: 'Website', url: 'https://getkasane.com' },
    ],
  },
  {
    id: 'settlr', title: 'Settlr', category: 'Apps & platforms',
    image: '/projects/settlr-app-store.jpg',
    imageAlt: 'Settlr App Store preview showing its monthly finance dashboard',
    imageLayout: 'portrait',
    description: 'A native iOS app for tracking expenses and income, managing shared bills, and keeping an eye on where the money goes.',
    tags: ['Swift', 'SwiftUI', 'Cloudflare Workers'],
    githubUrl: 'https://github.com/tenapato/Settlr_App',
    externalLinks: [
      { label: 'Website', url: 'https://settlr.cash' },
      { label: 'Web panel', url: 'https://web.settlr.cash/login' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/settlr/id6784443705' },
    ],
  },
  {
    id: 'data-vault', title: 'Data Vault', category: 'Apps & platforms',
    description: 'A cloud storage service built with Next.js and Cloudflare R2. An exploration of file storage and serverless infrastructure.',
    tags: ['Next.js', 'JavaScript', 'R2', 'Workers'],
    image: '/projects/data-vault.png',
    githubUrl: 'https://github.com/tenapato/data-vault-frontend',
    externalLinks: [
      { label: 'Web app', url: 'https://www.datavaults.app' },
    ],
  },
  {
    id: 'kanji', title: 'Kanji App', category: 'Experiments',
    description: 'A web app for learning kanji. A personal project bringing together an interest in Japanese and building for the web.',
    tags: ['React', 'JavaScript'], image: '/projects/kanji.png',
    githubUrl: 'https://github.com/tenapato/kanji-app',
  },
  {
    id: 'katanagatari', title: 'Katanagatari', category: 'Experiments',
    description: 'An indie sword-fighting game for PC, made in Unity with Rodrigo Benavente and Fernando Garrote.',
    tags: ['Unity', 'C#', 'Game development'], image: '/projects/katanagatari.jpg',
    githubUrl: 'https://github.com/tenapato/katanagatari',
  },
  {
    id: 'cli-curl', title: 'CLI Curl', category: 'Developer tools',
    image: '/projects/cli-curl-logo.jpg',
    imageAlt: 'CLI Curl project logo from its repository',
    imageLayout: 'logo',
    description: 'A command-line tool to organize and run API requests with curl and shell scripts.',
    tags: ['Shell', 'curl', 'CLI'], githubUrl: 'https://github.com/tenapato/cli-curl',
  },
  {
    id: 'profanity-filter', title: 'Profanity Filter', category: 'Developer tools',
    image: '/projects/profanity-filter-usage.png',
    imageAlt: 'Actual Profanity Filter installation and usage example from the project README',
    imageLayout: 'code',
    description: 'A text filter with multiple languages, leetspeak normalization, and customizable word lists.',
    tags: ['TypeScript', 'Node.js', 'npm'],
    githubUrl: 'https://github.com/tenapato/profanity-filter',
    externalLinks: [
      { label: 'npm', url: 'https://www.npmjs.com/package/@tenapato/profanity-filter' },
    ],
  },
  {
    id: 'username-generator', title: 'Username Generator', category: 'Developer tools',
    image: '/projects/username-generator-usage.png',
    imageAlt: 'Actual Username Generator usage example from the project README',
    imageLayout: 'code',
    description: 'Docker-style usernames made from an adjective, a surname, and a number. A small package for a small, recurring problem.',
    tags: ['JavaScript', 'Node.js', 'npm'],
    githubUrl: 'https://github.com/tenapato/username_generator',
    externalLinks: [
      { label: 'npm', url: 'https://www.npmjs.com/package/@tenapato/username_generator' },
    ],
  },
];

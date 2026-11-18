import type { LocalizedText, portfolioCopy } from './portfolio-copy';

export type Category = keyof typeof portfolioCopy.en.projects.categories;
type ProjectLinkLabel = keyof typeof portfolioCopy.en.projects.links;

export interface Project {
  id: string;
  title: string;
  category: Exclude<Category, 'All'>;
  description: LocalizedText;
  tags: (string | LocalizedText)[];
  image?: string;
  imageAlt?: LocalizedText;
  imageLayout?: 'screen' | 'portrait' | 'logo' | 'code';
  githubUrl?: string;
  externalLinks?: { label: ProjectLinkLabel; url: string }[];
  sourceVisibility?: 'private';
}

export const projects: Project[] = [
  {
    id: 'ruut', title: 'RUUT', category: 'Apps & platforms',
    description: {
      en: 'The backend behind an investment app. I built its services from the ground up, then worked on trading, ledgers, and payment integrations.',
      es: 'El backend de una app de inversión. Construí sus servicios desde cero y después trabajé en la operación bursátil, los libros contables y las integraciones de pago.',
    },
    tags: ['TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    image: '/projects/ruut.png',
    externalLinks: [
      { label: 'App Store', url: 'https://apps.apple.com/mx/app/ruut/id1636922548' },
    ],
  },
  {
    id: 'build-hub', title: 'Build Hub', category: 'Developer tools',
    image: '/projects/build-hub-screenshot.jpg',
    imageAlt: {
      en: 'Build Hub mobile builds dashboard showing iOS apps and build activity',
      es: 'Panel de compilaciones móviles de Build Hub con apps de iOS y actividad reciente',
    },
    imageLayout: 'screen',
    description: {
      en: 'A self-hosted platform for builds and deployments. Manages GitHub Actions runners, Docker workloads, and native iOS and Android builds on my own hardware.',
      es: 'Una plataforma de compilación y despliegue que alojo en mis propios equipos. Administra runners de GitHub Actions, cargas de trabajo en Docker y compilaciones nativas para iOS y Android.',
    },
    tags: ['Go', 'React', 'Docker', 'Xcode'],
    sourceVisibility: 'private',
  },
  {
    id: 'bkr', title: 'BKR', category: 'Apps & platforms',
    image: '/projects/bkr-screenshot.jpg',
    imageAlt: {
      en: 'BKR mobile app class schedule and booking screen',
      es: 'Pantalla de horarios y reservas de clases en la app de BKR',
    },
    imageLayout: 'portrait',
    description: {
      en: 'A mobile app and administration platform for class bookings, payments, and community features, with a shared backend serving members and staff.',
      es: 'Una app móvil y una plataforma de administración para reservar clases, gestionar pagos y participar en la comunidad. Los miembros y el personal usan el mismo backend.',
    },
    tags: ['Expo', 'React Native', 'Cloudflare Workers', 'Supabase'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Download apps', url: 'https://www.bkracademy.com/apps' },
    ],
  },
  {
    id: 'postulat', title: 'PostulaT', category: 'Apps & platforms',
    image: '/projects/postulat-screenshot.jpg',
    imageAlt: {
      en: 'PostulaT and People Evolution talent management platform landing page',
      es: 'Página de inicio de la plataforma de gestión de talento de PostulaT y People Evolution',
    },
    imageLayout: 'screen',
    description: {
      en: 'Recruiting software for managing vacancies, candidates, and applications. A full stack platform connecting hiring workflows with an administration panel.',
      es: 'Software de reclutamiento para gestionar vacantes, candidatos y postulaciones. La plataforma full stack conecta los procesos de contratación con un panel de administración.',
    },
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'Supabase'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Website', url: 'https://www.people-evolution.mx' },
    ],
  },
  {
    id: 'lithographic', title: 'Litho-Graphic', category: 'Apps & platforms',
    image: '/projects/lithographic-screenshot.jpg',
    imageAlt: {
      en: 'Litho-Graphic quotation platform sign-in page',
      es: 'Pantalla de inicio de sesión de la plataforma de cotizaciones de Litho-Graphic',
    },
    imageLayout: 'screen',
    description: {
      en: 'Print quotation software with configurable pricing formulas, approval workflows, and versioned quotes. Generates PDFs and lets customers review and respond to quotations.',
      es: 'Software de cotizaciones para imprentas con fórmulas de precios configurables, flujos de aprobación e historial de versiones. Genera PDF y permite que los clientes revisen y respondan las cotizaciones.',
    },
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'D1', 'R2'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Web app', url: 'https://app.litho-graphic.com' },
    ],
  },
  {
    id: 'kasane', title: 'Kasane', category: 'Developer tools',
    image: '/projects/kasane-screenshot.jpg',
    imageAlt: {
      en: 'Kasane project landing page with its persistent agent memory product',
      es: 'Página de inicio de Kasane, un servicio de memoria persistente para agentes',
    },
    imageLayout: 'screen',
    description: {
      en: 'A self-hosted memory service for AI agents. Project knowledge persists across sessions, with an MCP endpoint and searchable PostgreSQL-backed storage.',
      es: 'Un servicio de memoria para agentes de IA que puedes alojar en tu propia infraestructura. Conserva el conocimiento de cada proyecto entre sesiones, con un endpoint MCP y almacenamiento con búsqueda en PostgreSQL.',
    },
    tags: ['Go', 'PostgreSQL', 'Qdrant', 'MCP'],
    githubUrl: 'https://github.com/tenapato/kasane-mcp',
    externalLinks: [
      { label: 'Website', url: 'https://getkasane.com' },
    ],
  },
  {
    id: 'settlr', title: 'Settlr', category: 'Apps & platforms',
    image: '/projects/settlr-app-store.jpg',
    imageAlt: {
      en: 'Settlr App Store preview showing its monthly finance dashboard',
      es: 'Vista previa de Settlr en la App Store con su panel mensual de finanzas',
    },
    imageLayout: 'portrait',
    description: {
      en: 'A native iOS app for tracking expenses and income, managing shared bills, and keeping an eye on where the money goes.',
      es: 'Una app nativa de iOS para registrar gastos e ingresos, organizar cuentas compartidas y ver en qué se va el dinero.',
    },
    tags: ['Swift', 'SwiftUI', 'Cloudflare Workers'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Website', url: 'https://settlr.cash' },
      { label: 'Web panel', url: 'https://web.settlr.cash/login' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/settlr/id6784443705' },
    ],
  },
  {
    id: 'data-vault', title: 'Data Vault', category: 'Apps & platforms',
    description: {
      en: 'A cloud storage service built with Next.js and Cloudflare R2. An exploration of file storage and serverless infrastructure.',
      es: 'Un servicio de almacenamiento en la nube hecho con Next.js y Cloudflare R2. Lo construí para explorar el almacenamiento de archivos y la infraestructura serverless.',
    },
    tags: ['Next.js', 'JavaScript', 'R2', 'Workers'],
    image: '/projects/data-vault.png',
    githubUrl: 'https://github.com/tenapato/data-vault-frontend',
    externalLinks: [
      { label: 'Web app', url: 'https://www.datavaults.app' },
    ],
  },
  {
    id: 'kanji', title: 'Kanji App', category: 'Experiments',
    description: {
      en: 'A web app for learning kanji. A personal project bringing together an interest in Japanese and building for the web.',
      es: 'Una app web para aprender kanji. Es un proyecto personal que junta dos intereses míos: el japonés y el desarrollo web.',
    },
    tags: ['React', 'JavaScript'], image: '/projects/kanji.png',
    githubUrl: 'https://github.com/tenapato/kanji-app',
  },
  {
    id: 'katanagatari', title: 'Katanagatari', category: 'Experiments',
    description: {
      en: 'An indie sword-fighting game for PC, made in Unity with Rodrigo Benavente and Fernando Garrote.',
      es: 'Un videojuego independiente de combate con espadas para PC, hecho en Unity con Rodrigo Benavente y Fernando Garrote.',
    },
    tags: ['Unity', 'C#', { en: 'Game development', es: 'Desarrollo de videojuegos' }], image: '/projects/katanagatari.jpg',
    githubUrl: 'https://github.com/tenapato/katanagatari',
  },
  {
    id: 'cli-curl', title: 'CLI Curl', category: 'Developer tools',
    image: '/projects/cli-curl-logo.jpg',
    imageAlt: {
      en: 'CLI Curl project logo from its repository',
      es: 'Logo de CLI Curl en su repositorio',
    },
    imageLayout: 'logo',
    description: {
      en: 'A command-line tool to organize and run API requests with curl and shell scripts.',
      es: 'Una herramienta de línea de comandos para organizar y ejecutar solicitudes a APIs con curl y scripts de shell.',
    },
    tags: ['Shell', 'curl', 'CLI'], githubUrl: 'https://github.com/tenapato/cli-curl',
  },
  {
    id: 'profanity-filter', title: 'Profanity Filter', category: 'Developer tools',
    image: '/projects/profanity-filter-usage.png',
    imageAlt: {
      en: 'Actual Profanity Filter installation and usage example from the project README',
      es: 'Ejemplo de instalación y uso de Profanity Filter en el README del proyecto',
    },
    imageLayout: 'code',
    description: {
      en: 'A text filter with multiple languages, leetspeak normalization, and customizable word lists.',
      es: 'Un filtro de texto para varios idiomas con normalización de leetspeak y listas de palabras personalizables.',
    },
    tags: ['TypeScript', 'Node.js', 'npm'],
    githubUrl: 'https://github.com/tenapato/profanity-filter',
    externalLinks: [
      { label: 'npm', url: 'https://www.npmjs.com/package/@tenapato/profanity-filter' },
    ],
  },
  {
    id: 'username-generator', title: 'Username Generator', category: 'Developer tools',
    image: '/projects/username-generator-usage.png',
    imageAlt: {
      en: 'Actual Username Generator usage example from the project README',
      es: 'Ejemplo de uso de Username Generator en el README del proyecto',
    },
    imageLayout: 'code',
    description: {
      en: 'Docker-style usernames made from an adjective, a surname, and a number. A small package for a small, recurring problem.',
      es: 'Nombres de usuario al estilo Docker que combinan un adjetivo, un apellido y un número. Un paquete pequeño para un problema que aparece seguido.',
    },
    tags: ['JavaScript', 'Node.js', 'npm'],
    githubUrl: 'https://github.com/tenapato/username_generator',
    externalLinks: [
      { label: 'npm', url: 'https://www.npmjs.com/package/@tenapato/username_generator' },
    ],
  },
];

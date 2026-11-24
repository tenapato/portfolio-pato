import type { LocalizedText, portfolioCopy } from './portfolio-copy';

export type Category = keyof typeof portfolioCopy.en.projects.categories;
type ProjectLinkLabel = keyof typeof portfolioCopy.en.projects.links;

export interface ProjectPreview {
  image: string;
  alt?: LocalizedText;
  layout?: 'screen' | 'portrait' | 'logo' | 'code';
  label?: keyof typeof portfolioCopy.en.projects.previews;
}

export interface Project {
  id: string;
  title: string;
  category: Exclude<Category, 'All'>;
  description: LocalizedText;
  tags: (string | LocalizedText)[];
  previews?: [ProjectPreview] | [Required<ProjectPreview>, Required<ProjectPreview>];
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
    previews: [{ image: '/projects/ruut.png' }],
    externalLinks: [
      { label: 'App Store', url: 'https://apps.apple.com/mx/app/ruut/id1636922548' },
    ],
  },
  {
    id: 'build-hub', title: 'Build Hub', category: 'Developer tools',
    previews: [{
      image: '/projects/build-hub-screenshot.jpg',
      alt: {
        en: 'Build Hub mobile builds dashboard showing iOS apps and build activity',
        es: 'Panel de compilaciones móviles de Build Hub con apps de iOS y actividad reciente',
      },
    }],
    description: {
      en: 'A self-hosted platform for builds and deployments. Manages GitHub Actions runners, Docker workloads, and native iOS and Android builds on my own hardware.',
      es: 'Una plataforma de compilación y despliegue que alojo en mis propios equipos. Administra runners de GitHub Actions, cargas de trabajo en Docker y compilaciones nativas para iOS y Android.',
    },
    tags: ['Go', 'React', 'Docker', 'Xcode'],
    sourceVisibility: 'private',
  },
  {
    id: 'bkr', title: 'BKR', category: 'Apps & platforms',
    previews: [
      {
        label: 'Mobile app',
        image: '/projects/bkr-screenshot.jpg',
        alt: {
          en: 'BKR mobile app class schedule and booking screen',
          es: 'Pantalla de horarios y reservas de clases en la app de BKR',
        },
        layout: 'portrait',
      },
      {
        label: 'Admin panel',
        image: '/projects/bkr-panel.jpg',
        alt: {
          en: 'BKR administration dashboard showing sample academy activity and membership charts',
          es: 'Panel de administración de BKR con datos de ejemplo y gráficas de inscripciones',
        },
        layout: 'screen',
      },
    ],
    description: {
      en: 'A mobile app and administration platform for class bookings, payments, and community features, with a shared backend serving members and staff.',
      es: 'Una app móvil y una plataforma de administración para reservar clases, gestionar pagos y participar en la comunidad. Los miembros y el personal usan el mismo backend.',
    },
    tags: ['Expo', 'React Native', 'Cloudflare Workers', 'Supabase'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Download apps', url: 'https://www.bkracademy.com/apps' },
      { label: 'Admin panel', url: 'https://www.bkracademy.com/' },
    ],
  },
  {
    id: 'postulat', title: 'PostulaT', category: 'Apps & platforms',
    previews: [
      {
        label: 'Candidate app',
        image: '/projects/postulat-candidate.jpg',
        alt: {
          en: 'Sign-in screen for candidates applying through PostulaT',
          es: 'Pantalla de inicio de sesión para candidatos de PostulaT',
        },
        layout: 'screen',
      },
      {
        label: 'Admin panel',
        image: '/projects/postulat-panel.jpg',
        alt: {
          en: 'People Evolution sign-in screen used by PostulaT recruiters',
          es: 'Pantalla de inicio de sesión de People Evolution para reclutadores de PostulaT',
        },
        layout: 'screen',
      },
    ],
    description: {
      en: 'Candidates browse vacancies and apply through a web app. Recruiters manage vacancies, applications, and hiring workflows in an administration panel.',
      es: 'Los candidatos buscan vacantes y se postulan desde una app web. Los reclutadores gestionan vacantes, postulaciones y procesos de contratación desde un panel de administración.',
    },
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'Supabase'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'Candidate app', url: 'https://www.people-evolution.mx/candidate/login' },
      { label: 'Admin panel', url: 'https://www.people-evolution.mx/postulate/admin/dashboard' },
      { label: 'Website', url: 'https://www.people-evolution.mx' },
    ],
  },
  {
    id: 'lithographic', title: 'Litho-Graphic', category: 'Apps & platforms',
    previews: [{
      image: '/projects/lithographic-screenshot.jpg',
      alt: {
        en: 'Litho-Graphic quotation platform sign-in page',
        es: 'Pantalla de inicio de sesión de la plataforma de cotizaciones de Litho-Graphic',
      },
    }],
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
    previews: [{
      image: '/projects/kasane-screenshot.jpg',
      alt: {
        en: 'Kasane project landing page with its persistent agent memory product',
        es: 'Página de inicio de Kasane, un servicio de memoria persistente para agentes',
      },
    }],
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
    previews: [
      {
        label: 'iOS app',
        image: '/projects/settlr-app-store.jpg',
        alt: {
          en: 'Settlr App Store preview showing its monthly finance dashboard',
          es: 'Vista previa de Settlr en la App Store con su panel mensual de finanzas',
        },
        layout: 'portrait',
      },
      {
        label: 'Web panel',
        image: '/projects/settlr-panel.jpg',
        alt: {
          en: 'Settlr web dashboard showing income, expenses, and savings with sample data',
          es: 'Panel web de Settlr con ingresos, gastos y ahorros de ejemplo',
        },
        layout: 'screen',
      },
    ],
    description: {
      en: 'A native iOS app and web panel for tracking income and expenses, managing shared bills, and reviewing spending and savings.',
      es: 'Una app nativa de iOS y un panel web para registrar ingresos y gastos, organizar cuentas compartidas y dar seguimiento a tus gastos y ahorros.',
    },
    tags: ['Swift', 'SwiftUI', 'React', 'Cloudflare Workers'],
    sourceVisibility: 'private',
    externalLinks: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/settlr/id6784443705' },
      { label: 'Web panel', url: 'https://web.settlr.cash/login' },
      { label: 'Website', url: 'https://settlr.cash' },
    ],
  },
  {
    id: 'data-vault', title: 'Data Vault', category: 'Apps & platforms',
    description: {
      en: 'A cloud storage service built with Next.js and Cloudflare R2. An exploration of file storage and serverless infrastructure.',
      es: 'Un servicio de almacenamiento en la nube hecho con Next.js y Cloudflare R2. Lo construí para explorar el almacenamiento de archivos y la infraestructura serverless.',
    },
    tags: ['Next.js', 'JavaScript', 'R2', 'Workers'],
    previews: [{ image: '/projects/data-vault.png' }],
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
    tags: ['React', 'JavaScript'],
    previews: [{ image: '/projects/kanji.png' }],
    githubUrl: 'https://github.com/tenapato/kanji-app',
  },
  {
    id: 'katanagatari', title: 'Katanagatari', category: 'Experiments',
    description: {
      en: 'An indie sword-fighting game for PC, made in Unity with Rodrigo Benavente and Fernando Garrote.',
      es: 'Un videojuego independiente de combate con espadas para PC, hecho en Unity con Rodrigo Benavente y Fernando Garrote.',
    },
    tags: ['Unity', 'C#', { en: 'Game development', es: 'Desarrollo de videojuegos' }],
    previews: [{ image: '/projects/katanagatari.jpg' }],
    githubUrl: 'https://github.com/tenapato/katanagatari',
  },
  {
    id: 'cli-curl', title: 'CLI Curl', category: 'Developer tools',
    previews: [{
      image: '/projects/cli-curl-logo.jpg',
      alt: {
        en: 'CLI Curl project logo from its repository',
        es: 'Logo de CLI Curl en su repositorio',
      },
      layout: 'logo',
    }],
    description: {
      en: 'A command-line tool to organize and run API requests with curl and shell scripts.',
      es: 'Una herramienta de línea de comandos para organizar y ejecutar solicitudes a APIs con curl y scripts de shell.',
    },
    tags: ['Shell', 'curl', 'CLI'], githubUrl: 'https://github.com/tenapato/cli-curl',
  },
  {
    id: 'profanity-filter', title: 'Profanity Filter', category: 'Developer tools',
    previews: [{
      image: '/projects/profanity-filter-usage.png',
      alt: {
        en: 'Actual Profanity Filter installation and usage example from the project README',
        es: 'Ejemplo de instalación y uso de Profanity Filter en el README del proyecto',
      },
      layout: 'code',
    }],
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
    previews: [{
      image: '/projects/username-generator-usage.png',
      alt: {
        en: 'Actual Username Generator usage example from the project README',
        es: 'Ejemplo de uso de Username Generator en el README del proyecto',
      },
      layout: 'code',
    }],
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

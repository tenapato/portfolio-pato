import { GitCommitHorizontal, GitBranch } from 'lucide-react';
import { Locale, LocalizedText, portfolioCopy } from '@/data/portfolio-copy';

interface Stat {
  value: string;
  label: LocalizedText;
}

interface Job {
  title: LocalizedText;
  company: string;
  startDate: string;
  endDate?: string;
  description?: LocalizedText;
  highlights?: LocalizedText[];
  stats?: { caption: LocalizedText; items: Stat[] };
  tags: (string | LocalizedText)[];
}

const jobs: Job[] = [
  {
    title: { en: 'Senior Backend Engineer', es: 'Ingeniero backend sénior' },
    company: "RUUT Technologies Inc.",
    startDate: '2023-08',
    stats: {
      caption: { en: 'across RUUT, 2022 – today', es: 'en RUUT, desde 2022' },
      items: [
        { value: '1,900+', label: { en: 'commits', es: 'commits' } },
        { value: '1,000+', label: { en: 'tickets closed', es: 'tickets cerrados' } },
        { value: '350+', label: { en: 'bugs fixed', es: 'errores corregidos' } },
        { value: '870+', label: { en: 'pull requests', es: 'pull requests' } },
      ]
    },
    highlights: [
      {
        en: 'Built the ledger, the trading system on the Alpaca Broker API, investment advisor v2, and the STP payment engine. Wrote 82% of the commits in the core backend.',
        es: 'Construí el libro contable, el sistema de operaciones bursátiles con la API Alpaca Broker, la segunda versión del asesor de inversiones y el motor de pagos de STP. Escribí el 82% de los commits del backend principal.',
      },
      {
        en: 'Built Ruut Apex, an internal trading panel for managing orders, positions, and P&L across many brokerage accounts, with role-based access, MFA on orders, and TradingView alerts.',
        es: 'Construí Ruut Apex, un panel interno para gestionar órdenes, posiciones y ganancias y pérdidas de varias cuentas de corretaje. Incluye acceso por roles, autenticación multifactor para las órdenes y alertas de TradingView.',
      },
      {
        en: 'Main author of 16 services, including the broker event listener that records every trade in the ledger, the customer-support panel, and AWS tooling.',
        es: 'Fui el autor principal de 16 servicios, entre ellos el servicio que escucha eventos del bróker y registra cada operación en el libro contable, el panel de atención al cliente y herramientas para AWS.',
      },
      {
        en: 'Led developers through code reviews and system design, and resolved 250+ production support cases for SPEI transfers and the app.',
        es: 'Guié al equipo de desarrollo en revisiones de código y diseño de sistemas. Resolví más de 250 casos de soporte en producción relacionados con transferencias SPEI y la app.',
      },
      {
        en: 'In 2026, shipped an AI inference worker, an MCP server that gives the team one endpoint for the broker, database, and GitHub, and a direct-debit worker.',
        es: 'En 2026 puse en producción un worker de inferencia de IA, un servidor MCP que da al equipo un solo endpoint para acceder al bróker, la base de datos y GitHub, y un worker de domiciliación de pagos.',
      },
    ],
    tags: ["TypeScript", "Node.js", "Cloudflare Workers", "AWS", "PostgreSQL", "MongoDB", "Alpaca Broker API", "MCP"]
  },
  {
    title: { en: 'Semi-Senior Backend Engineer', es: 'Ingeniero backend semisénior' },
    company: "RUUT Technologies Inc.",
    startDate: '2022-08',
    endDate: '2023-08',
    description: {
      en: 'Built STP webhooks for alerts and fund dispersals. Led the implementation of CLABE account validation using CEP receipts.',
      es: 'Desarrollé webhooks de STP para alertas y dispersiones de fondos. Lideré la implementación de la validación de cuentas CLABE con comprobantes CEP.',
    },
    tags: ["TypeScript", "Cloudflare Workers", "PostgreSQL", "STP / SPEI"]
  },
  {
    title: { en: 'Junior Backend Engineer', es: 'Ingeniero backend júnior' },
    company: "RUUT Technologies Inc.",
    startDate: '2022-03',
    endDate: '2022-08',
    description: {
      en: 'Built the application backend from scratch and helped launch it in eight months. Planned the server architecture and maintained its stability.',
      es: 'Construí desde cero el backend de la aplicación y ayudé a lanzarla en ocho meses. Diseñé la arquitectura del servidor y me encargué de mantenerlo estable.',
    },
    tags: ['TypeScript', 'Cloudflare Workers', 'PostgreSQL', { en: 'REST APIs', es: 'APIs REST' }],
  },
  {
    title: { en: 'Software Developer Intern', es: 'Practicante de desarrollo de software' },
    company: "Wirewatt",
    startDate: '2021-09',
    endDate: '2022-03',
    description: {
      en: 'Developed quoting and amortization features across the stack. Migrated a legacy Laravel system to a JavaScript platform in three months.',
      es: 'Desarrollé funciones de cotización y amortización en el frontend y el backend. En tres meses migré un sistema heredado de Laravel a una plataforma en JavaScript.',
    },
    tags: ["JavaScript", "Laravel"]
  }
];

const dateFormatters = {
  en: new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric', timeZone: 'UTC' }),
  es: new Intl.DateTimeFormat('es-MX', { month: 'long', year: 'numeric', timeZone: 'UTC' }),
};

export default function WorkHistoryGithubBranches({ locale }: { locale: Locale }) {
  const { work, technologies } = portfolioCopy[locale];
  const formatDate = (date: string) => dateFormatters[locale].format(new Date(date));

  return (
    <div className="work-history">
      <p className="branch-label"><GitBranch size={15} aria-hidden="true" /> {work.branch}</p>
      <ol className="career-timeline">
        {jobs.map((job, index) => (
          <li className="career-entry" key={`${job.company}-${job.startDate}`}>
            <div className="commit-mark" aria-hidden="true"><GitCommitHorizontal size={23} /></div>
            <p className="career-date">{formatDate(job.startDate)} <span aria-hidden="true">/</span> {job.endDate ? formatDate(job.endDate) : work.present}</p>
            <div className="career-content">
              <span className="commit-index">commit 0{jobs.length - index}</span>
              <h3>{job.title[locale]}</h3>
              <p className="career-company">{job.company}</p>
              {job.stats && (
                <div className="career-stats">
                  <dl>
                    {job.stats.items.map((stat) => (
                      <div key={stat.label.en}>
                        <dt>{stat.label[locale]}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="career-stats-caption">{job.stats.caption[locale]}</p>
                </div>
              )}
              {job.description && <p className="career-description">{job.description[locale]}</p>}
              {job.highlights && (
                <ul className="career-highlights">
                  {job.highlights.map((highlight) => <li key={highlight.en}>{highlight[locale]}</li>)}
                </ul>
              )}
              <ul className="project-tags career-tags" aria-label={technologies(job.title[locale])}>
                {job.tags.map((tag) => typeof tag === 'string' ? <li key={tag}>{tag}</li> : <li key={tag.en}>{tag[locale]}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

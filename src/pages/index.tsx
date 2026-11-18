import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { portfolioCopy } from '@/data/portfolio-copy';
import NavBar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';
import WorkHistoryGithubBranches from '../components/work-history-github-branches';
import CodingProjectsComponent from '../components/coding-projects';
import PortfolioIntro from '../components/portfolio-intro';
import TerminalBackground from '../components/terminal-background';

const technologies = [
  'TypeScript / JavaScript',
  'Go / Python',
  'Node.js / NestJS',
  'React / Next.js',
  'React Native / Expo',
  'Swift / SwiftUI',
  'Vite / Tailwind CSS',
  'Drizzle ORM / TypeORM',
  'PostgreSQL / MongoDB',
  'SQLite / Supabase',
  'DynamoDB / Qdrant',
  'Model Context Protocol (MCP)',
  'Cloudflare Workers / Workers AI',
  'Cloudflare D1 / R2',
  'AWS / Terraform',
  'Amazon ECS / AWS Lambda',
  'Amazon S3 / SQS',
  'Docker / GitHub Actions',
];

export default function LandingPage() {
  const locale = useRouter().locale === 'es' ? 'es' : 'en';
  const { title, description, sections, hero, about, projects, work, contact, backToTop } = portfolioCopy[locale];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#0a192f" />
        <meta property="og:title" content={title} />
      </Head>
      <PortfolioIntro locale={locale} />
      <TerminalBackground locale={locale} />
      <NavBar locale={locale} />
      <main id="main-content" className="page-content">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">{hero.greeting}</p>
          <h1 id="hero-title"><span className="syntax">&lt;</span>Patricio Tena<span className="syntax"> /&gt;</span></h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>
          <p className="hero-location"><span aria-hidden="true" /> {hero.location}</p>
          <div className="hero-actions">
            <a className="outline-button" href="#projects">{hero.explore} <ArrowDown size={16} aria-hidden="true" /></a>
            <a className="text-link" href="mailto:tenapatricio@gmail.com">{contact.action} <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <LeftSidebar locale={locale} />
          <a className="hero-scroll" href="#about"><span aria-hidden="true">↓</span> {hero.more}</a>
        </section>
        <section id="about" className="section about-section" aria-labelledby="about-title">
          <h2 id="about-title" className="section-heading"><span>01.</span> {sections.about} <span className="heading-line" aria-hidden="true" /></h2>
          <div className="about-layout">
            <div className="about-copy">
              <p>{about.introduction.before} <strong>{about.introduction.emphasis}</strong> {about.introduction.after}</p>
              <p>{about.work.before} <strong>RUUT</strong>{about.work.after}</p>
              <p>{about.interests}</p>
              <p className="stack-intro">{about.technologies}</p>
              <ul className="technology-list">
                {technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            <figure className="portrait">
              <div className="portrait-frame"><img src="/pp.jpg" alt="Patricio Tena" width="320" height="380" loading="lazy" /></div>
              <figcaption><span className="syntax">//</span> {about.caption}</figcaption>
            </figure>
          </div>
        </section>
        <section id="projects" className="section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-heading"><span>02.</span> {sections.projects} <span className="heading-line" aria-hidden="true" /></h2>
          <p className="section-intro">{projects.introduction}</p>
          <CodingProjectsComponent locale={locale} />
          <a className="text-link more-projects" href="https://github.com/tenapato?tab=repositories" target="_blank" rel="noopener noreferrer">{projects.more} <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>
        <section id="work" className="section work-section" aria-labelledby="work-title">
          <h2 id="work-title" className="section-heading"><span>03.</span> {sections.work} <span className="heading-line" aria-hidden="true" /></h2>
          <p className="section-intro">{work.introduction}</p>
          <WorkHistoryGithubBranches locale={locale} />
        </section>
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">04. {contact.eyebrow}</p>
          <h2 id="contact-title">{contact.heading}</h2>
          <p>{contact.description}</p>
          <a className="outline-button" href="mailto:tenapatricio@gmail.com"><Mail size={17} aria-hidden="true" /> {contact.action}</a>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#top" aria-label={backToTop}><span className="syntax">&lt;</span> Patricio Tena <span className="syntax">/&gt;</span></a>
        <p lang="ja">つくりながら学ぶ。</p>
        <a href="https://github.com/tenapato" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
      </footer>
    </>
  );
}

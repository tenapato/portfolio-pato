import Head from 'next/head';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import NavBar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';
import WorkHistoryGithubBranches from '../components/work-history-github-branches';
import CodingProjectsComponent from '../components/coding-projects';
import TerminalBackground from '../components/terminal-background';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Patricio Tena | Software Engineer</title>
        <meta name="description" content="I'm Patricio Tena, a software engineer in Mexico City. I build backends, full stack applications, and tools for developers." />
        <meta name="theme-color" content="#0a192f" />
        <meta property="og:title" content="Patricio Tena | Software Engineer" />
      </Head>
      <TerminalBackground />
      <NavBar />
      <main id="main-content" className="page-content">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Hey, my name is</p>
          <h1 id="hero-title"><span className="syntax">&lt;</span>Patricio Tena<span className="syntax"> /&gt;</span></h1>
          <p className="hero-subtitle">I'm a Computer Engineer.</p>
          <p className="hero-description">I build the systems behind the screen. Backends, full stack applications, and tools that make a developer's day a little easier.</p>
          <p className="hero-location"><span aria-hidden="true" /> Based in Mexico City</p>
          <div className="hero-actions">
            <a className="outline-button" href="#projects">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
            <a className="text-link" href="mailto:tenapatricio@gmail.com">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <LeftSidebar />
          <a className="hero-scroll" href="#about"><span aria-hidden="true">↓</span> A little more about me</a>
        </section>
        <section id="about" className="section about-section" aria-labelledby="about-title">
          <h2 id="about-title" className="section-heading"><span>01.</span> About <span className="heading-line" aria-hidden="true" /></h2>
          <div className="about-layout">
            <div className="about-copy">
              <p>I'm Patricio, a <strong>software engineer</strong> and Tecnológico de Monterrey graduate. I like understanding how things work, then building something useful with what I learn.</p>
              <p>My work spans investment infrastructure at <strong>RUUT</strong>, cloud storage, and developer tools. I enjoy the details behind a reliable backend: data models, payment flows, and services that hold up in production.</p>
              <p>Outside that work, I build personal projects and explore AI, cybersecurity, and DevOps. Sometimes that means a new CLI tool. Sometimes it means a sword-fighting game.</p>
              <p className="stack-intro">Some of the technologies I work with:</p>
              <ul className="technology-list">
                {['TypeScript / JavaScript', 'Node.js / Python', 'React / Next.js', 'Cloudflare Workers', 'PostgreSQL / MongoDB', 'Docker / AWS'].map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            <figure className="portrait">
              <div className="portrait-frame"><img src="/pp.jpg" alt="Patricio Tena" width="320" height="380" loading="lazy" /></div>
              <figcaption><span className="syntax">//</span> Always building something.</figcaption>
            </figure>
          </div>
        </section>
        <section id="projects" className="section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-heading"><span>02.</span> Projects <span className="heading-line" aria-hidden="true" /></h2>
          <p className="section-intro">Products I've worked on, tools I needed, and ideas I wanted to try.</p>
          <CodingProjectsComponent />
          <a className="text-link more-projects" href="https://github.com/tenapato?tab=repositories" target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>
        <section id="work" className="section work-section" aria-labelledby="work-title">
          <h2 id="work-title" className="section-heading"><span>03.</span> Work <span className="heading-line" aria-hidden="true" /></h2>
          <p className="section-intro">My path so far, one commit at a time.</p>
          <WorkHistoryGithubBranches />
        </section>
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">04. What's next?</p>
          <h2 id="contact-title">Let's build something.</h2>
          <p>Have a project in mind, a problem to work through, or just want to talk software? I'd like to hear from you.</p>
          <a className="outline-button" href="mailto:tenapatricio@gmail.com"><Mail size={17} aria-hidden="true" /> Say hello</a>
        </section>
      </main>
      <footer className="site-footer">
        <a href="#top" aria-label="Back to top"><span className="syntax">&lt;</span> Patricio Tena <span className="syntax">/&gt;</span></a>
        <p>Built with curiosity. And a little caffeine.</p>
        <a href="https://github.com/tenapato" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
      </footer>
    </>
  );
}

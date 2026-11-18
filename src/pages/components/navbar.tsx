import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Locale, portfolioCopy } from '@/data/portfolio-copy';

const links = ['about', 'projects', 'work', 'contact'] as const;
const languages = [
  { locale: 'en', name: 'English' },
  { locale: 'es', name: 'Español' },
] as const;

export default function NavBar({ locale = 'en' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const resumeUrl = process.env.NEXT_PUBLIC_CV_LINK;
  const { navigation, sections } = portfolioCopy[locale];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    const mobile = window.matchMedia('(max-width: 1000px)');
    const closeOnDesktop = () => { if (!mobile.matches) setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    mobile.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      mobile.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  return (
    <header id="top" className="site-header">
      <a className="skip-link" href="#main-content">{navigation.skip}</a>
      <nav className="site-nav" aria-label={navigation.label}>
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
          <span className="wordmark-field">
            <span className="brace">{'{'}</span>{' '}
            <span className="syntax wordmark-key">name: </span>&quot;Patricio Tena&quot;
          </span>
          <span className="wordmark-details">
            {', '}
            <span className="wordmark-field"><span className="syntax">role:</span> &quot;{navigation.role}&quot;,</span>{' '}
            <span className="wordmark-field"><span className="syntax">focus:</span> &quot;{navigation.focus}&quot;</span>
          </span>
          <span className="brace">&nbsp;{'}'}</span>
        </a>
        <div className="nav-controls">
          <div className="language-picker" role="group" aria-label={navigation.language}>
            <span className="language-key" aria-hidden="true">lang:</span>
            <span aria-hidden="true">[</span>
            {languages.map(({ locale: option, name }, index) => (
              <span className="language-option" key={option}>
                {index > 0 && <span aria-hidden="true">,</span>}
                <Link
                  className="language-choice"
                  href="/"
                  locale={option}
                  hrefLang={option}
                  lang={option}
                  aria-label={name}
                  aria-current={locale === option ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>&quot;{option}&quot;</span>
                </Link>
              </span>
            ))}
            <span aria-hidden="true">]</span>
          </div>
          <button ref={toggle} className="menu-toggle" type="button" aria-controls="navigation-links" aria-expanded={open} aria-label={open ? navigation.close : navigation.open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <ul id="navigation-links" className={`navigation-links${open ? ' is-open' : ''}`}>
            {links.map((id, index) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}><span className="syntax">0{index + 1}.</span> {sections[id]}</a></li>)}
            {resumeUrl && <li><a className="outline-button resume-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">{navigation.resume}</a></li>}
          </ul>
        </div>
      </nav>
    </header>
  );
}

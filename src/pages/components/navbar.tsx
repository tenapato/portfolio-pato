import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const resumeUrl = process.env.NEXT_PUBLIC_CV_LINK;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    const closeOnDesktop = () => { if (window.innerWidth > 800) setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [open]);

  return (
    <header id="top" className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}><span className="brace">{'{'}</span> <span className="syntax">Name:</span> Patricio Tena <span className="brace">{'}'}</span></a>
        <button ref={toggle} className="menu-toggle" type="button" aria-controls="navigation-links" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <ul id="navigation-links" className={`navigation-links${open ? ' is-open' : ''}`}>
          {links.map((link, index) => <li key={link.id}><a href={`#${link.id}`} onClick={() => setOpen(false)}><span className="syntax">0{index + 1}.</span> {link.label}</a></li>)}
          {resumeUrl && <li><a className="outline-button resume-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a></li>}
        </ul>
      </nav>
    </header>
  );
}

import { Github, Linkedin } from 'lucide-react';
import { Locale, portfolioCopy } from '@/data/portfolio-copy';

export default function LeftSidebar({ locale = 'en' }: { locale?: Locale }) {
  const { social } = portfolioCopy[locale];
  return (
    <aside className="social-rail" aria-label={social.label}>
      <a href="https://github.com/tenapato" target="_blank" rel="noopener noreferrer" aria-label={social.github}><Github size={20} /><span className="social-name">GitHub</span></a>
      <a href="https://www.linkedin.com/in/tenapatricio/" target="_blank" rel="noopener noreferrer" aria-label={social.linkedin}><Linkedin size={20} /><span className="social-name">LinkedIn</span></a>
      <span aria-hidden="true" />
    </aside>
  );
}

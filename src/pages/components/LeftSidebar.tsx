import { Github, Linkedin } from 'lucide-react';

export default function LeftSidebar() {
  return (
    <aside className="social-rail" aria-label="Social profiles">
      <a href="https://github.com/tenapato" target="_blank" rel="noopener noreferrer" aria-label="Patricio on GitHub"><Github size={20} /><span className="social-name">GitHub</span></a>
      <a href="https://www.linkedin.com/in/tenapatricio/" target="_blank" rel="noopener noreferrer" aria-label="Patricio on LinkedIn"><Linkedin size={20} /><span className="social-name">LinkedIn</span></a>
      <span aria-hidden="true" />
    </aside>
  );
}

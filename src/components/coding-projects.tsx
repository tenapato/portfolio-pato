import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Folder, Lock } from 'lucide-react';
import { Category, Project, projects } from '@/data/projects';

const categories: Category[] = ['All', 'Apps & platforms', 'Developer tools', 'Experiments'];

function ProjectArtwork({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  if (project.image && !imageFailed) {
    return <div className={`project-artwork artwork-${project.id} project-artwork--${project.imageLayout || 'screen'}`}><img src={project.image} alt={project.imageAlt || `${project.title} project preview`} loading="lazy" width="600" height="338" decoding="async" onError={() => setImageFailed(true)} /></div>;
  }
  return <div className="project-tool-icon" aria-hidden="true"><Folder size={28} strokeWidth={1.4} /></div>;
}

export default function CodingProjectsComponent() {
  const [category, setCategory] = useState<Category>('All');
  const visibleProjects = projects.filter((project) => category === 'All' || project.category === category);
  return (
    <div className="project-browser">
      <div className="project-filters" role="group" aria-label="Filter projects">
        {categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}<span>{item === 'All' ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}
      </div>
      <p className="sr-only" role="status">Showing {visibleProjects.length} {category === 'All' ? '' : category.toLowerCase()} projects</p>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className={`project-card${project.image ? '' : ' project-card-compact'}`} key={project.id}>
            <ProjectArtwork project={project} />
            <div className="project-body">
              <p className="project-category">{project.category}</p>
              <h3><span className="syntax">&lt;</span> {project.title} <span className="syntax">/&gt;</span></h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <div className="project-links">
                {project.sourceVisibility === 'private' && <span className="project-private"><Lock size={14} aria-hidden="true" /> Private source</span>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source on GitHub`}><Github size={16} aria-hidden="true" /> Source <ArrowUpRight size={13} aria-hidden="true" /></a>}
                {project.externalLinks?.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${link.label}`}><ExternalLink size={16} aria-hidden="true" /> {link.label} <ArrowUpRight size={13} aria-hidden="true" /></a>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

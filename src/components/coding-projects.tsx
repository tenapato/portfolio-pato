import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Folder, Lock } from 'lucide-react';
import { Locale, portfolioCopy } from '@/data/portfolio-copy';
import { Category, Project, projects } from '@/data/projects';

const categories: Category[] = ['All', 'Apps & platforms', 'Developer tools', 'Experiments'];

function ProjectArtwork({ project, locale }: { project: Project; locale: Locale }) {
  const [imageFailed, setImageFailed] = useState(false);
  if (project.image && !imageFailed) {
    const alt = project.imageAlt?.[locale] ?? portfolioCopy[locale].projects.imageAlt(project.title);
    return <div className={`project-artwork artwork-${project.id} project-artwork--${project.imageLayout || 'screen'}`}><img src={project.image} alt={alt} loading="lazy" width="600" height="338" decoding="async" onError={() => setImageFailed(true)} /></div>;
  }
  return <div className="project-tool-icon" aria-hidden="true"><Folder size={28} strokeWidth={1.4} /></div>;
}

export default function CodingProjectsComponent({ locale }: { locale: Locale }) {
  const [category, setCategory] = useState<Category>('All');
  const visibleProjects = projects.filter((project) => category === 'All' || project.category === category);
  const { projects: copy, technologies } = portfolioCopy[locale];
  return (
    <div className="project-browser">
      <div className="project-filters" role="group" aria-label={copy.filters}>
        {categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{copy.categories[item]}<span>{item === 'All' ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}
      </div>
      <p className="sr-only" role="status">{copy.count(visibleProjects.length, category === 'All' ? undefined : copy.categories[category])}</p>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className={`project-card${project.image ? '' : ' project-card-compact'}`} key={project.id}>
            <ProjectArtwork project={project} locale={locale} />
            <div className="project-body">
              <p className="project-category">{copy.categories[project.category]}</p>
              <h3><span className="syntax">&lt;</span> {project.title} <span className="syntax">/&gt;</span></h3>
              <p className="project-description">{project.description[locale]}</p>
              <ul className="project-tags" aria-label={technologies(project.title)}>
                {project.tags.map((tag) => typeof tag === 'string' ? <li key={tag}>{tag}</li> : <li key={tag.en}>{tag[locale]}</li>)}
              </ul>
              <div className="project-links">
                {project.sourceVisibility === 'private' && <span className="project-private"><Lock size={14} aria-hidden="true" /> {copy.privateSource}</span>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={copy.sourceLabel(project.title)}><Github size={16} aria-hidden="true" /> {copy.source} <ArrowUpRight size={13} aria-hidden="true" /></a>}
                {project.externalLinks?.map((link) => {
                  const label = copy.links[link.label];
                  return <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${label}`}><ExternalLink size={16} aria-hidden="true" /> {label} <ArrowUpRight size={13} aria-hidden="true" /></a>;
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

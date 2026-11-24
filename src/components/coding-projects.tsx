import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Folder, Lock } from 'lucide-react';
import { Locale, portfolioCopy } from '@/data/portfolio-copy';
import { Category, Project, ProjectPreview, projects } from '@/data/projects';

const categories: Category[] = ['All', 'Apps & platforms', 'Developer tools', 'Experiments'];

function ProjectPreviewImage({ preview, project, locale }: { preview: ProjectPreview; project: Project; locale: Locale }) {
  const [imageFailed, setImageFailed] = useState(false);
  const alt = preview.alt?.[locale] ?? portfolioCopy[locale].projects.imageAlt(project.title);

  if (imageFailed && !preview.label) {
    return <ProjectIcon />;
  }

  return (
    <div className={`project-artwork artwork-${project.id} project-artwork--${preview.layout ?? 'screen'}`}>
      {imageFailed ? <ProjectIcon /> : (
        <img src={preview.image} alt={alt} loading="lazy" width="600" height="338" decoding="async" onError={() => setImageFailed(true)} />
      )}
    </div>
  );
}

function ProjectIcon() {
  return <div className="project-tool-icon" aria-hidden="true"><Folder size={28} strokeWidth={1.4} /></div>;
}

function ProjectArtwork({ project, locale }: { project: Project; locale: Locale }) {
  const { previews } = project;
  if (!previews) return <ProjectIcon />;
  if (previews.length === 1) {
    return <ProjectPreviewImage preview={previews[0]} project={project} locale={locale} />;
  }

  const labels = portfolioCopy[locale].projects.previews;
  return (
    <div className="project-previews">
      {previews.map((preview) => (
        <figure className={`project-preview project-preview--${preview.layout}`} key={preview.image}>
          <ProjectPreviewImage preview={preview} project={project} locale={locale} />
          <figcaption>{labels[preview.label]}</figcaption>
        </figure>
      ))}
    </div>
  );
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
          <article className={`project-card${project.previews ? '' : ' project-card-compact'}`} key={project.id}>
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

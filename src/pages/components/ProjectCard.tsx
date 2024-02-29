// ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  link?: string;
  demo?: string; // Add the demo parameter
  img?: string; // Add the img parameter
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, demo, img }) => {
  const techList = (technologies ?? '').split(',').map((tech) => tech.trim());
  return (
    <div className="project-card bg-gray-800 p-6 mb-8 rounded-md shadow-md">
      <a className='text-green mr-2'>{"<"}</a><a className="font-bold text-white">{title}</a><a className='text-green ml-2'>{"/>"}</a>
      <p className="text-light-slate mb-4">{description}</p>
      <div className="flex gap-10 mb-4">
        {techList.map((tech, index) => (
          <span key={index} className="rounded-full bg-gray-600 text-white px-2 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="w-full">
        {img && (
          <img src={img} alt={title} className="w-full h-auto mb-4 object-cover" />
        )}
      </div>
      
      <div className="flex justify-between">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-green hover:underline">
            View Project
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green hover:underline">
            View Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;


import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image: string;
  link?: string;
  code?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <button 
            className="text-gray-400 hover:text-white flex items-center gap-1 text-sm font-medium transition-colors"
            onClick={() => {
              // Implement project details modal here
              alert(`Ver detalhes de: ${project.title}`);
            }}
          >
            Ver detalhes
            <ChevronRight size={16} />
          </button>
          
          <div className="flex items-center gap-3">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Ver projeto ${project.title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
            
            {project.code && (
              <a 
                href={project.code} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Ver código do projeto ${project.title}`}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
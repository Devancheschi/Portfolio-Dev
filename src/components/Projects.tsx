import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image: string;
  link?: string;
  code?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'tic-tac-toe',
      title: 'Jogo da Velha',
      description: 'Um jogo da velha interativo desenvolvido com HTML, CSS e JavaScript, permitindo jogar contra outro jogador ou contra a máquina em diferentes níveis de dificuldade.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      code: '#'
    },
    {
      id: 'portfolio',
      title: 'Portfólio Pessoal',
      description: 'Site de portfólio pessoal desenvolvido com React e TypeScript, apresentando informações sobre mim, minhas habilidades e projetos.',
      techs: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#',
      code: '#'
    },
    {
      id: 'future-project',
      title: 'Projeto Futuro',
      description: 'Espaço reservado para um futuro projeto que estou desenvolvendo. Fique atento para atualizações!',
      techs: ['Coming Soon'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Meus Projetos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi utilizando diversas tecnologias.
            Cada projeto representa uma oportunidade de aprendizado e aprimoramento das minhas habilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
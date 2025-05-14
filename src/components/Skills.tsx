import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 70, color: 'from-yellow-500 to-amber-500' },
    { name: 'PHP', level: 65, color: 'from-indigo-500 to-purple-500' },
    { name: 'Python', level: 60, color: 'from-blue-500 to-cyan-500' },
    { name: 'MySQL', level: 75, color: 'from-sky-500 to-blue-600' },
    { name: 'NoSQL', level: 55, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no desenvolvimento de projetos.
            Estou sempre em busca de aprender novas tecnologias e aprimorar meus conhecimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {['PHP', 'JavaScript', 'HTML', 'Python', 'MySQL', 'NoSQL'].map((tech, index) => (
            <div 
              key={index} 
              className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800/50 transition-colors"
            >
              <span className="text-white font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
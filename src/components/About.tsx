import React from 'react';
import { Code, Database, Server } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-2">Sobre Mim</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mb-6"></div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Olá, meu nome é Matheus Ancheschi e sou um desenvolvedor iniciando minha jornada na área de tecnologia. 
              Tenho conhecimento nas tecnologias PHP, JavaScript, HTML, Python, além de bancos de dados relacionais como 
              MySQL e bancos de dados NoSQL.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Estou sempre buscando aprender mais e crescer na área de desenvolvimento de software. Meu objetivo é 
              criar soluções eficientes e interfaces atraentes que proporcionem uma excelente experiência ao usuário.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Quando não estou codando, gosto de explorar novas tecnologias, aprender sobre as tendências do mercado
              e buscar inspiração para meus próximos projetos.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Front-end</h3>
                <p className="text-gray-400">
                  Desenvolvimento de interfaces com HTML, CSS e JavaScript para criar experiências interativas.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Server size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Back-end</h3>
                <p className="text-gray-400">
                  Desenvolvimento de aplicações em PHP e Python para criar soluções robustas e escaláveis.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Database size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Banco de Dados</h3>
                <p className="text-gray-400">
                  Conhecimento em bancos de dados relacionais como MySQL e NoSQL para armazenamento eficiente.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">UI/UX</h3>
                <p className="text-gray-400">
                  Foco em criar interfaces intuitivas e agradáveis que melhoram a experiência do usuário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
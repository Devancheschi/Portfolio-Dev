import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-[#5f4b8b] z-0"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnptLTYgMHYtNmgtNnY2aDZ6TTI0IDI0di02aC02djZoNnoiLz48cGF0aCBkPSJNMjQgMzRjMC0xLjEuOS0yIDItMmg4Yy0xLjEgMC0yLS45LTItMnYtOGMwIDEuMS0uOSAyLTIgMmgtOGMxLjEgMCAyIC45IDIgMnY4em0tNi02YzAtMS4xLjktMiAyLTJoOGMtMS4xIDAtMi0uOS0yLTJ2LThjMCAxLjEtLjkgMi0yIDJoLThjMS4xIDAgMiAuOSAyIDJ2OHptMTIgMGMwIDEuMS45IDIgMiAyaDhjLTEuMSAwLTItLjktMi0ydi04YzAgLTEuMS0uOS0yLTItMmgtOGMxLjEgMCAyIC45IDIgMnY4em02LTZjMCAxLjEuOSAyIDIgMmg4Yy0xLjEgMC0yLS45LTItMnYtOGMwLTEuMS0uOS0yLTItMmgtOGMxLjEgMCAyIC45IDIgMnY4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="block">Olá, eu sou</span>
            <span className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Matheus Ancheschi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8">
            Iniciando minha jornada na área de tecnologia com foco em desenvolvimento web e aplicações modernas.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600/30 shadow-xl shadow-purple-900/20">
            <img 
              src="./src/images/img.jfif"
              alt="Matheus Ancheschi - Desenvolvedor"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;

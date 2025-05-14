import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TicTacToeProject from './components/TicTacToeProject';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section className="py-20 bg-[#0f0f0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Jogo da Velha</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experimente jogar o Jogo da Velha que desenvolvi. 
                Você pode jogar contra outro jogador ou desafiar a máquina em diferentes níveis de dificuldade.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <TicTacToeProject />
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
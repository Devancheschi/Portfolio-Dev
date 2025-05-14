import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: <Phone size={24} />,
      label: 'WhatsApp',
      value: '+XX (XX) XXXXX-XXXX',
      href: 'https://web.whatsapp.com/',
      color: 'bg-green-500/20 text-green-400 border-green-500/20'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'email@example.com',
      href: 'mailto:email@example.com',
      color: 'bg-red-500/20 text-red-400 border-red-500/20'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Matheus Ancheschi',
      href: 'https://www.linkedin.com/in/matheus-ancheschi-ba4566206/',
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/20'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github-user',
      href: 'https://github.com/',
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Entre em Contato</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interessado em trabalhar juntos ou tem alguma dúvida? 
            Fique à vontade para entrar em contato comigo através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 border rounded-lg ${item.color} backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-1">{item.label}</h3>
                <p className="text-gray-400">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Envie uma Mensagem</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Seu email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
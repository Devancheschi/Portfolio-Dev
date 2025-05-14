import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/matheus-ancheschi-ba4566206/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:email@example.com', label: 'Email' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-white font-bold text-xl z-50 relative"
        >
          Matheus Ancheschi
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 border-l border-gray-700 pl-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col justify-center items-center transition-transform duration-300 ${
            isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col items-center space-y-6 mb-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-white text-2xl font-medium"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-6 mt-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
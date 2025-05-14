import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Matheus Ancheschi. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 flex items-center">
              Desenvolvido com <Heart size={16} className="mx-1 text-red-500" /> em React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
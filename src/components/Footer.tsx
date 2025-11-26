import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Marca */}
          <div>
            <div className="text-2xl font-heading font-bold tracking-tighter text-white mb-4">
              NEXO<span className="text-cyan-400">WEB</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando ideas en experiencias digitales de alto impacto. Tu socio tecnológico en el desarrollo web moderno.
            </p>
          </div>

          {/* Contacto Rápido */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-500" />
                <span>contacto@nexoweb.com</span> {/* Pon tu correo real aquí */}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-500" />
                <span>+53 5555 5555</span> {/* Pon tu número aquí */}
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-500" />
                <span>Cuba</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-gray-500 hover:text-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-500 hover:text-cyan-400 transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="text-gray-500 hover:text-cyan-400 transition-colors">Proyectos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} NexoWeb. Todos los derechos reservados.</p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-cyan-500/20 text-white rounded-full transition-colors group"
            title="Volver arriba"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
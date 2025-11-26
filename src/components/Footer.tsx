import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, ArrowUp, FileText, Shield } from 'lucide-react';

const Footer = () => {
  // Estado simple para manejar los modales legales (más fácil que crear archivos separados)
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="bg-[#010102] border-t border-white/5 pt-20 pb-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Marca */}
            <div>
              <div className="text-2xl font-heading font-bold tracking-tighter text-white mb-6">
                NEXO<span className="text-cyan-500">WEB</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Ingeniería digital de precisión. Creamos el puente entre tu negocio y el futuro tecnológico.
              </p>
              <div className="text-xs font-code text-cyan-600 border border-cyan-900/30 px-3 py-1 rounded w-fit">
                Alexander Carrillo • Developer
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-white font-bold mb-6 font-heading tracking-wide">CONTACTO</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all"><Phone size={16} /></div>
                  <span className="font-mono hover:text-white transition-colors">+507 6961-0332</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all"><Mail size={16} /></div>
                  <a href="mailto:alexandercarrillovega@gmail.com" className="hover:text-white transition-colors">alexandercarrillovega@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all"><MapPin size={16} /></div>
                  <span>Llano Bonito, Herrera, Panamá</span>
                </li>
              </ul>
            </div>

            {/* Redes */}
            <div>
              <h4 className="text-white font-bold mb-6 font-heading tracking-wide">REDES</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/nexoweb_oficcial?igsh=MXdpYzB3Ym83OTNjNw%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-white/5 hover:bg-pink-600 hover:text-white text-gray-400 rounded-xl transition-all duration-300 group"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-xs text-gray-600 font-medium">
              <button onClick={() => setShowTerms(true)} className="hover:text-cyan-400 transition-colors">Términos</button>
              <button onClick={() => setShowPrivacy(true)} className="hover:text-cyan-400 transition-colors">Privacidad</button>
            </div>
            
            <p className="text-gray-700 text-xs font-code">© {new Date().getFullYear()} Alexander Carrillo.</p>
            
            <button onClick={scrollToTop} className="p-3 bg-white/5 hover:bg-cyan-500 hover:text-black text-white rounded-full transition-all">
              <ArrowUp size={18} />
            </button>
          </div>

        </div>
      </footer>

      {/* MODALES LEGALES SIMPLES */}
      {(showTerms || showPrivacy) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => {setShowTerms(false); setShowPrivacy(false);}}>
          <div className="bg-[#0B1120] border border-white/10 p-8 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              {showTerms ? <FileText className="text-cyan-500"/> : <Shield className="text-cyan-500"/>}
              {showTerms ? 'Términos de Servicio' : 'Política de Privacidad'}
            </h2>
            <div className="text-gray-400 text-sm space-y-4 leading-relaxed font-mono">
              <p>Este es un documento legal estándar para servicios de desarrollo web freelance.</p>
              <p>1. Todos los derechos de propiedad intelectual del código entregado pertenecen al cliente una vez finalizado el pago.</p>
              <p>2. NexoWeb se compromete a la confidencialidad absoluta de los datos del cliente.</p>
              <p>3. El soporte técnico post-entrega tiene una garantía de 30 días.</p>
              <p className="text-xs text-gray-600 mt-8 border-t border-white/5 pt-4">Documento oficial de NexoWeb - Alexander Carrillo</p>
            </div>
            <button onClick={() => {setShowTerms(false); setShowPrivacy(false);}} className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold">Cerrar Documento</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
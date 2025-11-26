import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Fondo degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-cyan-950/10 to-black pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          ¿Tienes un proyecto en mente?
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Ya sea una tienda online como ServiSell o un sitio corporativo 3D. 
          Llevamos tu idea a la realidad hoy mismo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/5355555555" // PON TU NÚMERO REAL AQUÍ
            target="_blank"
            rel="noreferrer"
            className="btn-nexo px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 group"
          >
            <MessageCircle size={24} />
            Hablar por WhatsApp
          </a>
          
          <a 
            href="mailto:contacto@nexoweb.com" 
            className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 hover:border-cyan-500/50 text-white font-medium transition-all flex items-center justify-center gap-2"
          >
            Enviar Correo <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
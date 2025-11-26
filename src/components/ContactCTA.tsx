import React from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
          ¿Listo para innovar?
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Llevamos tu visión al siguiente nivel. Consultoría técnica, desarrollo a medida y estrategias digitales de vanguardia.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://wa.me/50769610332" // Número actualizado
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
          >
            <MessageCircle size={20} />
            Iniciar Conversación
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
          
          <a 
            href="mailto:alexandercarrillovega@gmail.com" 
            className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all flex items-center justify-center gap-3 hover:border-white/30"
          >
            <Mail size={20} />
            Enviar Correo
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
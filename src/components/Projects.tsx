import React from 'react';
import { ExternalLink, Layers, Zap, Database } from 'lucide-react';

const Projects = () => {
  return (
    <section id="proyectos" className="py-32 relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2 block">Portafolio Selecto</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-glow">Éxito</span>
          </h2>
        </div>

        {/* --- PROYECTO: SERVISELL PLUS --- */}
        <div className="group relative bg-[#0B1120] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Imagen del Proyecto (Efecto Ventana) */}
            <div className="relative h-[300px] lg:h-auto overflow-hidden bg-[#1E293B]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent z-10 opacity-80"></div>
              {/* Placeholder elegante hasta que tengas la captura real */}
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                alt="ServiSell Plus" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
              />
              
              {/* Logo flotante del proyecto */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <h3 className="text-2xl font-bold text-white">ServiSell <span className="text-brand-gold">Plus</span></h3>
                  <p className="text-cyan-400 text-xs uppercase tracking-wider font-bold mt-1">E-Commerce Técnico</p>
                </div>
              </div>
            </div>

            {/* Información del Proyecto */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Plataforma integral para gestión de taller y venta de repuestos. 
                Desarrollada con una arquitectura moderna que permite la actualización de inventario en tiempo real directamente desde Google Sheets, eliminando la necesidad de un panel administrativo complejo.
              </p>

              {/* Tech Stack (Etiquetas) */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-3 py-1.5 bg-cyan-950/30 text-cyan-300 text-xs font-bold rounded-lg border border-cyan-500/20 flex items-center gap-2">
                  <Zap size={14} /> React + Vite
                </span>
                <span className="px-3 py-1.5 bg-blue-950/30 text-blue-300 text-xs font-bold rounded-lg border border-blue-500/20 flex items-center gap-2">
                  <Layers size={14} /> Tailwind CSS
                </span>
                <span className="px-3 py-1.5 bg-green-950/30 text-green-300 text-xs font-bold rounded-lg border border-green-500/20 flex items-center gap-2">
                  <Database size={14} /> Google Sheets API
                </span>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://servisell-plus.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                >
                  Ver Sitio en Vivo <ExternalLink size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
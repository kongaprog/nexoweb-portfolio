import React, { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ShareModal from './components/ShareModal';
import { ArrowRight, Code, Globe, Smartphone, Terminal } from 'lucide-react';

function App() {
  
  useEffect(() => {
    const container = document.getElementById('star-container');
    if (container) {
      container.innerHTML = ''; 
      for (let i = 0; i < 60; i++) { // Un poco más de estrellas
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const size = Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(star);
      }
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative min-h-screen bg-[#020204] text-gray-300 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      <div id="star-container" className="stars-bg"></div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
        {/* Funcionalidad: Volver al inicio */}
        <button onClick={scrollToTop} className="font-code text-xl font-bold tracking-tighter text-white flex items-center gap-2 hover:scale-105 transition-transform">
          <img src="/logo.png" alt="NexoWeb" className="h-8 w-auto" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span>NEXO<span className="text-cyan-500">_WEB</span></span>
        </button>
        
        {/* Funcionalidad: Ir a contacto */}
        <a href="#contacto" className="font-code text-[10px] md:text-xs border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-500 hover:text-black transition-all tracking-widest">
          INIT_CONTACT()
        </a>
      </header>

      <main className="relative z-10">
        
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-24 lg:pt-0 max-w-7xl mx-auto">
          
          <div className="w-full lg:w-1/2 space-y-8 relative z-20 text-center lg:text-left mt-10 lg:mt-0">
            
            {/* System Status Arreglado */}
            <div className="inline-flex items-center gap-2 font-code text-[10px] text-green-400 bg-green-950/20 border border-green-500/20 px-3 py-1 rounded-full animate-pulse">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              &lt;SYSTEM STATUS="ONLINE" /&gt;
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight font-heading">
              Arquitectura <br />
              <span className="font-code font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital.</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-cyan-500/50 pl-6">
              Fusionamos ingeniería de software con arte digital. 
              Creamos ecosistemas web que no solo funcionan, sino que <span className="text-white font-bold">inspiran</span>.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#proyectos" className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                EXPLORAR PROYECTOS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>

            {/* Iconos Funcionales con Tooltips */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8">
                <a href="#servicios" className="flex flex-col items-center gap-2 group cursor-pointer transition-all hover:-translate-y-1">
                   <div className="p-3 bg-white/5 rounded-xl group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors border border-white/5 group-hover:border-cyan-500/50">
                      <Globe size={24} /> 
                   </div>
                   <span className="text-[10px] font-code tracking-widest opacity-50 group-hover:opacity-100 text-cyan-400">WEB</span>
                </a>
                <a href="#servicios" className="flex flex-col items-center gap-2 group cursor-pointer transition-all hover:-translate-y-1">
                   <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors border border-white/5 group-hover:border-purple-500/50">
                      <Code size={24} /> 
                   </div>
                   <span className="text-[10px] font-code tracking-widest opacity-50 group-hover:opacity-100 text-purple-400">CODE</span>
                </a>
                <a href="#servicios" className="flex flex-col items-center gap-2 group cursor-pointer transition-all hover:-translate-y-1">
                   <div className="p-3 bg-white/5 rounded-xl group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors border border-white/5 group-hover:border-green-500/50">
                      <Smartphone size={24} /> 
                   </div>
                   <span className="text-[10px] font-code tracking-widest opacity-50 group-hover:opacity-100 text-green-400">MOBILE</span>
                </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative z-10">
            <Hero3D />
          </div>
        </section>

        {/* SECCIONES */}
        <Services />
        <Projects />
        
        <div id="contacto">
          <ContactCTA />
        </div>

      </main>

      <Footer />
      <ShareModal />
    </div>
  );
}

export default App;
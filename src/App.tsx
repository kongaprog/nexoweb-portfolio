import React, { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { ArrowRight, Code, Globe, Smartphone } from 'lucide-react'; // <--- Aquí importamos los iconos

function App() {
  
  useEffect(() => {
    const container = document.getElementById('star-container');
    if (container) {
      container.innerHTML = '';
      for (let i = 0; i < 80; i++) {
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

  return (
    <div className="relative min-h-screen bg-[#020204] text-gray-300 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* FONDO ESTELAR */}
      <div id="star-container" className="stars-bg"></div>

      {/* HEADER / MENÚ */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/30 backdrop-blur-md border-b border-white/5">
        <div className="font-heading text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span>NEXO<span className="text-cyan-500">_WEB</span></span>
        </div>
        <a href="#contacto" className="font-heading text-xs border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-500 hover:text-black transition-all">
          INIT_CONTACT()
        </a>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10">
        
        {/* SECCIÓN PORTADA (HERO) */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20 px-6 max-w-7xl mx-auto">
          
          {/* IZQUIERDA: TEXTO */}
          <div className="w-full lg:w-1/2 space-y-8 relative z-20 text-center lg:text-left mt-10 lg:mt-0">
            <div className="font-heading text-xs text-cyan-400 mb-4 border border-cyan-900/50 bg-cyan-950/20 inline-block px-3 py-1 rounded">
              &lt;System status="online" /&gt;
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-heading">
              Arquitectura <br />
              <span className="font-heading font-light text-gray-500">Digital.</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-cyan-500/30 pl-6">
              Desarrollamos ecosistemas web complejos con la simplicidad del código limpio. 
              <span className="text-cyan-400 block mt-1">Ingeniería + Arte.</span>
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#proyectos" className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all">
                EXPLORAR PROYECTOS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>

            {/* AQUÍ USAMOS LOS ICONOS (Los errores desaparecerán) */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8 opacity-70">
                <div className="flex items-center gap-2 text-cyan-400"><Globe size={20} /> <span className="text-xs font-heading">WEB</span></div>
                <div className="flex items-center gap-2 text-purple-400"><Code size={20} /> <span className="text-xs font-heading">CODE</span></div>
                <div className="flex items-center gap-2 text-green-400"><Smartphone size={20} /> <span className="text-xs font-heading">MOBILE</span></div>
            </div>
          </div>

          {/* DERECHA: OBJETO 3D */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative z-10">
            <Hero3D />
          </div>
        </section>

        {/* RESTO DE SECCIONES */}
        <div className="bg-[#020204] relative z-20">
          <Services />
          <Projects />
          <div id="contacto"><ContactCTA /></div>
          <Footer />
        </div>

      </main>
    </div>
  );
}

export default App;
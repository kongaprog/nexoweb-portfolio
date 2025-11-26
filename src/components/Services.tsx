import React from 'react';
import { Code, ShoppingCart, Box, Smartphone, Monitor, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: "Desarrollo Web Moderno",
    description: "Sitios ultra-rápidos (SPA). No solo hacemos webs, construimos experiencias fluidas que retienen a tus usuarios."
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-Commerce Inteligente",
    description: "Tiendas conectadas a bases de datos en tiempo real. Control total de tu inventario sin complicaciones técnicas."
  },
  {
    icon: <Box size={32} />,
    title: "Tecnología 3D Web",
    description: "Diferénciate de la competencia con objetos interactivos tridimensionales integrados directamente en tu sitio."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Aplicaciones Progresivas",
    description: "Lo mejor de dos mundos: Accesibilidad web con la potencia y velocidad de una aplicación nativa instalable."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020204] via-[#05050a] to-[#020204] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="font-code text-cyan-500 text-xs tracking-[0.3em] uppercase">Capacidades del Sistema</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tecnológicas</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white/5 backdrop-blur-lg border border-white/5 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] relative overflow-hidden"
            >
              {/* Luz ambiental en hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-500/40 transition-all duration-500"></div>

              <div className="relative mb-6 inline-block p-4 rounded-xl bg-black/40 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors duration-300 border border-white/10">
                {service.icon}
              </div>

              <h3 className="relative text-xl font-bold text-white mb-3 font-heading group-hover:text-cyan-300 transition-colors">{service.title}</h3>
              <p className="relative text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
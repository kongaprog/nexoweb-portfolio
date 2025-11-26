import React from 'react';
import { Code, ShoppingCart, Box, Smartphone, Monitor, Globe } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: "Desarrollo Web Moderno",
    description: "Sitios web ultra-rápidos construidos con React y Vite. Diseño responsivo que funciona perfecto en celulares y laptops."
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-Commerce & Tiendas",
    description: "Sistemas de venta conectados a bases de datos reales (Google Sheets). Catálogos inteligentes y control de inventario."
  },
  {
    icon: <Box size={32} />,
    title: "Experiencias 3D",
    description: "Integración de objetos tridimensionales interactivos (Three.js) para destacar tu marca del resto."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Aplicaciones Web (PWA)",
    description: "Webs que se sienten como aplicaciones nativas. Instalables en el celular y optimizadas para el rendimiento."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-[#050505] relative">
      
      {/* Título de la Sección */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-cyan-500"></div>
          <span className="text-cyan-400 uppercase tracking-widest text-xs font-bold">Mis Habilidades</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
          Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tecnológicas</span>
        </h2>
      </div>

      {/* Grid de Tarjetas */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 bg-[#0F172A] border border-white/5 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden"
          >
            {/* Fondo con gradiente sutil al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icono */}
            <div className="relative mb-6 inline-block p-4 rounded-xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
              {service.icon}
            </div>

            {/* Texto */}
            <h3 className="relative text-xl font-bold text-white mb-3 font-heading">{service.title}</h3>
            <p className="relative text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;
import React, { useState } from 'react';
import { ShoppingCart, Box, Smartphone, Monitor, X, CheckCircle, ArrowRight } from 'lucide-react';

// --- BASE DE DATOS DE SERVICIOS (CONTENIDO EXPANDIDO) ---
const detailedServices = [
  {
    id: 1,
    icon: <Monitor size={32} />,
    title: "Desarrollo Web Moderno",
    shortDesc: "Sitios ultra-rápidos (SPA). Experiencias fluidas que retienen usuarios.",
    // Contenido del Panel Expandido
    fullTitle: "Arquitectura Web SPA (Single Page Application)",
    fullDesc: "Olvida las webs antiguas que recargan en cada clic. Creamos ecosistemas digitales vivos.",
    features: [
      "Carga Instantánea: Navegación sin esperas gracias a React + Vite.",
      "SEO Técnico: Estructura optimizada para que Google te encuentre.",
      "Diseño Responsivo: Se ve perfecto en un TV de 50\" o un móvil antiguo.",
      "Interactividad: Animaciones y micro-interacciones que guían al usuario."
    ],
    cta: "Modernizar mi Web"
  },
  {
    id: 2,
    icon: <ShoppingCart size={32} />,
    title: "Comercio Digital", // <-- CAMBIO DE NOMBRE APLICADO
    shortDesc: "Tiendas conectadas en tiempo real. Control total sin complicaciones.",
    // Contenido del Panel Expandido
    fullTitle: "Ecosistemas de Venta Automatizados",
    fullDesc: "No es solo una tienda, es tu mejor vendedor trabajando 24/7 sin descanso.",
    features: [
      "Gestión Simplificada: Controla tu inventario desde Google Sheets o Excel.",
      "Pasarelas de Pago: Integración con Visa, Yappy y Cripto.",
      "Sin Comisiones Mensuales: Te liberamos de las rentas de Shopify.",
      "Notificaciones: Recibe pedidos directamente en tu WhatsApp."
    ],
    cta: "Abrir mi Tienda"
  },
  {
    id: 3,
    icon: <Box size={32} />,
    title: "Tecnología 3D Web",
    shortDesc: "Objetos interactivos tridimensionales integrados directamente.",
    // Contenido del Panel Expandido
    fullTitle: "Inmersión Web GL & Three.js",
    fullDesc: "Transformamos visitantes pasivos en usuarios activos mediante experiencias espaciales.",
    features: [
      "Showcase de Productos: Permite a tus clientes rotar y ver tus productos en 360°.",
      "Impacto Visual: Retención de usuario 300% mayor que webs 2D.",
      "Performance: Gráficos de alta calidad optimizados para navegador.",
      "Factor WOW: Diferenciación inmediata de tu competencia."
    ],
    cta: "Ver Demo 3D"
  },
  {
    id: 4,
    icon: <Smartphone size={32} />,
    title: "Aplicaciones Progresivas",
    shortDesc: "Accesibilidad web con la potencia de una App nativa.",
    // Contenido del Panel Expandido
    fullTitle: "PWA (Progressive Web Apps)",
    fullDesc: "Lo mejor de dos mundos. Sin descargas pesadas, directo en el bolsillo de tu cliente.",
    features: [
      "Instalable: Tu icono en la pantalla de inicio del celular.",
      "Modo Offline: Funciona incluso con conexión inestable.",
      "Notificaciones Push: Mantén a tu audiencia conectada.",
      "Cross-Platform: Una sola app funciona en iOS, Android y Windows."
    ],
    cta: "Crear App"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<any>(null);

  return (
    <section id="servicios" className="py-32 px-6 relative">
      {/* Fondo Ambiental */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020204] via-[#05050a] to-[#020204] -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="mb-20 text-center">
          <span className="font-code text-cyan-500 text-xs tracking-[0.3em] uppercase">Capacidades del Sistema</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tecnológicas</span>
          </h2>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {detailedServices.map((service) => (
            <button 
              key={service.id}
              onClick={() => setActiveService(service)}
              className="text-left group p-8 bg-white/5 backdrop-blur-lg border border-white/5 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] relative overflow-hidden w-full h-full"
            >
              {/* Luz ambiental en hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-500/40 transition-all duration-500"></div>

              <div className="relative mb-6 inline-block p-4 rounded-xl bg-black/40 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors duration-300 border border-white/10">
                {service.icon}
              </div>

              <h3 className="relative text-xl font-bold text-white mb-3 font-heading group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="relative text-gray-400 text-sm leading-relaxed">
                {service.shortDesc}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-xs font-code text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                EXPLORAR_MODULO <ArrowRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --- EL PANEL MODAL --- */}
      {activeService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in" onClick={() => setActiveService(null)}>
          
          <div 
            className="bg-[#0B1120] border border-cyan-500/30 w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-[0_0_100px_rgba(6,182,212,0.2)] slide-in-from-bottom-10"
            onClick={(e) => e.stopPropagation()} // Evitar cierre al clic dentro
          >
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setActiveService(null)}
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              
              {/* Columna Izquierda: Visual / Título */}
              <div className="w-full md:w-2/5 bg-gradient-to-br from-cyan-950/30 to-black p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
                {/* Decoración de fondo */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                   <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 blur-[80px]"></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-block p-4 bg-black/50 border border-cyan-500/30 rounded-2xl text-cyan-400 mb-6 shadow-lg">
                    {activeService.icon}
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white leading-tight">
                    {activeService.title}
                  </h3>
                  <div className="mt-4 w-12 h-1 bg-cyan-500 rounded-full"></div>
                </div>

                <div className="relative z-10 mt-10 md:mt-0">
                   <p className="font-code text-xs text-cyan-500/50">SYSTEM_MODULE_V.2.0</p>
                </div>
              </div>

              {/* Columna Derecha: Contenido Saciante */}
              <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#020204]">
                <h4 className="text-xl text-cyan-400 font-bold mb-4 flex items-center gap-3">
                  {activeService.fullTitle}
                </h4>
                
                <p className="text-gray-300 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                  {activeService.fullDesc}
                </p>

                <div className="space-y-4 mb-10">
                  {activeService.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <CheckCircle size={18} className="text-cyan-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#contacto" 
                  onClick={() => setActiveService(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  {activeService.cta} <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Services;
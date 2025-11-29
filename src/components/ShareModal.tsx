import React, { useState } from 'react';
import { Share2, X, Copy, Check, Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';

const ShareModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const siteUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Función para usar el compartidor nativo del celular
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'NexoWeb - Alexander Carrillo',
          text: 'Mira este portafolio de arquitectura digital increíble.',
          url: siteUrl,
        });
        setIsOpen(false); // Cierra el modal si se compartió con éxito
      } catch (error) {
        console.log('Error compartiendo o cancelado por usuario');
      }
    } else {
      // Si no soporta nativo (PC antigua), abre el modal QR
      setIsOpen(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* BOTÓN FLOTANTE PRINCIPAL */}
      <button 
        onClick={() => {
            // Intenta compartir nativo primero, si falla o es PC, abre modal
            if(navigator.share) {
                handleNativeShare();
            } else {
                setIsOpen(true);
            }
        }}
        className="fixed bottom-6 right-6 z-40 bg-cyan-500 text-black hover:bg-white p-4 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all duration-300 group hover:-translate-y-1"
        title="Compartir Portafolio"
      >
        <Share2 size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* MODAL (Fallback para PC o si quieren ver el QR) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#050505] border border-cyan-500/30 rounded-3xl p-8 max-w-sm w-full relative shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={24} /></button>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-1 font-heading">NexoWeb ID</h3>
              <p className="text-xs text-cyan-500 font-code">SCAN_ACCESS_KEY</p>
            </div>

            <div className="bg-white p-4 rounded-xl mb-6 mx-auto w-fit shadow-xl relative group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <QRCode value={siteUrl} size={160} className="relative z-10"/>
            </div>

            {/* Input Copiar */}
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10 mb-4">
              <input type="text" value={siteUrl} readOnly className="bg-transparent text-gray-400 text-xs flex-1 outline-none px-2 font-code" />
              <button onClick={handleCopy} className="p-2 bg-white/10 hover:bg-cyan-500 hover:text-black rounded-md transition-colors text-white">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Botón manual para móviles que abrieron el modal por error */}
            <button 
                onClick={handleNativeShare}
                className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
            >
                <Smartphone size={18} /> Compartir App
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default ShareModal;
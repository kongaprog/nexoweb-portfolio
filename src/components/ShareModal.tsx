import React, { useState } from 'react';
import { Share2, X, Copy, Check } from 'lucide-react';
import QRCode from 'react-qr-code';

const ShareModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const siteUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-white/5 hover:bg-cyan-500 text-cyan-400 hover:text-black p-3 rounded-full border border-cyan-500/30 backdrop-blur-md transition-all duration-300 group shadow-lg"
        title="Compartir"
      >
        <Share2 size={20} className="group-hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#050505] border border-cyan-500/30 rounded-3xl p-8 max-w-sm w-full relative shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={24} /></button>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-1 font-heading">Compartir NexoWeb</h3>
              <p className="text-xs text-cyan-500 font-code">SCAN_QR_CODE</p>
            </div>

            <div className="bg-white p-4 rounded-xl mb-6 mx-auto w-fit shadow-xl">
              <QRCode value={siteUrl} size={160} />
            </div>

            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
              <input type="text" value={siteUrl} readOnly className="bg-transparent text-gray-400 text-xs flex-1 outline-none px-2 font-code" />
              <button onClick={handleCopy} className="p-2 bg-white/10 hover:bg-cyan-500 hover:text-black rounded-md transition-colors text-white">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareModal;
import React, { useState, useEffect } from 'react';

interface FingerprintScannerProps {
    onComplete: () => void;
}

export const FingerprintScanner: React.FC<FingerprintScannerProps> = ({ onComplete }) => {
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'DONE'>('IDLE');

  useEffect(() => {
    if (status === 'PROCESSING') {
        const timer = setTimeout(() => {
            setStatus('DONE');
        }, 2000);
        return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in duration-300">
        {/* Header */}
        <div className="w-full absolute top-0 border-b-4 border-black flex items-center bg-white h-24">
            <div className="w-1/2 flex items-center justify-center border-r-4 border-black h-full">
                <h1 className="text-4xl font-bold">Fingerprint verification page</h1>
            </div>
            <div className="w-1/2 flex items-center justify-center h-full">
                <h1 className="text-4xl font-bold">Inha University in Tashkent</h1>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center mt-20">
            {/* Rainbow Fingerprint SVG */}
            <div className="mb-12 relative">
                <svg width="200" height="240" viewBox="0 0 100 120" className={status === 'PROCESSING' ? 'animate-pulse' : ''}>
                    <defs>
                        <linearGradient id="rainbow" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="20%" stopColor="#f97316" />
                            <stop offset="40%" stopColor="#eab308" />
                            <stop offset="60%" stopColor="#22c55e" />
                            <stop offset="80%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                    <path 
                        d="M50 110 C20 110 10 70 10 50 C10 25 25 10 50 10 C75 10 90 25 90 50 C90 70 80 110 50 110" 
                        fill="none" 
                        stroke="url(#rainbow)" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                    />
                    {/* Inner Loops simulation */}
                    <path d="M50 100 C30 100 20 70 20 50 C20 30 30 20 50 20 C70 20 80 30 80 50 C80 70 70 100 50 100" fill="none" stroke="url(#rainbow)" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 2"/>
                    <path d="M50 90 C40 90 30 70 30 50 C30 38 38 30 50 30 C62 30 70 38 70 50 C70 70 60 90 50 90" fill="none" stroke="url(#rainbow)" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M50 80 C45 80 40 70 40 50 C40 44 44 40 50 40 C56 40 60 44 60 50 C60 70 55 80 50 80" fill="none" stroke="url(#rainbow)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>

            {/* Buttons Row */}
            <div className="flex gap-6">
                <button 
                    onClick={() => setStatus('PROCESSING')}
                    disabled={status !== 'IDLE'}
                    className={`w-40 py-3 rounded-lg font-bold text-white transition-all shadow-md
                        ${status === 'IDLE' ? 'bg-[#10b981] hover:bg-[#059669]' : 'bg-[#10b981]/50 cursor-not-allowed'}`}
                >
                    Start
                </button>

                <button 
                    disabled
                    className={`w-40 py-3 rounded-lg font-bold text-white transition-all shadow-md
                         ${status === 'PROCESSING' ? 'bg-[#10b981]' : 'bg-[#10b981]/50 cursor-not-allowed'}`}
                >
                    Processing.....
                </button>

                <button 
                    onClick={onComplete}
                    disabled={status !== 'DONE'}
                    className={`w-40 py-3 rounded-lg font-bold text-white transition-all shadow-md
                         ${status === 'DONE' ? 'bg-[#10b981] hover:bg-[#059669]' : 'bg-[#10b981]/50 cursor-not-allowed'}`}
                >
                    Done
                </button>
            </div>
        </div>
    </div>
  );
};
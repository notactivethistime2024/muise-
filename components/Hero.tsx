import React from 'react';
import { useSound } from '../contexts/SoundContext';

interface HeroProps {
  onViewPortfolio?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewPortfolio }) => {
  const { playHover, playClick } = useSound();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black z-10"></div>
            <img alt="Studio Backdrop" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCST8vj-uuy4K7dMq3p_DR0aoQwvdJc2w-GRBRSsXrCMKFUVkE4H7wPw-sVPkOffC8gYm62GYOi17Sd7qhmwSwPTzG3QJR7wiL5OMkHuLNw-bueXu3LaqsoSXcKQnWGyBu-efQE8bT3sBGaRLnRiiAb4cIKsBKt8268L5Mwkzew3CCaI7yp1S8g3s_nyq6wtIHwQq5i2qBcHcvQdmlo71ZXeAryU4Lu7Xc-iGv8CmZSlAQvQCXxqaHPIV2JgoxBcpSJcrEmBGhqZRw"/>
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
            <span className="inline-block py-1.5 px-4 mb-8 rounded-full bg-white/5 text-primary border border-primary/40 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-sm">World-Class Acoustics</span>
            <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
                Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-purple to-primary bg-[length:200%_auto] animate-pulse">Sound.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                A premium sanctuary designed for artists, podcasters, and producers. High-end analog warmth meets digital precision in a pure black aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                    className="bg-primary hover:bg-primary/80 text-white text-lg font-bold px-12 py-5 rounded-full transition-all flex items-center justify-center gap-3 neon-glow-blue" 
                    href="#booking"
                    onMouseEnter={playHover}
                    onClick={playClick}
                >
                    Book Studio Time <span className="material-icons">keyboard_arrow_right</span>
                </a>
                <button 
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md text-lg font-bold px-12 py-5 rounded-full transition-all" 
                    onClick={() => {
                        playClick();
                        if (onViewPortfolio) onViewPortfolio();
                    }}
                    onMouseEnter={playHover}
                >
                    View Portfolio
                </button>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
            <span className="material-icons text-white animate-bounce text-3xl">expand_more</span>
        </div>
    </section>
  );
};

export default Hero;
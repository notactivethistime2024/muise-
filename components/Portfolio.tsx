import React from 'react';
import { useSound } from '../contexts/SoundContext';

const Portfolio: React.FC = () => {
  const { playHover, playClick } = useSound();

  return (
    <section className="py-32 px-6 bg-black border-y border-white/5" id="portfolio">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Featured Projects</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Recent Work</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div 
                    className="rounded-3xl overflow-hidden bg-black border border-white/10 aspect-video flex flex-col items-center justify-center relative group"
                    onMouseEnter={playHover}
                >
                    <img alt="Project One" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFSsRiosQhoy_agTnQvLXc45gkmRP2-JuGpJXylWDgOcBVWrrwa9URAu9iEHktkxYztt6KNEH6LNHLjb2z1lWlqt2Qzdmp5YHyY74ogXh8ZBHt8j3nOQcSYhLA1utKKvYmCoT6cTAh0XvfE9ooKfpMIMuBKc8FtMTzUJcrBL9zji4J6ZfPDBtqIiqEfhz2751F11lbU6e6FC7PEmegMwrwUolDdFrBVZxDep772YDaAX6CuLTfnoJW18f7yReaiYKcwNfcre18LU"/>
                    <div className="relative z-10 text-center">
                        <div 
                            className="w-20 h-20 rounded-full bg-[#1DB954] flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 shadow-2xl transition-all"
                            onClick={playClick}
                        >
                            <span className="material-icons text-white text-4xl">play_arrow</span>
                        </div>
                        <p className="text-white font-bold text-2xl mb-2 tracking-tight">Neon Nights EP</p>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Alternative Electronic</p>
                    </div>
                    <div className="absolute top-6 left-6">
                        <span className="bg-primary px-3 py-1 rounded text-[10px] text-white font-black uppercase tracking-wider">Mixed & Mastered</span>
                    </div>
                </div>

                <div 
                    className="rounded-3xl overflow-hidden bg-black border border-white/10 aspect-video flex flex-col items-center justify-center relative group"
                    onMouseEnter={playHover}
                >
                    <img alt="Project Two" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjb1wiRVDcwSOuF0MRvm477M0slv55-f35Fwd3Tk1PfDjP_5jTUQQgl1Xum7uk8vNXUYeIYpDoUHToNyVmRTs1aVNA57XkzTUkigKj44lyJELXrjKDqEgzNxKgykCe_9zbZvFwymd5DZS7DoEnygEP6KYKNie9EZeEX07wK5VYmh-jgXZkEWrQo_KQj9Un6Rh6FL74CWTkDTBYIItcVcLCcEbQ8vbxXUYqbc-MC_F5VQLam0gKjLUPs4N6L1g2PkCmfGmYNn8aUqM"/>
                    <div className="relative z-10 text-center">
                        <div 
                            className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 shadow-2xl transition-all"
                            onClick={playClick}
                        >
                            <span className="material-icons text-white text-4xl">videocam</span>
                        </div>
                        <p className="text-white font-bold text-2xl mb-2 tracking-tight">Live from The Oasis</p>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Performance Series</p>
                    </div>
                    <div className="absolute top-6 left-6">
                        <span className="bg-accent-purple px-3 py-1 rounded text-[10px] text-white font-black uppercase tracking-wider">Recorded Live</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Portfolio;
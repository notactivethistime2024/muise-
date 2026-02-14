import React from 'react';
import { useSound } from '../contexts/SoundContext';

const Services: React.FC = () => {
  const { playHover } = useSound();

  return (
    <section className="py-32 px-6 bg-black" id="services">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <h2 className="text-accent-purple font-black uppercase tracking-[0.3em] text-xs mb-4">Capabilities</h2>
                    <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Our Services</h3>
                </div>
                <p className="max-w-md text-slate-500 text-lg leading-relaxed">From the first take to the final master, we provide the tools and expertise to bring your creative vision to life in high fidelity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Vocal Recording */}
                <div 
                    className="group p-10 rounded-3xl bg-card-dark border border-white/5 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                    onMouseEnter={playHover}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-primary/20"></div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                        <span className="material-icons text-4xl">mic</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">Vocal Recording</h4>
                    <p className="text-slate-400 mb-8 leading-relaxed">Treated acoustic environment with a selection of world-class microphones for crystal clear vocals.</p>
                    <ul className="space-y-3 text-sm text-slate-500">
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-primary">check_circle</span> Neumann U87 / TLM 103</li>
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-primary">check_circle</span> Avalon 737 Preamp</li>
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-primary">check_circle</span> Pitch correction available</li>
                    </ul>
                </div>

                {/* Music Production */}
                <div 
                    className="group p-10 rounded-3xl bg-card-dark border border-white/5 hover:border-accent-purple/40 transition-all duration-500 relative overflow-hidden"
                    onMouseEnter={playHover}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-accent-purple/20"></div>
                    <div className="w-16 h-16 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-8 text-accent-purple group-hover:scale-110 transition-transform">
                        <span className="material-icons text-4xl">piano</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">Music Production</h4>
                    <p className="text-slate-400 mb-8 leading-relaxed">Work with our in-house producers to build your track from scratch using analog synths and modern plugins.</p>
                    <ul className="space-y-3 text-sm text-slate-500">
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-accent-purple">check_circle</span> Custom Beat Making</li>
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-accent-purple">check_circle</span> Arrangement & Songwriting</li>
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-accent-purple">check_circle</span> Massive Plugin Library</li>
                    </ul>
                </div>

                {/* Mixing & Mastering */}
                <div 
                    className="group p-10 rounded-3xl bg-card-dark border border-white/5 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                    onMouseEnter={playHover}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-primary/20"></div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                        <span className="material-icons text-4xl">equalizer</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">Mixing & Mastering</h4>
                    <p className="text-slate-400 mb-8 leading-relaxed">Polished, radio-ready sound using high-end outboard gear and professional monitoring.</p>
                    <ul className="space-y-3 text-sm text-slate-500">
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-primary">check_circle</span> Industry Standard LUFS levels</li>
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-primary">check_circle</span> Analog Summing</li>
                        <li className="flex items-center gap-3"><span className="material-icons text-sm text-primary">check_circle</span> Multiple Revisions</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
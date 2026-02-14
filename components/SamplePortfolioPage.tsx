import React, { useState } from 'react';
import { ArrowLeft, Play, Disc, Calendar, ArrowRight, Clock, Star, Zap, CheckCircle2 } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';

interface SamplePortfolioPageProps {
  onBack: () => void;
  onBook?: () => void;
}

const SamplePortfolioPage: React.FC<SamplePortfolioPageProps> = ({ onBack, onBook }) => {
  const { playHover, playClick } = useSound();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Production', 'Mixing', 'Mastering', 'Voiceover'];

  const portfolioItems = [
    {
      id: 1,
      title: "Neon Horizon",
      artist: "Cyber Collective",
      category: "Production",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop",
      plays: "1.2M"
    },
    {
      id: 2,
      title: "Velvet Dreams",
      artist: "Luna Soul",
      category: "Mixing",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
      plays: "850K"
    },
    {
      id: 3,
      title: "Urban Echoes",
      artist: "The Residents",
      category: "Mastering",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
      plays: "2.4M"
    },
    {
      id: 4,
      title: "Midnight Jazz",
      artist: "Quartet X",
      category: "Production",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e23f0?q=80&w=1000&auto=format&fit=crop",
      plays: "500K"
    },
     {
      id: 5,
      title: "Podcast: Tech Talk",
      artist: "Daily Tech",
      category: "Voiceover",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac618?q=80&w=1000&auto=format&fit=crop",
      plays: "45K"
    },
     {
      id: 6,
      title: "Acoustic Sessions",
      artist: "Sarah J",
      category: "Mixing",
      image: "https://images.unsplash.com/photo-1510915361408-d5a5aca9fa78?q=80&w=1000&auto=format&fit=crop",
      plays: "120K"
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white relative animate-fade-in">
      {/* Sticky Header for Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-2 cursor-pointer group" onClick={() => { playClick(); onBack(); }} onMouseEnter={playHover}>
            <div className="w-9 h-9 bg-white/5 group-hover:bg-primary border border-white/10 rounded-full flex items-center justify-center transition-all">
                <ArrowLeft className="text-white w-4 h-4" />
            </div>
            <span className="font-bold tracking-widest uppercase text-xs group-hover:text-primary transition-colors hidden sm:block">Back to Studio</span>
         </div>
         
         <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Sonic Oasis Portfolio</div>

         <button 
            onClick={() => { playClick(); if(onBook) onBook(); }}
            onMouseEnter={playHover}
            className="bg-primary text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-widest hover:bg-primary/80 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] animate-pulse-slow"
         >
            Book Now
         </button>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Works</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                A curated collection of tracks defined by sonic excellence. 
                From raw recordings to polished masters, hear the difference.
            </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up [animation-delay:100ms]">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => { playClick(); setActiveCategory(cat); }}
                    onMouseEnter={playHover}
                    className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                        activeCategory === cat 
                        ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                        : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 animate-slide-up [animation-delay:200ms]">
            {filteredItems.map(item => (
                <div 
                    key={item.id} 
                    className="group relative bg-card-dark rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
                    onMouseEnter={playHover}
                >
                    <div className="aspect-square relative overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                            <button 
                                onClick={playClick}
                                className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:bg-primary/90"
                            >
                                <Play className="w-8 h-8 fill-current ml-1" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.artist}</p>
                            </div>
                            <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-white/5">
                                {item.category}
                            </span>
                        </div>
                        
                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-mono">
                            <Disc className="w-3 h-3" />
                            <span>{item.plays} Streams</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Pricing/Booking Options Section */}
        <div className="mb-24">
             <div className="text-center mb-12 animate-slide-up [animation-delay:300ms]">
                <h2 className="text-3xl font-bold text-white tracking-tighter mb-4">Studio <span className="text-primary">Rates</span></h2>
                <p className="text-slate-400">Simple, transparent pricing for every project stage.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Hourly */}
                <div 
                    className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] animate-slide-up [animation-delay:400ms]"
                    onMouseEnter={playHover}
                    onClick={() => { playClick(); if(onBook) onBook(); }}
                >
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                        <Clock className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Hourly Rate</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-4xl font-black text-white group-hover:text-primary transition-colors">$85</span>
                        <span className="text-sm text-slate-500 font-mono">/hr</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">Perfect for vocal tracking, overdubs, or quick mix revisions.</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>Engineer Included</span>
                        </li>
                        <li className="flex items-center gap-3 text-xs text-slate-300">
                             <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>Vocal Booth Access</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-white/5 text-white text-sm font-bold uppercase tracking-wider group-hover:bg-primary border border-white/5 group-hover:border-primary/50 transition-all">
                        Book Hour
                    </button>
                </div>

                {/* Half Day */}
                <div 
                    className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 hover:border-accent-purple/50 transition-all duration-500 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,70,239,0.2)] relative overflow-hidden animate-slide-up [animation-delay:500ms]"
                    onMouseEnter={playHover}
                    onClick={() => { playClick(); if(onBook) onBook(); }}
                >
                    <div className="absolute top-0 right-0 bg-accent-purple text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl">MOST POPULAR</div>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 transition-colors duration-500">
                        <Star className="w-7 h-7 text-slate-400 group-hover:text-accent-purple transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Half Day</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-4xl font-black text-white group-hover:text-accent-purple transition-colors">$300</span>
                        <span className="text-sm text-slate-500 font-mono">/4hrs</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">Ideal for full song production, beat making, or recording sessions.</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-accent-purple" />
                            <span>Full Studio Access</span>
                        </li>
                        <li className="flex items-center gap-3 text-xs text-slate-300">
                             <CheckCircle2 className="w-4 h-4 text-accent-purple" />
                            <span>Mixing Consultation</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-white/5 text-white text-sm font-bold uppercase tracking-wider group-hover:bg-accent-purple border border-white/5 group-hover:border-accent-purple/50 transition-all">
                        Book Session
                    </button>
                </div>

                {/* Full Lockout */}
                <div 
                    className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900 hover:border-blue-400/50 transition-all duration-500 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(96,165,250,0.2)] animate-slide-up [animation-delay:600ms]"
                    onMouseEnter={playHover}
                    onClick={() => { playClick(); if(onBook) onBook(); }}
                >
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-400/20 transition-colors duration-500">
                        <Zap className="w-7 h-7 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Full Lockout</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors">$700</span>
                        <span className="text-sm text-slate-500 font-mono">/10hrs</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">The studio is yours. Create without watching the clock. Total immersion.</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            <span>Private Facility Access</span>
                        </li>
                        <li className="flex items-center gap-3 text-xs text-slate-300">
                             <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            <span>Lounge & Kitchenette</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-white/5 text-white text-sm font-bold uppercase tracking-wider group-hover:bg-blue-400 border border-white/5 group-hover:border-blue-400/50 transition-all">
                        Lock It In
                    </button>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden group animate-slide-up [animation-delay:700ms]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent-purple/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 px-6 py-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
                    Ready to Create?
                </h2>
                <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Start your journey with Sonic Oasis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                    <div className="relative w-full">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                    </div>
                    <button 
                        onClick={() => {
                            playClick();
                            if (onBook) onBook();
                        }}
                        onMouseEnter={playHover}
                        className="w-full sm:w-auto bg-white text-black hover:bg-primary hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] whitespace-nowrap"
                    >
                        <span>Book Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                <p className="mt-6 text-xs text-slate-600 uppercase tracking-widest">Free Consultation • No Commitment</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePortfolioPage;
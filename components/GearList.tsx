import React from 'react';
import { useSound } from '../contexts/SoundContext';

const GearList: React.FC = () => {
  const { playHover } = useSound();

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden" id="gear">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,#3b82f6_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#d946ef_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">The Arsenal</h2>
                    <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Premium Equipment</h3>
                </div>
                <a className="group text-white text-sm font-bold tracking-widest uppercase flex items-center gap-3 border-b-2 border-primary pb-1" href="#">
                    Full Gear List <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5" onMouseEnter={playHover}>
                    <img alt="Neumann U87" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5XvRveaC9EYlSdo_FQa7g05LZxWeq6lgGrzmVrh4UibcO4zJXdoh9ztxz1tvOSGAGFX0WskWbtxwDd73I0-FGApgN_hQU5XyJKSQoUQhdx6OthhMwirjuA986DKy6JqddFbAP06NNdIrZJqsjb58El1zKRj5o7Rd8H5o4H-DjhPnCRguVEnUmKjM155fVWiGfvTQqsvhurypDYxtgwEvWRpm23iwywsspxNyklvqiVOXWfzSalf9VNdF17H6kgLueGUukyV_1drc"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Microphones</p>
                        <p className="font-bold text-white text-lg">Neumann U87 Ai</p>
                    </div>
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5" onMouseEnter={playHover}>
                    <img alt="Speakers" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2qQ66Wy5TYiJszB_ppTo0mtEwS9S59T-9DBCok-aXEOMS_Iz8G7ePlmsgZ5b9yg4FmOz7kjPQxwX5TIDAlLCo2oM08dETJC3DDqHmPlvUfMumErWiGx5MzUBR3odnA-DZbxfhl13I1aS6xIHt5oI90P4Tur-XqO_72X03ZFfOgpF6M9_7B9D1IbxhLVaGMWsZY6-ZqsOziAjtFdsOs65O7XHlABbN_dvNGKnu6OR7fJZoEjL0XCtMReuPvy5xN8PAmCRIHLeCHCw"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-[10px] text-accent-purple font-black uppercase tracking-widest mb-1">Monitoring</p>
                        <p className="font-bold text-white text-lg">Focal Trio11 Be</p>
                    </div>
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5" onMouseEnter={playHover}>
                    <img alt="Preamp" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHRw7Fl0qpAH-nwT-Eo15RrdMtVewWmpLZBlfwUYSr1WCVgHIbM6mIdzav157Wk30iK1Z5EFW7CveVszSxf0Qr-fiEhUxZfdt8vk6K6Qegi18u1DLFyHWx28uswB6eWHmWbM2lTeJgWZyjW6TvLiaE6UFDSfAZE8mOR2X5VpGCR37B8JIG-Xyh76jCM7zNeiu8mK6eg7aZQF8OwUuScvbMWDbm7tEttav5lQXt5WczR1Rje74V-iwu0onv1z25ekuE7luwEK4zloQ"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Outboard</p>
                        <p className="font-bold text-white text-lg">Universal Audio 6176</p>
                    </div>
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5" onMouseEnter={playHover}>
                    <img alt="Interface" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRz6xmD4rU3p2gyy-GGQuP0lkPvAAVHbgUQ05IO0cQApRwe044hGCew3GQFSRJh370D8iB5Z4F9jHKETm_mKkprYgO1SMpPFuPUnIhtexHcupzg5ipQa9L993VfLScia58zJYrvgnIBKGZnNyiYQ9EqZMsg9mTvumslftiJrRE6LCa4cHGcjA7cJmcRGPTIDjhOVAYdMk7U2xA4PAJgTVUP6uud3jbhKPNtyes1Zk2mNCFF51Wqvlhs6eXyFzOzB1nGtsLdi9GV88"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-[10px] text-accent-purple font-black uppercase tracking-widest mb-1">Interface</p>
                        <p className="font-bold text-white text-lg">Apollo x16 Heritage</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default GearList;
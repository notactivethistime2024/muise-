import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import GearList from './components/GearList';
import StudioTour from './components/StudioTour';
import AiLyricAssistant from './components/AiLyricAssistant';
import About from './components/About';
import Contact from './components/Contact';
import SamplePortfolioPage from './components/SamplePortfolioPage';
import { SoundProvider } from './contexts/SoundContext';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'portfolio'>('home');

  const handleBookSession = () => {
    setView('home');
    setTimeout(() => {
        const element = document.getElementById('booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <SoundProvider>
      <div className="bg-black min-h-screen text-slate-300 font-display selection:bg-primary selection:text-white">
        
        {view === 'home' ? (
            <>
                <Navbar onNavigate={(page) => setView(page as 'home' | 'portfolio')} />
                <main>
                    <Hero onViewPortfolio={() => setView('portfolio')} />
                    <Services />
                    <Portfolio />
                    <GearList />
                    <StudioTour />
                    <AiLyricAssistant />
                    <About />
                    <Contact />
                </main>
            </>
        ) : (
            <SamplePortfolioPage onBack={() => setView('home')} onBook={handleBookSession} />
        )}

        <footer className="py-16 px-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-purple rounded flex items-center justify-center">
                        <span className="material-icons text-white text-[16px]">graphic_eq</span>
                    </div>
                    <span className="font-bold tracking-widest text-white uppercase text-sm">Sonic Oasis Studio</span>
                </div>
                <p className="text-slate-600 text-sm font-medium">© 2024 Sonic Oasis. All rights reserved.</p>
                <div className="flex gap-8">
                    <a className="text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">Instagram</a>
                    <a className="text-slate-400 hover:text-accent-purple transition-colors text-xs font-bold uppercase tracking-widest" href="#">Twitter</a>
                    <a className="text-slate-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">Spotify</a>
                </div>
            </div>
        </footer>

        <a className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform" href="https://wa.me/1234567890" target="_blank">
            <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.565.933 3.176 1.403 4.842 1.403 5.463 0 9.898-4.435 9.898-9.899 0-2.641-1.03-5.124-2.903-7.001-1.875-1.878-4.359-2.907-7.004-2.907-5.463 0-9.898 4.435-9.898 9.901 0 1.956.574 3.868 1.66 5.513l-.991 3.621 3.714-.974h.001z"></path>
            </svg>
        </a>
      </div>
    </SoundProvider>
  );
};

export default App;
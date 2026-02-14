import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';

interface NavbarProps {
    onNavigate?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useSound();

  const handleNavClick = (href: string) => {
    playClick();
    if (href === '#portfolio' && onNavigate) {
        onNavigate('portfolio');
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gear', href: '#gear' },
    { name: 'Tour', href: '#tour' },
    { name: 'AI Lab', href: '#ai-lab' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={playClick} onMouseEnter={playHover}>
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent-purple rounded flex items-center justify-center">
            <span className="material-icons text-white text-xl">graphic_eq</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Sonic Oasis</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-center text-xs font-bold uppercase tracking-widest text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={playHover}
              onClick={(e) => {
                  if (link.href === '#portfolio' && onNavigate) {
                      e.preventDefault();
                      handleNavClick(link.href);
                  } else {
                      playClick();
                  }
              }}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onMouseEnter={playHover}
            onClick={playClick}
            className="bg-primary text-white px-8 py-2.5 rounded-full hover:bg-primary/90 transition-all neon-glow-blue"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
            <button
            className="text-white"
            onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                playClick();
            }}
            >
            {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/5 p-6 flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-primary"
              onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.href === '#portfolio' && onNavigate) {
                      e.preventDefault();
                      handleNavClick(link.href);
                  } else {
                      playClick();
                  }
              }}
            >
              {link.name}
            </a>
          ))}
          <a
             href="#booking"
             className="bg-primary text-white px-8 py-2.5 rounded-full hover:bg-primary/90 transition-all neon-glow-blue w-full text-center text-sm font-bold uppercase tracking-widest"
             onClick={() => setMobileMenuOpen(false)}
          >
              Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
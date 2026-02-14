import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: true,
  toggleMute: () => {},
  playHover: () => {},
  playClick: () => {},
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const ambienceOscillators = useRef<OscillatorNode[]>([]);
  const ambienceGain = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const startAmbience = () => {
    if (!audioContextRef.current) initAudio();
    const ctx = audioContextRef.current!;

    // Create a dark, cinematic drone
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.05; // Low volume
    masterGain.connect(ctx.destination);
    ambienceGain.current = masterGain;

    // Osc 1: Deep drone
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(40, ctx.currentTime);
    
    // Filter for Osc 1 to make it "dark"
    const filter1 = ctx.createBiquadFilter();
    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(120, ctx.currentTime);
    
    osc1.connect(filter1);
    filter1.connect(masterGain);
    osc1.start();

    // Osc 2: Slight detune for texture
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(41, ctx.currentTime); // 1Hz beat frequency
    const gain2 = ctx.createGain();
    gain2.gain.value = 0.5;
    osc2.connect(gain2);
    gain2.connect(masterGain);
    osc2.start();

    ambienceOscillators.current = [osc1, osc2];
  };

  const stopAmbience = () => {
    ambienceOscillators.current.forEach(osc => {
        try {
            osc.stop();
            osc.disconnect();
        } catch (e) { /* ignore */ }
    });
    ambienceOscillators.current = [];
    if (ambienceGain.current) {
        ambienceGain.current.disconnect();
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      startAmbience();
    } else {
      setIsMuted(true);
      stopAmbience();
    }
  };

  const playHover = () => {
    if (isMuted || !audioContextRef.current) return;
    const ctx = audioContextRef.current;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const playClick = () => {
    if (isMuted || !audioContextRef.current) return;
    const ctx = audioContextRef.current;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => stopAmbience();
  }, []);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  );
};

import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { generateLyrics } from '../services/geminiService';

const AiLyricAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [mood, setMood] = useState('Energetic');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setLyrics('');
    
    const result = await generateLyrics(prompt, mood);
    setLyrics(result);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(lyrics);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-lab" className="py-24 bg-gradient-to-br from-indigo-950/20 to-purple-950/20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neonPurple/10 border border-neonPurple/20 mb-6">
               <Sparkles className="w-4 h-4 text-neonPurple" />
               <span className="text-xs font-bold text-neonPurple uppercase tracking-widest">Powered by Gemini</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              WRITER'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-white">BLOCK?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Stuck on a verse? Use our in-house AI Lyric Assistant to spark some creativity before you step into the booth. 
              Just describe the vibe, and let the ghostwriter do the heavy lifting.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">What's the song about?</label>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Late night drive through Tokyo..."
                  className="w-full bg-darkBg/50 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-neonPurple transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Vibe / Mood</label>
                <div className="flex flex-wrap gap-2">
                  {['Energetic', 'Melancholic', 'Aggressive', 'Chill', 'Romantic'].map(m => (
                    <button
                      key={m}
                      onClick={() => setMood(m)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        mood === m 
                          ? 'bg-neonPurple text-white border-neonPurple shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                          : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className={`w-full py-4 mt-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    loading || !prompt 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-neonBlue hover:text-white shadow-lg'
                }`}
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="w-4 h-4" />}
                {loading ? 'Generating...' : 'Inspire Me'}
              </button>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-neonPurple/20 to-neonBlue/20 blur-3xl rounded-full opacity-50" />
             <div className="relative glass-panel rounded-2xl p-8 min-h-[400px] border border-white/10 flex flex-col">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <h3 className="text-white font-display font-bold">GENERATED LYRICS</h3>
                    <div className="flex gap-2">
                         <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                         </div>
                    </div>
                </div>
                
                <div className="flex-grow font-mono text-gray-300 leading-loose whitespace-pre-wrap">
                    {lyrics ? (
                        lyrics
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-600">
                            <MusicNoteWave />
                            <p className="mt-4 text-sm">Lyrics will appear here...</p>
                        </div>
                    )}
                </div>

                {lyrics && (
                    <button 
                        onClick={handleCopy}
                        className="mt-4 self-end text-xs text-gray-400 hover:text-white flex items-center gap-2"
                    >
                        {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied' : 'Copy Lyrics'}
                    </button>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Simple SVG Placeholder for empty state
const MusicNoteWave = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>
)

export default AiLyricAssistant;

import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-purple/20 rounded-full blur-3xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                    <img alt="Studio Vibes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPr6NCVvges5bnsHE4G6OX2RX8pP8jaGEKHP8jtStfN_bCJ6-YVsy0SHG2HHJITsJrntggQsQy5LC9-8QqTw9LuZwFFniEci3YadeGvWgxAKm0hUGLt4GrxJ6VXH9q1OI8Tjz2_rjY1WbwWjbsV1mnckcqNL1xTzQMeK2gjIyeZ2_nb_6xfUYpD4mUKjJCT7J2dpdhBxdrcLFRYpyFLd0kTJZ1ljvXCeVadmuyJ8LLkpmyKI8_QzORPh9oIyoevOQP9fUodIR8fZg"/>
                </div>
            </div>
            <div>
                <h2 className="text-accent-purple font-black uppercase tracking-[0.3em] text-xs mb-4">The Vibe</h2>
                <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-[1.1] tracking-tighter">A Sanctuary for Modern Creatives</h3>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                    Sonic Oasis is more than a studio. It's a high-fidelity environment meticulously crafted to remove friction from the creative process. Whether tracking raw vocals or finalizing a cinematic score, our space adapts to your sonic vision.
                </p>
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Access</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <p className="text-3xl font-bold text-accent-purple mb-1">0.1s</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Latency</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
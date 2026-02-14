import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black" id="booking">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                    <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Get in Touch</h2>
                    <h3 className="text-5xl font-bold text-white mb-10 tracking-tighter">Let's Create.</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                                <span className="material-icons">location_on</span>
                            </div>
                            <div>
                                <p className="font-bold text-white text-lg mb-1">Visit Us</p>
                                <p className="text-slate-400 leading-relaxed">123 Audio Lane, Creative District<br/>Berlin, Germany</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple shrink-0 border border-accent-purple/20">
                                <span className="material-icons">mail</span>
                            </div>
                            <div>
                                <p className="font-bold text-white text-lg mb-1">Email</p>
                                <p className="text-slate-400 leading-relaxed">hello@sonicoasis.studio</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 rounded-3xl overflow-hidden grayscale contrast-150 brightness-50 border border-white/10 h-56 bg-zinc-900 relative">
                        <img alt="Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLGs_UDxmPwhRhiIQapzTw-7j4LraHwdfA66RDs1Y8jmlDD6Ba1JfDSGyp5ttm1tkircoe93zFh1QU-ySzzZ6E_6hcmHTjzM8UjV4DbhqlY4tEWY1JmqKv_bF52DPLLthA4cc1qbPo51LZvmcAxhSn4nz1Fh2wxEYP-Oiv7ifQLI1Kx43Uxyv4SxrAhlNcHhAmAQTnWwcBrF5djiKn3EdMVr0kHIDujGw-sWjZTPodrXgtqzRdeOwRfHWbDo1o948heZdR9ipSTM"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-primary rounded-full animate-ping opacity-75"></div>
                            <div className="w-4 h-4 bg-primary rounded-full absolute shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 p-10 md:p-14 rounded-3xl bg-card-dark border border-white/5 shadow-2xl">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-black mb-3 text-slate-500 uppercase tracking-widest">Full Name</label>
                                <input className="w-full bg-black border-white/10 rounded-xl focus:ring-primary focus:border-primary text-white px-5 py-4 transition-all" placeholder="John Doe" type="text"/>
                            </div>
                            <div>
                                <label className="block text-xs font-black mb-3 text-slate-500 uppercase tracking-widest">Project Type</label>
                                <select className="w-full bg-black border-white/10 rounded-xl focus:ring-primary focus:border-primary text-white px-5 py-4 transition-all appearance-none">
                                    <option>Vocal Recording</option>
                                    <option>Mixing/Mastering</option>
                                    <option>Full Production</option>
                                    <option>Podcasting</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-black mb-3 text-slate-500 uppercase tracking-widest">Email Address</label>
                            <input className="w-full bg-black border-white/10 rounded-xl focus:ring-primary focus:border-primary text-white px-5 py-4 transition-all" placeholder="artist@example.com" type="email"/>
                        </div>
                        <div>
                            <label className="block text-xs font-black mb-3 text-slate-500 uppercase tracking-widest">Project Details</label>
                            <textarea className="w-full bg-black border-white/10 rounded-xl focus:ring-primary focus:border-primary text-white px-5 py-4 transition-all" placeholder="Tell us about your sound..." rows={5}></textarea>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/80 text-white font-black py-5 rounded-xl transition-all neon-glow-blue uppercase tracking-[0.2em] text-sm" type="submit">
                            Request Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
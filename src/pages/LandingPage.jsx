
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const LandingPage = () => {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        let { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width);
        mouseY.set((clientY - top) / height);
    };

    const moveX = useTransform(mouseX, [0, 1], [-30, 30]);
    const moveY = useTransform(mouseY, [0, 1], [-30, 30]);

    // Calculate days since March 25, 2023
    const startDate = new Date('2023-03-25');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-[#F8F6F6] font-display overflow-hidden h-screen w-screen text-[#2D2D2D] relative selection:bg-primary selection:text-white"
            onMouseMove={handleMouseMove}
        >
            {/* Immersive Atmospheric Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                    style={{
                        x: useTransform(mouseX, [0, 1], [60, -60]),
                        y: useTransform(mouseY, [0, 1], [60, -60])
                    }}
                    className="absolute top-[-25%] right-[-15%] w-[80vw] h-[80vw] bg-[#FFE4E1]/50 rounded-full blur-[160px]"
                />
                <motion.div
                    style={{
                        x: useTransform(mouseX, [0, 1], [-80, 80]),
                        y: useTransform(mouseY, [0, 1], [-80, 80])
                    }}
                    className="absolute bottom-[-15%] left-[-15%] w-[70vw] h-[70vw] bg-[#E6E6FA]/40 rounded-full blur-[140px]"
                />

                {/* Subtle Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>

            <main className="relative z-10 w-full h-full flex flex-col justify-between p-12">
                {/* Navigation - Premium Style */}
                <header className="w-full flex justify-center">
                    <motion.nav
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, type: 'spring', stiffness: 80 }}
                        className="bg-white/40 backdrop-blur-xl border border-white/60 px-12 py-6 rounded-full flex items-center gap-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                    >
                        <Link className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-primary transition-all duration-300 no-underline" to="/history">History</Link>
                        <Link className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-primary transition-all duration-300 no-underline" to="/gallery">Gallery</Link>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            className="mx-4 relative"
                        >
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50 cursor-pointer">
                                <span className="material-icons text-primary text-2xl">favorite</span>
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-[-4px] rounded-full border border-primary/20"
                            />
                        </motion.div>

                        <Link className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-primary transition-all duration-300 no-underline" to="/timeline">Timeline</Link>
                        <Link className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-primary transition-all duration-300 no-underline" to="/wishes">Wishes</Link>
                    </motion.nav>
                </header>

                {/* Central Visual Focus */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <motion.div
                        style={{ x: moveX, y: moveY }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-[800px] h-[800px] flex items-center justify-center"
                    >
                        {/* The Main Island */}
                        <motion.div
                            animate={{ y: [-25, 25, -25] }}
                            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                            className="relative w-[450px] h-[450px] z-10 rounded-full overflow-hidden shadow-[0_40px_100px_rgba(232,48,79,0.15)] border-[16px] border-white group"
                        >
                            <img
                                alt="Rose Bouquet Island"
                                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[2s] ease-out"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9wVpMclJfYG46L0YteV40t52Bbyip092fc1ME_CfN9dJgwWYTlicsqSsNistuqoJnA5lSX34GSHYTa2b7ulFHT0r2cd389YRuuQ3fa7kRLNd8nIpZy3vhd20hFvosepZSeXb3djciULscv-gvQ8wYLTuauoYMkb3N9jFAfkDBwlGq5Z_YiZAJr69JFribYl_YfOZdKYhkTeA5pXK6f1XUyJeDid2h_NRw9ZtdDLlKsVs3OHjgGFoEBfdkGwZ2oNuz4SOlaRo71QM"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        </motion.div>

                        {/* Orbiting Elements - High Precision Positioning */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                            className="absolute w-full h-full"
                        >
                            <Link to="/timeline" className="pointer-events-auto">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    className="absolute top-1/4 -right-10 w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-2xl cursor-pointer"
                                >
                                    <img src="/assets/IMG_3142.jpeg" className="w-full h-full object-cover" />
                                </motion.div>
                            </Link>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                            className="absolute w-[85%] h-[85%]"
                        >
                            <Link to="/wishes" className="pointer-events-auto">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="absolute bottom-1/4 -left-10 w-28 h-28 rounded-full overflow-hidden border-6 border-white shadow-2xl cursor-pointer"
                                >
                                    <img src="/assets/IMG_4002.jpeg" className="w-full h-full object-cover" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Textual Content - Elegant Typography */}
                <div className="relative z-10 flex-grow flex flex-col justify-center pointer-events-none">
                    <div className="max-w-4xl ml-16 md:ml-32 pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="inline-flex items-center gap-3 bg-white/60 border border-white px-5 py-2.5 rounded-full mb-10 shadow-sm"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-gray-600 text-[11px] font-black uppercase tracking-[0.3em]">Nearly 3 Years of Magic</span>
                        </motion.div>

                        <h1 className="text-[120px] md:text-[160px] font-black text-[#2D2D2D] mb-6 leading-[0.8] tracking-[-0.04em]">
                            L'Île<br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 1.5 }}
                                className="text-primary italic font-['Playfair_Display'] font-normal"
                            >
                                Flottante
                            </motion.span>
                        </h1>

                        <p className="text-3xl md:text-4xl font-light text-gray-400 mb-14 tracking-tight">Le sanctuaire des amoureux.</p>

                        {/* Elegant Statistics Row */}
                        <div className="flex gap-16 mb-12">
                            <div className="group cursor-default">
                                <span className="block text-5xl font-black text-[#2D2D2D] mb-1 group-hover:text-primary transition-colors">{diffDays}</span>
                                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Days of Distance</span>
                            </div>
                            <div className="w-[1px] h-14 bg-gray-200"></div>
                            <div className="group cursor-default">
                                <span className="block text-5xl font-black text-[#2D2D2D] mb-1 group-hover:text-primary transition-colors">105</span>
                                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Photos</span>
                            </div>
                            <div className="w-[1px] h-14 bg-gray-200"></div>
                            <div className="group cursor-default">
                                <span className="block text-5xl font-black text-[#2D2D2D] mb-1 group-hover:text-primary transition-colors">∞</span>
                                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Memories</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Premium Action Area */}
                <div className="w-full flex flex-col items-center pb-12 relative z-20">
                    <Link to="/timeline" className="group">
                        <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative w-28 h-28 bg-[#2D2D2D] rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex items-center justify-center group-hover:bg-primary transition-all duration-500"
                        >
                            <span className="material-icons text-white text-5xl group-hover:rotate-[360deg] transition-transform duration-[1s]">explore</span>
                            <span className="absolute inset-[-15px] rounded-full border border-primary/10 animate-[ping_3s_infinite]"></span>
                        </motion.button>
                    </Link>
                    <span className="mt-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.5em]">Start the Journey</span>
                </div>

                {/* Metadata Display */}
                <div className="absolute bottom-12 right-12 text-right hidden lg:block opacity-40">
                    <p className="text-[11px] font-black text-[#2D2D2D] uppercase tracking-[0.4em] mb-2">Registry</p>
                    <p className="text-[10px] font-bold text-gray-500 font-mono mb-1">DAKAR ⇄ TUNIS / V02</p>
                    <p className="text-[10px] font-bold text-primary italic">Sector: Infinite Bond</p>
                </div>
            </main>
        </motion.div>
    );
};

export default LandingPage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TimelinePage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const memories = [
        {
            id: 1,
            title: "Le Commencement",
            date: "25 Mars 2023",
            image: "/assets/IMG_3951.jpeg",
            description: "Le début de notre magnifique histoire.",
            type: "image"
        },
        {
            id: 2,
            title: "Doux Souvenirs",
            date: "Juin 2023",
            image: "/assets/B461BF8F-593D-4926-9B09-6DA8D179D36A.jpeg",
            description: "Chaque instant avec toi est précieux.",
            type: "image"
        },
        {
            id: 3,
            title: "L'Attente",
            date: "Septembre 2023",
            image: "/assets/79d51ac8-f6f6-4e8b-a484-ed7c96e1ee77.jpeg",
            description: "Loin des yeux, mais si près du cœur.",
            type: "image"
        },
        {
            id: 4,
            title: "Complicité",
            date: "Décembre 2023",
            image: "/assets/IMG_4195.jpeg",
            description: "Nos rires qui résonnent encore.",
            type: "image"
        },
        {
            id: 5,
            title: "Retrouvailles Magiques",
            date: "Janvier 2025",
            image: "/assets/472CA284-986C-4475-8978-55707E79B8B9.MP4",
            description: "Enfin réunis, le temps s'est arrêté.",
            type: "video"
        },
        {
            id: 6,
            title: "Promenade",
            date: "Février 2025",
            image: "/assets/IMG_4240.jpeg",
            description: "Main dans la main vers notre futur.",
            type: "image"
        },
        {
            id: 7,
            title: "Printemps Enchanté",
            date: "Mars - Avril 2025",
            image: "/assets/IMG_4060.jpeg",
            description: "Des moments inoubliables.",
            type: "image"
        },
        {
            id: 8,
            title: "Vers l'Infini",
            date: "Mai 2025",
            image: "/assets/CE5EA1E9-51B7-4163-9221-7747F87D1A8C.MP4",
            description: "Notre amour ne connaît pas de frontières.",
            type: "video"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#F8F6F6] font-display overflow-hidden h-screen w-screen text-[#2D2D2D] relative"
        >
            {/* Immersive Environment */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E6E6FA]/20 to-[#FFE4E1]/20"></div>
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

            {/* Floating Header */}
            <header className="fixed top-12 left-12 z-50">
                <Link to="/" className="no-underline group">
                    <motion.div
                        whileHover={{ x: -10 }}
                        className="bg-white/60 backdrop-blur-xl border border-white/40 px-10 py-5 rounded-full shadow-lg flex items-center gap-6"
                    >
                        <span className="material-icons text-primary group-hover:scale-125 transition-transform">favorite</span>
                        <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#2D2D2D] m-0">L'Île Flottante</h1>
                    </motion.div>
                </Link>
            </header>

            <main className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {/* Page Title Section */}
                <div className="absolute top-[12%] text-center">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-7xl font-light text-[#2D2D2D] tracking-tighter mb-4"
                    >
                        Le Sentier des Souvenirs
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
                </div>

                {/* 3D Carousel Stage */}
                <div className="relative w-full max-w-7xl h-[750px] flex items-center justify-center perspective-[2000px]">
                    <AnimatePresence mode="popLayout">
                        {memories.map((memory, index) => {
                            const offset = index - activeIndex;
                            const isActive = offset === 0;

                            if (Math.abs(offset) > 1) return null;

                            return (
                                <motion.div
                                    key={memory.id}
                                    initial={{ opacity: 0, scale: 0.8, x: offset * 600, rotateY: offset * -45 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.3,
                                        scale: isActive ? 1.15 : 0.8,
                                        x: offset * 450,
                                        z: isActive ? 200 : -300,
                                        rotateY: offset * -35,
                                        filter: isActive ? 'blur(0px)' : 'blur(4px)'
                                    }}
                                    transition={{ duration: 1, type: "spring", stiffness: 70, damping: 15 }}
                                    className={`absolute cursor-pointer preserve-3d ${isActive ? 'z-30' : 'z-10'}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {/* The Golden Suspender */}
                                    <motion.div
                                        animate={{ height: isActive ? 250 : 350 }}
                                        transition={{ duration: 1 }}
                                        className="absolute top-[-350px] left-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-[#D4AF37] z-[-1] origin-bottom shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                    />

                                    {/* High-End Wooden Frame */}
                                    <div className={`p-6 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.3)] transition-all duration-1000 ${isActive ? 'bg-[#3D2616] border-[1px] border-[#5C3A1A]/50' : 'bg-[#2D1B10] grayscale-[0.2]'}`}>
                                        <div className="bg-black p-1 border-2 border-[#1A110A] rounded-md relative overflow-hidden">
                                            {memory.type === "video" ? (
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className={`${isActive ? 'w-[400px] h-[580px]' : 'w-[280px] h-[400px]'} object-cover opacity-90 transition-all duration-[2s]`}
                                                >
                                                    <source src={memory.image} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <img
                                                    src={memory.image}
                                                    alt={memory.title}
                                                    className={`${isActive ? 'w-[400px] h-[580px]' : 'w-[280px] h-[400px]'} object-cover opacity-90 transition-all duration-[2s] hover:scale-110 hover:opacity-100`}
                                                />
                                            )}

                                            {/* Golden Corner Embellishments */}
                                            {isActive && (
                                                <>
                                                    <div className="absolute top-4 left-4 w-16 h-16 border-t-[4px] border-l-[4px] border-[#D4AF37]/60 rounded-tl-xl filter drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
                                                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-[4px] border-r-[4px] border-[#D4AF37]/60 rounded-br-xl filter drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Meta Information */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[180%] text-center"
                                        >
                                            <p className="text-[12px] font-black text-[#E8304F] uppercase tracking-[0.6em] mb-3">{memory.date}</p>
                                            <h3 className="text-3xl font-bold text-[#2D2D2D] mb-2 tracking-tight">{memory.title}</h3>
                                            <p className="text-xl font-['Playfair_Display'] italic text-gray-500">"{memory.description}"</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Dynamic Controls Bottom */}
                <div className="fixed bottom-16 left-0 right-0 flex flex-col items-center gap-10 px-16">
                    <div className="flex gap-6">
                        {memories.map((_, i) => (
                            <motion.button
                                key={i}
                                animate={{
                                    scale: i === activeIndex ? 1.5 : 1,
                                    backgroundColor: i === activeIndex ? '#e8304f' : '#D1D1D1'
                                }}
                                onClick={() => setActiveIndex(i)}
                                className="w-2.5 h-2.5 rounded-full transition-colors cursor-pointer"
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-between w-full max-w-lg">
                        <button
                            onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                            className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all shadow-sm hover:shadow-xl group"
                        >
                            <span className="material-icons text-gray-300 group-hover:text-primary transition-colors text-3xl">chevron_left</span>
                        </button>

                        <Link to="/" className="no-underline">
                            <button className="bg-[#2D2D2D] hover:bg-primary text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] shadow-xl transition-all duration-500 hover:scale-105 active:scale-95">
                                Back to Island
                            </button>
                        </Link>

                        <button
                            onClick={() => setActiveIndex(prev => Math.min(memories.length - 1, prev + 1))}
                            className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all shadow-sm hover:shadow-xl group"
                        >
                            <span className="material-icons text-gray-300 group-hover:text-primary transition-colors text-3xl">chevron_right</span>
                        </button>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default TimelinePage;

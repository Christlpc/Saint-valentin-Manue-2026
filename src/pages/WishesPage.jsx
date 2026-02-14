
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const WishesPage = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [currentWishIndex, setCurrentWishIndex] = useState(0);
    const [isWriting, setIsWriting] = useState(false);
    const [newWish, setNewWish] = useState("");

    const wishes = [
        {
            text: "Chaque jour passé avec toi est une nouvelle aventure magique.",
            date: "14 Février 2026"
        },
        {
            text: "Que notre amour continue de briller plus fort que toutes les étoiles de Dakar et de Tunis.",
            date: "Mars 2025"
        },
        {
            text: "J'ai hâte de te retrouver pour de vrai, main dans la main.",
            date: "Janvier 2025"
        },
        {
            text: "Tu es mon refuge, mon île flottante au milieu de l'océan.",
            date: "Août 2024"
        }
    ];

    const nextWish = () => {
        setCurrentWishIndex((prev) => (prev + 1) % wishes.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#F8F6F6] font-display overflow-hidden h-screen w-screen text-[#2D2D2D] relative"
        >
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Magical Background"
                    className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-70 scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVNtMnMy4IwDoKcrNq9uHBglAAg6pmjht3rAkmR6qKw68fOsURE_IcuWjFIviqkt7qu-gR1vU9DAFZcmXgU60ITXM2sVpqJauxVNj3Cl2NPam2mPB5e89v7-sJD8cc9cQ3ohIIt8E_Y8QviyfJhRcEMPGf0uw74PZPbYK7edbD52nkTWn9zFnqdCj_Uc0QIiJtgibPFc9tXYpEvPsjwCtR64LJqAtg7ztExDXNOcxfaxnIlxLbEGGhYl9uno7TPM8KhBsfUXmbaRg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F6]/30 via-transparent to-primary/10"></div>
                {/* Particle Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
            </div>

            <main className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12">
                {/* Navigation Home */}
                <div className="absolute top-12 left-12">
                    <Link to="/" className="group flex items-center gap-4 bg-white/60 backdrop-blur-xl px-8 py-5 rounded-full shadow-sm hover:shadow-xl transition-all duration-500 border border-white/40 no-underline">
                        <span className="material-icons-round text-primary text-2xl group-hover:-translate-x-2 transition-transform">arrow_back</span>
                        <span className="text-[11px] font-black text-gray-700 uppercase tracking-[0.3em]">Retour à l'île</span>
                    </Link>
                </div>

                {/* Central Interactivity */}
                <div className="w-full max-w-2xl">
                    <AnimatePresence mode="wait">
                        {!isOpened ? (
                            <motion.div
                                key="closed"
                                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setIsOpened(true)}
                                className="cursor-pointer bg-white/80 backdrop-blur-2xl p-24 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-white flex flex-col items-center justify-center gap-8 hover:transform hover:scale-[1.03] transition-all duration-700 text-center"
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center border-2 border-primary/10 mb-2"
                                >
                                    <span className="material-icons-round text-primary text-6xl">mail</span>
                                </motion.div>
                                <div>
                                    <h3 className="font-['Playfair_Display'] italic text-4xl text-gray-800 mb-2">Un message pour toi...</h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.6em] text-primary animate-pulse">(Appuyer pour ouvrir)</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ y: 100, opacity: 0, rotateX: 45 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{ duration: 1.2, type: 'spring', damping: 20 }}
                                className="bg-white/90 backdrop-blur-3xl p-2 rounded-[4.5rem] shadow-[0_60px_120px_rgba(232,48,79,0.1)] border border-white overflow-hidden"
                            >
                                <div className="bg-white/40 border-2 border-white/60 rounded-[4.2rem] p-16 md:p-24 text-center relative overflow-hidden">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full -ml-16 -mt-16"></div>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full -mr-16 -mt-16"></div>

                                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 mb-12">
                                        <span className="material-icons-round text-[#E8304F] text-4xl">auto_awesome</span>
                                    </div>

                                    <h2 className="text-[11px] font-black uppercase tracking-[1em] text-[#E8304F] mb-16 opacity-60">Le Puits aux Souhaits</h2>

                                    <div className="font-['Playfair_Display'] italic text-5xl md:text-6xl text-gray-800 leading-[1.2] mb-20 min-h-[300px] flex flex-col justify-center">
                                        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>Mon amour,</motion.p>
                                        <AnimatePresence mode="wait">
                                            <motion.p
                                                key={currentWishIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="mt-8 text-gray-700 text-3xl md:text-4xl"
                                            >
                                                {wishes[currentWishIndex].text}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex items-center justify-center gap-10 mb-20 opacity-30">
                                        <span className="h-px w-20 bg-gray-400"></span>
                                        <span className="text-[11px] font-black text-gray-600 uppercase tracking-[0.4em]">{wishes[currentWishIndex].date}</span>
                                        <span className="h-px w-20 bg-gray-400"></span>
                                    </div>

                                    <div className="flex flex-col gap-8">
                                        <button
                                            onClick={nextWish}
                                            className="w-full bg-[#E8304F] hover:bg-[#2D2D2D] text-white font-black text-[13px] uppercase tracking-[0.3em] py-8 px-12 rounded-full shadow-2xl shadow-primary/30 transition-all duration-500 hover:scale-[1.05] flex items-center justify-center gap-4 cursor-pointer"
                                        >
                                            Lire le prochain voeu
                                            <span className="material-icons-round text-2xl">east</span>
                                        </button>
                                        <button
                                            onClick={() => setIsWriting(true)}
                                            className="text-[11px] font-black text-gray-400 hover:text-primary uppercase tracking-[0.6em] transition-colors cursor-pointer"
                                        >
                                            Écrire un nouveau souhait
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Write Wish Overlay */}
                <AnimatePresence>
                    {isWriting && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-[#F8F6F6]/95 backdrop-blur-xl flex items-center justify-center p-8"
                        >
                            <div className="w-full max-w-xl text-center">
                                <h3 className="text-[11px] font-black uppercase tracking-[1em] text-[#E8304F] mb-12">Confie ton voeu au puits</h3>
                                <textarea
                                    value={newWish}
                                    onChange={(e) => setNewWish(e.target.value)}
                                    placeholder="Écris ton message ici..."
                                    className="w-full h-64 bg-transparent border-none text-4xl md:text-5xl font-['Playfair_Display'] italic text-gray-800 placeholder:text-gray-300 focus:ring-0 resize-none text-center"
                                />
                                <div className="mt-16 flex flex-col items-center gap-8">
                                    <button
                                        onClick={() => setIsWriting(false)}
                                        className="bg-[#2D2D2D] text-white px-16 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.4em] shadow-xl hover:bg-primary transition-all cursor-pointer"
                                    >
                                        Lancer dans le puits
                                    </button>
                                    <button
                                        onClick={() => setIsWriting(false)}
                                        className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors cursor-pointer"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Interaction Hint */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-12 text-center opacity-40 cursor-pointer"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] flex items-center gap-4">
                        <span className="material-icons-round text-xl text-primary">{isOpened ? 'expand_more' : 'expand_less'}</span>
                        {isOpened ? 'Fermer la lettre' : 'Glissez pour voir le puits'}
                    </p>
                </motion.div>
            </main>
        </motion.div>
    );
};

export default WishesPage;

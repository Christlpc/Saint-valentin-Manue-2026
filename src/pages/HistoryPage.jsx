
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HistoryPage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const storySections = [
        {
            date: "25 Mars 2023",
            title: "L'Étincelle",
            text: "Tout a commencé comme un murmure, une connexion invisible qui allait changer nos vies à jamais.",
            image: "/assets/IMG_3951.jpeg",
            align: "left"
        },
        {
            date: "Juin 2023",
            title: "La Distance",
            text: "Des kilomètres nous séparent, mais chaque message, chaque appel, comble ce vide avec une intensité rare.",
            image: "/assets/B461BF8F-593D-4926-9B09-6DA8D179D36A.jpeg",
            align: "right"
        },
        {
            date: "Janvier 2025",
            title: "Les Retrouvailles",
            text: "Le moment où le temps s'est arrêté. Tes yeux, ton sourire... tout était plus beau que dans mes rêves les plus fous.",
            video: "/assets/472CA284-986C-4475-8978-55707E79B8B9.MP4",
            align: "left"
        },
        {
            date: "Mars 2025",
            title: "Printemps de Tunis",
            text: "Marcher ensemble, enfin. Sentir ta main dans la mienne et réaliser que chaque seconde d'attente en valait la peine.",
            image: "/assets/IMG_4060.jpeg",
            align: "right"
        },
        {
            date: "Demain & Toujours",
            title: "Notre Futur",
            text: "Ce n'est que le début. Un livre ouvert où chaque page sera écrite avec l'encre de notre amour éternel.",
            image: "/assets/CE5EA1E9-51B7-4163-9221-7747F87D1A8C.MP4",
            isVideo: true,
            align: "center"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#211114] text-[#F8F6F6] min-h-screen selection:bg-primary selection:text-white"
        >
            {/* Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]" style={{ scaleX }} />

            {/* Navigation */}
            <header className="fixed top-6 md:top-12 left-6 md:left-12 z-50">
                <Link to="/" className="no-underline group">
                    <motion.div
                        whileHover={{ x: -10 }}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 md:px-10 py-3 md:py-5 rounded-full shadow-2xl flex items-center gap-4 md:gap-6"
                    >
                        <span className="material-icons text-primary group-hover:scale-125 transition-transform text-xl md:text-2xl">favorite</span>
                        <h1 className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white m-0">L'Île Flottante</h1>
                    </motion.div>
                </Link>
            </header>

            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-[url('/assets/IMG_4195.jpeg')] bg-cover bg-center"
                />
                <div className="relative z-10 max-w-4xl">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-[11px] font-black uppercase tracking-[1em] text-primary mb-12"
                    >
                        Une Odyssée d'Amour
                    </motion.p>
                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl sm:text-7xl md:text-9xl font-['Playfair_Display'] italic font-light mb-12 leading-[1.1]"
                    >
                        Notre Histoire Poétique
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="w-48 h-px bg-white/20 mx-auto"
                    />
                </div>
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-20 opacity-40"
                >
                    <span className="material-icons-round text-3xl">expand_more</span>
                </motion.div>
            </section>

            {/* Narrative Story */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-32 md:space-y-64">
                {storySections.map((section, index) => (
                    <section key={index} className={`flex flex-col ${section.align === 'right' ? 'md:flex-row-reverse' : section.align === 'center' ? 'items-center' : 'md:flex-row'} gap-20 items-center`}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`${section.align === 'center' ? 'w-full text-center' : 'w-full md:w-1/2'} space-y-12`}
                        >
                            <div className="space-y-4">
                                <span className="text-primary font-black text-[11px] md:text-[13px] uppercase tracking-[0.5em] block">{section.date}</span>
                                <h3 className="text-4xl sm:text-6xl md:text-8xl font-['Playfair_Display'] italic font-medium tracking-tight">{section.title}</h3>
                            </div>
                            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/70 leading-relaxed font-body">
                                {section.text}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`${section.align === 'center' ? 'w-full max-w-4xl' : 'w-full md:w-1/2'} rounded-3xl overflow-hidden shadow-2xl border border-white/10`}
                        >
                            {section.video || section.isVideo ? (
                                <video autoPlay loop muted playsInline className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover">
                                    <source src={section.video || section.image} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={section.image} alt={section.title} className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-[3s]" />
                            )}
                        </motion.div>
                    </section>
                ))}

                {/* Final Cta */}
                <section className="py-32 text-center space-y-16">
                    <div className="space-y-4 md:space-y-8">
                        <h4 className="text-3xl md:text-6xl font-['Playfair_Display'] italic">À suivre...</h4>
                        <p className="text-sm md:text-xl text-white/40 uppercase tracking-[0.5em] md:tracking-[0.8em]">L'infini nous attend</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-16">
                        <Link to="/gallery" className="no-underline w-full md:w-auto">
                            <button className="w-full md:w-auto bg-white/5 border border-white/20 hover:bg-white/10 text-white px-10 md:px-16 py-6 md:py-8 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] transition-all hover:scale-105">
                                Voir la Galerie
                            </button>
                        </Link>
                        <Link to="/wishes" className="no-underline w-full md:w-auto">
                            <button className="w-full md:w-auto bg-primary text-white px-10 md:px-16 py-6 md:py-8 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                                Ouvrir le Puits
                            </button>
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="p-12 text-center text-[10px] text-white/20 uppercase tracking-[0.5em] border-t border-white/5">
                Une création pour nous deux • 2026
            </footer>
        </motion.div>
    );
};

export default HistoryPage;

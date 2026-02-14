
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GalleryPage = () => {
    const assets = [
        { id: 1, src: "/assets/IMG_3951.jpeg", type: "image" },
        { id: 2, src: "/assets/B461BF8F-593D-4926-9B09-6DA8D179D36A.jpeg", type: "image" },
        { id: 3, src: "/assets/79d51ac8-f6f6-4e8b-a484-ed7c96e1ee77.jpeg", type: "image" },
        { id: 4, src: "/assets/IMG_4195.jpeg", type: "image" },
        { id: 5, src: "/assets/472CA284-986C-4475-8978-55707E79B8B9.MP4", type: "video" },
        { id: 6, src: "/assets/IMG_4240.jpeg", type: "image" },
        { id: 7, src: "/assets/IMG_4060.jpeg", type: "image" },
        { id: 8, src: "/assets/CE5EA1E9-51B7-4163-9221-7747F87D1A8C.MP4", type: "video" },
        { id: 9, src: "/assets/38461907-8c5f-4843-a60a-36f781518f99.jpeg", type: "image" },
        { id: 10, src: "/assets/4cbdc8a7-48ce-4bd8-94d2-e6f6abdea806.jpeg", type: "image" },
        { id: 11, src: "/assets/8067e052-52c0-43ae-bd7f-91448cd163b5.jpeg", type: "image" },
        { id: 12, src: "/assets/B461BF8F-593D-4926-9B09-6DA8D179D36A.jpeg", type: "image" },
        { id: 13, src: "/assets/10EB0D8E-6E31-4009-B9BB-9EABDBA1BC1F.MP4", type: "video" },
        { id: 14, src: "/assets/E9F7F015-4753-4CD3-A533-41E65D745D86.MP4", type: "video" },
        { id: 15, src: "/assets/IMG_3142.jpeg", type: "image" },
        { id: 16, src: "/assets/IMG_4002.jpeg", type: "image" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#F8F6F6] min-h-screen w-full font-display p-6 md:p-12 text-[#2D2D2D] overflow-y-auto"
        >
            <header className="fixed top-6 md:top-12 left-6 md:left-12 z-50">
                <Link to="/" className="no-underline group">
                    <motion.div
                        whileHover={{ x: -10 }}
                        className="bg-white/60 backdrop-blur-xl border border-white/40 px-6 md:px-10 py-3 md:py-5 rounded-full shadow-lg flex items-center gap-4 md:gap-6"
                    >
                        <span className="material-icons text-primary group-hover:scale-125 transition-transform text-xl md:text-2xl">favorite</span>
                        <h1 className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#2D2D2D] m-0">L'Île Flottante</h1>
                    </motion.div>
                </Link>
            </header>

            <main className="max-w-7xl mx-auto pt-32">
                <div className="mb-12 md:mb-20 text-center px-4">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-4"
                    >
                        Galerie des Moments
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8 px-4 sm:px-0">
                    {assets.map((asset, index) => (
                        <motion.div
                            key={asset.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="break-inside-avoid relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
                        >
                            {asset.type === "video" ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                >
                                    <source src={asset.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={asset.src}
                                    alt="Gallery Memory"
                                    className="w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="material-icons-round text-white text-4xl transform scale-50 group-hover:scale-100 transition-transform">zoom_in</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 md:mt-32 pb-12 md:pb-20 text-center px-6">
                    <Link to="/" className="no-underline w-full md:w-auto">
                        <button className="w-full md:w-auto bg-[#2D2D2D] hover:bg-primary text-white px-10 md:px-16 py-5 md:py-6 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-xl transition-all duration-500 hover:scale-105">
                            Retour à l'Île
                        </button>
                    </Link>
                </div>
            </main>
        </motion.div>
    );
};

export default GalleryPage;

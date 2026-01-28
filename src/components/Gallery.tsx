import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { photos, Photo } from '../data/photos';

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif text-center text-soft-gold mb-16"
            >
                Mon être humain préféré 💖
            </motion.h2>

            {/* Mobile-first Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        className="group cursor-pointer"
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        {/* Elegant Card */}
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-night-light/30 backdrop-blur-sm border border-white/5">
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <motion.img
                                    src={photo.src}
                                    alt={photo.caption || 'Photo souvenir'}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />

                                {/* Caption Overlay - Hidden by default, shown on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                                    <p className="text-white font-medium text-base md:text-lg leading-snug mb-1 font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {photo.caption}
                                    </p>
                                    {photo.date && (
                                        <p className="text-muted-text text-sm font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {photo.date}
                                        </p>
                                    )}
                                    <ZoomIn className="absolute top-4 right-4 text-soft-gold w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-night/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-muted-text hover:text-white p-2 transition-colors z-10"
                            onClick={() => setSelectedPhoto(null)}
                            aria-label="Close"
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.caption}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            <div className="mt-6 text-center px-4">
                                {selectedPhoto.caption && (
                                    <p className="text-white text-xl md:text-2xl font-serif mb-2">
                                        {selectedPhoto.caption}
                                    </p>
                                )}
                                {selectedPhoto.date && (
                                    <p className="text-muted-text text-base md:text-lg font-light">
                                        {selectedPhoto.date}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

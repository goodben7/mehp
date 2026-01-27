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
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif text-center text-soft-gold mb-16"
            >
                Queen Moments 💖
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-lg border border-white/5"
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption || 'Photo souvenir'}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <p className="text-white font-medium text-lg drop-shadow-md">{photo.caption}</p>
                            {photo.date && <p className="text-muted-text text-sm">{photo.date}</p>}
                            <ZoomIn className="absolute top-4 right-4 text-soft-gold w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                        </div>
                    </motion.div>
                ))}
            </div>

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
                            className="absolute top-4 right-4 text-muted-text hover:text-white p-2 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.caption}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            {selectedPhoto.caption && (
                                <p className="mt-4 text-white text-xl font-serif text-center">
                                    {selectedPhoto.caption}
                                </p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/1.webp', alt: 'Mercedes S-Klasse Front' },
    { src: '/2.webp', alt: 'Luxury Interior' },
    { src: '/3.webp', alt: 'Mercedes V-Klasse' },
    { src: '/4.webp', alt: 'VIP Service' },
    { src: '/5.webp', alt: 'Airport Transfer' },
    { src: '/6.webp', alt: 'Group Transfer' },
  ];

  return (
    <>
      <section id="gallery" className="py-20 lg:py-32 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
            <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Unsere Flotte
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Erstklassige <span className="gradient-text">Fahrzeuge</span>
            </h2>
            <p className="text-silver-light text-lg">
              Unsere VIPshuttles stehen für Sie bereit
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={100}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-obsidian/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors duration-300"
          >
            <FaTimes className="text-obsidian text-xl" />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
              }}
              className="px-6 py-3 bg-gold rounded-full font-semibold text-obsidian hover:bg-gold-light transition-colors duration-300"
            >
              Zurück
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
              }}
              className="px-6 py-3 bg-gold rounded-full font-semibold text-obsidian hover:bg-gold-light transition-colors duration-300"
            >
              Weiter
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

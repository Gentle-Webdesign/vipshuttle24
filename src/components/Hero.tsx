'use client';

import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/11.webp"
          alt="Luxury Mercedes VIP Shuttle"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian/90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Subtitle */}
            <div className="space-y-2">
              <p className="text-gold text-sm lg:text-base font-semibold tracking-[0.3em] uppercase animate-slide-down">
                Premium Chauffeur Service
              </p>
              <div className="w-24 h-0.5 bg-gradient-gold mx-auto"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight animate-slide-up">
              Sicherheit, Komfort
              <br />
              <span className="gradient-text">und Eleganz</span>
            </h1>

            {/* Description */}
            <p className="text-silver-light text-base lg:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Erleben Sie erstklassigen Limousinenservice in Düsseldorf. 
              Professionelle Chauffeure, luxuriöse Fahrzeuge und Service rund um die Uhr.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-gold text-obsidian font-semibold rounded-full hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Jetzt buchen
              </a>
              <a
                href="tel:+491772472408"
                className="w-full sm:w-auto px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-center"
              >
                +49 177 2472408
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-fade-in">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-serif font-bold gradient-text">
                  10+
                </div>
                <div className="text-silver text-xs lg:text-sm mt-2">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="text-center border-x border-gold/20">
                <div className="text-3xl lg:text-4xl font-serif font-bold gradient-text">
                  24/7
                </div>
                <div className="text-silver text-xs lg:text-sm mt-2">
                  Verfügbar
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-serif font-bold gradient-text">
                  1000+
                </div>
                <div className="text-silver text-xs lg:text-sm mt-2">
                  Zufriedene Kunden
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center space-y-2 text-gold">
          <span className="text-xs tracking-wider uppercase">Scrollen</span>
          <FaChevronDown className="text-xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

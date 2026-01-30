'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const features = [
    'Professionelle Chauffeure',
    'Erstklassige Fahrzeuge',
    'Rund um die Uhr Service',
    'Pünktlich & Zuverlässig',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-obsidian relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/2.webp"
                alt="Luxury Limousine Interior"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-obsidian">VIP</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Premium</div>
                  <div className="text-sm text-silver">First Class Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
                Über VIP Shuttle 24
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Ein Limousinenservice der{' '}
                <span className="gradient-text">Extraklasse</span>
              </h2>
            </div>

            <div className="space-y-6 text-silver-light leading-relaxed">
              <p>
                Sie möchten sich chauffieren lassen und das so komfortabel und angenehm wie 
                möglich? Mit Vipshuttle24 aus Düsseldorf können Sie einen professionellen 
                Limousinenservice sowie einen kompetenten Chauffeur-Service in Anspruch nehmen, 
                der Sie sicher, pünktlich und repräsentativ ans Ziel bringt.
              </p>
              <p>
                Unsere Limousinen-Flotte steht samt verlässlichen Chauffeuren für Sie bereit, 
                um Ihre Fahrt zu einem ansprechenden Erlebnis zu machen. Wir wissen: Besondere 
                Auftritte erfordern manchmal einen exklusiven Service. Diesen stellen wir gerne 
                zur Verfügung.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-gold text-xl flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-gold text-obsidian font-semibold rounded-full hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

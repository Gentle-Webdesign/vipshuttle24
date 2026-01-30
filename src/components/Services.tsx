'use client';

import Image from 'next/image';
import { FaStar, FaPlane, FaCar, FaUsers, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 'vip-service',
      icon: FaStar,
      title: 'VIP Service',
      description: 'Prominenz vertraut auf VIPSHUTTLE24. Diskretion, Professionalität und höchster Komfort für anspruchsvolle Kunden.',
      image: '/3.webp',
      features: ['Maximale Diskretion', 'Premium Fahrzeuge', 'Erfahrene Chauffeure'],
    },
    {
      id: 'limousine',
      icon: FaCar,
      title: 'Limousinenservice',
      description: 'Wir möchten Ihre Erwartungen an unseren Limousinenservice nicht nur erfüllen, sondern übertreffen.',
      image: '/4.webp',
      features: ['Mercedes S-Klasse', 'Mercedes V-Klasse', 'Hochzeitsfahrten'],
    },
    {
      id: 'airport',
      icon: FaPlane,
      title: 'Flughafentransfer',
      description: 'Flughafentransfer zu jedem beliebigen Flughafen und zurück. Pünktlich, komfortabel und stressfrei.',
      image: '/5.webp',
      features: ['Düsseldorf Airport', 'Köln/Bonn Airport', 'Gepäckservice'],
    },
    {
      id: 'bus',
      icon: FaUsers,
      title: 'Bus Transfer',
      description: 'Komfortabler Bus Transfer für Gruppen, Events und Firmenveranstaltungen mit modernen, gepflegten Fahrzeugen.',
      image: '/6.webp',
      features: ['Bis 50 Personen', 'WLAN & Klima', 'Flexible Planung'],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Unsere Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Exzellenz in jedem <span className="gradient-text">Detail</span>
          </h2>
          <p className="text-silver-light text-lg">
            Von VIP-Transfers bis zu Gruppenreisen – wir bieten maßgeschneiderte Lösungen 
            für jeden Anlass.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-xl">
                  <service.icon className="text-obsidian text-xl" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-silver-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span className="text-silver text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-gold hover:text-gold-light font-semibold transition-colors duration-300 group/link"
                >
                  <span>Mehr erfahren</span>
                  <FaArrowRight className="text-sm transform group-hover/link:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-silver-light text-lg mb-6">
            Nicht sicher, welcher Service der richtige für Sie ist?
          </p>
          <a
            href="tel:+491772472408"
            className="inline-block px-8 py-4 bg-gradient-gold text-obsidian font-semibold rounded-full hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105"
          >
            Kostenlose Beratung anfordern
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

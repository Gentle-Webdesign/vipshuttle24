'use client';

import Image from 'next/image';
import { FaShieldAlt, FaClock, FaStar, FaUserTie, FaLeaf, FaAward } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Sicherheit',
      description: 'Ihre Sicherheit steht an erster Stelle. Regelmäßig gewartete Fahrzeuge und geschulte Chauffeure.',
    },
    {
      icon: FaClock,
      title: 'Pünktlichkeit',
      description: 'Wir wissen, dass Ihre Zeit wertvoll ist. Garantierte Pünktlichkeit bei jedem Transfer.',
    },
    {
      icon: FaStar,
      title: 'Luxus & Komfort',
      description: 'Premium Mercedes-Fahrzeuge mit höchstem Komfort und modernster Ausstattung.',
    },
    {
      icon: FaUserTie,
      title: 'Professionelle Chauffeure',
      description: 'Diskret, höflich und perfekt geschult – unsere Chauffeure sind Ihr verlässlicher Partner.',
    },
    {
      icon: FaLeaf,
      title: 'Umweltbewusst',
      description: 'Moderne, umweltfreundliche Fahrzeuge mit niedrigem Emissionsausstoß.',
    },
    {
      icon: FaAward,
      title: 'Ausgezeichneter Service',
      description: 'Über 10 Jahre Erfahrung und tausende zufriedene Kunden sprechen für sich.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-obsidian relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/7.webp"
          alt="Luxury Service Background"
          fill
          className="object-cover opacity-10"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Warum VIP Shuttle 24
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Ihr Partner für <span className="gradient-text">erstklassige Mobilität</span>
          </h2>
          <p className="text-silver-light text-lg">
            Entspannt zurücklehnen – und genießen. Wir kümmern uns um den Rest.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card */}
              <div className="glass p-8 rounded-2xl h-full hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-obsidian text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-silver-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 glass rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-white">
                Entspannt zurücklehnen – <span className="gradient-text">und genießen</span>
              </h3>
              <p className="text-silver-light leading-relaxed">
                Wir übernehmen Chauffeurfahrten, speziell Fahrten zu den Flughäfen Düsseldorf 
                und Köln/Bonn. Für Geschäfts- oder Privatreisende sowie für Einzelreisende oder 
                Gruppen bis zu 7 Personen sind wir ein zuverlässiger Partner.
              </p>
              <p className="text-silver-light leading-relaxed">
                Gerne können Sie mit uns auch Hochzeitsfahrten planen oder bei besonderen Anlässen 
                wie etwa Geburtstagsfeiern oder Firmenjubiläen auf unsere Chauffeurdienste 
                zurückgreifen. Ihre Anliegen werden selbstverständlich diskret behandelt.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-charcoal/50 rounded-xl">
                <div className="text-4xl font-serif font-bold gradient-text mb-2">100%</div>
                <div className="text-silver text-sm">Kundenzufriedenheit</div>
              </div>
              <div className="text-center p-6 bg-charcoal/50 rounded-xl">
                <div className="text-4xl font-serif font-bold gradient-text mb-2">24/7</div>
                <div className="text-silver text-sm">Service</div>
              </div>
              <div className="text-center p-6 bg-charcoal/50 rounded-xl">
                <div className="text-4xl font-serif font-bold gradient-text mb-2">10+</div>
                <div className="text-silver text-sm">Jahre Erfahrung</div>
              </div>
              <div className="text-center p-6 bg-charcoal/50 rounded-xl">
                <div className="text-4xl font-serif font-bold gradient-text mb-2">1K+</div>
                <div className="text-silver text-sm">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

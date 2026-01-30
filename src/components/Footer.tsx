'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-gold/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-serif font-bold gradient-text mb-1">VIP</div>
              <div className="text-xs text-silver tracking-[0.3em] uppercase">Shuttle 24</div>
            </div>
            <p className="text-silver-light leading-relaxed text-sm">
              Ihr Premium Chauffeur Service in Düsseldorf. Sicherheit, Komfort und Eleganz 
              seit über 10 Jahren.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/VipShuttle24de/100070007923784/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/vipshuttle24.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/+491772472408"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-serif font-bold text-lg mb-6">Services</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-silver-light hover:text-gold transition-colors duration-300 text-sm">
                Über uns
              </a>
              <a href="#vip-service" className="text-silver-light hover:text-gold transition-colors duration-300 text-sm">
                VIP Service
              </a>
              <a href="#limousine" className="text-silver-light hover:text-gold transition-colors duration-300 text-sm">
                Limousinenservice
              </a>
              <a href="#airport" className="text-silver-light hover:text-gold transition-colors duration-300 text-sm">
                Flughafentransfer
              </a>
              <a href="#gallery" className="text-silver-light hover:text-gold transition-colors duration-300 text-sm">
                Galerie
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-serif font-bold text-lg mb-6">Kontakt</h3>
            <div className="space-y-3">
              <a
                href="tel:+491772472408"
                className="flex items-center space-x-3 text-silver-light hover:text-gold transition-colors duration-300 text-sm"
              >
                <FaPhone className="text-gold" />
                <span>+49 177 2472408</span>
              </a>
              <a
                href="mailto:info@vipshuttle24.de"
                className="flex items-center space-x-3 text-silver-light hover:text-gold transition-colors duration-300 text-sm"
              >
                <FaEnvelope className="text-gold" />
                <span>info@vipshuttle24.de</span>
              </a>
              <a
                href="https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-silver-light hover:text-gold transition-colors duration-300 text-sm"
              >
                <FaMapMarkerAlt className="text-gold mt-1 flex-shrink-0" />
                <span>Schlesische Str. 104<br />40231 Düsseldorf</span>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-serif font-bold text-lg mb-6">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-silver-light">Service</span>
                <span className="text-white font-semibold">24/7</span>
              </div>
              <div className="pt-4 glass p-4 rounded-lg">
                <p className="text-gold font-semibold mb-2">Rund um die Uhr</p>
                <p className="text-silver-light text-xs">
                  Unser Team ist jeden Tag für Sie erreichbar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm">
            <p className="text-silver-light">
              © {currentYear} VIP Shuttle 24. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="/impressum" className="text-silver-light hover:text-gold transition-colors duration-300">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-silver-light hover:text-gold transition-colors duration-300">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-silver-light hover:text-gold transition-colors duration-300">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

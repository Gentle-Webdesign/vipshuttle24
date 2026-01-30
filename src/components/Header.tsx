'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Über uns', href: '#about' },
    { name: 'VIP Service', href: '#vip-service' },
    { name: 'Limousinenservice', href: '#limousine' },
    { name: 'Flughafentransfer', href: '#airport' },
    { name: 'Galerie', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-obsidian/95 backdrop-blur-md shadow-xl border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="text-3xl lg:text-4xl font-serif font-bold gradient-text">
                VIP
              </div>
              <div className="text-xs lg:text-sm font-sans text-silver tracking-[0.3em] uppercase">
                Shuttle 24
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-silver hover:text-gold transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+491772472408"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-gold text-obsidian font-semibold rounded-full hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105"
            >
              <FaPhone className="text-sm" />
              <span>+49 177 2472408</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gold text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-obsidian/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: isScrolled ? '80px' : '80px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-silver hover:text-gold transition-colors duration-300"
              style={{
                animation: isMobileMenuOpen
                  ? `slideDown 0.5s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+491772472408"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center space-x-3 px-8 py-4 bg-gradient-gold text-obsidian font-semibold rounded-full text-xl mt-8"
          >
            <FaPhone />
            <span>Jetzt anrufen</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

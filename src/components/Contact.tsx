'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Telefon',
      content: '+49 177 2472408',
      link: 'tel:+491772472408',
    },
    {
      icon: FaEnvelope,
      title: 'E-Mail',
      content: 'info@vipshuttle24.de',
      link: 'mailto:info@vipshuttle24.de',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Adresse',
      content: 'Schlesische Str. 104, 40231 Düsseldorf',
      link: 'https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-obsidian relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Kontakt
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Mit Vipshuttle24 in Düsseldorf reisen Sie{' '}
            <span className="gradient-text">komfortabel und sicher</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">
                Jetzt Shuttleservice buchen
              </h3>
              <p className="text-silver-light leading-relaxed">
                Kontaktieren Sie uns für eine unverbindliche Beratung oder buchen Sie 
                direkt Ihren nächsten Transfer. Wir sind 24/7 für Sie erreichbar.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.title === 'Adresse' ? '_blank' : undefined}
                  rel={item.title === 'Adresse' ? 'noopener noreferrer' : undefined}
                  className="group glass p-6 rounded-xl flex items-start space-x-4 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-obsidian text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="text-silver text-sm mb-1">{item.title}</div>
                    <div className="text-white font-semibold group-hover:text-gold transition-colors duration-300">
                      {item.content}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="space-y-4 pt-8">
              <h4 className="text-lg font-semibold text-white">Folgen Sie uns</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/VipShuttle24de/100070007923784/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/vipshuttle24.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://wa.me/+491772472408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 lg:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-silver text-sm mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal/50 border border-gold/20 rounded-lg text-white placeholder-silver/50 focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-silver text-sm mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal/50 border border-gold/20 rounded-lg text-white placeholder-silver/50 focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-silver text-sm mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal/50 border border-gold/20 rounded-lg text-white placeholder-silver/50 focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="+49 ..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-silver text-sm mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal/50 border border-gold/20 rounded-lg text-white placeholder-silver/50 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-gold text-obsidian font-semibold rounded-full hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

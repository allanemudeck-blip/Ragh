import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Pill } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink } from '../../constants/whatsapp';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="https://i.postimg.cc/QMbTfQth/126365.png" 
                alt="Planet Pharmaceuticals Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900 sm:text-white'}`}>
                Planet <span className="text-medical-600">Pharmaceuticals</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`text-sm font-medium transition-colors hover:text-medical-600 relative group ${
                  scrolled ? 'text-gray-600' : 'text-gray-600 sm:text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={getWhatsAppLink("Hello Planet Pharmaceuticals, I would like to order medicines.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Order
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-medical-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-900' : 'text-gray-900 sm:text-white'}`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-medical-600 hover:bg-medical-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3 space-y-3">
                <a
                  href={getWhatsAppLink("Hello Planet Pharmaceuticals, I would like to order medicines.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-center bg-[#25D366] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Order via WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-medical-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-medical-700"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

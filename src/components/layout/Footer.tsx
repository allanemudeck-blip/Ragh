import { Pill, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.postimg.cc/QMbTfQth/126365.png" 
                alt="Planet Pharmaceuticals Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Planet <span className="text-medical-600">Pharma</span>
              </span>
            </div>
            <div className="text-sm text-gray-500 leading-relaxed max-w-xs space-y-2">
              <p>Uganda's leading pharmaceutical partner, delivering quality healthcare solutions.</p>
              <p>Email: raghuz22@yahoo.com</p>
              <p>Tel: +256 755 315 932</p>
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:border-medical-600 hover:text-medical-600 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm text-gray-500 hover:text-medical-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              {['Importation', 'Distribution', 'Hospital Supply', 'Consultation'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full px-5 py-3 pr-12 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all"
              />
              <button className="absolute right-2 top-2 w-8 h-8 bg-medical-600 text-white rounded-lg flex items-center justify-center hover:bg-medical-700 transition-colors">
                <ArrowUp className="w-4 h-4 rotate-90" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed italic">
              *All medicines should be used under the supervision of a qualified healthcare professional.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} Planet Pharmaceuticals Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-400 hover:text-medical-600">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-medical-600">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-bold text-medical-600 uppercase tracking-widest"
            >
              Back to Top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

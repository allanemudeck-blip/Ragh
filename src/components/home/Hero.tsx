import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Globe, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50 uppercase-none">
      {/* Dynamic Medical Background Elements */}
      <div className="absolute inset-0 medical-grid opacity-10" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-medical-50/50 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-medical-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-medical-500/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-xs font-bold tracking-wider uppercase mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Trusted Healthcare Partner
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              Global <span className="text-medical-600">Pharmaceutical</span> Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
            >
              Planet Pharmaceuticals Ltd specializes in the importation, distribution, and supply of high-quality medicines. We provide essential healthcare services to hospitals, clinics, and government institutions across Uganda and beyond.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#products" 
                className="group flex items-center justify-center gap-2 bg-medical-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-medical-700 hover:shadow-xl hover:shadow-medical-600/20"
              >
                Explore Products
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold transition-all hover:border-medical-600 hover:text-medical-600"
              >
                Contact Us
              </motion.a>
            </motion.div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Quality Guaranteed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Supply Chain</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Global</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Distribution</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract Visual Representation */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900">Importation</h3>
                  <p className="text-sm text-gray-500 mt-2">World-class sourcing</p>
                </div>
                <div className="bg-medical-600 p-6 rounded-3xl shadow-xl shadow-medical-600/30 flex flex-col items-center text-center text-white">
                  <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold">Healthcare</h3>
                  <p className="text-sm text-white/70 mt-2">Critical services</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1587854680352-936b22b91030?auto=format&fit=crop&q=80&w=800" 
                    alt="Pharmaceuticals" 
                    className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white font-bold text-lg">Safe Delivery</div>
                    <p className="text-white/80 text-xs mt-1">Regulated cold-chain supply</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-medical-300/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-medical-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

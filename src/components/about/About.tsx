import { motion } from 'motion/react';
import { Eye, Target, Award, Gem, Heart, Lightbulb } from 'lucide-react';

const values = [
  { name: 'Quality', icon: Award, desc: 'Uncompromising standards of safety.' },
  { name: 'Reliability', icon: Target, desc: 'Consistently fulfilling our promises.' },
  { name: 'Integrity', icon: Gem, desc: 'Honest and transparent operations.' },
  { name: 'Innovation', icon: Lightbulb, desc: 'Modernizing healthcare distribution.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden relative">
      <div className="absolute inset-x-0 bottom-0 h-96 medical-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square bg-gray-200 rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=1000" 
                alt="Healthcare Professionals" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-medical-900/10" />
              
              {/* Logo Watermark on Image */}
              <div className="absolute top-6 right-6 w-16 h-16 opacity-50 contrast-125">
                <img src="https://i.postimg.cc/QMbTfQth/126365.png" alt="" className="w-full h-full object-contain filter invert brightness-0" />
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-medical-600 rounded-[3rem] -rotate-3 -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl z-20 hidden md:block italic"
            >
               <Heart className="text-red-500 w-8 h-8 mb-4 fill-red-500" />
               <p className="text-gray-900 font-bold max-w-[200px]">"Supporting regional healthcare for a healthier Africa."</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-medical-600 font-bold tracking-widest uppercase text-sm mb-3">Our Identity</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Driving Excellence in Pharmaceutical Distribution</h3>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              Planet Pharmaceuticals Ltd is a premier pharmaceutical company based in Kampala, Uganda. We have established ourselves as a vital link in the healthcare ecosystem, delivering high-vantage medical solutions to private and public sectors.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 glass-card rounded-2xl"
              >
                <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Our Vision</h4>
                <p className="text-sm text-gray-600">To become a trusted global leader in pharmaceutical distribution, recognized for excellence and safety.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 glass-card rounded-2xl"
              >
                <div className="w-12 h-12 bg-medical-100 text-medical-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Our Mission</h4>
                <p className="text-sm text-gray-600">Deliver quality medicines, build strong partnerships, and support healthcare providers with innovation.</p>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Core Values</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {values.map((val, idx) => (
                  <motion.div 
                    key={val.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <val.icon className="w-5 h-5 text-medical-600 shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{val.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

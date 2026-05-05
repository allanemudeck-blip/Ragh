import { motion } from 'motion/react';
import { MapPin, Navigation, Store, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Location() {
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Kawempe+Kampala+Uganda";
  
  return (
    <section id="location" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 medical-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-medical-600 font-bold tracking-widest uppercase text-sm mb-3">Our Presence</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Location & Visit Us</h3>
          <p className="text-gray-600">Find us at our main store or office in Kampala. We are easily accessible to serve your healthcare needs.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between"
          >
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-medical-100 text-medical-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Registered Office</h4>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Plot 08, Shop 07 Bhatia Building,<br /> 
                  Wilson Rd, Kampala, Uganda
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-medical-100 text-medical-600 rounded-xl flex items-center justify-center">
                    <Store className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Main Store</h4>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Kawempe Opposite Stabex Petro Station,<br />
                  Kampala, Uganda
                </p>
                <p className="text-medical-600 font-medium mt-2">P.O. Box 25700, Kampala, Uganda</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-4 h-4 text-medical-600" />
                    <span className="font-bold text-sm uppercase tracking-wider text-gray-400">Call Us</span>
                  </div>
                  <p className="text-gray-900 font-bold">+256 755 315 932</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-4 h-4 text-medical-600" />
                    <span className="font-bold text-sm uppercase tracking-wider text-gray-400">Email Us</span>
                  </div>
                  <p className="text-gray-900 font-bold break-all">raghuz22@yahoo.com</p>
                </div>
              </div>
            </div>

            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 w-full bg-medical-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-medical-600/20 hover:bg-medical-700 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Get Directions on Map
              <ExternalLink className="w-4 h-4 opacity-50" />
            </motion.a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 min-h-[450px] lg:min-h-full relative group"
          >
            <iframe
              title="Planet Pharmaceuticals Kawempe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.826848419616!2d32.55325828715822!3d0.36952860000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db0ff95555555%3A0xc3f7a1f599999999!2sKawempe%2C%20Kampala!5e0!3m2!1sen!2sug!4v1714890000000!5m2!1sen!2sug"
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

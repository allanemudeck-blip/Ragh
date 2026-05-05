import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '../../constants/whatsapp';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 uppercase-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100"
        >
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-20 bg-medical-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-medical-600/20 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-600/10 rounded-full blur-3xl -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <p className="text-medical-100/70 mb-12 max-w-sm">
                  Partner with Uganda's leading pharmaceutical distributor. Send us a message or visit our office in Kampala.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-medical-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Main Store</h4>
                      <p className="text-medical-100/70 text-sm mt-1">Kawempe Opposite Stabex Petro Station, Kampala</p>
                      <p className="text-medical-100/50 text-xs mt-1">P.O. Box 25700, Kampala, Uganda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-medical-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email Us</h4>
                      <p className="text-medical-100/70 text-sm mt-1">raghuz22@yahoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-medical-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Call Support</h4>
                      <p className="text-medical-100/70 text-sm mt-1">+256 755 315 932</p>
                    </div>
                  </div>

                  <a 
                    href={getWhatsAppLink("Hello Planet Pharmaceuticals, I would like to inquire about your services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 bg-[#25D366]/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/40 transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#25D366] fill-[#25D366]/20" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-[#25D366] transition-colors">WhatsApp Us</h4>
                      <p className="text-medical-100/70 text-sm mt-1">+{WHATSAPP_NUMBER}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-medical-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Working Hours</h4>
                      <p className="text-medical-100/70 text-sm mt-1">Mon - Sat: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase">
                    <Globe className="w-3 h-3" />
                    Kampala, Uganda
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all font-medium"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all font-medium appearance-none">
                    <option>Product Inquiry</option>
                    <option>Partnership Request</option>
                    <option>General Support</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-medical-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-medical-700 hover:shadow-xl hover:shadow-medical-600/20 transition-all group">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

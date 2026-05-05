import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../constants/whatsapp';

export default function WhatsAppFab() {
  const whatsappLink = getWhatsAppLink("Hello Planet Pharmaceuticals, I would like to order medicines.");

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-shadow group"
      aria-label="Contact on WhatsApp"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10 opacity-30"
      />
      <MessageCircle className="w-8 h-8 fill-current" />
      
      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-gray-900 text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Order via WhatsApp
      </span>
    </motion.a>
  );
}

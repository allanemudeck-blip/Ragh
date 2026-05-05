import { motion } from 'motion/react';

export default function FloatingBackgroundLogo() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ 
          opacity: 0.03, 
          scale: 1, 
          rotate: 0,
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          opacity: { duration: 2 },
          scale: { duration: 2 },
          rotate: { duration: 2 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px]"
      >
        <img 
          src="https://i.postimg.cc/QMbTfQth/126365.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ 
          opacity: 0.02, 
          scale: 0.8, 
          rotate: 20,
          y: [0, 30, 0],
          x: [0, -15, 0]
        }}
        transition={{ 
          opacity: { duration: 3 },
          scale: { duration: 3 },
          rotate: { duration: 3 },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 -left-32 w-[500px] h-[500px]"
      >
        <img 
          src="https://i.postimg.cc/QMbTfQth/126365.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}

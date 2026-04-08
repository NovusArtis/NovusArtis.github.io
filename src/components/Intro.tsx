import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while intro is playing
    document.body.style.overflow = 'hidden';
    
    // Unlock scroll and unmount after animation completes
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
      setIsVisible(false);
    }, 5000); // 0.5s wait + 1s fade in + 1s hold + 2.5s slide = 5s

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex">
      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-1/2 h-full bg-ink flex items-center justify-end pr-2 md:pr-3"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-paper font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase"
        >
          Novus
        </motion.span>
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 2.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-1/2 h-full bg-ink flex items-center justify-start pl-2 md:pl-3"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-paper font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase"
        >
          Artis
        </motion.span>
      </motion.div>
    </div>
  );
}

import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import signatureGif from '../assets/Signature Video (2).gif';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-ink">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, delay: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={signatureGif}
          alt="Signature Background"
          className="w-full h-full object-cover grayscale opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mix-blend-exclusion">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 4.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-none text-white/90"
        >
          {t('hero.title')} <br className="md:hidden" />
          <span className="italic font-light text-white/70">{t('hero.subtitle')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 4.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-xs md:text-sm tracking-[0.4em] text-white/50 font-light max-w-2xl mx-auto leading-relaxed lowercase"
        >
          {t('hero.description')}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50">Scroll</span>
        <div className="w-[1px] h-12 bg-paper/20 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-paper/60"
          />
        </div>
      </motion.div>
    </section>
  );
}

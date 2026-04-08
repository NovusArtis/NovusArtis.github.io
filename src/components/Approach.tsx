import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import hotelGif from '../assets/hotel gif(1).gif';

export function Approach() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="relative py-32 md:py-48 px-6 md:px-12 bg-ink text-paper overflow-hidden">
      {/* Background GIF with Overlay */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={hotelGif}
          alt="Hotel Background"
          className="w-full h-full object-cover grayscale-[50%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/30 to-ink"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-stone mb-8 block"
        >
          {t('approach.label')}
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12"
        >
          {t('approach.title')}<br />
          <span className="italic text-stone">{t('approach.subtitle')}</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-8 text-sm md:text-base font-light leading-relaxed text-paper/70"
        >
          <p>
            {t('approach.p1')}
          </p>
          <p>
            {t('approach.p2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-4 flex flex-col justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.2em] text-stone mb-8 block"
          >
            {t('philosophy.label')}
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block w-full h-[1px] bg-stone/30 mt-auto"
          />
        </div>

        <div className="md:col-span-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] tracking-tight"
          >
            {t('philosophy.title')}<br />
            <span className="italic text-stone">{t('philosophy.subtitle')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-12 text-sm md:text-base font-light leading-relaxed text-paper/70 max-w-xl"
          >
            {t('philosophy.description')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

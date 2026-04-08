import { motion } from 'motion/react';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Using FormSubmit (formsubmit.co) which allows sending directly to an email address.
      // Note: The first time you submit, you will receive an activation email to confirm the address.
      const response = await fetch('https://formsubmit.co/ajax/novus.artis.info@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <footer id="contact" className="py-32 px-6 md:px-12 bg-ink text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-stone mb-12 block"
        >
          {t('contact.label')}
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-16"
        >
          {t('contact.title')} <span className="italic text-stone">{t('contact.together')}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-xl mx-auto text-left"
        >
          {formState === 'success' ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif mb-4">{t('contact.success.title')}</h3>
              <p className="text-stone text-sm uppercase tracking-widest">{t('contact.success.p')}</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-[10px] uppercase tracking-widest border-b border-paper/30 pb-1 hover:border-paper transition-colors"
              >
                {t('contact.success.button')}
              </button>
            </div>
          ) : (
            <form action="https://formsubmit.co/novus.artis.info@gmail.com" method="POST" className="space-y-8">
              <input type="hidden" name="_subject" value="New contact from Novus Artis!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-stone">{t('contact.name')}</label>
                  <input 
                    required
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-transparent border-b border-paper/20 py-2 focus:border-paper outline-none transition-colors font-light"
                    placeholder={t('contact.placeholder.name')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-stone">{t('contact.email')}</label>
                  <input 
                    required
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full bg-transparent border-b border-paper/20 py-2 focus:border-paper outline-none transition-colors font-light"
                    placeholder={t('contact.placeholder.email')}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-stone">{t('contact.message')}</label>
                <textarea 
                  required
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-paper/20 py-2 focus:border-paper outline-none transition-colors font-light resize-none"
                  placeholder={t('contact.placeholder.message')}
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 border border-paper/20 hover:bg-paper hover:text-ink transition-all duration-500 text-[10px] uppercase tracking-[0.3em]"
                >
                  {t('contact.send')}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <div className="mt-32 pt-8 border-t border-stone/20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.15em] text-stone max-w-7xl mx-auto relative z-10 gap-4 md:gap-0">
        <span>&copy; {new Date().getFullYear()} Novus Artis</span>
        <span className="text-stone/70">Website created by Novus Artis</span>
        <div className="flex space-x-8">
          <a href="https://www.instagram.com/novus.artis/" target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

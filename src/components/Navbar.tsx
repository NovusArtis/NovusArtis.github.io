import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 4.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-700 ${
        scrolled ? 'bg-ink/80 backdrop-blur-md py-4' : 'bg-transparent'
      }`}
    >
      <button 
        onClick={() => window.location.reload()}
        className="text-xl font-serif tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
      >
        Novus Artis
      </button>
      
      <div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.15em] font-light text-paper/70">
        <a href="#philosophy" className="hover:text-paper transition-colors duration-300">{t('nav.philosophy')}</a>
        <a href="#work" className="hover:text-paper transition-colors duration-300">{t('nav.work')}</a>
        <a href="#approach" className="hover:text-paper transition-colors duration-300">{t('nav.approach')}</a>
        <a href="#contact" className="hover:text-paper transition-colors duration-300">{t('nav.contact')}</a>
        
        <div className="flex items-center space-x-8 border-l border-paper/20 pl-12">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setLanguage('EN')}
              className={`hover:text-paper transition-colors ${language === 'EN' ? 'text-paper font-medium' : ''}`}
            >
              EN
            </button>
            <span className="text-paper/20">/</span>
            <button 
              onClick={() => setLanguage('GR')}
              className={`hover:text-paper transition-colors ${language === 'GR' ? 'text-paper font-medium' : ''}`}
            >
              GR
            </button>
          </div>

          <button 
            onClick={toggleTheme}
            className="text-paper/70 hover:text-paper transition-colors p-1"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div className="md:hidden flex items-center space-x-6">
        <button 
          onClick={toggleTheme}
          className="text-paper/70 hover:text-paper transition-colors p-1"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
        </button>

        <div className="flex items-center space-x-2 text-[10px] tracking-widest">
          <button 
            onClick={() => setLanguage('EN')}
            className={language === 'EN' ? 'text-paper' : 'text-paper/50'}
          >
            EN
          </button>
          <span className="text-paper/20">/</span>
          <button 
            onClick={() => setLanguage('GR')}
            className={language === 'GR' ? 'text-paper' : 'text-paper/50'}
          >
            GR
          </button>
        </div>
        <button className="text-xs uppercase tracking-[0.1em] text-paper/70 hover:text-paper">
          {t('nav.menu')}
        </button>
      </div>
    </motion.nav>
  );
}

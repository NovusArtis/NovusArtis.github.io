import { useLanguage } from '../context/LanguageContext';

export function Marquee() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-ink overflow-hidden border-y border-stone/10">
      <div className="flex w-max animate-marquee">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col justify-between h-24 md:h-32 relative">
            {/* Top Perforations */}
            <div className="absolute top-3 left-0 w-full flex justify-around">
              {Array.from({ length: 12 }).map((_, j) => (
                <div key={j} className="w-[3px] h-[8px] bg-stone/70" />
              ))}
            </div>
            
            {/* Text */}
            <div className="flex-1 flex items-center">
              <span className="text-xl md:text-3xl font-sans font-semibold uppercase tracking-[0.25em] text-paper whitespace-pre">
                {t('marquee.text')}
              </span>
            </div>

            {/* Bottom Perforations */}
            <div className="absolute bottom-3 left-0 w-full flex justify-around">
              {Array.from({ length: 12 }).map((_, j) => (
                <div key={j} className="w-[3px] h-[8px] bg-stone/70" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

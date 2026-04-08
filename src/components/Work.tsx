import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import dinnerImage from '../assets/Screenshot 2026-03-30 162757.png';
import hermImage from '../assets/Herm.jpg';
import vogue1 from '../assets/vogue1.jpg';
import vogueMag1 from '../assets/Vogue Magazine_1 - Copy.jpg';
import squareHotelImage from '../assets/Exarcheion_Square_Hotel_Grain _103.jpg';
import squareHotel1 from '../assets/Exarcheion_Square_Hotel_Grain _1.jpg';
import squareHotel2 from '../assets/Exarcheion_Square_Hotel_Grain _2.jpg';
import squareHotel11 from '../assets/Exarcheion_Square_Hotel_Grain _11.jpg';
import squareHotel157 from '../assets/Exarcheion_Square_Hotel_Grain _157.jpg';
import squareHotel167 from '../assets/Exarcheion_Square_Hotel_Grain _167.jpg';
import squareHotel108 from '../assets/Exarcheion_Square_Hotel_Grain _108.jpg';
import squareHotel16 from '../assets/Exarcheion_Square_Hotel_Grain _16.jpg';
import squareHotel90 from '../assets/Exarcheion_Square_Hotel_Grain _90.jpg';
import squareHotel92 from '../assets/Exarcheion_Square_Hotel_Grain _92.jpg';
import nebbiolo1 from '../assets/Nebbiolo_Spetses_47.jpg';
import nebbiolo2 from '../assets/Nebbiolo_Spetses_48.jpg';
import nebbiolo3 from '../assets/Nebbiolo_Spetses_31.jpg';
import nebbiolo43 from '../assets/Nebbiolo_Spetses_43.jpg';
import nebbiolo55 from '../assets/Nebbiolo_Spetses_55.jpg';
import playboy1 from '../assets/kirsten_ciel_playboy_2019-_9e-1.jpg';
import playboy2 from '../assets/kirsten_ciel_playboy_2019-e.jpg';
import axionEsti1 from '../assets/axion-esti (1).png';
import axionEsti2 from '../assets/axion-esti (2).png';
import axionEsti3 from '../assets/axion-esti (3).png';
import axionEsti4 from '../assets/axion-esti (4).png';
import axionEsti5 from '../assets/axion-esti (5).png';
import axionEsti6 from '../assets/axion-esti (6).png';
import aboutYou1 from '../assets/aboutyou (1).png';
import aboutYou2 from '../assets/aboutyou (2).png';
import aboutYou3 from '../assets/aboutyou (3).png';
import aboutYou4 from '../assets/aboutyou (4).png';
import aboutYou5 from '../assets/aboutyou (5).png';
import aboutYou6 from '../assets/aboutyou (6).png';
import aboutYou7 from '../assets/aboutyou (7).png';
import aboutYouMain from '../assets/aboutyou.png';

type MediaType = 'image' | 'video' | 'youtube';

type MediaItem = {
  type: MediaType;
  src: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  aspect: string;
  offset: string;
  mediaType: MediaType;
  videoSrc?: string;
  youtubeId?: string;
  gallery: MediaItem[];
};

const projects: Project[] = [
  {
    id: 2,
    title: "Vogue Greece, 2025",
    category: "work.cat.editorial",
    image: hermImage,
    aspect: "aspect-[4/5]",
    offset: "md:mt-0",
    mediaType: 'image',
    gallery: [
      { type: 'image', src: hermImage },
      { type: 'image', src: vogue1 },
      { type: 'image', src: vogueMag1 }
    ]
  },
  {
    id: 1,
    title: "Dinner for Two",
    category: "work.cat.restaurant",
    image: dinnerImage,
    aspect: "aspect-[3/4]",
    offset: "md:mt-16",
    mediaType: 'image',
    gallery: [
      { type: 'image', src: dinnerImage },
      { type: 'image', src: nebbiolo1 },
      { type: 'image', src: nebbiolo2 },
      { type: 'image', src: nebbiolo3 },
      { type: 'image', src: nebbiolo43 },
      { type: 'image', src: nebbiolo55 }
    ]
  },
  {
    id: 3,
    title: "The Square Hotel, Athens",
    category: "work.cat.hotel",
    image: squareHotelImage,
    aspect: "aspect-[4/5]",
    offset: "md:-mt-8",
    mediaType: 'image',
    gallery: [
      { type: 'image', src: squareHotelImage },
      { type: 'image', src: squareHotel1 },
      { type: 'image', src: squareHotel2 },
      { type: 'image', src: squareHotel11 },
      { type: 'image', src: squareHotel157 },
      { type: 'image', src: squareHotel167 },
      { type: 'image', src: squareHotel108 },
      { type: 'image', src: squareHotel16 },
      { type: 'image', src: squareHotel90 },
      { type: 'image', src: squareHotel92 }
    ]
  },
  {
    id: 6,
    title: "Playboy Greece, The Senses Issue",
    category: "work.cat.editorial",
    image: playboy2,
    aspect: "aspect-[3/4]",
    offset: "md:-mt-4",
    mediaType: 'image',
    gallery: [
      { type: 'image', src: playboy1 },
      { type: 'image', src: playboy2 }
    ]
  },
  {
    id: 7,
    title: "This is Axion Esti",
    category: "work.cat.yacht",
    image: axionEsti1,
    aspect: "aspect-[16/9]",
    offset: "md:mt-8",
    mediaType: 'youtube',
    youtubeId: 'Q0LpAOPwoxU',
    gallery: [
      { type: 'youtube', src: 'Q0LpAOPwoxU' },
      { type: 'image', src: axionEsti1 },
      { type: 'image', src: axionEsti2 },
      { type: 'image', src: axionEsti3 },
      { type: 'image', src: axionEsti4 },
      { type: 'image', src: axionEsti5 },
      { type: 'image', src: axionEsti6 }
    ]
  },
  {
    id: 8,
    title: "About You",
    category: "work.cat.fashion",
    image: aboutYouMain,
    aspect: "aspect-[3/4]",
    offset: "md:mt-16",
    mediaType: 'image',
    gallery: [
      { type: 'image', src: aboutYouMain },
      { type: 'image', src: aboutYou1 },
      { type: 'image', src: aboutYou2 },
      { type: 'image', src: aboutYou3 },
      { type: 'image', src: aboutYou4 },
      { type: 'image', src: aboutYou5 },
      { type: 'image', src: aboutYou6 },
      { type: 'image', src: aboutYou7 }
    ]
  }
];

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const { t } = useLanguage();

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentGalleryIndex(0);
  };

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentGalleryIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentGalleryIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-ink">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-24 border-b border-stone/20 pb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif">{t('work.title')}</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-stone hidden md:block">01 &mdash; 06</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`group cursor-pointer ${project.offset}`}
              onClick={() => openProject(project)}
            >
              <div className={`relative overflow-hidden ${project.aspect}`}>
                {project.mediaType === 'video' && project.videoSrc ? (
                  <video 
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                    referrerPolicy="no-referrer"
                  />
                )}
                {(project.mediaType === 'video' || project.mediaType === 'youtube') && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-ink/20">
                    <div className="w-16 h-16 rounded-full bg-ink/50 backdrop-blur-sm flex items-center justify-center border border-paper/20 text-paper">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-between items-start">
                <h3 className="text-xl font-serif tracking-wide">{project.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.15em] text-stone">{t(project.category)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-8 right-8 text-stone hover:text-white transition-colors z-50"
              onClick={() => setSelectedProject(null)}
            >
              <X size={32} strokeWidth={1} />
            </motion.button>

            {selectedProject.gallery.length > 1 && (
              <>
                <button 
                  onClick={prevMedia} 
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-stone hover:text-white z-50 p-2 md:p-4 transition-transform hover:scale-110"
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button 
                  onClick={nextMedia} 
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-stone hover:text-white z-50 p-2 md:p-4 transition-transform hover:scale-110"
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              </>
            )}
            
            <motion.div
              key={currentGalleryIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`relative w-full max-h-full flex items-center justify-center ${
                selectedProject.gallery[currentGalleryIndex].type === 'youtube' ? 'max-w-5xl aspect-video' : 'max-w-full'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.gallery[currentGalleryIndex].type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.gallery[currentGalleryIndex].src}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full shadow-2xl rounded-sm"
                ></iframe>
              ) : selectedProject.gallery[currentGalleryIndex].type === 'video' ? (
                <video
                  src={selectedProject.gallery[currentGalleryIndex].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                />
              ) : (
                <img
                  src={selectedProject.gallery[currentGalleryIndex].src}
                  alt={`${selectedProject.title} - Media ${currentGalleryIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>

            {selectedProject.gallery.length > 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                {selectedProject.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentGalleryIndex(idx); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentGalleryIndex ? 'bg-white scale-125' : 'bg-stone/50 hover:bg-stone'
                    }`}
                    aria-label={`Go to media ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'GR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.philosophy': 'Philosophy',
    'nav.work': 'Work',
    'nav.approach': 'Approach',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'hero.title': 'Trends fade.',
    'hero.subtitle': 'Style remains.',
    'hero.description': 'a creative direction and production studio crafting cinematic campaigns for brands.',
    'philosophy.label': 'Philosophy',
    'philosophy.title': 'We do not follow trends.',
    'philosophy.subtitle': 'We follow style and elegance.',
    'philosophy.description': 'Merging art history, cinema, and modern aesthetics to create campaigns that feel like timeless works of art. We are not creating ads. We are crafting enduring art.',
    'approach.label': 'The Approach',
    'approach.title': 'Art meets strategy.',
    'approach.subtitle': 'Every frame intentional.',
    'approach.p1': 'We do not believe in disposable content. We believe in creating visual legacies. Our process is rooted in classical composition, meticulous lighting, and a profound respect for the medium.',
    'approach.p2': 'Every shadow has purpose. Every movement is choreographed. We build worlds that captivate the eye and endure in the mind.',
    'contact.label': 'Contact',
    'contact.title': 'Let us create',
    'contact.together': 'together.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.placeholder.name': 'Your Name',
    'contact.placeholder.email': 'your@email.com',
    'contact.placeholder.message': 'Tell us about your project',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success.title': 'Message Sent.',
    'contact.success.p': 'We will be in touch shortly.',
    'contact.success.button': 'Send another',
    'contact.error': 'Something went wrong. Please try again.',
    'work.title': 'Selected Works',
    'work.view': 'View Project',
    'work.close': 'Close',
    'work.cat.editorial': 'Editorial',
    'work.cat.restaurant': 'Restaurant Campaign',
    'work.cat.hotel': 'Hotel Campaign',
    'work.cat.fashion': 'Fashion Catalogue',
    'work.cat.yacht': 'Yacht Charter Campaign',
    'work.cat.music': 'Music Video',
    'work.cat.commercial': 'Commercial',
    'work.cat.realestate': 'Real Estate Campaign',
    'marquee.text': 'CONCEPT    DIRECT    REFINE    NOVUS ARTIS    ',
  },
  GR: {
    'nav.philosophy': 'Φιλοσοφία',
    'nav.work': 'Έργα',
    'nav.approach': 'Προσέγγιση',
    'nav.contact': 'Επικοινωνία',
    'nav.menu': 'Μενού',
    'hero.title': 'Οι τάσεις σβήνουν.',
    'hero.subtitle': 'Το στυλ παραμένει.',
    'hero.description': 'ένα στούντιο δημιουργικής διεύθυνσης και παραγωγής που δημιουργεί κινηματογραφικές καμπάνιες για brands.',
    'philosophy.label': 'Φιλοσοφία',
    'philosophy.title': 'Δεν ακολουθούμε τάσεις.',
    'philosophy.subtitle': 'Ακολουθούμε το στυλ και την κομψότητα.',
    'philosophy.description': 'Συνδυάζοντας την ιστορία της τέχνης, τον κινηματογράφο και τη σχολαστική αισθητική για τη δημιουργία καμπανιών που μοιάζουν με διαχρονικά έργα τέχνης. Δεν δημιουργούμε διαφημίσεις. Φιλοτεχνούμε τέχνη που διαρκεί.',
    'approach.label': 'Η Προσέγγιση',
    'approach.title': 'Η τέχνη συναντά τη στρατηγική.',
    'approach.subtitle': 'Κάθε πλάνο σκόπιμο.',
    'approach.p1': 'Δεν πιστεύουμε στο αναλώσιμο περιεχόμενο. Πιστεύουμε στη δημιουργία οπτικής κληρονομιάς. Η διαδικασία μας ριζώνει στην κλασική σύνθεση, τον σχολαστικό φωτισμό και τον βαθύ σεβασμό προς το μέσο.',
    'approach.p2': 'Κάθε σκιά έχει σκοπό. Κάθε κίνηση είναι χορογραφημένη. Χτίζουμε κόσμους που αιχμαλωτίζουν το βλέμμα και αντέχουν στο χρόνο.',
    'contact.label': 'Επικοινωνία',
    'contact.title': 'Ας δημιουργήσουμε',
    'contact.together': 'μαζί.',
    'contact.name': 'Όνομα',
    'contact.email': 'Email',
    'contact.message': 'Μήνυμα',
    'contact.placeholder.name': 'Το Όνομά σας',
    'contact.placeholder.email': 'το@email.σας',
    'contact.placeholder.message': 'Πείτε μας για το έργο σας',
    'contact.send': 'Αποστολή Μηνύματος',
    'contact.sending': 'Αποστολή...',
    'contact.success.title': 'Το Μήνυμα Εστάλη.',
    'contact.success.p': 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
    'contact.success.button': 'Αποστολή άλλου',
    'contact.error': 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
    'work.title': 'Επιλεγμένα Έργα',
    'work.view': 'Προβολή Έργου',
    'work.close': 'Κλείσιμο',
    'work.cat.editorial': 'Editorial',
    'work.cat.restaurant': 'Καμπάνια Εστιατορίου',
    'work.cat.hotel': 'Καμπάνια Ξενοδοχείου',
    'work.cat.fashion': 'Κατάλογος Μόδας',
    'work.cat.yacht': 'Καμπάνια Yacht Charter',
    'work.cat.music': 'Μουσικό Βίντεο',
    'work.cat.commercial': 'Διαφημιστικό',
    'work.cat.realestate': 'Καμπάνια Real Estate',
    'marquee.text': 'ΣΥΛΛΗΨΗ    ΣΚΗΝΟΘΕΣΙΑ    ΤΕΛΕΙΟΠΟΙΗΣΗ    NOVUS ARTIS    ',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

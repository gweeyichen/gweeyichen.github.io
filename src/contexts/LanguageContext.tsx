
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { commonTranslations, pageTranslations, componentTranslations } from '@/translations';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, translations: Record<string, string>) => string;
  getCommonT: (key: string) => string;
  getPageT: (page: string, key: string) => string;
  getComponentT: (component: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Get initial language from localStorage or default to 'en'
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  const savedLanguage = localStorage.getItem('language');
  return (savedLanguage === 'en' || savedLanguage === 'zh') ? savedLanguage : 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Update localStorage when language changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Basic translation function
  const t = (key: string, translations: Record<string, string>): string => {
    return translations[language] || key;
  };

  // Helper functions for different translation types
  const getCommonT = (key: string): string => {
    return commonTranslations[language][key as keyof typeof commonTranslations[typeof language]] || key;
  };

  const getPageT = (page: string, key: string): string => {
    const pageTranslation = pageTranslations[page as keyof typeof pageTranslations];
    if (!pageTranslation) return key;

    return pageTranslation[language][key as keyof typeof pageTranslation[typeof language]] || key;
  };

  const getComponentT = (component: string, key: string): string => {
    const componentTranslation = componentTranslations[component as keyof typeof componentTranslations];
    if (!componentTranslation) return key;

    return componentTranslation[language][key as keyof typeof componentTranslation[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      getCommonT,
      getPageT,
      getComponentT
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hook to get translations for a specific page
export const usePageTranslations = (page: keyof typeof pageTranslations): Record<string, string> => {
  const { language } = useLanguage();
  return pageTranslations[page]?.[language] || {};
};

// Hook to get translations for a specific component
export const useComponentTranslations = (component: keyof typeof componentTranslations): Record<string, string> => {
  const { language } = useLanguage();
  return componentTranslations[component]?.[language] || {};
};

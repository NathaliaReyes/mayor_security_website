import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isSpanish, setIsSpanish] = useState(i18n.language === 'es');

  // Update toggle state when language changes externally
  useEffect(() => {
    setIsSpanish(i18n.language === 'es');
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = isSpanish ? 'en' : 'es';
    setIsSpanish(!isSpanish);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isSpanish}
          onChange={toggleLanguage}
        />
        <div className="relative w-20 h-8 flex items-center rounded-full bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300">
          {/* Toggle background with gradient */}
          
          {/* Slider circle with text */}
          <div className={`absolute flex items-center justify-center text-xs font-bold ${
            isSpanish 
              ? 'right-1 bg-white text-red-600' 
              : 'left-1 bg-white text-blue-600'
            } h-6 w-9 rounded-full shadow-md transition-all duration-300`}>
            {isSpanish ? 'SP' : 'EN'}
          </div>
        </div>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
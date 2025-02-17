import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-4 bg-mainBg  w-auto rounded-sm p-1 md:p-2">
      <span
        onClick={() => changeLanguage('en')}
        className={`cursor-pointer ${i18n.language === 'en' ? 'text-red-600 font-bold underline' : 'font-semibold'}`}
      >
        EN
      </span>
      {/* <span>/</span> */}
      <span
        onClick={() => changeLanguage('es')}
        className={`cursor-pointer ${i18n.language === 'es' ? 'text-red-600 font-bold underline' : 'font-semibold'}`}
      >SP
      </span>
    </div>
  );
};

export default LanguageSwitcher;
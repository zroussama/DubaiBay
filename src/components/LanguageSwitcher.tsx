import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`flex items-center px-2 py-1 rounded ${
          i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        <span className="mr-1">🇬🇧</span> EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`flex items-center px-2 py-1 rounded ${
          i18n.language === 'ar' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        <span className="mr-1">🇦🇪</span> AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
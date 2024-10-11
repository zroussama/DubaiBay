import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Determine the current flag based on the selected language
  const currentFlag = i18n.language === 'ar' ? "https://flagcdn.com/ae.svg" : "https://flagcdn.com/gb.svg";

  return (
    <motion.header
      className="bg-white shadow-md fixed w-full z-50"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-moroccan-blue flex items-center">
          <img src="/images/logo.png" alt={t('header.brandName')} className="w-8 h-8 mr-2" />
          {t('header.brandName')}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-moroccan-blue">{t('header.home')}</Link>
          <Link to="/about" className="hover:text-moroccan-blue">{t('header.about')}</Link>
          <Link to="/products" className="hover:text-moroccan-blue">{t('header.products')}</Link>
          <Link to="/contact" className="hover:text-moroccan-blue">{t('header.contact')}</Link>
          <Link to="/become-distributor" className="hover:text-moroccan-blue">{t('header.becomeDistributor')}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="relative">
            <button onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)} className="flex items-center">
              <img src={currentFlag} alt={t('header.currentLanguageFlag')} className="w-5 h-5 rounded-full" />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
                <button onClick={() => changeLanguage('en')} className="flex items-center w-full px-4 py-2 hover:bg-gray-100">
                  <img src="https://flagcdn.com/gb.svg" alt={t('header.ukFlag')} className="w-5 h-5 rounded-full mr-2" />
                  {t('header.english')}
                </button>
                <button onClick={() => changeLanguage('ar')} className="flex items-center w-full px-4 py-2 hover:bg-gray-100">
                  <img src="https://flagcdn.com/ae.svg" alt={t('header.uaeFlag')} className="w-5 h-5 rounded-full mr-2" />
                  {t('header.arabic')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-2">
            <Link to="/" className="hover:text-moroccan-blue">{t('header.home')}</Link>
 <Link to="/about" className="hover:text-moroccan-blue">{t('header.about')}</Link>
            <Link to="/products" className="hover:text-moroccan-blue">{t('header.products')}</Link>
            <Link to="/contact" className="hover:text-moroccan-blue">{t('header.contact')}</Link>
            <Link to="/become-distributor" className="hover:text-moroccan-blue">{t('header.becomeDistributor')}</Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">{t('footer.companyName')}</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-orange-300">{t('header.home')}</Link>
          <Link to="/about" className="hover:text-orange-300">{t('header.about')}</Link>
          <Link to="/products" className="hover:text-orange-300">{t('header.products')}</Link>
          <Link to="/contact" className="hover:text-orange-300">{t('header.contact')}</Link>
          <Link to="/become-distributor" className="hover:text-orange-300">{t('header.becomeDistributor')}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-2">
            <Link to="/" className="hover:text-orange-300">{t('header.home')}</Link>
            <Link to="/about" className="hover:text-orange-300">{t('header.about')}</Link>
            <Link to="/products" className="hover:text-orange-300">{t('header.products')}</Link>
            <Link to="/contact" className="hover:text-orange-300">{t('header.contact')}</Link>
            <Link to="/become-distributor" className="hover:text-orange-300">{t('header.becomeDistributor')}</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
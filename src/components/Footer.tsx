import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-300">{t('footer.home')}</Link></li>
              <li><Link to="/about" className="hover:text-orange-300">{t('footer.about')}</Link></li>
              <li><Link to="/products" className="hover:text-orange-300">{t('footer.products')}</Link></li>
              <li><Link to="/contact" className="hover:text-orange-300">{t('footer.contact')}</Link></li>
              <li><Link to="/become-distributor" className="hover:text-orange-300">{t('footer.becomeDistributor')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <p>{t('footer.address')}</p>
            <p>{t('footer.phone')}: +971 4 123 4567</p>
            <p>{t('footer.email')}: info@qasrzouina.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" className="hover:text-orange-300"><Facebook /></a>
              <a href="https://instagram.com" className="hover:text-orange-300"><Instagram /></a>
              <a href="https://x.com" className="hover:text-orange-300"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-4 text-center">
          <p>&copy; 2024 Qasr Zouina. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
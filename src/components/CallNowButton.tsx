import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallNowButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.a
      href="tel:+971XXXXXXXXX"
      className="fixed bottom-4 right-4 bg-orange-500 text-white rounded-full p-4 flex items-center shadow-lg hover:bg-orange-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <Phone size={24} className="mr-2" />
      <span className="font-bold">{t('callNow')}</span>
    </motion.a>
  );
};

export default CallNowButton;
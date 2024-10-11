import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const NewsletterSubscription: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(t('error.invalidEmail'));
      return;
    }
    setError('');
    // TODO: Implement newsletter subscription logic
    setSubscribed(true);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white text-gray-800 rounded-lg mb-8 shadow-lg"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">{t('newsletter.title')}</h2>
          <p className="text-xl mb-4">{t('newsletter.subtitle')}</p>
          {subscribed ? (
            <div className="flex items-center justify-center text-green-600 mb-4">
              <FaCheckCircle className="mr-2" />
              <p>{t('newsletter.successMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="email"
                placeholder={t('newsletter.emailPlaceholder')}
                className="flex-grow p-2 mb-4 border border-gray-300 rounded text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error && (
                <div className="flex items-center text-red-600 mb-4">
                  <FaExclamationCircle className="mr-2" />
                  <p>{error}</p>
                </div>
              )}
              <button
                type="submit"
                className="bg-blue-800 text-white p-2 rounded hover:bg-blue-900 transition duration-300 mb-4"
              >
                {t('newsletter.subscribeButton')}
              </button>
            </form>
          )}
        </div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 md:ml-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt={t('newsletter.imageAlt')}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsletterSubscription;
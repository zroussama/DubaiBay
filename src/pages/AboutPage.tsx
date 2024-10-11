import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { CheckCircle, Award, TrendingUp, Leaf, HandHeart, Lightbulb, Heart, Globe, MessageSquare } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideIn = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
});

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    const text = `${t('aboutPage.futurePlansDesc1')} ${t('aboutPage.futurePlansDesc2')} ${t('aboutPage.futurePlansDesc3')}`;
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [t]);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const expertiseItems = [
    { icon: <CheckCircle size={48} className="text-green-500 mb-4" />, title: t('aboutPage.qualityAssurance'), description: t('aboutPage.qualityAssuranceDesc') },
    { icon: <Award size={48} className="text-blue-500 mb-4" />, title: t('aboutPage.authenticSourcing'), description: t('aboutPage.authenticSourcingDesc') },
    { icon: <TrendingUp size={48} className="text-orange-500 mb-4" />, title: t('aboutPage.marketTrends'), description: t('aboutPage.marketTrendsDesc') },
  ];

  const valueItems = [
    { icon: <CheckCircle size={32} />, title: t('aboutPage.authenticity'), description: t('aboutPage.authenticityDesc') },
    { icon: <Leaf size={32} />, title: t('aboutPage.sustainability'), description: t('aboutPage.sustainabilityDesc') },
    { icon: <HandHeart size={32} />, title: t('aboutPage.fairTrade'), description: t('aboutPage.fairTradeDesc') },
    { icon: <Lightbulb size={32} />, title: t('aboutPage.innovation'), description: t('aboutPage.innovationDesc') },
    { icon: <Heart size={32} />, title: t('aboutPage.wellbeing'), description: t('aboutPage.wellbeingDesc') },
    { icon: <Globe size={32} />, title: 'Global Reach', description: 'Connecting cultures and communities through our diverse product range.' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative mg-auto py-20 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('aboutPage.title')}
          </motion.h1>
          <motion.p
            className="text-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('aboutPage.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className="py- 16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-6 text-blue-900"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {t('aboutPage.ourStory')}
            </motion.h2>
            <motion.p
              className="mb-4 text-gray-700"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {t('aboutPage.ourStoryDesc1')}
            </motion.p>
            <motion.p
              className="mb-4 text-gray-700"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {t('aboutPage.ourStoryDesc2')}
            </motion.p>
            <motion.h3
              className="text-2xl font-semibold mt-8 mb-4 text-blue-900"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {t('aboutPage.ourMission')}
            </motion.h3>
            <motion.p
              className="text-gray-700"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {t('aboutPage.ourMissionDesc')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-blue-900"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('aboutPage.ourExpertise')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-100 rounded-lg shadow-md"
                initial="hidden"
                animate={controls}
                variants={slideIn(index % 2 === 0 ? 'left' : 'right')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('aboutPage.futurePlans')}
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.p
              className="mb-4 text-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {typedText}
            </motion.p>
            <motion.div
              className="mt-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold mb-4">Share Your Feedback</h3>
              <p className="mb-4">We value your input! Help us shape the future of Dubai Imports.</p>
              <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold flex items-center">
                <MessageSquare className="mr-2" />
                Share Feedback
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-blue-900"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Dubai: The Center of Our World
          </motion.h2>
          <motion.div
            className="relative w-full h-64 md:h-96"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <img
              src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 "
              alt="World Map"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-blue-900"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('aboutPage.ourTeam')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Al-Mansouri', role: t('aboutPage.founderCEO'), image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
              { name: 'Fatima Zahra', role: t('aboutPage.headOfSourcing'), image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
              { name: 'Omar Khalil', role: t('aboutPage.marketingDirector'), image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-blue-900"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {t('aboutPage.ourValues')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueItems.map((value, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-100 p-6 rounded-lg shadow-md"
                initial="hidden"
                animate={controls}
                variants={slideIn(index % 2 === 0 ? 'left' : 'right')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-blue-500 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
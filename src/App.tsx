import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import DistributorPage from './pages/DistributorPage';
import CallNowButton from './components/CallNowButton';
import NewsletterSubscription from './components/NewsletterSubscripption';

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/become-distributor" element={<DistributorPage />} />
            </Routes>
          <NewsletterSubscription /> {/* Use the new component */}
        </main>
        <Footer />
        <CallNowButton />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Phone } from 'lucide-react';

const CallNowButton: React.FC = () => {
  return (
    <a
      href="tel:+97141234567"
      className="fixed bottom-4 right-4 bg-orange-500 text-white rounded-full p-4 flex items-center shadow-lg hover:bg-orange-600 transition-colors"
    >
      <Phone size={24} className="mr-2" />
      <span className="font-bold">Call Now</span>
    </a>
  );
};

export default CallNowButton;
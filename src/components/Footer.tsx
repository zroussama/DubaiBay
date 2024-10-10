import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dubai Imports</h3>
            <p>Bringing the best of Morocco to Dubai</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Business Bay, Dubai, UAE</p>
            <p>Phone: +971 4 123 4567</p>
            <p>Email: info@dubaiimports.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-300"><Facebook /></a>
              <a href="#" className="hover:text-orange-300"><Instagram /></a>
              <a href="#" className="hover:text-orange-300"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-4 text-center">
          <p>&copy; 2024 Dubai Imports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
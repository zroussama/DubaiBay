import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mt-6 mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl text-blue-900 font-semibold mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="text-blue-600 mr-2" />
                  <span>123 Business Bay, Dubai, UAE</span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-blue-600 mr-2" />
                  <span>Sales: +971 4 123 4567</span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-blue-600 mr-2" />
                  <span>Support: +971 4 987 6543</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-blue-600 mr-2" />
                  <span>info@dubaiimports.com</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-blue-600 mr-2" />
                  <span>partnerships@dubaiimports.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="text-blue-600 mr-2" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM (GMT+4)</span>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178543779851!2d55.266069315437!3d25.186869383895755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b4a7c7e58d%3A0x6731cdcdcf33bc3d!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1620147382409!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "What are your shipping rates?", a: "Shipping rates vary depending on the destination and order size. Please contact our sales team for a quote." },
              { q: "Do you offer wholesale pricing?", a: "Yes, we offer wholesale pricing for bulk orders. Please get in touch with our partnerships team for more information." },
              { q: "What is your return policy?", a: "We accept returns within 30 days of purchase for unused items in their original packaging. Please see our Returns page for full details." },
              { q: "How long does shipping usually take?", a: "Shipping times vary, but typically orders within the UAE are delivered within 2-3 business days. International shipping can take 7-14 business days." },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
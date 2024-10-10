import React from 'react';
import { CheckCircle } from 'lucide-react';

const DistributorPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Become a Distributor</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Distributor Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Apply to become a distributor</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input type="text" id="fullName" name="fullName" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name</label>
                <input type="text" id="companyName" name="companyName" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                <input type="text" id="address" name="address" placeholder="Street" className="w-full px-3 py-2 border rounded-lg mb-2" required />
                <input type="text" id="city" name="city" placeholder="City" className="w-full px-3 py-2 border rounded-lg mb-2" required />
                <input type="text" id="emirate" name="emirate" placeholder="Emirate" className="w-full px-3 py-2 border rounded-lg mb-2" required />
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block text-gray-700 font-bold mb-2">Zip Code</label>
                <input type="text" id="zipCode" name="zipCode" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="businessType" className="block text-gray-700 font-bold mb-2">Type of Business</label>
                <select id="businessType" name="businessType" className="w-full px-3 py-2 border rounded-lg" required>
                  <option value="">Select business type</option>
                  <option value="onlineStore">Online Store</option>
                  <option value="physicalStore">Physical Store</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="whatsapp" className="block text-gray-700 font-bold mb-2">WhatsApp Number (optional)</label>
                <input type="tel" id="whatsapp" name="whatsapp" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" name="previousExperience" className="mr-2" />
                  <span>Have you sold similar products before?</span>
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="comments" className="block text-gray-700 font-bold mb-2">Additional Comments or Questions</label>
                <textarea id="comments" name="comments" rows={4} className="w-full px-3 py-2 border rounded-lg"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Submit Application
              </button>
            </form>
          </div>

          {/* Benefits and Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Benefits of Becoming a Distributor</h2>
              <ul className="space-y-2">
                {[
                  "Access to exclusive Moroccan products",
                  "Competitive wholesale pricing",
                  "Marketing and promotional support",
                  "Dedicated account manager",
                  "Regular product training sessions",
                  "Priority on new product launches",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
              <div className="space-y-4">
                {[
                  { name: "Ahmed Al-Farsi", company: "Oasis Imports", text: "Partnering with Dubai Imports has been a game-changer for our business. The quality of their Moroccan products is unmatched." },
                  { name: "Laila Mahmoud", company: "Souk Treasures", text: "The support we receive from Dubai Imports is exceptional. They truly care about the success of their distributors." },
                ].map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <p className="italic mb-2">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}, {testimonial.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "What is the minimum order quantity?", a: "Our minimum order quantity varies by product category. Please contact our sales team for specific details." },
              { q: "Do you offer exclusive distribution rights?", a: "We offer exclusive distribution rights on a case-by-case basis. This typically depends on your business model, market reach, and commitment to our products." },
              { q: "What kind of support do you provide to distributors?", a: "We provide marketing materials, product training, dedicated account management, and regular updates on new products and market trends." },
              { q: "How long does the application process take?", a: "The application process typically takes 2-3 weeks. We'll review your application and schedule a call to discuss the partnership in more detail." },
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

export default DistributorPage;
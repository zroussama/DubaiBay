import React, { useState } from 'react';
import { CheckCircle, Truck, DollarSign, Users, Headphones, Package, Star, HelpCircle, Send } from 'lucide-react';

const DistributorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    street: '',
    city: '',
    emirate: '',
    zipCode: '',
    businessType: '',
    phone: '',
    whatsapp: '',
    email: '',
    previousExperience: false,
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const t = (key: string) => {
    const translations: { [key: string]: string } = {
      becomeDistributor: 'Become a Distributor',
      applyToBecome: 'Apply to Become a Distributor',
      fullName: 'Full Name',
      companyName: 'Company Name',
      address: 'Address',
      street: 'Street',
      city: 'City',
      selectEmirate: 'Select Emirate',
      zipCode: 'ZIP Code',
      selectBusinessType: 'Select Business Type',
      phoneNumber: 'Phone Number',
      whatsappNumber: 'WhatsApp Number (Optional)',
      emailAddress: 'Email Address',
      soldSimilarProducts: 'Have you sold similar products before?',
      additionalComments: 'Additional Comments',
      submitApplication: 'Submit Application',
      benefitsOfBecoming: 'Benefits of Becoming a Distributor',
      accessToExclusive: 'Access to exclusive product lines',
      competitiveWholesale: 'Competitive wholesale pricing',
      marketingSupport: 'Marketing support and materials',
      dedicatedAccount: 'Dedicated account manager',
      regularProduct: 'Regular product training sessions',
      priorityOnNew: 'Priority on new product launches',
      testimonials: 'Distributor Testimonials',
      testimonial1Name: 'Ahmed Al-Farsi',
      testimonial1Company: 'Al-Farsi Trading LLC',
      testimonial1Text: 'Partnering with Dubai Imports has been a game-changer for our business. The quality of products and support we receive is unmatched.',
      testimonial2Name: 'Fatima Al-Mansoori',
      testimonial2Company: 'Oasis Beauty Supplies',
      testimonial2Text: 'The diverse range of authentic Moroccan products has allowed us to stand out in a competitive market. Our customers love the quality!',
      frequentlyAskedQuestions: 'Frequently Asked Questions',
      faq1Question: 'What are the minimum order requirements?',
      faq1Answer: 'Our minimum order value is AED 5,000 for the first order, and AED 3,000 for subsequent orders.',
      faq2Question: 'Do you offer exclusive territories?',
      faq2Answer: 'Yes, we offer exclusive territories based on your business type and location. This is discussed during the application process.',
      faq3Question: 'What kind of support do you provide to distributors?',
      faq3Answer: 'We provide marketing materials, product training, dedicated account management, and regular updates on new products and promotions.',
      faq4Question: 'How long does the application process take?',
      faq4Answer: 'The initial review of your application takes 3-5 business days. If approved, we will schedule a call to discuss next steps.',
      arabic: {
        becomeDistributor: 'أصبح موزعًا',
        applyToBecome: 'تقدم الآن لتصبح موزعًا',
        fullName: 'الاسم الكامل',
        companyName: 'اسم الشركة',
        address: 'العنوان',
        street: 'الشارع',
        city: 'المدينة',
        selectEmirate: 'اختر امارتك',
        zipCode: 'الرمز البريدي',
        selectBusinessType: 'اختر نوع عملك',
        phoneNumber: 'رقم الهاتف',
        whatsappNumber: 'رقم الواتساب (اختياري)',
        emailAddress: 'البريد الإلكتروني',
        soldSimilarProducts: 'هل كنت قد باعت منتجات مشابهة من قبل؟',
        additionalComments: 'تعليقات إضافية',
        submitApplication: 'تقدم الآن',
        benefitsOfBecoming: 'فوائد أن تصبح موزعًا',
        accessToExclusive: 'الوصول إلى منتجات حصرية',
        competitiveWholesale: 'أسعار الجملة التنافسية',
        marketingSupport: 'دعم التسويقي',
        dedicatedAccount: 'مدير حساب مخصص',
        regularProduct: 'التدريب المنتظم على المنتجات',
        priorityOnNew: 'الprioritize على المنتجات الجديدة',
        testimonials: 'شهادات الزبائن',
        testimonial1Name: 'أحمد الفارسي',
        testimonial1Company: 'شركة الفارسي للتجارة',
        testimonial1Text: 'الشراكة مع دبي إمبورتس كانت مفيدة لنا جدًا. جودة المنتجات ودعم العملاء الذي نتلقاه لا مثيل له.',
        testimonial2Name: 'فاطمة المانصوري',
        testimonial2Company: 'شركة oasis beauty supplies',
        testimonial2Text: 'المنتجات المغربية الأصلية المتنوعة سمحت لنا بالتفوق في السوق التنافسي. عملاؤنا يحبون الجودة!'
      }
    };
    return translations[key] || key;
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mt-6 mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">{t('becomeDistributor')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Distributor Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">{t('applyToBecome')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">{t('fullName')}</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">{t('companyName')}</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="street" className="block text-gray-700 font-bold mb-2">{t('address')}</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder={t('street')}
                  className="w-full px-3 py-2 border rounded-lg mb-2 focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder={t('city')}
                  className="w-full px-3 py-2 border rounded-lg mb-2 focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                <select
                  id="emirate"
                  name="emirate"
                  value={formData.emirate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg mb-2 focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">{t('selectEmirate')}</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Ajman">Ajman</option>
                  <option value="Umm Al Quwain">Umm Al Quwain</option>
                  <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                  <option value="Fujairah">Fujairah</option>
                </select>
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700 font-bold mb-2">{t('zipCode')}</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-gray-700 font-bold mb-2">{t('selectBusinessType')}</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">{t('selectBusinessType')}</option>
                  <option value="Retail">Retail</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Online">Online</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">{t('phoneNumber')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-gray-700 font-bold mb-2">{t('whatsappNumber')}</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{t('emailAddress')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="previousExperience"
                    checked={formData.previousExperience}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>{t('soldSimilarProducts')}</span>
                </label>
              </div>
              <div>
                <label htmlFor="comments" className="block text-gray-700 font-bold mb-2">{t('additionalComments')}</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center w-full"
              >
                <Send className="mr-2" size={20} />
                {t('submitApplication')}
              </button>
            </form>
          </div>

          {/* Benefits and Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900">{t('benefitsOfBecoming')}</h2>
              <ul className="space-y-3">
                {[
                  { icon: <Package />, text: t('accessToExclusive') },
                  { icon: <DollarSign />, text: t('competitiveWholesale') },
                  { icon: <Users />, text: t('marketingSupport') },
                  { icon: <Headphones />, text: t('dedicatedAccount') },
                  { icon: <Star />, text: t('regularProduct') },
                  { icon: <Truck />, text: t('priorityOnNew') },
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="text-blue-500 mr-3">{benefit.icon}</div>
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900">{t('testimonials')}</h2>
              <div className="space-y-4">
                {[
                  { name: t('testimonial1Name'), company: t('testimonial1Company'), text: t('testimonial1Text') },
                  { name: t('testimonial2Name'), company: t('testimonial2Company'), text: t('testimonial2Text') },
                ].map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <p className="italic mb-2">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}, {testimonial.company}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://soeezee.com/wp-content/uploads/2024/03/Become-Distributer.jpg"
                alt="Moroccan products"
                className="w-full h-full object-cover"
              />

            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">{t('frequentlyAskedQuestions')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: t('faq1Question'), a: t('faq1Answer') },
              { q: t('faq2Question'), a: t('faq2Answer') },
              { q: t('faq3Question'), a: t('faq3Answer') },
              { q: t('faq4Question'), a: t('faq4Answer') },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center text-blue-900">
                  <HelpCircle className="mr-2 text-blue-500" size={24} />
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorPage;
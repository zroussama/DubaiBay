import React from 'react';
import { CheckCircle, Award, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Dubai Imports</h1>
          <p className="text-xl">Bringing the best of Morocco to the heart of Dubai</p>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2010, Dubai Imports has been a pioneer in bringing authentic Moroccan products to the UAE market. Our journey began with a passion for the rich culture and craftsmanship of Morocco, and a vision to share these treasures with the diverse community of Dubai.
            </p>
            <p className="mb-4">
              Over the years, we've built strong relationships with artisans and producers across Morocco, ensuring that we bring only the finest and most authentic products to our customers.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h3>
            <p>
              To bridge cultures through commerce, providing our customers with authentic, high-quality Moroccan products while supporting traditional artisans and promoting sustainable trade practices.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle size={48} className="text-green-500 mb-4" />, title: 'Quality Assurance', description: 'Rigorous quality control ensures only the best products reach our customers.' },
              { icon: <Award size={48} className="text-blue-500 mb-4" />, title: 'Authentic Sourcing', description: 'Direct partnerships with Moroccan artisans and producers.' },
              { icon: <TrendingUp size={48} className="text-orange-500 mb-4" />, title: 'Market Trends', description: 'Staying ahead of design trends while respecting traditional craftsmanship.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Looking to the Future</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              As we continue to grow, Dubai Imports is excited to announce our plans for expansion. In the coming years, we will be broadening our product range to include exquisite imports from Turkey and Venezuela.
            </p>
            <p className="mb-4">
              This expansion aligns with our mission to bring diverse, high-quality products to the UAE market, further enriching the cultural tapestry of Dubai through commerce.
            </p>
            <p>
              Stay tuned for updates as we embark on this exciting new chapter in our journey!
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Al-Mansouri', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
              { name: 'Fatima Zahra', role: 'Head of Sourcing', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
              { name: 'Omar Khalil', role: 'Marketing Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
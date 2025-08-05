import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLoading from '../components/ImageWithLoading';
import AnimatedPage from '../components/AnimatedPage';

const HurricaneWindowsPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🛡️',
      title: 'Impact Resistant',
      description: 'Engineered to withstand Category 5 cyclone conditions with reinforced glass and frames'
    },
    {
      icon: '🔒',
      title: 'Superior Security',
      description: 'Multi-point locking system and reinforced structure for enhanced home security'
    },
    {
      icon: '❄️',
      title: 'Energy Efficient',
      description: 'Double-glazed insulated glass with Low-E coating for optimal thermal performance'
    },
    {
      icon: '🔇',
      title: 'Noise Reduction',
      description: 'Specialized acoustic dampening technology reduces external noise by up to 45dB'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Hurricane Impact Windows',
      description: 'Engineered to withstand extreme weather conditions with reinforced frames',
      features: ['Category 5 Rating', 'Impact Glass', 'Reinforced Frames'],
      image: 'https://picsum.photos/600x400?random=50'
    },
    {
      id: 2,
      name: 'Hurricane Security Doors',
      description: 'Heavy-duty security doors designed for cyclone-prone areas',
      features: ['316 Marine Grade', 'Triple Lock System', 'Cyclone Certified'],
      image: 'https://picsum.photos/600x400?random=51'
    },
    {
      id: 3,
      name: 'Double Glazed Hurricane Windows',
      description: 'Perfect insulation with superior storm protection',
      features: ['STC 45+ Rating', 'Impact Resistant', 'Energy Efficient'],
      image: 'https://picsum.photos/600x400?random=52'
    },
    {
      id: 4,
      name: 'Custom Hurricane Solutions',
      description: 'Architectural masterpieces tailored to your specifications',
      features: ['Custom Design', 'Premium Materials', 'Expert Installation'],
      image: 'https://picsum.photos/600x400?random=53'
    }
  ];

  const certifications = [
    {
      name: 'AS/NZS 2047 Windows Compliance',
      description: 'Meets Australian standards for windows and external glazed doors',
      image: 'https://picsum.photos/300x200?random=54'
    },
    {
      name: 'Cyclone Testing Station Certified',
      description: 'Tested to withstand Category 5 cyclone conditions',
      image: 'https://picsum.photos/300x200?random=55'
    },
    {
      name: 'Impact Resistance Tested',
      description: 'Successfully tested against flying debris impact',
      image: 'https://picsum.photos/300x200?random=56'
    }
  ];

  return (
    <AnimatedPage>
      <div className="pt-16 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hurricane Impact Windows
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Engineered to withstand Australia's most extreme weather conditions. 
              Protect your home with the strongest windows and doors available.
            </p>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Designed for Extreme Conditions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our hurricane windows are specifically engineered to meet and exceed the 
                stringent requirements for cyclone-prone areas across Australia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hurricane Window Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our complete range of hurricane-resistant products designed 
                for maximum protection and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <ImageWithLoading
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Certified & Tested
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All our hurricane products undergo rigorous testing and certification 
                to ensure they meet the highest safety standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <ImageWithLoading
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Protect Your Home?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get a free consultation for hurricane window installation. Our experts will help you 
                choose the right solution for your specific needs and location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Free Quote
                </a>
                <a
                  href="/products"
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  View All Products
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default HurricaneWindowsPage;
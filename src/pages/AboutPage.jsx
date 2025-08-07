import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLoading from '../components/ImageWithLoading';
import { Link } from 'react-router-dom';
import FooterBar from '../components/FooterBar';

const AboutPage = () => {
  const { t } = useTranslation();

  const timeline = [
    {
      year: '2005',
      title: 'Company Founded',
      description: 'Started with a vision to provide premium windows and doors to Australian homes',
      image: '/assets/development/develop-1.png',
    },
    {
      year: '2010',
      title: 'Expansion to Sydney',
      description: 'Opened our first interstate office and established our reputation for quality',
      image: '/assets/development/develop-2.png',
    },
    {
      year: '2015',
      title: 'Technology Innovation',
      description: 'Introduced advanced manufacturing techniques and energy-efficient products',
      image: '/assets/development/develop-3.png',
    },
    {
      year: '2020',
      title: 'National Coverage',
      description: 'Expanded operations to serve all major Australian cities and regions',
      image: '/assets/development/develop-4.png',
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as one of Australia\'s leading windows and doors manufacturers',
      image: '/assets/development/develop-5.png',
    },
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      location: 'Sydney, NSW',
      rating: 5,
      review: 'The windows exceeded all expectations. After the recent storms, our home remained completely dry while neighbors had significant water damage. The installation team was professional and precise.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      project: 'Premium Aluminum Windows',
    },
    {
      name: 'Emma Richardson',
      location: 'Melbourne, VIC',
      rating: 5,
      review: 'Absolutely thrilled with our new bi-fold doors! The engineering quality is outstanding - smooth operation, perfect sealing, and they look stunning. The energy efficiency has noticeably reduced our heating costs.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      project: 'Bi-fold Door Systems',
    },
    {
      name: 'Michael Foster',
      location: 'Brisbane, QLD',
      rating: 5,
      review: 'Security screen doors are exceptional quality. The door gives us complete peace of mind. Installation was flawless and the custom color matching was perfect. Worth every penny.',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      project: 'Security Screen Doors',
    },
    {
      name: 'Sophie Anderson',
      location: 'Perth, WA',
      rating: 5,
      review: 'Soundproof windows transformed our city apartment. The noise reduction is incredible - we can barely hear traffic anymore. The craftsmanship is remarkable and the warranty provides excellent confidence.',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      project: 'Soundproof Windows',
    },
  ];

  const capabilities = [
    {
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art facilities with precision engineering capabilities',
      image: 'https://source.unsplash.com/600x400/?manufacturing',
    },
    {
      title: 'Quality Control',
      description: 'Rigorous testing standards ensuring every product meets Australian standards',
      image: 'https://source.unsplash.com/600x400/?quality-control',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored window and door solutions for unique architectural requirements',
      image: 'https://source.unsplash.com/600x400/?custom-design',
    },
    {
      title: 'Nationwide Service',
      description: 'Professional installation and support across all Australian states',
      image: 'https://source.unsplash.com/600x400/?service-team',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Two decades of excellence and innovation</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                    style={index === 0 || index === 4 ? { objectPosition: 'center 75%' } : {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <p className="text-lg text-gray-600">What our valued Australian customers say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-lg text-gray-600">What sets us apart in the industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide Australian homes and businesses with the highest quality windows and doors that combine cutting-edge technology, superior craftsmanship, and timeless design. We are committed to sustainability, innovation, and customer satisfaction.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Quality without compromise in every product</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Customer-first approach in all we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Continuous innovation and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Environmental responsibility and sustainability</span>
                </li>
              </ul>
            </div>
            
            <div>
              <ImageWithLoading
                src="https://picsum.photos/600x400?random=23"
                alt="Company Values"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-xl font-bold text-white mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-body-lg text-blue-100 mb-8">
              Get a free consultation and quote for your window and door needs. Our experts are ready to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                to="/certificates"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterBar />
    </div>
  );
};

export default AboutPage;
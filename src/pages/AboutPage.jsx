import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLoading from '../components/ImageWithLoading';

const AboutPage = () => {
  const { t } = useTranslation();

  const timeline = [
    {
      year: '2005',
      title: 'Company Founded',
      description: 'Started with a vision to provide premium windows and doors to Australian homes',
      image: 'https://picsum.photos/400/300?random=10',
    },
    {
      year: '2010',
      title: 'Expansion to Sydney',
      description: 'Opened our first interstate office and established our reputation for quality',
      image: 'https://picsum.photos/400/300?random=11',
    },
    {
      year: '2015',
      title: 'Technology Innovation',
      description: 'Introduced advanced manufacturing techniques and energy-efficient products',
      image: 'https://picsum.photos/400/300?random=12',
    },
    {
      year: '2020',
      title: 'National Coverage',
      description: 'Expanded operations to serve all major Australian cities and regions',
      image: 'https://picsum.photos/400/300?random=13',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as one of Australia\'s leading windows and doors manufacturers',
      image: 'https://picsum.photos/400/300?random=14',
    },
  ];

  const team = [
    {
      name: 'Michael Chen',
      position: 'Managing Director',
      expertise: '20+ years in window manufacturing and business development',
      image: 'https://picsum.photos/300/300?random=15',
    },
    {
      name: 'Sarah Johnson',
      position: 'Technical Director',
      expertise: 'Engineering excellence and product innovation specialist',
      image: 'https://picsum.photos/300x300?random=16',
    },
    {
      name: 'James Wilson',
      position: 'Operations Manager',
      expertise: 'Quality control and manufacturing process optimization',
      image: 'https://picsum.photos/300x300?random=17',
    },
    {
      name: 'Lisa Park',
      position: 'Customer Relations Manager',
      expertise: '10+ years ensuring customer satisfaction and service excellence',
      image: 'https://picsum.photos/300x300?random=18',
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
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
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
    </div>
  );
};

export default AboutPage;
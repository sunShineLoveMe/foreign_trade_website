import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  const brandValues = [
    {
      icon: '🏆',
      title: t('brand.experience'),
      description: 'Over two decades of excellence in window and door manufacturing',
    },
    {
      icon: '✨',
      title: t('brand.quality'),
      description: 'Premium materials and meticulous craftsmanship in every product',
    },
    {
      icon: '🔧',
      title: t('brand.service'),
      description: 'Professional installation by certified experts across Australia',
    },
    {
      icon: '🛡️',
      title: t('brand.warranty'),
      description: 'Comprehensive lifetime warranty for your peace of mind',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Aluminum Sliding Windows',
      category: 'Windows',
      description: 'Double-glazed energy-efficient windows with advanced locking system',
      price: 'From $899',
      features: ['Energy Efficient', 'Security Locks', 'Weather Resistant'],
      image: 'https://source.unsplash.com/600x400/?window',
    },
    {
      id: 2,
      name: 'Security Screen Doors',
      category: 'Security',
      description: 'Heavy-duty security doors that don\'t compromise on style',
      price: 'From $699',
      features: ['316 Marine Grade', 'Triple Lock System', 'Custom Colors'],
      image: 'https://source.unsplash.com/600x400/?security-door',
    },
    {
      id: 3,
      name: 'Double Glazed Awning Windows',
      category: 'Windows',
      description: 'Perfect ventilation with superior insulation properties',
      price: 'From $1,199',
      features: ['Tilt & Turn', 'Sound Insulation', 'Child Safety'],
      image: 'https://source.unsplash.com/600x400/?awning-window',
    },
    {
      id: 4,
      name: 'French Patio Doors',
      category: 'Doors',
      description: 'Elegant French doors for seamless indoor-outdoor living',
      price: 'From $1,899',
      features: ['Wide Opening', 'Security Glass', 'Multi-point Locking'],
      image: 'https://source.unsplash.com/600x400/?french-door',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - Styled like yywindow.com */}
      <section className="relative hero-section bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://source.unsplash.com/1920x1080/?modern-windows')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-3xl">
            <div className="animate-fadeInUp">
              <h1 className="text-display font-black text-white mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-heading-lg text-slate-200 mb-4">
                {t('hero.subtitle')}
              </p>
              <p className="text-body-lg text-slate-300 mb-8 max-w-2xl">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
              <Link
                to="/products"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                {t('hero.cta')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Brand Values Section - Professional Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-slate-900 mb-4">
              {t('brand.title')}
            </h2>
            <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
              Excellence in every detail, designed for Australian conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandValues.map((value, index) => (
              <div 
                key={index} 
                className="card-modern p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-heading font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-body text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Grid Layout */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-bold text-slate-900 mb-4">
              {t('products.title')}
            </h2>
            <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
              Premium windows and doors engineered for Australian conditions
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="card-modern overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-heading font-semibold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-body text-slate-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Link
                      to="/products"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                    >
                      {t('products.learnMore')}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center px-8 py-3 text-lg font-semibold rounded-lg"
            >
              {t('products.viewAll')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default HomePage;
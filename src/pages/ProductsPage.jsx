import React, { useState } from 'react';
import ImageWithLoading from '../components/ImageWithLoading';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FooterBar from '../components/FooterBar';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 8 },
    { id: 'windows', name: 'Windows', count: 4 },
    { id: 'doors', name: 'Doors', count: 2 },
    { id: 'security', name: 'Security', count: 1 },
    { id: 'custom', name: 'Custom Solutions', count: 1 },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Aluminum Sliding Windows',
      category: 'windows',
      description: 'Double-glazed energy-efficient windows with advanced locking system',
      features: ['Energy Efficient', 'Security Locks', 'Weather Resistant'],
      specs: { width: '600-2400mm', height: '600-1800mm', glass: '6.38mm Laminated' },
      image: 'https://picsum.photos/600/400?random=1',
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Security Screen Doors',
      category: 'doors',
      description: 'Heavy-duty security doors that don\'t compromise on style',
      features: ['316 Marine Grade', 'Triple Lock System', 'Custom Colors'],
      specs: { width: '800-1200mm', height: '2000-2400mm', mesh: '316 Stainless Steel' },
      image: 'https://picsum.photos/600/400?random=2',
      badge: 'Popular',
    },
    {
      id: 3,
      name: 'Double Glazed Awning Windows',
      category: 'windows',
      description: 'Perfect ventilation with superior insulation properties',
      features: ['Tilt & Turn', 'Sound Insulation', 'Child Safety'],
      specs: { width: '400-1200mm', height: '400-1200mm', uValue: '1.4 W/m²K' },
      image: 'https://picsum.photos/600/400?random=3',
    },
    {
      id: 4,
      name: 'French Patio Doors',
      category: 'doors',
      description: 'Elegant French doors for seamless indoor-outdoor living',
      features: ['Wide Opening', 'Security Glass', 'Multi-point Locking'],
      specs: { width: '1200-2400mm', height: '2000-2400mm', panels: '2-4 Panels' },
      image: 'https://picsum.photos/600/400?random=4',
      badge: 'Premium',
    },
    {
      id: 5,
      name: 'Hurricane Impact Windows',
      category: 'security',
      description: 'Engineered to withstand extreme weather conditions',
      features: ['Impact Resistant', 'UV Protection', 'Insurance Discount'],
      specs: { rating: 'Category 5', glass: 'Laminated Impact', certification: 'AS/NZS 2047' },
      image: 'https://picsum.photos/600/400?random=5',
    },
    {
      id: 6,
      name: 'Custom Bay Window Solutions',
      category: 'custom',
      description: 'Architectural masterpieces tailored to your specifications',
      features: ['Custom Design', 'Premium Materials', 'Expert Installation'],
      specs: { design: 'Custom', materials: 'Aluminum/Timber', warranty: '25 Years' },
      image: 'https://picsum.photos/600/400?random=6',
    },
    {
      id: 7,
      name: 'Bi-fold Door Systems',
      category: 'doors',
      description: 'Transform your space with seamless folding door systems',
      features: ['Smooth Operation', 'Weather Sealing', 'Space Saving'],
      specs: { panels: '2-7 Panels', width: '1800-6000mm', threshold: 'Low Profile' },
      image: 'https://picsum.photos/600/400?random=7',
    },
    {
      id: 8,
      name: 'Soundproof Windows',
      category: 'windows',
      description: 'Ultimate noise reduction for peaceful living',
      features: ['STC 45+ Rating', 'Laminated Glass', 'Professional Installation'],
      specs: { rating: 'STC 45+', reduction: 'Up to 45dB', glass: 'Triple Glazed' },
      image: 'https://picsum.photos/600/400?random=8',
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Premium Products
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our complete range of high-quality windows and doors designed for Australian conditions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">Filter by Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name}
                    <span className="ml-1 text-xs">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">Search Products</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search windows, doors, security screens..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-80 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-slate-600">
            Showing <span className="font-semibold">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <ImageWithLoading
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full"
                    >
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4"
                  >
                    <span className="bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded-full"
                    >
                      {product.category}
                    </span>
                  </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2"
                  >{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4"
                  >{product.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4"
                  >
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                
                <div className="border-t border-slate-100 pt-4"
                  >
                    <div className="flex justify-end items-center mb-4"
                      >
                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                          >View Details</button>
                      </div>
                    
                    <div className="text-xs text-slate-500"
                      >
                        <strong>Specs:</strong> {Object.entries(product.specs).slice(0, 2).map(([key, value]) => `${key}: ${value}`).join(', ')}
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-slate-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.395 0-4.56-.94-6.162-2.464M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
        
      </div>
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

export default ProductsPage;
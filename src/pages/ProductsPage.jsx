import React, { useState } from 'react';
import ImageWithLoading from '../components/ImageWithLoading';
import { Link } from 'react-router-dom';
import FooterBar from '../components/FooterBar';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 8 },
    { id: 'sliding-window', name: 'Sliding Windows', count: 1 },
    { id: 'awning-window', name: 'Awning Windows', count: 1 },
    { id: 'fixed-window', name: 'Fixed Windows', count: 1 },
    { id: 'glass-louvre-window', name: 'Glass Louvre Windows', count: 1 },
    { id: 'stacker-door', name: 'Stacker Doors', count: 1 },
    { id: 'sliding-door', name: 'Sliding Doors', count: 1 },
    { id: 'hinged-door', name: 'Hinged Doors', count: 1 },
    { id: 'bi-folding-door', name: 'Bi-folding Doors', count: 1 },
  ];

  const products = [
    {
      id: 1,
      name: 'Sliding Window',
      category: 'sliding-window',
      description: 'Space-saving and weather-tight windows perfect for luxury homes and commercial use.',
      features: ['Thermal or Non-Thermal Break Options', 'Low-E Double/Triple Glazing', 'Multi-Point Locking System'],
      specs: {
        width: 'Custom',
        height: 'Custom',
        glass: '5-20mm Toughened / Laminated / Low-e'
      },
      image: '/assets/products/sliding-window.png',
      badge: 'Durable'
    },
    {
      id: 2,
      name: 'Awning Window',
      category: 'awning-window',
      description: 'Top-hinged windows providing ventilation, energy efficiency, and safety.',
      features: ['Multi-Point Locks', 'Custom Sizes', 'Insect Flyscreen'],
      specs: {
        width: 'Custom',
        height: 'Custom',
        glass: '5-20mm Low-E / Soundproof / Laminated'
      },
      image: '/assets/products/awning-window.png',
      badge: 'Energy Star'
    },
    {
      id: 3,
      name: 'Fixed Window',
      category: 'fixed-window',
      description: 'Non-opening panoramic windows for maximum light and unobstructed views.',
      features: ['Superior Sealing', 'WERS Certified', 'Compatible with Operable Types'],
      specs: {
        width: 'Custom',
        height: 'Custom',
        glass: '5-20mm Low-E / Triple Glazed'
      },
      image: '/assets/products/fixed-window.png',
      badge: 'Panoramic'
    },
    {
      id: 4,
      name: 'Glass Louvre Window',
      category: 'glass-louvre-window',
      description: 'Adjustable louvered windows that enhance airflow, privacy, and energy efficiency.',
      features: ['Ventilation & Light Control', 'Privacy Protection', 'UV & Weather Resistant'],
      specs: {
        width: 'Custom',
        height: 'Custom',
        glass: '5-20mm Low-E / Frosted / Tinted'
      },
      image: '/assets/products/glass-louvre-window.png',
      badge: 'Breezy'
    },
    {
      id: 5,
      name: 'Stacker Door',
      category: 'stacker-door',
      description: 'Multi-panel sliding doors that expand your indoor-outdoor living space.',
      features: ['AS2047 Certified', 'Smooth Sliding', 'Triple-Track Option'],
      specs: {
        width: 'Custom',
        height: 'Custom',
        panels: '3-6 Panels'
      },
      image: '/assets/products/stacker-door.png',
      badge: 'Expansive'
    },
    {
      id: 6,
      name: 'Sliding Door',
      category: 'sliding-door',
      description: 'Space-saving doors perfect for patios and terraces, built for Aussie conditions.',
      features: ['AS2047 Certified', 'Stainless Steel Mesh Screens', 'Custom Designs'],
      specs: {
        width: 'Custom',
        height: 'Custom',
        glass: '5-20mm Low-E / Soundproof / Laminated'
      },
      image: '/assets/products/sliding-door.png',
      badge: 'Classic'
    },
    {
      id: 7,
      name: 'Hinged Door',
      category: 'hinged-door',
      description: 'High-performance hinged doors with elegant appearance and strong insulation.',
      features: ['Seamless Opening', 'Insulated Panel Options', 'Multi-point Locking'],
      specs: {
        width: '800-1200mm',
        height: '2000-2400mm',
        panels: '1-2 Panels'
      },
      image: '/assets/products/hinged-door.png',
      badge: 'Elegant'
    },
    {
      id: 8,
      name: 'Bi-folding Door',
      category: 'bi-folding-door',
      description: 'Foldable door systems to open up living space and bring outdoors in.',
      features: ['Low Threshold', 'Smooth Folding System', 'Hidden Rollers'],
      specs: {
        width: '1800-6000mm',
        panels: '2-7 Panels',
        threshold: 'Low Profile'
      },
      image: '/assets/products/bi-folding-door.png',
      badge: 'Space Saver'
    }
  ]

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
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative">
                <ImageWithLoading
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
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
      
      {/* <ContactSection 
        title="Get Your Free Quote"
        subtitle="Ready to upgrade your windows and doors? Our experts will provide a detailed consultation and custom quote for your project."
      /> */}
      
      <FooterBar />
    </div>
  );
};

export default ProductsPage;
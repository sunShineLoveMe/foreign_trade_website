import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FooterBar from '../components/FooterBar';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { t } = useTranslation();

  // Comprehensive product data in English
  const products = [
    {
      id: 1,
      name: 'Premium Aluminum Sliding Windows',
      category: 'Windows',
      shortName: 'Aluminum Sliding',
      mainImage: 'https://picsum.photos/800/600?random=1',
      images: [
        'https://picsum.photos/800/600?random=1',
        'https://picsum.photos/800/600?random=11',
        'https://picsum.photos/800/600?random=12',
        'https://picsum.photos/800/600?random=13'
      ],
      features: [
        'Double-glazed energy-efficient glass',
        'High-strength aluminum frame, corrosion-resistant',
        'Multi-point security locking system',
        'Waterproof sealing design',
        'Smooth sliding operation',
        'UV protection coating'
      ],
      description: 'Premium aluminum sliding windows designed specifically for Australian climate. Constructed with 6063-T5 high-strength aluminum profiles and double-glazed units for excellent thermal performance. Unique drainage system effectively prevents water infiltration.',
      applications: [
        'Living room floor-to-ceiling windows',
        'Balcony enclosures',
        'Bedroom windows',
        'Kitchen ventilation windows',
        'Office partitions'
      ],
      specifications: {
        'Frame thickness': '1.4mm-2.0mm',
        'Glass specification': '5mm+12A+5mm double glazing',
        'Opening method': 'Horizontal sliding',
        'Color options': 'White/Gray/Wood grain',
        'Warranty period': '10 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=100'
    },
    {
      id: 2,
      name: 'Security Screen Doors',
      category: 'Doors',
      shortName: 'Security Screen',
      mainImage: 'https://picsum.photos/800/600?random=2',
      images: [
        'https://picsum.photos/800/600?random=2',
        'https://picsum.photos/800/600?random=21',
        'https://picsum.photos/800/600?random=22',
        'https://picsum.photos/800/600?random=23'
      ],
      features: [
        '316 marine-grade stainless steel mesh',
        'Triple lock point system',
        'Anti-pry reinforced design',
        'Ventilation and mosquito protection',
        'Custom color options',
        'Australian safety standard compliant'
      ],
      description: 'Constructed with 316 marine-grade stainless steel woven mesh offering superior corrosion resistance and strength. Triple lock point system provides bank-grade security while maintaining excellent ventilation. Specifically designed for Australian coastal areas.',
      applications: [
        'Entry door security',
        'Balcony door safety',
        'Commercial premises',
        'Warehouse entrances',
        'Garage doors'
      ],
      specifications: {
        'Mesh material': '316 stainless steel',
        'Frame material': 'Aluminum alloy',
        'Mesh specification': '1.6mm×1.6mm',
        'Locking': 'Triple lock points',
        'Warranty period': '15 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=101'
    },
    {
      id: 3,
      name: 'Double Glazed Awning Windows',
      category: 'Windows',
      shortName: 'Awning Window',
      mainImage: 'https://picsum.photos/800/600?random=3',
      images: [
        'https://picsum.photos/800/600?random=3',
        'https://picsum.photos/800/600?random=31',
        'https://picsum.photos/800/600?random=32',
        'https://picsum.photos/800/600?random=33'
      ],
      features: [
        'Tilt opening design',
        'Sound and thermal insulation',
        'Child safety locks',
        'Rain protection design',
        'Easy cleaning',
        'Energy efficiency certified'
      ],
      description: 'Top-hung awning window design providing excellent ventilation performance. Double glazing effectively blocks noise and heat, particularly suitable for bedrooms and study rooms. Unique rain protection design ensures ventilation even during rain.',
      applications: [
        'Bedroom windows',
        'Study room ventilation',
        'Bathroom windows',
        'Kitchen ventilation',
        'Office windows'
      ],
      specifications: {
        'Opening angle': '15-45 degrees',
        'Glass specification': '6mm+12A+6mm double glazing',
        'Seal grade': 'Grade A',
        'Wind pressure performance': 'C4 level',
        'Warranty period': '12 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=102'
    },
    {
      id: 4,
      name: 'French Patio Doors',
      category: 'Doors',
      shortName: 'French Patio',
      mainImage: 'https://picsum.photos/800/600?random=4',
      images: [
        'https://picsum.photos/800/600?random=4',
        'https://picsum.photos/800/600?random=41',
        'https://picsum.photos/800/600?random=42',
        'https://picsum.photos/800/600?random=43'
      ],
      features: [
        'Large opening design',
        'Safety glass',
        'Multi-point locking',
        'Sealed sound insulation',
        'Maximum natural light',
        'Open and spacious feel'
      ],
      description: 'Classic French door design creating seamless connection between indoor and outdoor spaces. Features high-strength safety glass with multi-point locking system, offering both beauty and security. Particularly suitable for balcony and garden connections.',
      applications: [
        'Balcony doors',
        'Garden doors',
        'Living room doors',
        'Dining room doors',
        'Patio doors'
      ],
      specifications: {
        'Door panel quantity': '2-4 panels',
        'Opening method': 'Inward/Outward opening',
        'Glass type': 'Tempered safety glass',
        'Locking': 'Multi-point locking',
        'Warranty period': '15 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=103'
    },
    {
      id: 5,
      name: 'Bi-fold Door Systems',
      category: 'Doors',
      shortName: 'Bi-fold System',
      mainImage: 'https://picsum.photos/800/600?random=5',
      images: [
        'https://picsum.photos/800/600?random=5',
        'https://picsum.photos/800/600?random=51',
        'https://picsum.photos/800/600?random=52',
        'https://picsum.photos/800/600?random=53'
      ],
      features: [
        'Smooth operation',
        'Waterproof sealing',
        'Space saving',
        'Large opening design',
        'Thermal insulation',
        'Secure locking'
      ],
      description: 'Modern bi-fold door system that can fully open to create wide passages. High-quality track system ensures smooth and effortless operation. Particularly suitable for spaces requiring large openings like restaurants and conference rooms.',
      applications: [
        'Restaurant partitions',
        'Conference rooms',
        'Balcony doors',
        'Commercial spaces',
        'Home entertainment areas'
      ],
      specifications: {
        'Panel quantity': '2-7 panels',
        'Maximum width': '6000mm',
        'Track type': 'Low threshold/Barrier-free',
        'Sealing performance': 'Grade A',
        'Warranty period': '12 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=104'
    },
    {
      id: 6,
      name: 'Soundproof Windows',
      category: 'Windows',
      shortName: 'Soundproof',
      mainImage: 'https://picsum.photos/800/600?random=6',
      images: [
        'https://picsum.photos/800/600?random=6',
        'https://picsum.photos/800/600?random=61',
        'https://picsum.photos/800/600?random=62',
        'https://picsum.photos/800/600?random=63'
      ],
      features: [
        'STC45+ sound rating',
        'Triple laminated glass',
        'Professional installation',
        'Noise reduction',
        'Energy efficient',
        'Aesthetic appearance'
      ],
      description: 'Professional soundproof window system featuring triple laminated glass construction that effectively blocks external noise. STC45+ sound rating with noise reduction up to 45 decibels. Particularly suitable for street-facing residential and commercial applications.',
      applications: [
        'Street-facing residences',
        'School classrooms',
        'Hospital wards',
        'Office spaces',
        'Recording studios'
      ],
      specifications: {
        'Sound rating': 'STC45+',
        'Noise reduction': '45+ decibels',
        'Glass specification': '8mm+8A+8mm+8A+8mm',
        'Frame material': 'Thermal break aluminum',
        'Warranty period': '15 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=105'
    },
    {
      id: 7,
      name: 'Louver Glass Windows',
      category: 'Windows',
      shortName: 'Louver Window',
      mainImage: 'https://picsum.photos/800/600?random=7',
      images: [
        'https://picsum.photos/800/600?random=7',
        'https://picsum.photos/800/600?random=71',
        'https://picsum.photos/800/600?random=72',
        'https://picsum.photos/800/600?random=73'
      ],
      features: [
        'Freely adjustable glass slats',
        'Good ventilation and light transmission',
        'Optional hand crank operation',
        'Tight sealing to prevent wind and rain',
        'Modern aesthetic design'
      ],
      description: 'Louver glass windows are composed of multiple horizontally aligned glass slats that can be opened and closed simultaneously through mechanical devices. The design is simple and lightweight, suitable for areas requiring ventilation and privacy.',
      applications: [
        'Bathrooms and kitchens',
        'Balconies and corridors',
        'Utility rooms',
        'Schools and hospitals',
        'Public restrooms'
      ],
      specifications: {
        'Frame Material': 'Aluminum alloy or PVC',
        'Glass Type': '5mm tempered glass',
        'Operating Mode': 'Manual / Hand crank / Electric',
        'Color Options': 'White, Gray, Black',
        'Warranty': '5 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=107'
    },
    {
      id: 8,
      name: 'Fixed Windows',
      category: 'Windows',
      shortName: 'Fixed Window',
      mainImage: 'https://picsum.photos/800/600?random=8',
      images: [
        'https://picsum.photos/800/600?random=8',
        'https://picsum.photos/800/600?random=81',
        'https://picsum.photos/800/600?random=82',
        'https://picsum.photos/800/600?random=83'
      ],
      features: [
        'No opening mechanism',
        'Excellent sealing and insulation',
        'Maximized daylight exposure',
        'Simple and elegant design',
        'Customizable sizes and shapes'
      ],
      description: 'Fixed windows are windows that cannot be opened and are used to allow light in and provide views. Their superior airtightness provides excellent insulation and security.',
      applications: [
        'High-rise buildings',
        'Commercial facades',
        'Display windows',
        'Hotel lobbies',
        'Office partitions'
      ],
      specifications: {
        'Glass Type': 'Double or triple glazing',
        'Frame Material': 'Aluminum or uPVC',
        'Sealing Performance': 'Excellent airtightness',
        'Color Options': 'Customized',
        'Warranty': '10 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=108'
    }
  ];
  

  const categories = [
    { id: 'windows', name: '铝合金窗', products: products.filter(p => p.category === 'Windows') },
    { id: 'doors', name: '安全门', products: products.filter(p => p.category === 'Doors') }
  ];

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(productId));
    setSelectedProduct(product || products[0]);
  }, [productId, products]);

  const handleProductSelect = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Details</h1>
          <p className="text-xl text-blue-100">Professional window and door solutions with quality assurance</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Navigation */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl shadow-lg p-6 h-fit lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Product Categories</h2>
              
              <nav className="space-y-4">
                {categories.map((category) => (
                  <div key={category.id}>
                    <h3 className="font-semibold text-slate-700 mb-3">{category.id === 'windows' ? 'Windows' : 'Doors'}</h3>
                    <div className="space-y-2 ml-4">
                      {category.products.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedProduct?.id === product.id
                              ? 'bg-blue-100 text-blue-800 font-medium'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {product.shortName}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {selectedProduct && (
                <motion.div
                  key={selectedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Product Images */}
                  <div className="relative">
                    <img
                      src={selectedProduct.mainImage}
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-8">
                    {/* Product Title */}
                    <div className="mb-6">
                      <h1 className="text-3xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h1>
                      <p className="text-lg text-slate-600">{selectedProduct.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Product Features</h2>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Application Scenarios</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {selectedProduct.applications.map((app, index) => (
                          <div key={index} className="bg-slate-50 rounded-lg p-3 text-center">
                            <p className="text-sm text-slate-700">{app}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Product Showcase - Alternating Image-Text Layout */}
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-6">Product Showcase</h2>
                      
                      {/* Row 1: Left Image, Right Text */}
                      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-8 items-center">
                        <div className="lg:col-span-6">
                          <img
                            src="https://picsum.photos/600/400?random=101"
                            alt="Product Feature 1 - Premium Construction"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <div className="lg:col-span-4">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">Premium Construction Quality</h3>
                          <p className="text-slate-600 mb-3">
                            High-grade aluminum frame construction ensures durability and longevity. 
                            Precision engineering provides smooth operation and perfect sealing.
                          </p>
                          <ul className="text-sm text-slate-600 space-y-1">
                            <li>• Reinforced aluminum profiles</li>
                            <li>• Weather-resistant finish</li>
                            <li>• Precision manufacturing</li>
                          </ul>
                        </div>
                      </div>

                      {/* Row 2: Left Text, Right Image */}
                      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-8 items-center">
                        <div className="lg:col-span-4 lg:order-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">Advanced Safety Features</h3>
                          <p className="text-slate-600 mb-3">
                            Multi-point locking system with high-security components. 
                            Child-safe design with emergency release mechanisms.
                          </p>
                          <ul className="text-sm text-slate-600 space-y-1">
                            <li>• Multi-point security locks</li>
                            <li>• Child safety mechanisms</li>
                            <li>• Emergency release options</li>
                          </ul>
                        </div>
                        <div className="lg:col-span-6 lg:order-2">
                          <img
                            src="https://picsum.photos/600/400?random=102"
                            alt="Product Feature 2 - Safety Features"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>

                      {/* Row 3: Left Image, Right Text */}
                      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-8 items-center">
                        <div className="lg:col-span-6">
                          <img
                            src="https://picsum.photos/600/400?random=103"
                            alt="Product Feature 3 - Energy Efficiency"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <div className="lg:col-span-4">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">Energy Efficient Design</h3>
                          <p className="text-slate-600 mb-3">
                            Double or triple glazing options with thermal break technology. 
                            Reduces energy costs and maintains comfortable indoor temperatures.
                          </p>
                          <ul className="text-sm text-slate-600 space-y-1">
                            <li>• Thermal break technology</li>
                            <li>• Double/triple glazing</li>
                            <li>• Energy cost reduction</li>
                          </ul>
                        </div>
                      </div>

                      {/* Row 4: Left Text, Right Image */}
                      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center">
                        <div className="lg:col-span-4 lg:order-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">Customizable Options</h3>
                          <p className="text-slate-600 mb-3">
                            Wide range of colors, finishes, and hardware options. 
                            Custom sizes available to fit any architectural requirement.
                          </p>
                          <ul className="text-sm text-slate-600 space-y-1">
                            <li>• Multiple color options</li>
                            <li>• Custom sizing available</li>
                            <li>• Various hardware choices</li>
                          </ul>
                        </div>
                        <div className="lg:col-span-6 lg:order-2">
                          <img
                            src="https://picsum.photos/600/400?random=104"
                            alt="Product Feature 4 - Custom Options"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="border-b border-slate-200 pb-2">
                            <span className="font-semibold text-slate-700">{key}:</span>
                            <span className="text-slate-600 ml-2">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cross Section */}
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Cross Section View</h2>
                      <div className="bg-slate-50 rounded-lg p-6">
                        <img
                          src={selectedProduct.crossSection}
                          alt={`${selectedProduct.name} Cross Section`}
                          className="w-full max-w-md mx-auto rounded-lg"
                        />
                        <p className="text-center text-sm text-slate-600 mt-4">
                          Detailed cross-sectional view showing internal construction and material composition
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="w-full">
                      <Link
                        to="/contact"
                        className="w-full block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <FooterBar />
    </div>
  );
};

export default ProductDetailPage;
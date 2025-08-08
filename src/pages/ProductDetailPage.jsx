import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FooterBar from '../components/FooterBar';

// Comprehensive product data in English - defined outside component to prevent re-renders
const products = [
    {
      id: 1,
      name: 'Sliding Window',
      category: 'sliding-window',
      shortName: 'Sliding Window',
      mainImage: '/assets/products/sliding-window.png',
      images: [
        '/assets/products/sliding-window.png',
        'https://picsum.photos/800/600?random=11',
        'https://picsum.photos/800/600?random=12',
        'https://picsum.photos/800/600?random=13'
      ],
      features: [
        'Thermal or Non-Thermal Break Options',
        'Low-E Double/Triple Glazing',
        'Multi-Point Locking System',
        'Space-saving design',
        'Weather-tight sealing',
        'Custom sizing available'
      ],
      description: 'Space-saving and weather-tight windows perfect for luxury homes and commercial use. Constructed with high-strength aluminum profiles and double-glazed units for excellent thermal performance.',
      applications: [
        'Living room windows',
        'Bedroom windows',
        'Commercial spaces',
        'Kitchen areas',
        'Office partitions'
      ],
      specifications: {
        'Frame Material': 'High-strength aluminum',
        'Glass Options': '5-20mm Toughened/Laminated/Low-e',
        'Opening Method': 'Horizontal sliding',
        'Color Options': 'Custom colors available',
        'Warranty': '10 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=100'
    },
    {
      id: 2,
      name: 'Awning Window',
      category: 'awning-window',
      shortName: 'Awning Window',
      mainImage: '/assets/products/awning-window.png',
      images: [
        '/assets/products/awning-window.png',
        '/assets/product_details/awning-window-1.png',
        '/assets/product_details/awning-window-2.png',
        '/assets/product_details/awning-window-3.png'
      ],
      features: [
        'Top-hinged design',
        'Multi-Point Locks',
        'Custom Sizes',
        'Insect Flyscreen',
        'Energy efficiency',
        'Ventilation control'
      ],
      description: 'Top-hinged windows providing ventilation, energy efficiency, and safety. Perfect for areas requiring controlled airflow while maintaining security and weather protection.',
      applications: [
        'Bedroom windows',
        'Study room ventilation',
        'Bathroom windows',
        'Kitchen ventilation',
        'Office windows'
      ],
      specifications: {
        'Frame Material': 'High-strength aluminum',
        'Glass Options': '5-20mm Low-E/Soundproof/Laminated',
        'Opening Method': 'Top-hinged awning',
        'Screen Options': 'Insect flyscreen included',
        'Warranty': '12 years'
      },
      crossSection: '/assets/product_details/awning-window-4.png'
    },
    {
      id: 3,
      name: 'Fixed Window',
      category: 'fixed-window',
      shortName: 'Fixed Window',
      mainImage: '/assets/products/fixed-window.png',
      images: [
        '/assets/products/fixed-window.png',
        'https://picsum.photos/800/600?random=31',
        'https://picsum.photos/800/600?random=32',
        'https://picsum.photos/800/600?random=33'
      ],
      features: [
        'Superior Sealing',
        'Compatible with Operable Types',
        'Maximum daylight',
        'Unobstructed views',
        'Custom sizing'
      ],
      description: 'Non-opening panoramic windows for maximum light and unobstructed views. Excellent sealing performance and compatibility with other window types for comprehensive window solutions.',
      applications: [
        'High-rise buildings',
        'Commercial facades',
        'Living room features',
        'Office partitions',
        'Display areas'
      ],
      specifications: {
        'Frame Material': 'Thermal break aluminum',
        'Glass Options': '5-20mm Low-E/Triple Glazed',
        'Sealing Performance': 'Superior airtightness',
        'Certification': 'WERS Certified',
        'Warranty': '10 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=102'
    },
    {
      id: 4,
      name: 'Glass Louvre Window',
      category: 'glass-louvre-window',
      shortName: 'Glass Louvre',
      mainImage: '/assets/products/glass-louvre-window.png',
      images: [
        '/assets/products/glass-louvre-window.png',
        'https://picsum.photos/800/600?random=41',
        'https://picsum.photos/800/600?random=42',
        'https://picsum.photos/800/600?random=43'
      ],
      features: [
        'Ventilation & Light Control',
        'Privacy Protection',
        'UV & Weather Resistant',
        'Adjustable glass slats',
        'Modern aesthetic',
        'Easy operation'
      ],
      description: 'Adjustable louvered windows that enhance airflow, privacy, and energy efficiency. Glass slats can be adjusted to control ventilation and light while maintaining privacy.',
      applications: [
        'Bathrooms and kitchens',
        'Balconies and corridors',
        'Utility rooms',
        'Schools and hospitals',
        'Public areas'
      ],
      specifications: {
        'Frame Material': 'Aluminum alloy or PVC',
        'Glass Type': '5mm tempered glass slats',
        'Operating Mode': 'Manual/Hand crank/Electric',
        'UV Protection': 'Weather resistant coating',
        'Warranty': '5 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=103'
    },
    {
      id: 5,
      name: 'Stacker Door',
      category: 'stacker-door',
      shortName: 'Stacker Door',
      mainImage: '/assets/products/stacker-door.png',
      images: [
        '/assets/products/stacker-door.png',
        'https://picsum.photos/800/600?random=51',
        'https://picsum.photos/800/600?random=52',
        'https://picsum.photos/800/600?random=53'
      ],
      features: [
        'AS2047 Certified',
        'Smooth Sliding',
        'Triple-Track Option',
        'Multi-panel design',
        'Indoor-outdoor connection',
        'Space maximization'
      ],
      description: 'Multi-panel sliding doors that expand your indoor-outdoor living space. AS2047 certified for Australian standards with smooth sliding operation and triple-track options.',
      applications: [
        'Balcony doors',
        'Patio connections',
        'Living room openings',
        'Restaurant partitions',
        'Entertainment areas'
      ],
      specifications: {
        'Certification': 'AS2047 Certified',
        'Panel Range': '3-6 Panels',
        'Track Options': 'Triple-track available',
        'Width Range': 'Custom widths',
        'Warranty': '12 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=104'
    },
    {
      id: 6,
      name: 'Sliding Door',
      category: 'sliding-door',
      shortName: 'Sliding Door',
      mainImage: '/assets/products/sliding-door.png',
      images: [
        '/assets/products/sliding-door.png',
        'https://picsum.photos/800/600?random=61',
        'https://picsum.photos/800/600?random=62',
        'https://picsum.photos/800/600?random=63'
      ],
      features: [
        'AS2047 Certified',
        'Stainless Steel Mesh Screens',
        'Custom Designs',
        'Space-saving operation',
        'Weather resistance',
        'Security features'
      ],
      description: 'Space-saving doors perfect for patios and terraces, built for Aussie conditions. AS2047 certified with stainless steel mesh screens and custom design options.',
      applications: [
        'Patio doors',
        'Terrace entrances',
        'Balcony access',
        'Backyard connections',
        'Indoor-outdoor transitions'
      ],
      specifications: {
        'Certification': 'AS2047 Certified',
        'Screen Options': 'Stainless steel mesh',
        'Glass Options': '5-20mm Low-E/Soundproof/Laminated',
        'Design': 'Custom designs available',
        'Warranty': '15 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=105'
    },
    {
      id: 7,
      name: 'Hinged Door',
      category: 'hinged-door',
      shortName: 'Hinged Door',
      mainImage: '/assets/products/hinged-door.png',
      images: [
        '/assets/products/hinged-door.png',
        'https://picsum.photos/800/600?random=71',
        'https://picsum.photos/800/600?random=72',
        'https://picsum.photos/800/600?random=73'
      ],
      features: [
        'Seamless Opening',
        'Insulated Panel Options',
        'Multi-point Locking',
        'Elegant appearance',
        'Strong insulation',
        'Premium hardware'
      ],
      description: 'High-performance hinged doors with elegant appearance and strong insulation. Multi-point locking system with premium hardware for security and style.',
      applications: [
        'Main entrances',
        'Interior doors',
        'Bedroom access',
        'Office doors',
        'Commercial spaces'
      ],
      specifications: {
        'Width Range': '800-1200mm',
        'Height Range': '2000-2400mm',
        'Panel Options': '1-2 Panels',
        'Hardware': 'Multi-point locking',
        'Warranty': '15 years'
      },
      crossSection: 'https://picsum.photos/400/300?random=107'
    },
    {
      id: 8,
      name: 'Bi-folding Door',
      category: 'bi-folding-door',
      shortName: 'Bi-folding Door',
      mainImage: '/assets/products/bi-folding-door.png',
      images: [
        '/assets/products/bi-folding-door.png',
        '/assets/product_details/bi-folding-door-1.png',
        '/assets/product_details/bi-folding-door-2.png',
        '/assets/product_details/bi-folding-door-3.png'
      ],
      features: [
        'Low Threshold',
        'Smooth Folding System',
        'Hidden Rollers',
        'Space-saving design',
        'Wide opening capability',
        'Modern aesthetics'
      ],
      description: 'Foldable door systems to open up living space and bring outdoors in. Features low threshold design with smooth folding operation and hidden rollers for modern aesthetics.',
      applications: [
        'Living room openings',
        'Restaurant partitions',
        'Conference rooms',
        'Entertainment areas',
        'Commercial spaces'
      ],
      specifications: {
        'Width Range': '1800-6000mm',
        'Panel Range': '2-7 Panels',
        'Threshold': 'Low profile design',
        'Operation': 'Smooth folding system',
        'Warranty': '12 years'
      },
      crossSection: '/assets/product_details/bi-folding-door-4.png'
    }
  ];
  

const categories = [
    { 
      id: 'windows', 
      name: 'Windows', 
      products: products.filter(p => 
        ['sliding-window', 'awning-window', 'fixed-window', 'glass-louvre-window'].includes(p.category)
      ) 
    },
    { 
      id: 'doors', 
      name: 'Doors', 
      products: products.filter(p => 
        ['stacker-door', 'sliding-door', 'hinged-door', 'bi-folding-door'].includes(p.category)
      ) 
    }
  ];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(productId));
    setSelectedProduct(product || products[0]);
  }, [productId]); // Only depend on productId, products array is stable

  useEffect(() => {
    // Scroll to top when selected product changes
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100); // Small delay to ensure DOM is updated

    return () => clearTimeout(timer);
  }, [selectedProduct]); // Trigger when selectedProduct changes

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
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
                    <h3 className="font-semibold text-slate-700 mb-3">{category.name}</h3>
                    <div className="space-y-2 ml-4">
                      {category.products.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
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
                            src={`/assets/product_details/${selectedProduct.category}-1.png`}
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
                            src={`/assets/product_details/${selectedProduct.category}-2.png`}
                            alt="Product Feature 2 - Safety Features"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>

                      {/* Row 3: Left Image, Right Text */}
                      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-8 items-center">
                        <div className="lg:col-span-6">
                          <img
                            src={`/assets/product_details/${selectedProduct.category}-3.png`}
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
                            src={`/assets/product_details/${selectedProduct.category}-4.png`}
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
                    {/* <div className="mb-8">
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
                    </div> */}

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
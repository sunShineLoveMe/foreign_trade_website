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
      crossSection: 'https://picsum.photos/400/300?random=100',
      featureSections: [
        {
          title: 'Premium Construction Quality',
          description: 'High-grade aluminum frame construction ensures durability and longevity. Precision engineering provides smooth operation and perfect sealing.',
          image: '/assets/product_details/sliding-window-1.png',
          points: [
            'Reinforced aluminum profiles',
            'Weather-resistant finish',
            'Precision manufacturing'
          ],
          layout: 'left-image'
        },
        {
          title: 'Advanced Safety Features',
          description: 'Multi-point locking system with high-security components. Child-safe design with emergency release mechanisms.',
          image: '/assets/product_details/sliding-window-2.png',
          points: [
            'Multi-point security locks',
            'Impact-resistant glass protection',
            'Emergency release options'
          ],
          layout: 'right-image'
        },
        {
          title: 'Energy Efficient Design',
          description: 'Double or triple glazing options with thermal break technology. Reduces energy costs and maintains comfortable indoor temperatures.',
          image: '/assets/product_details/sliding-window-3.png',
          points: [
            'Thermal break technology',
            'Double/triple glazing',
            'Energy cost reduction'
          ],
          layout: 'left-image'
        },
        {
          title: 'Customizable Options',
          description: 'Wide range of colors, finishes, and hardware options. Custom sizes available to fit any architectural requirement.',
          image: '/assets/product_details/sliding-window-4.png',
          points: [
            'Multiple color options',
            'Custom sizing available',
            'Various hardware choices'
          ],
          layout: 'right-image'
        }
      ]
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
      crossSection: '/assets/product_details/awning-window-4.png',
      featureSections: [
        {
          title: 'Smart Ventilation Control',
          description: 'Top-hinged design allows fresh air circulation even during light rain. Perfect for maintaining indoor air quality while providing weather protection.',
          image: '/assets/product_details/awning-window-1.png',
          points: [
            'Rain-resistant ventilation',
            'Adjustable opening angles',
            'Weather-tight sealing'
          ],
          layout: 'left-image'
        },
        {
          title: 'Enhanced Security System',
          description: 'Multi-point locking mechanism with reinforced hardware ensures maximum security. Child-safe operation with easy-to-reach handles.',
          image: '/assets/product_details/awning-window-2.png',
          points: [
            'Multi-point locking system',
            'Reinforced frame structure',
            'Child-safe operation'
          ],
          layout: 'right-image'
        },
        {
          title: 'Superior Energy Performance',
          description: 'Advanced thermal break technology combined with Low-E glass options provides exceptional insulation and reduces energy consumption.',
          image: '/assets/product_details/awning-window-3.png',
          points: [
            'Thermal break aluminum',
            'Low-E double glazing',
            'Energy cost savings'
          ],
          layout: 'left-image'
        },
        {
          title: 'Versatile Installation Options',
          description: 'Flexible sizing and configuration options make awning windows suitable for various architectural styles and building requirements.',
          image: '/assets/product_details/awning-window-4.png',
          points: [
            'Custom size availability',
            'Multiple frame colors',
            'Easy installation process'
          ],
          layout: 'right-image'
        }
      ]
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
      crossSection: 'https://picsum.photos/400/300?random=102',
      featureSections: [
        {
          title: 'Panoramic Views',
          description: 'Fixed windows provide unobstructed panoramic views and maximum natural light penetration. Perfect for showcasing beautiful landscapes and architectural features.',
          image: '/assets/product_details/fixed-window-1.png',
          points: [
            'Maximum glass area',
            'Uninterrupted sightlines',
            'Enhanced natural lighting'
          ],
          layout: 'left-image'
        },
        {
          title: 'Superior Weather Sealing',
          description: 'Advanced sealing technology ensures complete weather protection. Fixed design eliminates air leakage points for superior energy efficiency.',
          image: '/assets/product_details/fixed-window-2.png',
          points: [
            'Triple weather seals',
            'Zero air infiltration',
            'Superior thermal performance'
          ],
          layout: 'right-image'
        },
        {
          title: 'Architectural Integration',
          description: 'Seamlessly integrates with operable window types to create comprehensive window solutions. Compatible with various architectural styles and building systems.',
          image: '/assets/product_details/fixed-window-3.png',
          points: [
            'Universal compatibility',
            'Flexible sizing options',
            'Architectural harmony'
          ],
          layout: 'left-image'
        },
        {
          title: 'Structural Excellence',
          description: 'Engineered for structural integrity in high-rise applications. Certified performance ratings ensure reliability in demanding installations.',
          image: '/assets/product_details/fixed-window-4.png',
          points: [
            'High-rise certified',
            'Structural reinforcement',
            'WERS performance rated'
          ],
          layout: 'right-image'
        }
      ]
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
      crossSection: 'https://picsum.photos/400/300?random=103',
      featureSections: [
        {
          title: 'Precision Airflow Control',
          description: 'Adjustable glass louvers allow precise control over ventilation and natural light. Tilt slats to direct airflow while maintaining privacy and weather protection.',
          image: '/assets/product_details/glass-louvre-window-1.png',
          points: [
            '360-degree slat rotation',
            'Precise ventilation control',
            'Weather-resistant operation'
          ],
          layout: 'left-image'
        },
        {
          title: 'Privacy & Light Management',
          description: 'Strategic louver positioning provides privacy without sacrificing natural light. Perfect for bathrooms, bedrooms, and street-facing installations.',
          image: '/assets/product_details/glass-louvre-window-2.png',
          points: [
            'Adjustable privacy levels',
            'Glare reduction capability',
            'Daylight optimization'
          ],
          layout: 'right-image'
        },
        {
          title: 'Ventilation & Natural Lighting',
          description: 'Adjustable glass louvre windows ensure excellent airflow while maintaining ample natural light indoors.',
          image: '/assets/product_details/glass-louvre-window-3.png',
          points: [
            'Excellent air circulation',
            'Ample natural lighting',
            'Energy-efficient ventilation'
          ],
          layout: 'left-image'
        },
        {
          title: 'Multiple Operation Options',
          description: 'Choose from manual, hand crank, or electric operation systems. Each offers smooth, reliable control with minimal maintenance requirements.',
          image: '/assets/product_details/glass-louvre-window-4.png',
          points: [
            'Manual lever operation',
            'Hand crank mechanism',
            'Electric motor option'
          ],
          layout: 'right-image'
        }
      ]
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
      crossSection: 'https://picsum.photos/400/300?random=104',
      featureSections: [
        {
          title: 'Seamless Indoor-Outdoor Living',
          description: 'Multi-panel stacking system creates expansive openings that blur the boundary between indoor and outdoor spaces. Perfect for entertaining and maximizing living areas.',
          image: '/assets/product_details/stacker-door-1.png',
          points: [
            'Wide opening capability',
            'Smooth stacking operation',
            'Enhanced entertaining space'
          ],
          layout: 'left-image'
        },
        {
          title: 'AS2047 Certified Performance',
          description: 'Meets rigorous Australian standards for security, weather resistance, and durability. Certified performance ensures reliability in harsh Australian conditions.',
          image: '/assets/product_details/stacker-door-2.png',
          points: [
            'Australian standard compliance',
            'Security certification',
            'Weather resistance tested'
          ],
          layout: 'right-image'
        },
        {
          title: 'Flexible Panel Configuration',
          description: 'Configurable from 3 to 6 panels with triple-track options. Custom widths accommodate various architectural requirements and opening sizes.',
          image: '/assets/product_details/stacker-door-3.png',
          points: [
            '3-6 panel options',
            'Triple-track system',
            'Custom width solutions'
          ],
          layout: 'left-image'
        },
        {
          title: 'Advanced Sliding Mechanism',
          description: 'Precision-engineered rollers and tracks ensure smooth, effortless operation. Heavy-duty hardware supports large glass panels with minimal maintenance.',
          image: '/assets/product_details/stacker-door-4.png',
          points: [
            'Precision roller system',
            'Effortless operation',
            'Low maintenance design'
          ],
          layout: 'right-image'
        }
      ]
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
      crossSection: 'https://picsum.photos/400/300?random=105',
      featureSections: [
        {
          title: 'Australian Standard Compliance',
          description: 'AS2047 certified to meet stringent Australian building standards for security, weather resistance, and durability in harsh climate conditions.',
          image: '/assets/product_details/sliding-door-1.png',
          points: [
            'AS2047 certification',
            'Security compliance',
            'Weather resistance'
          ],
          layout: 'left-image'
        },
        {
          title: 'Premium Security Screens',
          description: 'High-quality stainless steel mesh screens provide security without compromising views. Corrosion-resistant material perfect for coastal environments.',
          image: '/assets/product_details/sliding-door-2.png',
          points: [
            'Stainless steel mesh',
            'Corrosion resistance',
            'Unobstructed views'
          ],
          layout: 'right-image'
        },
        {
          title: 'Space-Saving Design',
          description: 'Horizontal sliding operation maximizes usable floor space. Ideal for areas where swing doors would be impractical or obstructive.',
          image: '/assets/product_details/sliding-door-3.png',
          points: [
            'Horizontal sliding',
            'Space maximization',
            'Unobstructed walkways'
          ],
          layout: 'left-image'
        },
        {
          title: 'Custom Design Solutions',
          description: 'Flexible sizing and design options accommodate various architectural requirements. Custom colors and hardware choices available.',
          image: '/assets/product_details/sliding-door-4.png',
          points: [
            'Custom sizing',
            'Color options',
            'Hardware choices'
          ],
          layout: 'right-image'
        }
      ]
    },
    {
      id: 7,
      name: 'Hinged Door',
      category: 'hinged-door',
      shortName: 'Hinged Door',
      // mainImage: '/assets/products/hinged-door.png',
      mainImage: '/assets/products/bi-folding-door.png',
      images: [
        // '/assets/products/hinged-door.png',
        '/assets/products/bi-folding-door.png',
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
      crossSection: 'https://picsum.photos/400/300?random=107',
      featureSections: [
        {
          title: 'Elegant Entry Solutions',
          description: 'Classic hinged design offers timeless elegance and smooth operation. Perfect for main entrances where traditional styling and reliable performance are essential.',
          image: '/assets/product_details/hinged-door-1.png',
          points: [
            'Traditional styling',
            'Smooth hinge operation',
            'Premium entrance appeal'
          ],
          layout: 'left-image'
        },
        {
          title: 'Superior Insulation Performance',
          description: 'Insulated panel options provide exceptional thermal and acoustic performance. Multi-chamber profiles and advanced sealing reduce energy loss and noise transmission.',
          image: '/assets/product_details/hinged-door-2.png',
          points: [
            'Thermal insulation panels',
            'Acoustic dampening',
            'Energy efficiency'
          ],
          layout: 'right-image'
        },
        {
          title: 'Advanced Security Hardware',
          description: 'Multi-point locking system engages at multiple points along the frame. Premium hardware ensures reliable security and smooth operation for years.',
          image: '/assets/product_details/hinged-door-3.png',
          points: [
            'Multi-point security locks',
            'Premium hardware finish',
            'Long-lasting reliability'
          ],
          layout: 'left-image'
        },
        {
          title: 'Flexible Configuration Options',
          description: 'Available in single or double panel configurations with custom sizing. Accommodates various architectural requirements and opening sizes.',
          image: '/assets/product_details/hinged-door-4.png',
          points: [
            'Single/double panel',
            'Custom dimensions',
            'Architectural flexibility'
          ],
          layout: 'right-image'
        }
      ]
    },
    {
      id: 8,
      name: 'Bi-folding Door',
      category: 'bi-folding-door',
      shortName: 'Bi-folding Door',
      // mainImage: '/assets/products/bi-folding-door.png',
      mainImage: '/assets/products/hinged-door.png',
      images: [
        // '/assets/products/bi-folding-door.png',
        '/assets/products/hinged-door.png',
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
      crossSection: '/assets/product_details/bi-folding-door-4.png',
      featureSections: [
        {
          title: 'Expansive Opening System',
          description: 'Bi-folding panels create dramatic wide openings that seamlessly connect indoor and outdoor living spaces. Perfect for entertaining and maximizing natural light.',
          image: '/assets/product_details/bi-folding-door-1.png',
          points: [
            '2-7 panel configurations',
            'Wide aperture capability',
            'Seamless indoor-outdoor flow'
          ],
          layout: 'left-image'
        },
        {
          title: 'Low Threshold Accessibility',
          description: 'Ultra-low threshold design provides seamless transition between indoor and outdoor areas. Ideal for accessibility requirements and contemporary aesthetics.',
          image: '/assets/product_details/bi-folding-door-2.png',
          points: [
            'Low profile threshold',
            'Step-free transition',
            'Universal accessibility'
          ],
          layout: 'right-image'
        },
        {
          title: 'Hidden Roller Technology',
          description: 'Precision-engineered hidden rollers provide smooth, effortless folding operation. Stainless steel components ensure long-term reliability and minimal maintenance.',
          image: '/assets/product_details/bi-folding-door-3.png',
          points: [
            'Hidden roller system',
            'Stainless steel hardware',
            'Smooth operation'
          ],
          layout: 'left-image'
        },
        {
          title: 'Contemporary Design Excellence',
          description: 'Slim sightlines and modern aesthetics complement contemporary architecture. Clean, minimalist appearance enhances the visual appeal of any space.',
          image: '/assets/product_details/bi-folding-door-4.png',
          points: [
            'Slim sightline design',
            'Contemporary aesthetics',
            'Minimalist appearance'
          ],
          layout: 'right-image'
        }
      ]
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

                    {/* Product Showcase - Data-Driven Feature Sections */}
                    <div className="mb-8">
                      <h2 className="text-xl font-bold text-slate-900 mb-6">Product Showcase</h2>
                      
                      {selectedProduct.featureSections && selectedProduct.featureSections.map((section, index) => (
                        <div 
                          key={index} 
                          className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-8 items-center"
                        >
                          {section.layout === 'left-image' ? (
                            <>
                              <div className="lg:col-span-6">
                                <img
                                  src={section.image}
                                  alt={section.title}
                                  className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                              </div>
                              <div className="lg:col-span-4">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{section.title}</h3>
                                <p className="text-slate-600 mb-3">{section.description}</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                  {section.points.map((point, pointIndex) => (
                                    <li key={pointIndex}>• {point}</li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="lg:col-span-4 lg:order-1">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{section.title}</h3>
                                <p className="text-slate-600 mb-3">{section.description}</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                  {section.points.map((point, pointIndex) => (
                                    <li key={pointIndex}>• {point}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="lg:col-span-6 lg:order-2">
                                <img
                                  src={section.image}
                                  alt={section.title}
                                  className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      ))}
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
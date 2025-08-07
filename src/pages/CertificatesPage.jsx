import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLoading from '../components/ImageWithLoading';
import { Link } from 'react-router-dom';
import FooterBar from '../components/FooterBar';

const CertificatesPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const categories = [
    { id: 'all', name: 'All Certificates' },
    { id: 'product', name: 'Product Certification' },
    { id: 'quality', name: 'Test Report' },
  ];

  const certificates = [
    {
      id: 1,
      name: 'ISO 9001:2015 Quality Management',
      category: 'quality',
      issuer: 'International Organization for Standardization',
      issueDate: '2024-01-15',
      expiryDate: '2027-01-14',
      description: 'Quality management system certification demonstrating our commitment to consistent quality and continuous improvement in manufacturing processes.',
      image: '/assets/certificates/report-1.png',
      downloadUrl: '#',
    },
    {
      id: 2,
      name: 'AS/NZS 2047 Windows and External Glazed Doors',
      category: 'product',
      issuer: 'Standards Australia',
      issueDate: '2024-03-20',
      expiryDate: '2029-03-19',
      description: 'Compliance with Australian and New Zealand standards for windows and external glazed doors, ensuring safety, performance, and durability.',
      image: '/assets/certificates/certificate-1.png',
      downloadUrl: '#',
    },
    {
      id: 3,
      name: 'Energy Rating Certification',
      category: 'product',
      issuer: 'Australian Window Association',
      issueDate: '2024-01-30',
      expiryDate: '2027-01-29',
      description: 'Energy efficiency ratings for windows and doors, helping customers achieve optimal thermal performance.',
      image: '/assets/certificates/certificate-2.png',
      downloadUrl: '#',
    },
    {
      id: 4,
      name: 'Product Performance Certificate',
      category: 'product',
      issuer: 'Certification Authority',
      issueDate: '2024-02-15',
      expiryDate: '2027-02-14',
      description: 'Comprehensive product performance testing and validation for Australian conditions.',
      image: '/assets/certificates/certificate-3.png',
      downloadUrl: '#',
    },
    {
      id: 5,
      name: 'Quality Test Report',
      category: 'quality',
      issuer: 'Independent Testing Lab',
      issueDate: '2024-03-10',
      expiryDate: '2027-03-09',
      description: 'Detailed quality assessment report covering material specifications and performance standards.',
      image: '/assets/certificates/report-2.png',
      downloadUrl: '#',
    },
    {
      id: 6,
      name: 'Safety Compliance Report',
      category: 'quality',
      issuer: 'Safety Standards Institute',
      issueDate: '2024-04-05',
      expiryDate: '2027-04-04',
      description: 'Comprehensive safety compliance testing ensuring all products meet international safety standards.',
      image: '/assets/certificates/report-3.png',
      downloadUrl: '#',
    },
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('certificates.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('certificates.description')}
          </p>
        </div> */}

        {/* Category Filter */}
        {/* <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div> */}

        {/* Results Count */}
        {/* <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing {filteredCertificates.length} of {certificates.length} certificates
          </p>
        </div> */}

        {/* <!-- Professional Certificate Display Section --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* <!-- Main Title --> */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            QUALIFICATION CERTIFICATE
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have passed international testing and certifications through authorized labs and third-party inspections, ensuring the highest quality for our products.
          </p>
        </div>

        {/* Product Certificates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Product Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.filter(cert => cert.category === 'product').map((certificate, index) => (
              <div key={certificate.id} className="flex justify-center">
                <div className="relative">
                  <div className="w-full max-w-sm">
                    <div className="border-4 border-amber-400 rounded-lg p-2 bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg">
                      <ImageWithLoading
                        src={certificate.image}
                        alt={certificate.name}
                        className="w-full h-64 object-cover rounded-md"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test Reports Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Test Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.filter(cert => cert.category === 'quality').map((certificate, index) => (
              <div key={certificate.id} className="flex justify-center">
                <div className="relative">
                  <div className="w-full max-w-sm">
                    <div className="border-4 border-amber-400 rounded-lg p-2 bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg">
                      <ImageWithLoading
                        src={certificate.image}
                        alt={certificate.name}
                        className="w-full h-64 object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No certificates found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCertificate.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <ImageWithLoading
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedCertificate.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Issuer</h4>
                    <p className="text-gray-600">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Category</h4>
                    <p className="text-gray-600">
                      {categories.find(c => c.id === selectedCertificate.category)?.name}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Issue Date</h4>
                    <p className="text-gray-600">
                      {new Date(selectedCertificate.issueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Expiry Date</h4>
                    <p className="text-gray-600">
                      {new Date(selectedCertificate.expiryDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={selectedCertificate.downloadUrl}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                  >
                    Download Certificate
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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

export default CertificatesPage;
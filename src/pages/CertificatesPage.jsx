import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLoading from '../components/ImageWithLoading';
import { Link } from 'react-router-dom';

const CertificatesPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const categories = [
    { id: 'all', name: 'All Certificates' },
    { id: 'quality', name: 'Quality Management' },
    { id: 'product', name: 'Product Certification' },
    { id: 'environmental', name: 'Environmental' },
    { id: 'safety', name: 'Safety Standards' },
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
      image: 'https://picsum.photos/600x400?random=24',
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
      image: 'https://picsum.photos/600x400?random=25',
      downloadUrl: '#',
    },
    {
      id: 3,
      name: 'Green Building Council Australia',
      category: 'environmental',
      issuer: 'Green Building Council of Australia',
      issueDate: '2024-02-10',
      expiryDate: '2027-02-09',
      description: 'Green Star certification for sustainable building products, contributing to environmentally responsible construction.',
      image: 'https://picsum.photos/600x400?random=26',
      downloadUrl: '#',
    },
    {
      id: 4,
      name: 'Cyclone Testing Certification',
      category: 'safety',
      issuer: 'James Cook University Cyclone Testing Station',
      issueDate: '2024-04-05',
      expiryDate: '2029-04-04',
      description: 'Certification for cyclone-resistant windows and doors, tested to withstand Category 5 cyclone conditions.',
      image: 'https://picsum.photos/600x400?random=27',
      downloadUrl: '#',
    },
    {
      id: 5,
      name: 'Energy Rating Certification',
      category: 'product',
      issuer: 'Australian Window Association',
      issueDate: '2024-01-30',
      expiryDate: '2027-01-29',
      description: 'Energy efficiency ratings for windows and doors, helping customers achieve optimal thermal performance.',
      image: 'https://picsum.photos/600x400?random=28',
      downloadUrl: '#',
    },
    {
      id: 6,
      name: 'Security Screen Standards AS5039',
      category: 'safety',
      issuer: 'Standards Australia',
      issueDate: '2024-05-15',
      expiryDate: '2029-05-14',
      description: 'Compliance with security screen door and window grille standards for enhanced home security.',
      image: 'https://picsum.photos/600x400?random=29',
      downloadUrl: '#',
    },
    {
      id: 7,
      name: 'Bushfire Attack Level (BAL) Certification',
      category: 'safety',
      issuer: 'CSIRO',
      issueDate: '2024-03-10',
      expiryDate: '2029-03-09',
      description: 'BAL-40 certification for bushfire-prone areas, providing enhanced protection against ember attack.',
      image: 'https://picsum.photos/600x400?random=30',
      downloadUrl: '#',
    },
    {
      id: 8,
      name: 'Environmental Product Declaration',
      category: 'environmental',
      issuer: 'EPD Australasia',
      issueDate: '2024-06-01',
      expiryDate: '2027-05-31',
      description: 'Comprehensive environmental impact assessment of our products throughout their lifecycle.',
      image: 'https://picsum.photos/600x400?random=31',
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('certificates.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('certificates.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
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
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing {filteredCertificates.length} of {certificates.length} certificates
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <ImageWithLoading
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {categories.find(c => c.id === certificate.category)?.name}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {certificate.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Issuer:</span> {certificate.issuer}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Valid until:</span> {new Date(certificate.expiryDate).toLocaleDateString()}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(certificate)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    View Details
                  </button>
                  <a
                    href={certificate.downloadUrl}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm text-center"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default CertificatesPage;
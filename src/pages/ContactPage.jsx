import React from 'react';
import ContactSection from '../components/ContactSection';
import FooterBar from '../components/FooterBar';

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <ContactSection />
      <FooterBar />
    </div>
  );
};

export default ContactPage;
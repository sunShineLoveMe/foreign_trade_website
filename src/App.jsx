import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import i18n from './i18n';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import HurricaneWindowsPage from './pages/HurricaneWindowsPage';
import AboutPage from './pages/AboutPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import AnimatedPage from './components/AnimatedPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <AnimatedPage>
            <HomePage />
          </AnimatedPage>
        } />
        <Route path="/en" element={
          <AnimatedPage>
            <HomePage />
          </AnimatedPage>
        } />
        <Route path="/cn" element={
          <AnimatedPage>
            <HomePage />
          </AnimatedPage>
        } />
        <Route path="/products" element={
          <AnimatedPage>
            <ProductsPage />
          </AnimatedPage>
        } />
        <Route path="/about" element={
          <AnimatedPage>
            <AboutPage />
          </AnimatedPage>
        } />
        <Route path="/certificates" element={
          <AnimatedPage>
            <CertificatesPage />
          </AnimatedPage>
        } />
        <Route path="/contact" element={
          <AnimatedPage>
            <ContactPage />
          </AnimatedPage>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
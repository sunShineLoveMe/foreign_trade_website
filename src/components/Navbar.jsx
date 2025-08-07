import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'cn' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/products', key: 'products' },
    { path: '/about', key: 'about' },
    { path: '/certificates', key: 'certificates' },
    { path: '/contact', key: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/footer/logo.png"
              alt="SUPERBUILD Logo"
              className="w-16 h-16 object-cover"
            />
            <Link 
              to="/" 
              className={`text-2xl font-bold flex flex-col ${
                isScrolled ? 'text-blue-900' : 'text-blue-900'
              }`}
            >
              <span className="text-base font-black uppercase" style={{fontFamily: '"Impact", "Arial Black", "Helvetica Neue", sans-serif', fontWeight: 800, letterSpacing: '0.08em', transform: 'skew(-3deg)', textShadow: '2px 2px 4px rgba(30, 58, 138, 0.15)', filter: 'contrast(1.3)', color: '#1e3a8a'}}>SUPERBUILD</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-lg font-medium rounded-md transition-all duration-200 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-black bg-gray-100'
                    : isScrolled
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-black hover:text-slate-900 hover:bg-gray-100'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className={`ml-4 px-3 py-2 text-lg font-medium rounded-md transition-all duration-200 ${
                isScrolled
                  ? 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                  : 'text-black bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {i18n.language === 'en' ? '中文' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className={`mr-4 px-3 py-2 text-lg font-medium rounded-md ${
                isScrolled
                  ? 'text-slate-600 bg-slate-100'
                  : 'text-black bg-gray-100'
              }`}
            >
              {i18n.language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white shadow-xl border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-lg font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
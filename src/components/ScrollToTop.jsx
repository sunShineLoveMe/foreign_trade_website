import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    const scrollToTop = () => {
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      
      if (isSmoothScrollSupported) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, 0);
      }
    };

    // Add a small delay to ensure DOM is updated before scrolling
    const timer = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
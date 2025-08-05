import {
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
    FaGooglePlusG,
  } from "react-icons/fa";
  
  export default function FooterBar() {
    return (
      <footer className="bg-white shadow-inner px-6 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          {/* 左侧：Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/80"
              alt="YY Windows Logo"
              className="w-10 h-10 rounded object-cover"
            />
            <span className="text-lg font-semibold text-blue-900">
              YY WINDOWS
            </span>
          </div>
  
          {/* 中间：版权信息 */}
          <div className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2025. YY Construction. All rights reserved.
          </div>
  
          {/* 右侧：社交图标 */}
          <div className="flex gap-4 text-gray-600 text-xl">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-75">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Google Plus" className="hover:opacity-75">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
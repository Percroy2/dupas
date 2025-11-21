import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/offres', label: 'Offres' },
    { path: '/actualites', label: 'Actualités' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-light-200/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-4 border-primary-500">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            {!logoError ? (
              <img
                src="/images/logo.png"
                alt="Dupas Terrassement"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Dupas Terrassement</span>
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-800 hover:text-primary-500 font-semibold px-4 py-2 rounded-lg transition-all duration-300 relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-primary-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-500 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-xl text-black hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-primary-500 bg-light-200/98 backdrop-blur-md animate-slide-up">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-800 hover:text-primary-500 hover:bg-primary-50 rounded-xl font-semibold transition-all duration-300 border-l-4 border-transparent hover:border-primary-500 hover:shadow-sm active:scale-[0.98]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


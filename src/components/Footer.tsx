import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contact';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-secondary-700 to-black text-white relative overflow-hidden">
      {/* Pattern de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Menus */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Menus
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/offres" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Offres
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mentions Obligatoires */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Mentions Obligatoires
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mentions-legales" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/politique-cookies" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Politique de cookies (UE)
                </Link>
              </li>
              <li>
                <Link to="/conditions-generales" className="text-gray-300 hover:text-primary-400 transition-all duration-300 inline-block transform hover:translate-x-2">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Contacts
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-primary-400 transition-all duration-300">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-primary-400 transition-all duration-300 break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <svg className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t-2 border-primary-500/30">
          <h3 className="text-white font-bold text-xl mb-6">Suivez nous sur les réseaux</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-white/20"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href={contactInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-white/20"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href={contactInfo.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-white/20"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-primary-500/30 text-center">
          <p className="text-gray-400 text-sm">
            Droits d'auteur © {new Date().getFullYear()} <span className="text-white font-semibold">Dupas Terrassement</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}


import { Link } from 'react-router-dom';
import { services } from '../data/services';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  const getPlaceholderImage = (serviceId: string) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Crect fill="%23e5e7eb" width="400" height="250"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E${serviceId}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section className="section-padding bg-light-100">
      <div className="container-custom">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm font-semibold text-gray-700">Nos Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Services Proposés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos principaux services dédiés aux travaux de terrassement, d'assainissement et aux travaux publics
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              direction="up"
              delay={index * 100}
            >
              <Link
                to="/contact"
                className="block h-full group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col overflow-hidden border border-gray-100 hover:border-gray-300">
                  {/* Image du service */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={service.image || getPlaceholderImage(service.id)}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = getPlaceholderImage(service.id);
                      }}
                    />
                    {/* Overlay subtil au hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Badge "En savoir plus" */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <div className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg backdrop-blur-sm border border-gray-200">
                        En savoir plus →
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Titre */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      {/* Séparateur élégant */}
                      <div className="w-12 h-0.5 bg-gray-300 group-hover:bg-gray-400 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-4 line-clamp-4">
                      {service.description}
                    </p>
                    
                    {/* Lien discret en bas */}
                    <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 inline-flex items-center gap-2 transition-colors">
                        Découvrir ce service
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection direction="fade" className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-10 lg:p-16 text-white shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Obtenez un devis gratuit et personnalisé pour vos travaux de terrassement ou d'assainissement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-block border-2 border-white/20"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33617631867"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                📞 06 17 63 18 67
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


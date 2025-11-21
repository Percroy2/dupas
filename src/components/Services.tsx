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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              direction="up"
              delay={index * 100}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-200 hover:border-gray-400">
                {/* Image du service */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={service.image || getPlaceholderImage(service.id)}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getPlaceholderImage(service.id);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      En savoir plus
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-gray-400 to-gray-600 mb-5 transform group-hover:w-32 transition-all duration-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
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


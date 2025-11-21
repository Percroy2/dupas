import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden border-b-4 border-black min-h-[90vh] flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/TERRASSEMENT-2-WEB.webp"
          alt="Terrassement Dupas"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/TERRASSEMENT-WEB-1024x768.webp';
          }}
        />
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        {/* Overlay rouge subtil pour l'identité de marque */}
        <div className="absolute inset-0 bg-primary-500/20"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <AnimatedSection direction="fade" delay={0}>
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold text-white/90">Expertise depuis 2013</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
                Dupas Terrassement
              </h1>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={100}>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-6 text-white/95 font-medium">
                Entreprise de terrassement et assainissement à Cartignies
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200}>
              <p className="text-lg sm:text-xl mb-6 text-white/90 leading-relaxed">
                Fondée en 2013 à Cartignies par Gabriel Dupas, l'entreprise est aujourd'hui dirigée par Kevin Lefebvre, qui perpétue les mêmes valeurs de qualité, de proximité et de confiance.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={300}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Chantiers propres</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Respect des délais</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Entreprise locale</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-block text-center border-2 border-white"
                >
                  Demander un devis gratuit
                </Link>
                <Link 
                  to="/offres" 
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm inline-block text-center"
                >
                  Découvrir nos services
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Image principale */}
          <AnimatedSection direction="right" delay={200} className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-700 group border-4 border-white/20">
              <img
                src="/images/ENROBE-2-WEB-1024x768.webp"
                alt="Travaux d'enrobé Dupas Terrassement"
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/ENROBE-1-WEB-1024x768.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


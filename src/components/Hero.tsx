import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative text-white overflow-hidden border-b-4 border-black min-h-screen flex items-center"
    >
      {/* Image de fond avec parallaxe */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px) scale(1.1)`,
          }}
        >
          <img
            src="/images/TERRASSEMENT-2-WEB.webp"
            alt="Terrassement Dupas"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/TERRASSEMENT-WEB-1024x768.webp';
            }}
          />
        </div>
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
        
        {/* Formes géométriques animées */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cercle animé 1 */}
          <div 
            className="absolute w-96 h-96 rounded-full border-2 border-white/10 blur-3xl animate-float"
            style={{
              top: '10%',
              left: '10%',
              animationDelay: '0s',
              animationDuration: '20s',
            }}
          />
          {/* Cercle animé 2 */}
          <div 
            className="absolute w-80 h-80 rounded-full border-2 border-white/10 blur-3xl animate-float"
            style={{
              bottom: '20%',
              right: '15%',
              animationDelay: '5s',
              animationDuration: '25s',
            }}
          />
          {/* Forme géométrique 3 */}
          <div 
            className="absolute w-72 h-72 border-2 border-white/5 blur-2xl rotate-45 animate-float"
            style={{
              top: '50%',
              right: '10%',
              animationDelay: '10s',
              animationDuration: '30s',
            }}
          />
        </div>
      </div>

      {/* Gradient animé en arrière-plan */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte avec animations */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge animé */}
            <div 
              className={`inline-block mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="text-sm font-semibold text-white/95">Expertise depuis 2013</span>
            </div>

            {/* Titre principal avec animation de typing */}
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <span className="inline-block animate-gradient-text bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                Dupas Terrassement
              </span>
            </h1>

            {/* Sous-titre animé */}
            <p 
              className={`text-xl sm:text-2xl lg:text-3xl mb-6 text-white/95 font-medium transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              Entreprise de terrassement et assainissement à Cartignies
            </p>

            {/* Description animée */}
            <p 
              className={`text-lg sm:text-xl mb-8 text-white/90 leading-relaxed transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              Fondée en 2013 à Cartignies par Gabriel Dupas, l'entreprise est aujourd'hui dirigée par Kevin Lefebvre, qui perpétue les mêmes valeurs de qualité, de proximité et de confiance.
            </p>

            {/* Points clés animés */}
            <div 
              className={`flex flex-wrap gap-4 mb-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.9s' }}
            >
              {[
                { text: 'Chantiers propres', icon: '✓' },
                { text: 'Respect des délais', icon: '✓' },
                { text: 'Entreprise locale', icon: '✓' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${1.1 + index * 0.1}s both`,
                  }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Boutons CTA animés */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.2s' }}
            >
              <Link 
                to="/contact" 
                className="group relative bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-block text-center border-2 border-white overflow-hidden"
              >
                <span className="relative z-10">Demander un devis gratuit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link 
                to="/offres" 
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-md inline-block text-center hover:shadow-2xl"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>

          {/* Image principale avec effet 3D */}
          <div 
            className={`hidden lg:block transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group border-4 border-white/20"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePosition.x - 50) * 0.05}deg) rotateX(${(mousePosition.y - 50) * -0.05}deg)`,
              }}
            >
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
              
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


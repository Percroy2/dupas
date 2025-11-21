import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function History() {
  return (
    <section className="section-padding bg-gradient-to-b from-light-200 to-light-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenu texte */}
            <div>
              <AnimatedSection direction="fade" className="mb-10">
                <div className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full">
                  <span className="text-sm font-semibold text-gray-700">À propos</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Notre histoire
                </h2>
              </AnimatedSection>
              
              <div className="prose prose-lg max-w-none">
                <AnimatedSection direction="right" delay={0}>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Fondée à Cartignies en 2013 par <strong>Gabriel Dupas</strong>, Dupas Terrassement s'est imposée au fil des années comme une référence locale en terrassement, assainissement et aménagement extérieur.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection direction="right" delay={100}>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En octobre 2024, <strong>Kevin Lefebvre</strong> a repris le flambeau avec la même passion, continuant l'engagement de l'entreprise pour la qualité, la transparence et le service de proximité.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection direction="right" delay={200}>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Nous intervenons dans tout l'Avesnois, auprès des particuliers, professionnels, collectivités (3CA Cœur de l'Avesnois, communes d'Avesnelles, Dompierre, Saint-Hilaire-sur-Helpe…) et EPIC comme l'Office Public de l'Habitat de Fourmies (OPH) ou les Sociétés Anonyme de HLM comme Avesnoise Promocil, et chaque chantier compte : que ce soit un aménagement de terrain, la pose d'une micro-station ou la fourniture de bennes, notre souci du détail et du respect des délais reste le même.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection direction="up" delay={300}>
                  <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-gray-400 p-8 my-8 rounded-r-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                    <p className="text-gray-800 font-bold text-lg mb-3">
                      En savoir plus sur DUPAS TERRASSEMENT
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Dupas Terrassement évolue, mais son esprit reste le même. Avec la reprise de l'entreprise par Kevin Lefebvre en octobre 2024, une nouvelle dynamique s'installe : innovation, proximité et continuité du savoir-faire.
                    </p>
                    <a
                      href={`${window.location.origin}/images/CP-SEPTEMBRE-2025-REPRISE-DE-DUPAS-TERRASSEMENT.pdf`}
                      download="CP-SEPTEMBRE-2025-REPRISE-DE-DUPAS-TERRASSEMENT.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        const link = document.createElement('a');
                        link.href = '/images/CP-SEPTEMBRE-2025-REPRISE-DE-DUPAS-TERRASSEMENT.pdf';
                        link.download = 'CP-SEPTEMBRE-2025-REPRISE-DE-DUPAS-TERRASSEMENT.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105 hover:gap-3"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger le Communiqué de Presse
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Image */}
            <AnimatedSection direction="left" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-700 group border-4 border-gray-200">
                <img
                  src="/images/TERRASSEMENT-2-WEB.webp"
                  alt="Chantier de terrassement Dupas Terrassement"
                  className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/TERRASSEMENT-WEB-1024x768.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA - Pleine largeur */}
          <AnimatedSection direction="up" delay={400} className="mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 lg:p-12 text-white shadow-xl">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Un projet en tête ?
                </h3>
                <p className="mb-8 text-white/90 text-lg max-w-2xl mx-auto">
                  Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


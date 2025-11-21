import { Link } from 'react-router-dom';
import { services } from '../data/services';
import AnimatedSection from '../components/AnimatedSection';
import Values from '../components/Values';
import Contact from '../components/Contact';

export default function Offers() {
  const mainServices = services.filter(
    (s) => ['terrassement', 'assainissement', 'enrobe', 'benne', 'transport', 'amenagement'].includes(s.id)
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white section-padding border-b-4 border-gray-800 overflow-hidden">
        {/* Pattern de fond */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="fade" className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white/95">Nos Services</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Services professionnels
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-10 max-w-3xl mx-auto">
              Basée à Cartignies, Dupas Terrassement réalise vos projets de terrassement, d'assainissement et de VRD dans l'Avesnois. Nous accompagnons particuliers et professionnels pour la création de fondations, la mise en place de réseaux ou l'aménagement de terrain.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Proposés */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection direction="fade" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Services Proposés
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Basée à Cartignies, Dupas Terrassement réalise vos projets de terrassement, d'assainissement et de VRD dans l'Avesnois. Nous accompagnons particuliers et professionnels pour la création de fondations, la mise en place de réseaux ou l'aménagement de terrain.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mainServices.map((service, index) => (
              <AnimatedSection
                key={service.id}
                direction="up"
                delay={index * 100}
              >
                <div className="bg-light-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border border-neutral-200">
                  {service.image && (
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-secondary-500 mb-4 transform group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-gray-900 font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    Demander un devis gratuit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location de Bennes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="fade" className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Location de Bennes
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="up">
              <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Nous mettons à votre disposition des bennes pour tous vos chantiers, travaux ou débarras. Livraison et récupération directement sur site pour simplifier la gestion de vos déchets.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-block border-2 border-white"
                >
                  Demander une benne
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <Values />

      {/* Services détaillés */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection direction="fade" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Services de terrassement et assainissement par DUPAS TERRASSEMENT
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Chez DUPAS TERRASSEMENT, chaque intervention en terrassement ou en assainissement est autant un projet technique qu'un engagement de qualité locale. Basés à Cartignies, commune faisant partie de la Communauté de Communes du Cœur de l'Avesnois (3CA), nous intervenons dans tout le bassin du Sambre-Avesnois pour accompagner particuliers, collectivités et entreprises régionales dans leurs travaux de fondation, de réseau, de plateforme ou de traitement des eaux.
              </p>
            </AnimatedSection>

            {/* Service Terrassement */}
            <AnimatedSection direction="up" delay={0} className="mb-12">
              <div className="bg-light-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Service Terrassement : fondations solides des chantiers
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le terrassement constitue la première étape déterminante d'un ouvrage : qu'il s'agisse de la préparation d'un terrain pour une construction, d'un agrandissement, d'une création d'accès, ou de la remise à niveau d'un site, notre équipe s'appuie sur du matériel performant et une expertise fine.
                </p>
                <p className="text-gray-700 font-semibold mb-2">Nous réalisons :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>la fouille, le décaissement, le déblai / remblai,</li>
                  <li>le nivellement et la mise en forme du terrain,</li>
                  <li>la mise en place de massifs et plateformes drainantes,</li>
                  <li>l'évacuation ou valorisation des déblais en partenariat avec des carrières régionales.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Cette démarche garantit un résultat durable : un terrain préparé dans les règles de l'art, capable de recevoir enrobé, pavage ou réseau en toute sérénité.
                </p>
              </div>
            </AnimatedSection>

            {/* Service Assainissement */}
            <AnimatedSection direction="up" delay={100} className="mb-12">
              <div className="bg-light-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Service Assainissement : réseau et respect des normes
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Côté assainissement, DUPAS TERRASSEMENT intervient pour la mise en place et la rénovation des dispositifs d'évacuation des eaux : installations de micro-stations, raccordements aux tout-à-l'égout, pose de canalisations, systèmes de traitement des eaux pluviales et usées. Nous suivons les exigences réglementaires en vigueur, notamment celles établies par le Service Public pour l'assainissement individuel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cela inclut le respect des pentes, des diamètres, des matériaux agréés et des contrôles qualité. Le bon dimensionnement et la bonne exécution garantissent le bon fonctionnement dans la durée, limitent les risques de failles, et protègent l'environnement.
                </p>
              </div>
            </AnimatedSection>

            {/* Services récents */}
            <AnimatedSection direction="up" delay={200} className="mb-12">
              <div className="bg-light-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Services récents et domaines d'intervention
                </h3>
                <p className="text-gray-700 font-semibold mb-2">Ces dernières années, nous avons travaillé sur :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>des lotissements nécessitant la pose complète de réseaux VRD (voirie, assainissement, éclairage) pour des communes de la région,</li>
                  <li>des particuliers ayant besoin d'une installation clé-en-main pour micro-station + raccordement réseau + aménagement extérieur,</li>
                  <li>des entreprises ayant créé ou réaménagé des plateformes logistiques ou industrielles, avec terrassement lourd, plate-forme stabilisée, enrobé et évacuation des eaux.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Notre rayon d'action s'étend à environ 40 km autour de Cartignies, notamment vers Avesnes-sur-Helpe, Fourmies, Maroilles, Le Quesnoy et Maubeuge. Cette localisation nous permet une réactivité forte, un suivi direct sur chantier et une relation de proximité avec nos clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection direction="fade" className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Pourquoi choisir DUPAS TERRASSEMENT ?
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Une équipe expérimentée et polyvalente capable de traiter des projets variés (particuliers, collectivités, entreprises).',
                'Du matériel moderne, entretenu et adapté aux contraintes du terrain et des délais.',
                'Des méthodes rigoureuses : respect des normes, suivi de chantier, communication régulière et transparence.',
                'Un ancrage local : en travaillant avec des fournisseurs régionaux, nous contribuons à l\'économie locale tout en évitant les délais et les surcoûts liés aux transports.',
                'Une ambition de qualité durable : parce que bâtir "pour demain" passe par une préparation solide du terrain et un assainissement bien exécuté.',
              ].map((point, index) => (
                <AnimatedSection
                  key={index}
                  direction="right"
                  delay={index * 100}
                >
                  <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection direction="up" delay={500} className="mt-12">
              <div className="bg-gray-50 border-l-4 border-gray-400 p-8 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Nos perspectives et vos projets
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous développons actuellement de nouvelles offres autour de la gestion des eaux pluviales en zone urbaine, de la mise en place de cours perméables et de la réhabilitation de fossés et réseaux d'évacuation. Notre objectif est de proposer des services toujours plus performantes, durables et adaptées aux attentes des collectivités comme des particuliers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Quel que soit votre projet – petite entrée de maison ou plateforme logistique – nous sommes à vos côtés, de l'étude au devis puis à la réalisation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section avant Contact */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container-custom">
          <AnimatedSection direction="fade" className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Obtenez un devis gratuit et personnalisé. Notre équipe vous accompagne de l'étude à la réalisation de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-block border-2 border-white/20"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33617631867"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                📞 06 17 63 18 67
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <Contact />
        </div>
      </section>
    </main>
  );
}



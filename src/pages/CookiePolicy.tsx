import AnimatedSection from '../components/AnimatedSection';
import { contactInfo } from '../data/contact';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen">
      {/* En-tête de page */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white section-padding border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="fade" className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
              Politique de Cookies (UE)
            </h1>
            <p className="text-lg text-white/95">En vigueur au {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-padding bg-light-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

          <div className="bg-light-200 rounded-lg shadow-md p-8 space-y-8">
            <AnimatedSection direction="up" delay={0}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  1. Qu'est-ce qu'un cookie ?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet au site de reconnaître votre navigateur et de mémoriser certaines informations vous concernant.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  2. Types de cookies utilisés
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Cookies strictement nécessaires
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Cookies de session pour maintenir votre navigation</li>
                      <li>Cookies de consentement pour mémoriser vos préférences</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">Base légale : intérêt légitime</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Cookies de préférences
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Ces cookies permettent au site de mémoriser vos choix (langue, région, etc.) pour améliorer votre expérience.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Base légale : consentement</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Cookies statistiques
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site (pages visitées, durée de visite, etc.) pour améliorer nos services.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Base légale : consentement</p>
                  </div>

                  <div className="border-l-4 border-primary-600 pl-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Cookies marketing
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Ces cookies permettent de vous proposer des publicités adaptées à vos centres d'intérêt et de mesurer l'efficacité de nos campagnes.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Base légale : consentement</p>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  3. Durée de conservation
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les cookies sont conservés pour les durées suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
                  <li><strong>Cookies de consentement :</strong> 13 mois maximum</li>
                  <li><strong>Cookies statistiques :</strong> 13 mois maximum</li>
                  <li><strong>Cookies marketing :</strong> 13 mois maximum</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  4. Gestion de vos cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vous pouvez à tout moment gérer vos préférences de cookies :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Via le bandeau de consentement affiché lors de votre première visite</li>
                  <li>En modifiant les paramètres de votre navigateur</li>
                  <li>En nous contactant à : <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">{contactInfo.email}</a></li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  5. Paramétrage de votre navigateur
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vous pouvez configurer votre navigateur pour refuser les cookies. Voici les liens vers les pages d'aide des principaux navigateurs :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Safari</a></li>
                  <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Microsoft Edge</a></li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Attention :</strong> Le refus des cookies peut affecter certaines fonctionnalités du site.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  6. Cookies tiers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Notre site peut contenir des cookies provenant de services tiers (réseaux sociaux, analytics, etc.). Ces cookies sont soumis aux politiques de confidentialité de ces tiers.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={600}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  7. Contact
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant notre utilisation des cookies, contactez-nous :
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700"><strong>Dupas Terrassement</strong></p>
                  <p className="text-gray-700">{contactInfo.address}</p>
                  <p className="text-gray-700">Email : <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">{contactInfo.email}</a></p>
                  <p className="text-gray-700">Téléphone : <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700">{contactInfo.phone}</a></p>
                </div>
              </section>
            </AnimatedSection>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}


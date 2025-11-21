import AnimatedSection from '../components/AnimatedSection';
import { contactInfo } from '../data/contact';

export default function PrivacyPolicy() {
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
              Politique de Confidentialité
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
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  La présente politique de confidentialité a pour objectif d'informer les utilisateurs du site sur la manière dont Dupas Terrassement collecte, utilise et protège les informations personnelles qui lui sont communiquées.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, nous nous engageons à protéger la confidentialité de vos données personnelles.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  2. Données collectées
                </h2>
                <p className="text-gray-700 font-semibold mb-2">Nous collectons les données suivantes :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
                  <li><strong>Données de contact :</strong> messages envoyés via le formulaire de contact</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  3. Finalités du traitement
                </h2>
                <p className="text-gray-700 font-semibold mb-2">Vos données personnelles sont utilisées pour :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Améliorer nos services et votre expérience sur le site</li>
                  <li>Vous informer de nos actualités (avec votre consentement)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  4. Base légale du traitement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Le traitement de vos données personnelles est basé sur :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                  <li>Votre consentement pour l'envoi de communications marketing</li>
                  <li>L'exécution d'un contrat ou de mesures précontractuelles (devis, contact)</li>
                  <li>Notre intérêt légitime pour l'amélioration de nos services</li>
                  <li>Le respect de nos obligations légales</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  5. Conservation des données
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vos données personnelles sont conservées pour les durées suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                  <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  6. Partage des données
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vos données personnelles ne sont pas vendues, louées ou échangées à des tiers. Elles peuvent être partagées avec :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                  <li>Nos prestataires techniques (hébergement, maintenance)</li>
                  <li>Les autorités compétentes en cas d'obligation légale</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Tous nos prestataires sont soumis à des obligations de confidentialité strictes.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={600}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  7. Vos droits
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> vous pouvez obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> vous pouvez corriger vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> vous pouvez demander la limitation du traitement</li>
                  <li><strong>Droit à la portabilité :</strong> vous pouvez récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter le traitement antérieur</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">{contactInfo.email}</a>
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.cnil.fr</a>
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={700}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  8. Sécurité des données
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={800}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  9. Contact
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
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


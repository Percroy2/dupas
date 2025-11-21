import AnimatedSection from '../components/AnimatedSection';
import { contactInfo } from '../data/contact';

export default function TermsOfService() {
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
              Conditions Générales
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
                  1. Objet
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Les présentes conditions générales régissent les relations entre Dupas Terrassement et ses clients dans le cadre de la réalisation de prestations de terrassement, d'assainissement et de travaux publics.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Toute commande implique l'acceptation sans réserve des présentes conditions générales.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  2. Devis et commande
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Toute demande de devis est gratuite et sans engagement. Le devis est valable 30 jours à compter de sa date d'émission.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La commande devient ferme et définitive après signature du devis par le client et acceptation par Dupas Terrassement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Toute modification du projet après acceptation du devis pourra donner lieu à un avenant au devis initial.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  3. Prix
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les prix sont indiqués en euros, hors taxes (HT) et toutes taxes comprises (TTC). Ils sont valables pour la durée de validité du devis.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les prix comprennent la main-d'œuvre, les matériaux et les équipements nécessaires à la réalisation des travaux, sauf mention contraire dans le devis.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tout supplément non prévu dans le devis initial fera l'objet d'un avenant signé par les deux parties.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  4. Conditions de paiement
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les conditions de paiement sont précisées dans chaque devis. En général :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Un acompte peut être demandé à la commande (généralement 30% du montant HT)</li>
                  <li>Des acomptes peuvent être demandés selon l'avancement des travaux</li>
                  <li>Le solde est exigible à la réception des travaux</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Tout retard de paiement entraîne de plein droit l'application d'intérêts de retard au taux de 3 fois le taux légal, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  5. Réalisation des travaux
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dupas Terrassement s'engage à réaliser les travaux conformément aux règles de l'art et aux normes en vigueur.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les délais indiqués dans le devis sont donnés à titre indicatif. Ils ne constituent pas des délais impératifs sauf mention expresse dans le devis.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le client s'engage à :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Mettre à disposition le chantier dans les conditions prévues</li>
                  <li>Effectuer les démarches administratives nécessaires (permis, déclarations, etc.)</li>
                  <li>Assurer l'accès au chantier</li>
                  <li>Respecter les consignes de sécurité</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  6. Réception des travaux
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La réception des travaux est constatée par un procès-verbal de réception signé par les deux parties.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En cas de réserves, celles-ci doivent être mentionnées sur le procès-verbal de réception. Dupas Terrassement s'engage à effectuer les corrections nécessaires dans les meilleurs délais.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  À défaut de réception expresse dans un délai de 15 jours après notification de l'achèvement des travaux, ceux-ci sont réputés réceptionnés.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={600}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  7. Garanties
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dupas Terrassement garantit :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Garantie de parfait achèvement :</strong> 1 an à compter de la réception</li>
                  <li><strong>Garantie biennale :</strong> 2 ans pour les éléments d'équipement dissociables</li>
                  <li><strong>Garantie décennale :</strong> 10 ans pour les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Ces garanties sont couvertes par une assurance responsabilité civile professionnelle.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={700}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  8. Responsabilité
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dupas Terrassement ne pourra être tenu responsable :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Des dommages résultant d'un cas de force majeure</li>
                  <li>Des dommages causés par le client ou des tiers</li>
                  <li>Des dommages résultant d'un défaut d'accès au chantier</li>
                  <li>Des dommages résultant de conditions météorologiques exceptionnelles</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={800}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  9. Assurance
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Dupas Terrassement est couvert par une assurance responsabilité civile professionnelle et une assurance décennale conformément à la législation en vigueur.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={900}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  10. Litiges et médiation
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conformément aux articles L.611-1 et R.612-1 et suivants du Code de la consommation, le client peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose à Dupas Terrassement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  À défaut de résolution amiable, tout litige relève des tribunaux compétents du ressort du siège social de Dupas Terrassement.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={1000}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  11. Droit applicable
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Les présentes conditions générales sont soumises au droit français. Tout litige relève de la compétence des tribunaux français.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={1100}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  12. Contact
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant ces conditions générales :
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


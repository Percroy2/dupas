import AnimatedSection from '../components/AnimatedSection';
import { contactInfo } from '../data/contact';

export default function LegalNotice() {
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
              Mentions Légales
            </h1>
            <p className="text-lg text-white/95">En vigueur au {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

          <div className="bg-light-200 rounded-lg shadow-md p-8 space-y-8">
            <AnimatedSection direction="up" delay={0}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  1. Informations sur l'entreprise
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Dénomination sociale :</strong> Dupas Terrassement</p>
                  <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                  <p><strong>Siège social :</strong> {contactInfo.address}</p>
                  <p><strong>Téléphone :</strong> <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700">{contactInfo.phone}</a></p>
                  <p><strong>Email :</strong> <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">{contactInfo.email}</a></p>
                  <p><strong>Directeur de publication :</strong> Kevin Lefebvre</p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  2. Hébergement du site
                </h2>
                <div className="text-gray-700">
                  <p>Le site est hébergé par :</p>
                  <p className="mt-2">[Nom de l'hébergeur]</p>
                  <p>[Adresse de l'hébergeur]</p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  3. Propriété intellectuelle
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  4. Protection des données personnelles
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pour exercer ce droit, vous pouvez nous contacter à l'adresse : <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700">{contactInfo.email}</a>
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  5. Responsabilité
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Dupas Terrassement ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  6. Liens hypertextes
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur. Aucune autorisation ni demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={600}>
              <section>
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  7. Droit applicable
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de [Ville du tribunal compétent].
                </p>
              </section>
            </AnimatedSection>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}


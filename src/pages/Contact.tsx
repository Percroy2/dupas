import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* En-tête de page */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white section-padding border-b-4 border-black overflow-hidden">
        {/* Pattern de fond */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="fade" className="text-center">
            <div className="inline-block mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-white/95">Contact</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Vous avez un projet de terrassement ou d'assainissement ? Contactez-nous dès maintenant pour des solutions sur-mesure.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <Contact />
    </main>
  );
}


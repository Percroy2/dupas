import AnimatedSection from './AnimatedSection';

interface Value {
  title: string;
  description: string;
  icon: string;
}

const values: Value[] = [
  {
    title: 'Fiabilité',
    description: 'Nous tenons nos engagements. Chaque chantier est mené avec rigueur, respect des délais et qualité d\'exécution, du premier coup de pelle à la finition.',
    icon: '✓',
  },
  {
    title: 'Proximité',
    description: 'Entreprise ancrée dans les Hauts-de-France, nous privilégions la relation directe avec nos clients. Un interlocuteur unique suit votre projet de bout en bout.',
    icon: '📍',
  },
  {
    title: 'Respect du terrain et des hommes',
    description: 'Nous intervenons dans le respect de l\'environnement, des normes et des personnes. Nos équipes privilégient des méthodes durables et sûres, adaptées à chaque site.',
    icon: '🌱',
  },
];

export default function Values() {
  return (
    <section className="section-padding bg-gradient-to-b from-light-200 via-light-100 to-light-200">
      <div className="container-custom">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-50 rounded-full">
            <span className="text-sm font-semibold text-primary-700">Nos engagements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos Valeurs
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <AnimatedSection
              key={value.title}
              direction="up"
              delay={index * 150}
            >
              <div className="bg-light-200 rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-neutral-200 hover:border-primary-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-5 text-center group-hover:text-primary-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6 transform group-hover:w-32 transition-all duration-500 rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed text-center text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}


import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { faqData, faqCategories } from '../data/faq';
import AnimatedSection from '../components/AnimatedSection';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQ = useMemo(() => {
    let filtered = faqData;

    // Filtre par catégorie
    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Filtre par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen">
      {/* En-tête de page */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding border-b-4 border-black overflow-hidden">
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
              <span className="text-sm font-semibold text-white/95">FAQ</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Foire aux Questions
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Trouvez rapidement les réponses à vos questions sur nos services de terrassement et d'assainissement
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-padding bg-gray-50">
        <div className="container-custom">

        {/* Barre de recherche */}
        <AnimatedSection direction="up" delay={0} className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher dans la FAQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </AnimatedSection>

        {/* Filtres par catégorie */}
        <AnimatedSection direction="up" delay={100} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-xl scale-105'
                    : 'bg-light-200 text-gray-700 hover:bg-primary-50 hover:text-primary-700 shadow-lg hover:shadow-xl border-2 border-neutral-200 hover:border-primary-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Résultats */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQ.length === 0 ? (
            <AnimatedSection direction="fade">
              <div className="bg-light-200 rounded-lg shadow-md p-8 text-center">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-600 text-lg mb-2">
                  Aucune question trouvée
                </p>
                <p className="text-gray-500">
                  Essayez de modifier votre recherche ou de changer de catégorie
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-4">
              {filteredFAQ.map((item, index) => (
                <AnimatedSection
                  key={item.id}
                  direction="up"
                  delay={index * 50}
                >
                  <div className="bg-light-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-neutral-200 hover:border-primary-300 group">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-transparent transition-all duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-bold rounded-full border border-primary-200">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                          {item.question}
                        </h3>
                      </div>
                      <div className={`ml-6 p-2 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-all duration-300 ${openItems.has(item.id) ? 'bg-primary-100' : ''}`}>
                        <svg
                          className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                            openItems.has(item.id) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                    {openItems.has(item.id) && (
                      <div className="px-8 pb-8 border-t border-gray-100 animate-slide-up">
                        <p className="text-gray-700 leading-relaxed mt-6 text-base">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Statistiques */}
          {filteredFAQ.length > 0 && (
            <AnimatedSection direction="fade" className="mt-8 text-center">
              <p className="text-gray-600">
                {filteredFAQ.length} question{filteredFAQ.length > 1 ? 's' : ''} trouvée{filteredFAQ.length > 1 ? 's' : ''}
                {selectedCategory !== 'Tous' && ` dans la catégorie "${selectedCategory}"`}
              </p>
            </AnimatedSection>
          )}
        </div>

        {/* Section contact si pas de résultats */}
        {filteredFAQ.length === 0 && (
          <AnimatedSection direction="up" delay={200} className="mt-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="mb-6 text-white/90">
                N'hésitez pas à nous contacter directement. Notre équipe se fera un plaisir de répondre à toutes vos questions et de vous proposer un devis gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                >
                  Nous contacter
                </Link>
                <a
                  href="tel:+33617631867"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                  📞 Appeler maintenant
                </a>
              </div>
            </div>
          </AnimatedSection>
        )}
        </div>
      </div>
    </main>
  );
}


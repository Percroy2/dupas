import { useFacebookPosts } from '../hooks/useFacebookPosts';
import FacebookPostCard from '../components/FacebookPostCard';
import AnimatedSection from '../components/AnimatedSection';
import { contactInfo } from '../data/contact';

export default function News() {
  const { posts, loading, error, refetch, isMockData } = useFacebookPosts();

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
              <span className="text-sm font-semibold text-white/95">Actualités</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Actualités
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
              Restez informé de nos dernières actualités et projets
            </p>
            <a
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Suivez-nous sur Facebook
            </a>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
          {/* État de chargement */}
          {loading && (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-light-200 rounded-lg shadow-md p-6 animate-pulse"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="h-48 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          )}

          {/* Message d'information pour données mockées */}
          {isMockData && !loading && (
            <AnimatedSection direction="fade">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <strong>Mode démonstration :</strong> Les posts affichés sont des exemples. Pour afficher vos vrais posts Facebook, configurez l'API dans le fichier <code className="bg-white px-1 rounded">.env</code>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Message d'erreur */}
          {error && !loading && !isMockData && (
            <AnimatedSection direction="fade">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">
                      Erreur de chargement
                    </h3>
                    <p className="text-primary-700 mb-4">{error}</p>
                    <button
                      onClick={refetch}
                      className="mt-4 btn-primary"
                    >
                      Réessayer
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Liste des posts */}
          {!loading && !error && posts.length > 0 && (
            <div className="space-y-6">
              {posts.map((post, index) => (
                <FacebookPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}

          {/* Aucun post */}
          {!loading && !error && posts.length === 0 && (
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <p className="text-gray-600 mb-4">
                  Aucun post disponible pour le moment.
                </p>
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Visitez notre page Facebook →
                </a>
              </div>
            </AnimatedSection>
          )}
          </div>
        </div>
      </div>
    </main>
  );
}


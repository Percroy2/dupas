import { Link } from 'react-router-dom';
import { reviews } from '../data/reviews';
import AnimatedSection from './AnimatedSection';
import Carousel from './Carousel';

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        } transition-all duration-300`}
        style={{ animationDelay: `${i * 50}ms` }}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-b from-light-100 to-light-200">
      <div className="container-custom">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm font-semibold text-gray-700">Témoignages</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Avis Clients
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">15 avis Google</span>
          </div>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Écrire un avis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimatedSection>

        {/* Carrousel d'avis */}
        <div className="px-4 md:px-8 lg:px-12">
          <Carousel
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-gray-200 hover:border-gray-400 h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {review.author}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex text-lg">
                    {renderStars(review.rating)}
                  </div>
                </div>
                {review.content && (
                  <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                    {review.content}
                  </p>
                )}
                <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#FA5329" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#c43d1f" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#e84a25" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#FA5329" />
                    </svg>
                    <span className="text-sm text-gray-500">Publié sur Google</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* CTA Section */}
        <AnimatedSection direction="fade" className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-10 lg:p-16 text-white shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Faites confiance à une entreprise locale reconnue pour la qualité de ses travaux et le respect des délais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-block border-2 border-white/20"
              >
                Demander un devis gratuit
              </Link>
              <Link
                to="/offres"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


import { useState } from 'react';
import { galleryData, galleryCategories, GalleryItem } from '../data/gallery';
import AnimatedSection from './AnimatedSection';

interface LightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

function Lightbox({ item, isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious }: LightboxProps) {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full max-h-full">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation précédent */}
        {hasPrevious && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
            aria-label="Précédent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Navigation suivant */}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
            aria-label="Suivant"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Contenu */}
        <div
          className="bg-light-200 rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image principale */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[70vh] object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Informations */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                {item.category}
              </span>
              {item.location && (
                <span className="text-gray-500 text-sm">📍 {item.location}</span>
              )}
              {item.date && (
                <span className="text-gray-500 text-sm">📅 {item.date}</span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>

            {/* Avant/Après si disponible */}
            {(item.beforeImage || item.afterImage) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                {item.beforeImage && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      Avant
                    </h4>
                    <div className="relative h-64 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={item.beforeImage}
                        alt="Avant"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Image non disponible</div>';
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
                {item.afterImage && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Après
                    </h4>
                    <div className="relative h-64 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={item.afterImage}
                        alt="Après"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Image non disponible</div>';
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredGallery = galleryData.filter(
    (item) => selectedCategory === 'Tous' || item.category === selectedCategory
  );

  const openLightbox = (item: GalleryItem, index: number) => {
    setLightboxItem(item);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  const nextItem = () => {
    if (lightboxIndex < filteredGallery.length - 1) {
      const nextIndex = lightboxIndex + 1;
      setLightboxIndex(nextIndex);
      setLightboxItem(filteredGallery[nextIndex]);
    }
  };

  const previousItem = () => {
    if (lightboxIndex > 0) {
      const prevIndex = lightboxIndex - 1;
      setLightboxIndex(prevIndex);
      setLightboxItem(filteredGallery[prevIndex]);
    }
  };

  return (
    <section className="section-padding bg-light-200">
      <div className="container-custom">
        <AnimatedSection direction="fade" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Galerie de Projets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos réalisations et l'expertise de notre équipe à travers nos projets
          </p>
        </AnimatedSection>

        {/* Filtres */}
        <AnimatedSection direction="up" delay={0} className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grille de galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <AnimatedSection
              key={item.id}
              direction="up"
              delay={index * 100}
            >
              <div
                className="group relative bg-light-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E${item.category}%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary-500 text-white text-xs font-semibold rounded">
                          {item.category}
                        </span>
                        {item.beforeImage && item.afterImage && (
                          <span className="px-2 py-1 bg-white/20 text-white text-xs font-semibold rounded">
                            Avant/Après
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                  {/* Icône zoom */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>

                {/* Informations */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                      {item.category}
                    </span>
                    {item.location && (
                      <span className="text-gray-500 text-xs">📍 {item.location}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Message si aucune image */}
        {filteredGallery.length === 0 && (
          <AnimatedSection direction="fade" className="text-center mt-12">
            <p className="text-gray-600">Aucun projet trouvé dans cette catégorie.</p>
          </AnimatedSection>
        )}

        {/* Lightbox */}
        <Lightbox
          item={lightboxItem}
          isOpen={lightboxItem !== null}
          onClose={closeLightbox}
          onNext={nextItem}
          onPrevious={previousItem}
          hasNext={lightboxIndex < filteredGallery.length - 1}
          hasPrevious={lightboxIndex > 0}
        />
      </div>
    </section>
  );
}


import { useState, useEffect, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export default function Carousel({
  children,
  autoPlay = true,
  autoPlayInterval = 6000,
  showDots = true,
  showArrows = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(itemsPerView.desktop);
  const [isPaused, setIsPaused] = useState(false);

  // Détection de la taille d'écran
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(itemsPerView.tablet);
      } else {
        setItemsPerSlide(itemsPerView.desktop);
      }
      // Réinitialiser l'index si nécessaire
      setCurrentIndex(0);
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, [itemsPerView]);

  const totalSlides = Math.ceil(children.length / itemsPerSlide);

  // Auto-play avec pause au hover
  useEffect(() => {
    if (!autoPlay || totalSlides <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, totalSlides, isPaused]);

  const goToSlide = (index: number) => {
    if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const goToPrevious = () => {
    goToSlide(currentIndex - 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  const goToNext = () => {
    goToSlide(currentIndex + 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container du carrousel */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const startIndex = slideIndex * itemsPerSlide;
              const endIndex = Math.min(startIndex + itemsPerSlide, children.length);
              const slideItems = children.slice(startIndex, endIndex);

              return (
                <div
                  key={slideIndex}
                  className="min-w-full flex-shrink-0 px-2"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div
                    className="w-full grid gap-6 h-full"
                    style={{
                      gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)`,
                    }}
                  >
                    {slideItems.map((child, itemIndex) => (
                      <div key={startIndex + itemIndex} className="h-full">
                        {child}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Flèches de navigation */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            aria-label="Précédent"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-primary-600 transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            aria-label="Suivant"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-primary-600 transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicateurs (dots) */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
              }}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex
                  ? 'bg-primary-600 w-10 h-2.5 shadow-md'
                  : 'bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400 hover:w-8'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


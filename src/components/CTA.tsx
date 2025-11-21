import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface CTAProps {
  title: string;
  description?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'default' | 'dark' | 'light';
  className?: string;
}

export default function CTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'default',
  className = '',
}: CTAProps) {
  const baseClasses = 'section-padding';
  const variantClasses = {
    default: 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white',
    dark: 'bg-gradient-to-br from-black via-secondary-800 to-black text-white',
    light: 'bg-light-100 text-gray-900',
  };

  return (
    <section className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <div className="container-custom">
        <AnimatedSection direction="fade" className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={primaryButtonLink}
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className={`${
                  variant === 'light'
                    ? 'btn-secondary'
                    : 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50'
                } text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-block`}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    fade: '',
  };

  const baseClasses = `transition-all duration-700 ease-out ${
    isVisible
      ? 'opacity-100 translate-x-0 translate-y-0'
      : `opacity-0 ${directionClasses[direction]}`
  }`;

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


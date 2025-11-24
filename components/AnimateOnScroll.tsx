'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  delay?: string;
  threshold?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  animationClass = 'animate-reveal',
  delay = '0ms',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // FIX: Using a CSS custom property for the delay to avoid inline styles, which satisfies the CSP.
  const style = { '--animation-delay': delay } as React.CSSProperties;

  return (
    <div
      ref={ref}
      className={`${className} animate-when-visible ${isVisible ? animationClass : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
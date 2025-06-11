import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'accent';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-white',
  };

  return (
    <section id={id} className={`py-16 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/LogoIndividual.png"
        alt="Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;


import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverable = true }) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg p-6 border border-slate-100';
  const hoverClasses = hoverable ? 'hover:shadow-xl hover:border-emerald-200 transition-all duration-200' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;

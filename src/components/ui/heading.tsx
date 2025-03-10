
import React from 'react';

interface HeadingProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-display font-bold flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-sm md:text-base">{description}</p>
      )}
    </div>
  );
};

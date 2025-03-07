// src/components/common/Card.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  animate = true,
  delay = 0,
  ...props 
}) => {
  const baseStyles = "bg-white rounded-lg shadow-md overflow-hidden";
  const hoverStyles = hover ? "hover:shadow-xl transition-shadow duration-300" : "";
  
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`${baseStyles} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Variant with header and footer
export const CardWithHeader = ({
  title,
  subtitle,
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  footer,
  children,
  ...props
}) => {
  return (
    <Card {...props}>
      <div className={`px-6 py-4 border-b ${headerClassName}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        {subtitle && (
          <p className="text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>
      <div className={`p-6 ${bodyClassName}`}>
        {children}
      </div>
      {footer && (
        <div className={`px-6 py-4 border-t ${footerClassName}`}>
          {footer}
        </div>
      )}
    </Card>
  );
};

// Variant with image
export const ImageCard = ({
  image,
  imageAlt = '',
  title,
  description,
  className = '',
  imageClassName = '',
  ...props
}) => {
  return (
    <Card className={className} {...props}>
      <div className="relative">
        <img 
          src={image} 
          alt={imageAlt}
          className={`w-full object-cover ${imageClassName}`}
        />
      </div>
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
    </Card>
  );
};

export default Card;
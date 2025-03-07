// src/components/common/Button.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  to, 
  href,
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200";
  
  const variants = {
    primary: "bg-primary hover:bg-secondary text-white",
    secondary: "bg-white hover:bg-gray-100 text-primary border border-primary",
    outline: "bg-transparent hover:bg-gray-100 text-primary border border-primary",
    dark: "bg-gray-900 hover:bg-gray-800 text-white",
    light: "bg-gray-100 hover:bg-gray-200 text-gray-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
    ${className}
  `;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 }
  };

  // If it's a link (internal)
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link 
          to={to} 
          className={classes}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <motion.div {...motionProps}>
        <a 
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  // If it's a button
  return (
    <motion.button
      {...motionProps}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Loading variant of the button
export const LoadingButton = ({ 
  children, 
  isLoading, 
  loadingText = 'Loading...', 
  ...props 
}) => {
  return (
    <Button
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {loadingText}
        </>
      ) : children}
    </Button>
  );
};

export default Button;
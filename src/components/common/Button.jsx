import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-primary hover:bg-secondary text-white",
    secondary: "bg-white hover:bg-gray-100 text-primary border border-primary",
    outline: "bg-transparent hover:bg-gray-100 text-primary border border-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
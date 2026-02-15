import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-light shadow-md hover:shadow-lg",
    secondary: "bg-navy text-white hover:bg-navy-light shadow-md",
    outline: "border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-navy hover:bg-navy/5 hover:text-navy-light"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg"
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";
export { Button };
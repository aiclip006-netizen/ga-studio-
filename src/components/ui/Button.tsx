import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center transition-all duration-300 tracking-[0.2em] uppercase text-xs";
    
    const variants = {
      primary: "border border-[var(--color-brand-gold)] px-10 py-4 text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-maroon)]",
      secondary: "text-[var(--color-brand-gold)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--color-brand-gold)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 pb-1",
      ghost: "text-[var(--color-ivory)] hover:text-[var(--color-brand-gold)] hover:opacity-80",
      icon: "border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] w-12 h-12 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-maroon)]",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

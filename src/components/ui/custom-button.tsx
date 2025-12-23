import React from 'react';
import { cn } from '../../lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'blue' | 'orange'; // Keeping legacy props for now to avoid breaking, but mapping them
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    // Map legacy variants to new semantic ones
    const effectiveVariant = (variant === 'blue' ? 'primary' : variant === 'orange' ? 'accent' : variant) as 'primary' | 'accent';

    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary shadow-md hover:shadow-lg",
      accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-md hover:shadow-lg"
    };

    const sizes = {
      sm: "px-2.5 py-1.5 text-sm rounded-md",
      md: "px-3 py-2 text-base rounded-md", 
      lg: "px-4 py-2.5 text-lg rounded-lg"
    };

    const buttonClasses = cn(
      baseStyles,
      variants[effectiveVariant],
      sizes[size],
      className
    );

    if (asChild && href) {
      return (
        <a 
          href={href}
          className={buttonClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
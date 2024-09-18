import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export default function Button({ variant, onClick, children, className, ...props }: ButtonProps) {
  const baseClasses = "text-lg rounded-full md:text-2xl py-3 px-8 mt-10 transition duration-300 ease-in-out";
  const variantClasses = {
    primary: "bg-accentLight hover:bg-accentLightDark text-white ring-2 ring-accentLight hover:ring-accentLightDark focus:ring-4 focus:ring-accentLight/50",
    secondary: "border-2 border-secondary hover:bg-secondary-dark text-secondary hover:text-white hover:ring-2 hover:ring-secondary-dark focus:ring-4 focus:ring-secondary/50",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
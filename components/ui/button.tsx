import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

// Extend ButtonHTMLAttributes to get all native button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline" | "dangerIcn";
  size?: "zero" | "xs" | "sm" | "md" | "lg";
  children?: ReactNode;
  className?: string;
  icon?: IconType;
  iconClassName?: string;
  text?: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  icon: Icon,
  iconClassName = "text-2xl",
  text,
  ...rest // This will capture all other native button props
}: ButtonProps) => {
  const baseStyles = "rounded-lg flex items-center justify-center gap-2 font-medium transition-colors";

  const sizeStyles = {
    zero: "p-0",
    xs: "py-2 px-3 text-xs",
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "text-white bg-[#FF1452] hover:bg-[#d30034] cursor-pointer",
    secondary: "text-gray-800 bg-gray-200 hover:bg-gray-300",
    danger: "text-white bg-red-600 hover:bg-red-700",
    outline: "text-[#FF1452] border border-[#FF1452] hover:bg-[#FF1452]/10",
    dangerIcn: "text-red-500 hover:text-red-700",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...rest} // Spread all other native button props here
    >
      {Icon && <Icon className={iconClassName} />}
      {text}
      {children}
    </button>
  );
};
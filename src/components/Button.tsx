
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "button",
  showArrow = true,
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`laundryheap-btn ${className}`}
      disabled={disabled}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight size={18} />}
    </button>
  );
};

export default Button;

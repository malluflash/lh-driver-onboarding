import { ArrowRight } from "lucide-react";

function Button({
  children,
  onClick,
  type = "button",
  showArrow = true,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`laundryheap-btn flex items-center justify-center gap-2 ${className}`}
      disabled={disabled}
    >
      {children}
      {showArrow && <ArrowRight size={18} />}
    </button>
  );
}

export default Button;

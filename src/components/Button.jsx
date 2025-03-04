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
      className={`laundryheap-btn ${className}`}
      disabled={disabled}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight size={18} />}
    </button>
  );
}

export default Button;

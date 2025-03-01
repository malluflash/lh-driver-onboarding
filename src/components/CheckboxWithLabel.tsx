
import { Check } from "lucide-react";

interface CheckboxWithLabelProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxWithLabel = ({ label, checked, onChange }: CheckboxWithLabelProps) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center gap-3 mb-6 animate-fade-in">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={handleClick}
        className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all ${
          checked ? 'bg-laundryheap-yellow border-transparent' : 'bg-transparent border-white'
        }`}
      >
        {checked && <Check size={16} className="text-black" />}
      </button>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default CheckboxWithLabel;

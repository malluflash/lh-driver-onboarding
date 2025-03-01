
import { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  id?: string;
  className?: string;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  id,
  className = "",
}: InputProps) => {
  return (
    <div className="input-container">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`laundryheap-input ${className}`}
      />
      {required && (
        <p className="text-xs text-center mt-1 text-white opacity-70">*This field is mandatory</p>
      )}
    </div>
  );
};

export default Input;

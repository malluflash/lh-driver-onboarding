
import { useState } from "react";

interface SwitchProps {
  leftLabel: string;
  rightLabel: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = ({ leftLabel, rightLabel, checked, onChange }: SwitchProps) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center justify-between gap-4 mb-4 animate-fade-in">
      <span className={`text-sm ${!checked ? 'font-bold' : 'text-opacity-70'}`}>{leftLabel}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        className={`laundryheap-switch ${checked ? 'laundryheap-switch-checked' : ''}`}
      >
        <span
          className={`laundryheap-switch-thumb ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`text-sm ${checked ? 'font-bold' : 'text-opacity-70'}`}>{rightLabel}</span>
    </div>
  );
};

export default Switch;

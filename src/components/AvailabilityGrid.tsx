
import { useState } from "react";
import Switch from "./Switch";

export interface Availability {
  [key: string]: {
    noon: boolean;
    evening: boolean;
  };
}

interface AvailabilityGridProps {
  availability: Availability;
  onAvailabilityChange: (availability: Availability) => void;
}

const AvailabilityGrid = ({ availability, onAvailabilityChange }: AvailabilityGridProps) => {
  const handleChange = (day: string, slot: "noon" | "evening", value: boolean) => {
    const newAvailability = {
      ...availability,
      [day]: {
        ...availability[day],
        [slot]: value,
      },
    };
    onAvailabilityChange(newAvailability);
  };

  return (
    <div className="w-full max-w-sm mt-6 animate-fade-in">
      <div className="grid grid-cols-3 mb-4">
        <div className="col-span-1"></div>
        <div className="col-span-1 text-center text-sm font-medium">12 pm</div>
        <div className="col-span-1 text-center text-sm font-medium">5 pm</div>
      </div>

      {Object.entries(availability).map(([day, slots]) => (
        <div key={day} className="grid grid-cols-3 items-center mb-4">
          <div className="col-span-1 text-left text-sm font-medium">{day}</div>
          <div className="col-span-1 flex justify-center">
            <button
              role="switch"
              aria-checked={slots.noon}
              onClick={() => handleChange(day, "noon", !slots.noon)}
              className={`laundryheap-switch ${slots.noon ? 'laundryheap-switch-checked' : ''}`}
            >
              <span
                className={`laundryheap-switch-thumb ${
                  slots.noon ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="col-span-1 flex justify-center">
            <button
              role="switch"
              aria-checked={slots.evening}
              onClick={() => handleChange(day, "evening", !slots.evening)}
              className={`laundryheap-switch ${slots.evening ? 'laundryheap-switch-checked' : ''}`}
            >
              <span
                className={`laundryheap-switch-thumb ${
                  slots.evening ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailabilityGrid;

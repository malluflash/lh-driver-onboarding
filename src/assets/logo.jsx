import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PageLayout from "@/components/PageLayout";
import Button from "@/components/Button";

const timeSlots = [
  "09:00 - 09:30",
  "09:30 - 10:00",
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:00 - 11:30",
  "11:30 - 12:00",
  "12:00 - 12:30",
  "12:30 - 13:00",
  "14:00 - 14:30",
];

const FleetAgent = () => {
  const navigate = useNavigate();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const [selectedDate, setSelectedDate] = useState(tomorrow);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime) {
      navigate("/", {
        state: { date: selectedDate, time: selectedTime },
      });
    } else {
      alert("Please select a date and time.");
    }
  };

  return (
    <PageLayout title="Laundryheap Driver Onboarding">
      <div className="w-full flex flex-col items-center space-y-4">
        <button 
          onClick={() => setShowCalendar(!showCalendar)} 
          className="p-2 border rounded-md bg-[#FFD06D] text-center w-full max-w-xs transition-transform duration-200 hover:scale-105 active:scale-95">
          {selectedDate.toDateString()} (Click to select a date)
        </button>
        
        {showCalendar && (
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setShowCalendar(false);
            }}
            minDate={tomorrow}
            inline
          />
        )}

        <div className="w-full max-w-xs">
          <h3 className="text-center font-semibold mb-2">Select a Time Slot</h3>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                className={`p-2 border rounded-md text-center cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 ${selectedTime === slot ? 'bg-blue-500 text-white' : 'bg-[#FFD06D]'}`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <Button onClick={handleScheduleMeeting} className="w-full max-w-xs">
          Schedule Meeting
        </Button>
      </div>
    </PageLayout>
  );
};

export default FleetAgent;


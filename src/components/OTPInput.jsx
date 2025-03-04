import { useEffect, useRef, useState } from "react";

function OTPInput({ length, value, onChange }) {
  const [otp, setOtp] = useState(value.split("").concat(Array(length - value.length).fill("")));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    // Allow only last entered character
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    // Combine the OTP digits and call onChange
    const otpValue = newOtp.join("");
    onChange(otpValue);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      // Move to previous input on backspace if current field is empty
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    if (isNaN(Number(pastedData))) return;

    const pastedOtp = pastedData.substring(0, length).split("");
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedOtp.length; i++) {
      newOtp[i] = pastedOtp[i];
    }
    
    setOtp(newOtp);
    onChange(newOtp.join(""));
    
    // Focus the next empty input or the last input
    const focusIndex = Math.min(pastedOtp.length, length - 1);
    if (inputRefs.current[focusIndex]) {
      inputRefs.current[focusIndex].focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2 mt-4 animate-fade-in">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          ref={(ref) => (inputRefs.current[index] = ref)}
          value={otp[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={index === 0 ? handlePaste : undefined}
          className="otp-input"
          maxLength={1}
          inputMode="numeric"
          autoComplete="one-time-code"
          data-testid={`otp-input-${index}`}
        />
      ))}
    </div>
  );
}

export default OTPInput;

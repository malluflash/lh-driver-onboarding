
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Button from "@/components/Button";
import OTPInput from "@/components/OTPInput";
import { useAuth } from "@/context/AuthContext";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { verifyOTP, isLoading, currentUser } = useAuth();

  const handleVerify = async () => {
    const success = await verifyOTP(otp);
    if (success) {
      navigate("/introduction");
    }
  };

  return (
    <PageLayout title="Laundryheap Driver onboarding">
      <div className="w-full flex flex-col items-center">
        <OTPInput 
          length={6} 
          value={otp} 
          onChange={setOtp} 
        />
        
        <p className="text-center text-sm mt-6 mb-6 max-w-xs animate-fade-in">
          Please enter the 6 digit code sent to your registered e-mail
        </p>

        <Button 
          onClick={handleVerify}
          className="mt-4 w-full max-w-xs"
          disabled={otp.length !== 6 || isLoading}
        >
          {isLoading ? "Verifying..." : "Continue"}
        </Button>
      </div>
    </PageLayout>
  );
};

export default Verify;

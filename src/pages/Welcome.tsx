
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Button from "@/components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <PageLayout title="Laundryheap Driver onboarding">
      <div className="flex-1"></div>
      <div className="w-full animate-slide-up">
        <Button onClick={handleContinue} className="w-full max-w-xs mx-auto">
          <Mail size={18} />
          <span>Continue with your registered e-mail</span>
        </Button>
      </div>
    </PageLayout>
  );
};

export default Welcome;

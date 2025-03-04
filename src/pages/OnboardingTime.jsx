
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Button from "@/components/Button";

const OnboardingTime = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/about");
  };

  return (
    <PageLayout title="Driver onboarding">
      <div className="w-full flex flex-col items-center">
        <p className="text-center text-xl my-12 max-w-xs animate-fade-in">
          This process should take you 10-15 minutes to complete
        </p>
        
        <Button 
          onClick={handleContinue}
          className="w-full max-w-xs mt-8"
        >
          Continue now
        </Button>
      </div>
    </PageLayout>
  );
};

export default OnboardingTime;

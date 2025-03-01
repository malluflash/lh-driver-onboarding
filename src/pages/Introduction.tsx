
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Button from "@/components/Button";

const Introduction = () => {
  const navigate = useNavigate();

  const handleContinueAutomated = () => {
    navigate("/onboarding-time");
  };

  const handleContactFleetAgent = () => {
    navigate("/fleet-agent");
  };

  return (
    <PageLayout 
      title="Driver onboarding"
      subtitle="Welcome to your introductory training session"
    >
      <div className="w-full flex flex-col items-center space-y-4">
        <Button 
          onClick={handleContinueAutomated}
          className="w-full max-w-xs"
        >
          Continue with the automated session
        </Button>
        
        <Button 
          onClick={handleContactFleetAgent}
          className="w-full max-w-xs"
        >
          I would like to speak to a Fleet Agent
        </Button>
      </div>
    </PageLayout>
  );
};

export default Introduction;

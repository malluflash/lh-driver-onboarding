
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Button from "@/components/Button";

const FleetAgent = () => {
  const navigate = useNavigate();

  const handleScheduleMeeting = () => {
    navigate("/onboarding-time");
  };

  return (
    <PageLayout title="Laundryheap Driver onboarding">
      <div className="w-full flex flex-col items-center">
        <Button 
          onClick={handleScheduleMeeting}
          className="w-full max-w-xs"
        >
          Click here to schedule a meeting with our Fleet agent
        </Button>
        
        <p className="text-center text-sm mt-8 max-w-xs animate-fade-in">
          Our Fleet agent will reach out to you via a phone call
          (subject to availability)
        </p>
      </div>
    </PageLayout>
  );
};

export default FleetAgent;

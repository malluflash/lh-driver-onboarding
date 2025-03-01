
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { signIn, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your registered email address.",
        variant: "destructive",
      });
      return;
    }
    
    const success = await signIn(email);
    if (success) {
      navigate("/verify");
    }
  };

  return (
    <PageLayout title="Driver onboarding">
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@laundryheap.com"
          type="email"
          required
        />
        
        <p className="text-center text-sm mt-6 mb-6 max-w-xs animate-fade-in">
          Please enter your registered e-mail provided with your application
        </p>

        <Button 
          type="submit" 
          className="mt-4 w-full max-w-xs"
          showArrow={true}
        >
          {isLoading ? "Sending code..." : "Continue"}
        </Button>
      </form>
    </PageLayout>
  );
};

export default Login;

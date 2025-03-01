
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

// Pages
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Introduction from "./pages/Introduction";
import FleetAgent from "./pages/FleetAgent";
import OnboardingTime from "./pages/OnboardingTime";
import About from "./pages/About";
import OnboardingStages from "./pages/OnboardingStages";
import Liabilities from "./pages/Liabilities";
import Verification from "./pages/Verification";
import Availability from "./pages/Availability";
import Role from "./pages/Role";
import BlocksClassification from "./pages/BlocksClassification";
import CancellationPolicy from "./pages/CancellationPolicy";
import FeeStructure from "./pages/FeeStructure";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/fleet-agent" element={<FleetAgent />} />
            <Route path="/onboarding-time" element={<OnboardingTime />} />
            <Route path="/about" element={<About />} />
            <Route path="/onboarding-stages" element={<OnboardingStages />} />
            <Route path="/liabilities" element={<Liabilities />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/role" element={<Role />} />
            <Route path="/blocks-classification" element={<BlocksClassification />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

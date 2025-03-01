
import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface User {
  email: string;
  vehicle?: string;
  licensePlate?: string;
  address?: string;
  city?: string;
  hasPhysicalDifficulties?: boolean;
  isSmoker?: boolean;
  availability?: Record<string, { noon: boolean; evening: boolean }>;
}

interface AuthContextValue {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string) => Promise<boolean>;
  verifyOTP: (otp: string) => Promise<boolean>;
  updateUserData: (data: Partial<User>) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check for existing user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("laundryheap_user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setCurrentUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse stored user data", error);
        localStorage.removeItem("laundryheap_user");
      }
    }
    setIsLoading(false);
  }, []);

  // In a real app, this would call an authentication API
  const signIn = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, the backend would send an OTP to this email
      console.log(`OTP sent to ${email}`);
      
      // Store the email temporarily
      setCurrentUser({ email });
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Sign in failed", error);
      toast({
        title: "Authentication failed",
        description: "Unable to send verification code. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return false;
    }
  };

  // Verify the OTP code
  const verifyOTP = async (otp: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, any 6-digit OTP is considered valid
      if (otp.length === 6) {
        // Set authenticated state
        setIsAuthenticated(true);
        
        // Save user to localStorage
        if (currentUser) {
          localStorage.setItem("laundryheap_user", JSON.stringify(currentUser));
        }
        
        setIsLoading(false);
        return true;
      } else {
        toast({
          title: "Verification failed",
          description: "Invalid verification code. Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error("OTP verification failed", error);
      toast({
        title: "Verification failed",
        description: "Unable to verify code. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return false;
    }
  };

  // Update user data
  const updateUserData = (data: Partial<User>) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, ...data };
      setCurrentUser(updatedUser);
      localStorage.setItem("laundryheap_user", JSON.stringify(updatedUser));
    }
  };

  // Sign out
  const signOut = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("laundryheap_user");
  };

  const value: AuthContextValue = {
    currentUser,
    isAuthenticated,
    isLoading,
    signIn,
    verifyOTP,
    updateUserData,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

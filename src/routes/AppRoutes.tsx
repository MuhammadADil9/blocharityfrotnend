import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { UserProfileForm } from "@/components/strcuture/card/UserProfileForm";
import { RoleSelectionForm } from "@/components/strcuture/card/RoleSelectionForm";
import DonorDashboard from "@/components/pages/DonorDashboard";
import DistributorDashboard from "@/components/pages/DistributorDashboard";
import { LoginPage } from "@/components/pages/LoginPage";

export default function AppRoutes() {
    const { isConnected, role, onboardingStep } = useAuth();

    if (!isConnected) return <LoginPage />;

    if (role === null) return <div>Loading...</div>;

    // New user → onboarding flow
    if (role === "new") {
        if (onboardingStep === 1) return <UserProfileForm />;
        if (onboardingStep === 2) return <RoleSelectionForm />;
        return <div>Saving...</div>;
    }

    // Existing users
    if (role === "donor") return <DonorDashboard />;
    if (role === "distributor") return <DistributorDashboard />;

    return <Navigate to="/" />;
}

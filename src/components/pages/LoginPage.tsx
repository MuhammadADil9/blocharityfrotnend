import { useAuth } from "@/context/AuthContext";
import { LoginNavbar } from "../layout/LoginNavbar";
import { CampaignCard } from "../strcuture/card/LoginCampaignCard";
import { DistributorCard } from "../strcuture/card/LoginDistributorCard";

export function LoginPage() {
    const { login } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Animated background effect */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <LoginNavbar onConnect={login} />

            <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
                <div className="flex flex-col gap-8">
                    <CampaignCard onDonate={login} />
                    <DistributorCard onSetupCampaign={login} />
                </div>
            </div>
        </div>
    );
}

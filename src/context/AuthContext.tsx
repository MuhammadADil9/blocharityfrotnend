import { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useUserRole } from "../features/auth/hooks/useUserRole";

interface AuthState {
    address: string | undefined;
    isConnected: boolean;
    role: "donor" | "distributor" | "new" | null;
    onboardingStep: number;
    setOnboardingStep: (step: number) => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { address, isConnected } = useAccount();
    const { role, } = useUserRole();
    const [onboardingStep, setOnboardingStep] = useState(1);

    return (
        <AuthContext.Provider
            value={{
                address,
                isConnected,
                role,
                onboardingStep,
                setOnboardingStep,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}

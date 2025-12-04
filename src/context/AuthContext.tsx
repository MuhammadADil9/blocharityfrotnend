import { createContext, useContext, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useUserRole } from "../features/auth/hooks/useUserRole";

interface AuthState {
    address: string | undefined;
    isConnected: boolean;
    role: "donor" | "distributor" | "new" | null;
    loading: boolean;
    onboardingStep: number;
    setOnboardingStep: (step: number) => void;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { address, isConnected } = useAccount();
    const { connect } = useConnect();
    const { disconnect } = useDisconnect();
    const { role, loading } = useUserRole();
    const [onboardingStep, setOnboardingStep] = useState(1);

    const login = () => {
        connect({ connector: injected() });
    };

    const logout = () => {
        disconnect();
    };

    return (
        <AuthContext.Provider
            value={{
                address,
                isConnected,
                role,
                loading,
                onboardingStep,
                setOnboardingStep,
                login,
                logout,
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

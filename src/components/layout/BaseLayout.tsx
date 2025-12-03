import { LoginNavbar } from "./LoginNavbar";

interface BaseLayoutProps {
    children: React.ReactNode;
    onConnectWallet: () => void;
}

export function BaseLayout({ children, onConnectWallet }: BaseLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <LoginNavbar onConnectWallet={onConnectWallet} />

            <main className="p-6">
                {children}
            </main>
        </div>
    );
}

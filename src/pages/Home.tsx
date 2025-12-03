import { useEffect, useState, type ReactNode } from 'react';
import { useConnect } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { useUserRole } from '../features/auth/hooks/useUserRole';
import api from '@/lib/api';

// Simple UI Components (In a real app, these would be Shadcn imports)
const Card = ({ children, className }: { children: ReactNode; className?: string }) => <div className={`bg-white p-8 rounded-xl shadow-lg ${className}`}>{children}</div>;
const Button = ({ onClick, children, variant = 'primary', disabled }: { onClick?: () => void; children: ReactNode; variant?: 'primary' | 'secondary'; disabled?: boolean }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-2 px-4 rounded font-bold transition ${variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        {children}
    </button>
);

export default function Home() {
    const { connectors, connect } = useConnect();
    const { role, loading, address, isConnected } = useUserRole();
    const navigate = useNavigate();

    // Registration State
    const [formData, setFormData] = useState({ first_name: '', email: '', is_distributor: false });
    const [submitting, setSubmitting] = useState(false);

    // 1. Auto-Redirect if user is already known
    useEffect(() => {
        if (role === 'donor') navigate('/donor');
        if (role === 'distributor') navigate('/distributor');
    }, [role, navigate]);

    // 2. Registration Handler
    const handleRegister = async () => {
        setSubmitting(true);
        try {
            await api.post('/users/', { address, ...formData });
            navigate(formData.is_distributor ? '/distributor' : '/donor');
        } catch {
            alert("Registration failed");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Charity DApp</h1>

            {/* State A: Connect Wallet */}
            {!isConnected && (
                <Card className="max-w-md w-full text-center">
                    <p className="mb-6 text-slate-600">Connect your wallet to access the platform.</p>
                    {connectors.map((connector) => (
                        <div key={connector.uid} className="mb-2">
                            <Button onClick={() => connect({ connector })}>
                                Connect {connector.name}
                            </Button>
                        </div>
                    ))}
                </Card>
            )}

            {/* State B: Register New User */}
            {isConnected && role === 'new' && (
                <Card className="max-w-md w-full">
                    <h2 className="text-xl font-bold mb-4">Complete Profile</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={formData.first_name}
                                onChange={e => setFormData({ ...formData, first_name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                className="w-full border p-2 rounded"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="flex items-center space-x-2 py-2">
                            <input
                                type="checkbox"
                                id="role"
                                checked={formData.is_distributor}
                                onChange={e => setFormData({ ...formData, is_distributor: e.target.checked })}
                            />
                            <label htmlFor="role" className="text-sm font-medium">I want to create campaigns (Distributor)</label>
                        </div>
                        <Button onClick={handleRegister} disabled={submitting}>
                            {submitting ? 'Saving...' : 'Create Account'}
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
}
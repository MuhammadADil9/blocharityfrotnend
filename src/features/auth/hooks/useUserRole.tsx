import { useState, useEffect } from 'react';
import api from '@/lib/api';
import { useConnection } from 'wagmi';

export function useUserRole() {
    const { address, isConnected } = useConnection();
    const [role, setRole] = useState<'donor' | 'distributor' | 'new' | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isConnected && address) {
            checkUser(address);
        }
    }, [isConnected, address]);

    const checkUser = async (wallet: string) => {
        setLoading(true);
        try {
            const res = await api.get(`/users/${wallet}`);
            setRole(res.data.is_distributor ? 'distributor' : 'donor');
        } catch {
            // 404 means user not found -> New User
            setRole('new');
        } finally {
            setLoading(false);
        }
    };

    return { role, loading, address, isConnected };
}
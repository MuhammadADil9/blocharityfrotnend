import React, { useState } from "react";
import CampaignCard from "../components/CampaignCard";
import ActionCard from "../components/ActionCard";
import { shortAddress } from "../utils/shortAddress";

export default function LoginPage() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setError(null);

    if (!(window as any).ethereum) {
      setError("MetaMask not found. Please install MetaMask.");
      return;
    }

    try {
      setConnecting(true);
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch (err: any) {
      setError(err.message || "Connection rejected");
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br 
      from-[#0b0420] via-[#1a0640] to-[#0b022a] p-6">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-[#4f0071]/20 via-[#12002c]/20 to-transparent" />

      <div className="w-full max-w-3xl">
        <div className="flex justify-end mb-6">
          <button
            onClick={connectWallet}
            className="px-4 py-2 rounded-full text-sm font-medium 
              bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md"
          >
            {walletAddress
              ? shortAddress(walletAddress)
              : connecting
              ? "Connecting..."
              : "Connect Wallet"}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <CampaignCard />
          <ActionCard />
        </div>

        {error && (
          <div className="mt-4 text-center text-sm text-red-400">{error}</div>
        )}
      </div>

      <style>{`
        .shadow-neon {
          box-shadow: 0 8px 40px rgba(124,58,237,0.12),
                      inset 0 1px 0 rgba(255,255,255,0.02);
        }
      `}</style>
    </div>
  );
}

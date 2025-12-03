interface DistributorCardProps {
    onSetupCampaign: () => void;
}

export function DistributorCard({ onSetupCampaign }: DistributorCardProps) {
    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 w-full max-w-md border border-blue-500/20">
            <div className="text-center mb-6">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    Become a Distributor
                </h3>
                <p className="text-gray-400 text-sm">
                    Join our network and help distribute funds transparently to those in need
                </p>
            </div>

            <button
                onClick={onSetupCampaign}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
            >
                Set up a Campaign
            </button>
        </div>
    );
}

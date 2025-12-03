interface CampaignCardProps {
    onDonate: () => void;
}

export function CampaignCard({ onDonate }: CampaignCardProps) {
    const milestone = 100;
    const collected = 70;
    const progressPercentage = (collected / milestone) * 100;

    return (
        <div className="relative">
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-75 animate-pulse"></div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-purple-500/20">
                {/* Distributor Section */}
                <div className="mb-6 pb-6 border-b border-purple-500/20">
                    <p className="text-gray-400 text-sm mb-3">
                        Distributor
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-white">Sarah Johnson</p>
                            <p className="text-gray-400 text-sm">
                                Verified Distributor
                            </p>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                        Educational Crisis
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Help us provide quality education to underprivileged
                        children in remote areas. Your contribution makes a
                        lasting impact on their future.
                    </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mb-6">
                    <svg
                        className="w-5 h-5 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <span className="text-gray-300">Pakistan</span>
                </div>

                {/* Funding info */}
                <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-400 text-sm">Collected</p>
                            <p className="text-purple-400">
                                ${collected} USD
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400 text-sm">Milestone</p>
                            <p className="text-pink-400">${milestone} USD</p>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="relative">
                        <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-500 shadow-lg shadow-purple-500/50"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                        <p className="text-right text-sm text-gray-400 mt-2">
                            {progressPercentage}% funded
                        </p>
                    </div>
                </div>

                {/* Campaign Phases */}
                <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-4 text-center">
                        Campaign Phases
                    </p>
                    <div className="flex items-center justify-between px-4">
                        {/* Phase 1 - Filled */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 flex items-center justify-center rotate-45">
                                <span className="text-white text-xs -rotate-45">
                                    1
                                </span>
                            </div>
                            <span className="text-xs text-gray-400">
                                Funds
                            </span>
                        </div>

                        {/* Bridge 1-2 - Half filled */}
                        <div className="flex-1 h-1 mx-2 bg-slate-700 rounded-full relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        </div>

                        {/* Phase 2 - Empty */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-slate-700 border-2 border-purple-500/30 flex items-center justify-center rotate-45">
                                <span className="text-gray-400 text-xs -rotate-45">
                                    2
                                </span>
                            </div>
                            <span className="text-xs text-gray-400">
                                Milestone
                            </span>
                        </div>

                        {/* Bridge 2-3 - Empty */}
                        <div className="flex-1 h-1 mx-2 bg-slate-700 rounded-full"></div>

                        {/* Phase 3 - Empty */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-slate-700 border-2 border-purple-500/30 flex items-center justify-center rotate-45">
                                <span className="text-gray-400 text-xs -rotate-45">
                                    3
                                </span>
                            </div>
                            <span className="text-xs text-gray-400">
                                Proof
                            </span>
                        </div>

                        {/* Bridge 3-4 - Empty */}
                        <div className="flex-1 h-1 mx-2 bg-slate-700 rounded-full"></div>

                        {/* Phase 4 - Empty */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-slate-700 border-2 border-purple-500/30 flex items-center justify-center rotate-45">
                                <span className="text-gray-400 text-xs -rotate-45">
                                    4
                                </span>
                            </div>
                            <span className="text-xs text-gray-400">
                                Votes
                            </span>
                        </div>

                        {/* Bridge 4-5 - Empty */}
                        <div className="flex-1 h-1 mx-2 bg-slate-700 rounded-full"></div>

                        {/* Phase 5 - Empty */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-slate-700 border-2 border-purple-500/30 flex items-center justify-center rotate-45">
                                <span className="text-gray-400 text-xs -rotate-45">
                                    5
                                </span>
                            </div>
                            <span className="text-xs text-gray-400">
                                Result
                            </span>
                        </div>
                    </div>
                </div>

                {/* Donate button */}
                <button
                    onClick={onDonate}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]"
                >
                    Donate
                </button>
            </div>
        </div>
    );
}
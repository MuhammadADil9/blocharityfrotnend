interface HorizontalNavbarProps {
    activeTab: "my-campaign" | "campaigns";
    setActiveTab: (tab: "my-campaign" | "campaigns") => void;
}

export function HorizontalNavbar({ activeTab, setActiveTab }: HorizontalNavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 md:block hidden">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Left spacer */}
                    <div className="w-20"></div>

                    {/* Center Navigation Options - Desktop Only */}
                    <div className="md:flex items-center gap-8 hidden">
                        <button
                            onClick={() => setActiveTab("my-campaign")}
                            className={`text-gray-300 hover:text-purple-400 transition-colors pb-2 relative ${activeTab === "my-campaign" ? "text-purple-400" : ""
                                }`}
                        >
                            My Campaign
                            {activeTab === "my-campaign" && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("campaigns")}
                            className={`text-gray-300 hover:text-purple-400 transition-colors pb-2 relative ${activeTab === "campaigns" ? "text-purple-400" : ""
                                }`}
                        >
                            Campaigns
                            {activeTab === "campaigns" && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            )}
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Address Field - Desktop Only */}
                        <div className="md:block hidden px-6 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg">
                            <span className="text-gray-300">0x742d...3a9f</span>
                        </div>

                        {/* Profile Icon - Always visible */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 cursor-pointer hover:scale-110 transition-transform">
                            <svg
                                className="w-5 h-5 text-white"
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
                    </div>
                </div>
            </div>
        </nav>
    );
}

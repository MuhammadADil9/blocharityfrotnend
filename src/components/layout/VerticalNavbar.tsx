import { useState } from 'react';

export function VerticalSidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-slate-900/95 backdrop-blur-md border-r border-purple-500/20 z-50 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'
                } md:block hidden`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="flex flex-col h-full py-6">
                {/* Platform Name */}
                <div className="px-6 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white">B</span>
                        </div>
                        {isExpanded && (
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 whitespace-nowrap">
                                Blochairty
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-2 px-3">
                    {/* Home */}
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                    >
                        <svg
                            className="w-6 h-6 text-purple-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        {isExpanded && (
                            <span className="text-gray-300 whitespace-nowrap group-hover:text-white transition-colors">
                                Home
                            </span>
                        )}
                    </a>

                    {/* Ranking */}
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                    >
                        <svg
                            className="w-6 h-6 text-purple-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        </svg>
                        {isExpanded && (
                            <span className="text-gray-300 whitespace-nowrap group-hover:text-white transition-colors">
                                Ranking
                            </span>
                        )}
                    </a>

                    {/* Analytics */}
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                    >
                        <svg
                            className="w-6 h-6 text-purple-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        </svg>
                        {isExpanded && (
                            <span className="text-gray-300 whitespace-nowrap group-hover:text-white transition-colors">
                                Analytics
                            </span>
                        )}
                    </a>

                    {/* Profile */}
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                    >
                        <svg
                            className="w-6 h-6 text-purple-400 flex-shrink-0"
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
                        {isExpanded && (
                            <span className="text-gray-300 whitespace-nowrap group-hover:text-white transition-colors">
                                Profile
                            </span>
                        )}
                    </a>
                </nav>
            </div>
        </aside>
    );
}

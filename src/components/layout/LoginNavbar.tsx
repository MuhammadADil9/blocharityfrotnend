interface NavbarProps {
    onConnect: () => void;
}

export function LoginNavbar({ onConnect }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-end pr-12">
                    <button
                        onClick={onConnect}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                    >
                        Connect Wallet
                    </button>
                </div>
            </div>
        </nav>
    );
}

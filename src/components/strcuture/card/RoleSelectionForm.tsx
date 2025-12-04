import { useState } from "react";
import { HorizontalNavbar } from "../../layout/HorizontalNavbar"
import { VerticalSidebar } from "../../layout/VerticalNavbar";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function RoleSelectionForm() {
    const { setOnboardingStep } = useAuth();
    const [selectedRole, setSelectedRole] = useState<"donor" | "distributor" | "">("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedRole) {
            // TODO: Call API to create user with selected role
            // For now, we just refresh the page to trigger role check again (or update context if we had a setRole)
            window.location.reload();
        }
    };

    const onBack = () => {
        setOnboardingStep(1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Animated background effect */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <HorizontalNavbar activeTab="my-campaign" setActiveTab={() => { }} />
            <VerticalSidebar />

            {/* Main Content Area */}
            <main className="pt-20 md:pl-20 h-screen flex flex-col">
                <div className="flex-1 px-4 md:px-8 pb-4 md:pb-8 overflow-auto flex items-center justify-center">
                    <div className="w-full max-w-2xl">
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-10 shadow-xl shadow-purple-500/5 relative">
                            {/* Back Arrow */}
                            <button
                                onClick={onBack}
                                className="absolute top-6 left-6 p-2 hover:bg-purple-500/10 rounded-lg transition-colors group"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                            </button>

                            <h1 className="text-3xl md:text-4xl text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-8 md:mt-0">
                                Select your role
                            </h1>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Role Dropdown */}
                                <div>
                                    <label htmlFor="role" className="block text-gray-300 mb-3 text-center md:text-left">
                                        Choose your role
                                    </label>
                                    <select
                                        id="role"
                                        value={selectedRole}
                                        onChange={(e) => setSelectedRole(e.target.value as "donor" | "distributor")}
                                        className="w-full px-4 py-4 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer text-center md:text-left"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select your role
                                        </option>
                                        <option value="donor" className="bg-slate-800">
                                            Donor
                                        </option>
                                        <option value="distributor" className="bg-slate-800">
                                            Distributor
                                        </option>
                                    </select>
                                </div>

                                {/* Role Description */}
                                {selectedRole && (
                                    <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                                        <p className="text-gray-300 text-center md:text-left">
                                            {selectedRole === "donor"
                                                ? "As a Donor, you can contribute to campaigns and help make a difference in communities."
                                                : "As a Distributor, you can create and manage campaigns, and distribute funds to those in need."}
                                        </p>
                                    </div>
                                )}

                                {/* Next Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        disabled={!selectedRole}
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

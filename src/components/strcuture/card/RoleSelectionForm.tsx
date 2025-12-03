import { useState } from "react";
import { HorizontalNavbar } from "../../layout/HorizontalNavbar"
import { VerticalSidebar } from "../../layout/VerticalNavbar";

interface UserProfileFormProps {
    onNext: () => void;
}

export function UserProfileForm({
    onNext,
}: UserProfileFormProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        phone: "",
    });

    const countries = [
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "India",
        "Japan",
        "Brazil",
        "Mexico",
        "Pakistan",
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Animated background effect */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <HorizontalNavbar
                activeTab="my-campaign"
                setActiveTab={() => { }}
            />
            <VerticalSidebar />

            {/* Main Content Area */}
            <main className="pt-20 md:pl-20 h-screen flex flex-col">
                <div className="flex-1 px-4 md:px-8 pb-4 md:pb-8 overflow-auto flex items-center justify-center">
                    <div className="w-full max-w-2xl">
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-10 shadow-xl shadow-purple-500/5">
                            <h1 className="text-3xl md:text-4xl text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                User Profile
                            </h1>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block text-gray-300 mb-2"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    firstName: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                            placeholder="Enter first name"
                                            required
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block text-gray-300 mb-2"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    lastName: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                            placeholder="Enter last name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Country */}
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block text-gray-300 mb-2"
                                    >
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        value={formData.country}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                country: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select your country
                                        </option>
                                        {countries.map((country) => (
                                            <option
                                                key={country}
                                                value={country}
                                                className="bg-slate-800"
                                            >
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-300 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        placeholder="Enter email address"
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-gray-300 mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        placeholder="Enter phone number"
                                        required
                                    />
                                </div>

                                {/* Next Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transform"
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
import { useState } from "react";
import team2025 from "../../assets/infomation/team/team.2025";
import ComingSoon from "../layout/ComingSoon";

const Members = () => {
    const [activeTab, setActiveTab] = useState<"2025" | "2026">("2026");

    return (
        <>
            <section className="bg-[#F8F8F8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
                        Thành Viên SEAS
                    </h1>

                    {/* Tab Navigation */}
                    <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-gray-300">
                        <button
                            onClick={() => setActiveTab("2025")}
                            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-colors ${activeTab === "2025"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            2025
                        </button>
                        <button
                            onClick={() => setActiveTab("2026")}
                            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-colors ${activeTab === "2026"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            2026
                        </button>
                    </div>

                    {/* Content */}
                    {activeTab === "2025" ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {Object.entries(team2025).map(([key, person]) => (
                                <div
                                    key={key}
                                    className="bg-white rounded-lg shadow-md p-4 text-center"
                                >
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                                    />
                                    <h2 className="text-sm font-semibold text-gray-900 mb-1">
                                        {person.name}
                                    </h2>
                                    <p className="text-xs text-gray-600 italic mb-2">
                                        {person.title}
                                    </p>
                                    <p className="text-xs text-gray-700 whitespace-pre-line">
                                        {person.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : activeTab === "2026" ? (
                        <ComingSoon text="Danh sách thành viên SEAS 2026 sẽ sớm được công bố. Hãy theo dõi để biết thêm thông tin về đội ngũ tuyệt vời của chúng tôi!" />
                    ) : null}
                </div>
            </section>
        </>
    );
};

export default Members;
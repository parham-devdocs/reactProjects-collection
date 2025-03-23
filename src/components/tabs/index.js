import { useState } from "react";

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0); // Track the active tab index

    return (
        <div className="my-6 w-full h-screen flex items-center flex-col gap-10">
            {/* Tab Buttons */}
            <div className="w-full max-w-md flex gap-4 justify-center bg-gray-100 p-4 rounded-lg shadow-md">
                {tabs &&
                    tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)} // Set the active tab
                            className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                activeTab === index
                                    ? "bg-amber-500 text-white"
                                    : "bg-transparent text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {tab.header}
                        </button>
                    ))}
            </div>

            {/* Content Area */}
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <p className="text-gray-800 text-lg">{tabs[activeTab]?.content}</p>
            </div>
        </div>
    );
}
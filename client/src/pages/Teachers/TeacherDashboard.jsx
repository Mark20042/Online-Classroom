import React, { useState } from "react";
import TeacherSidebar from "./components/TeacherSidebar";
import TeacherClassCard from "./components/TeacherClassCard";
import TeacherAnalytics from "./components/TeacherAnalytics";
import StudentList from "./components/StudentList";
import Navbar from "../../components/Navbar";
import { Plus } from "lucide-react";

const TeacherDashboard = () => {
    const [activeView, setActiveView] = useState("overview");

    // Mock Data for Overview
    const classrooms = [
        { id: 1, name: "Web Development 101", code: "WEB101", students: 24, color: "bg-[#FFADAD]" },
        { id: 2, name: "Advanced React Patterns", code: "RCT202", students: 18, color: "bg-[#CAFFBF]" },
        { id: 3, name: "UI/UX Design Systems", code: "UIX303", students: 32, color: "bg-[#FDFFB6]" },
        { id: 4, name: "Digital Marketing", code: "MKT404", students: 15, color: "bg-[#A0C4FF]" },
        { id: 5, name: "Backend Architecture", code: "BEND505", students: 28, color: "bg-[#FFD6A5]" },
    ];

    const renderContent = () => {
        switch (activeView) {
            case "analytics":
                return <TeacherAnalytics />;
            case "students":
                return <StudentList />;
            case "settings":
                return <div className="p-10 font-black text-3xl uppercase text-gray-400">Settings Panel (Coming Soon)</div>;
            case "overview":
            default:
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-4 border-black pb-8">
                            <div>
                                <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase">
                                    Your Classrooms
                                </h1>
                                <p className="font-bold text-gray-700 text-lg mt-2">
                                    Manage your active courses.
                                </p>
                            </div>
                            <button className="flex items-center gap-2 bg-[#FF5F5F] text-white px-8 py-4 font-black text-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff4040] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                                <Plus size={24} strokeWidth={3} />
                                CREATE CLASS
                            </button>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {classrooms.map((cls) => (
                                <TeacherClassCard key={cls.id} data={cls} />
                            ))}

                            {/* Create Class Card */}
                            <div className="bg-gray-50 border-4 border-black p-6 flex flex-col items-center justify-center text-center gap-4 min-h-[256px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-white transition-all cursor-pointer group rounded-xl">
                                <div className="w-16 h-16 bg-[#FF5F5F] text-white rounded-full flex items-center justify-center border-4 border-black shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                    <Plus size={32} strokeWidth={3} />
                                </div>
                                <p className="font-black text-lg text-gray-900 uppercase">
                                    Create new class
                                </p>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            <TeacherSidebar activeView={activeView} setActiveView={setActiveView} />

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <Navbar />

                <main className="flex-1 p-8 md:p-12 overflow-y-auto bg-white">
                    <div className="max-w-8xl mx-auto">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TeacherDashboard;

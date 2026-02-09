import React from "react";
import { Plus, WalletCards } from "lucide-react";
import Navbar from "../../components/Navbar";
import ClassCard from "./components/ClassCard";

const StudentDashboard = () => {
    // Mock Data
    const joinedClasses = [
        {
            id: 1,
            name: "Web Development ",
            teacher: "Mr. Anderson",
            grade: "98%",
            color: "bg-[#FFADAD]", // Pastel Red
        },
        {
            id: 2,
            name: "History of Design",
            teacher: "Ms. Reynolds",
            grade: "85%",
            color: "bg-[#CAFFBF]", // Pastel Green
        },
        {
            id: 3,
            name: "Advanced CSS Layouts",
            teacher: "Mrs. Smith",
            grade: "92%",
            color: "bg-[#FDFFB6]", // Pastel Yellow
        },
        {
            id: 4,
            name: "JavaScript Algorithms",
            teacher: "Mr. Robot",
            grade: "88%",
            color: "bg-[#A0C4FF]", // Pastel Blue
        },
        {
            id: 5,
            name: "Digital Marketing Basics",
            teacher: "Mrs. Draper",
            grade: "95%",
            color: "bg-[#FFD6A5]", // Pastel Orange
        },
        {
            id: 6,
            name: "UX Research Methods",
            teacher: "Dr. Norman",
            grade: "90%",
            color: "bg-[#9BF6FF]", // Pastel Cyan
        },
        {
            id: 7,
            name: "Introduction to Python",
            teacher: "Mr. Gupta",
            grade: "78%",
            color: "bg-[#BDB2FF]", // Pastel Purple
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans relative">
            <Navbar />
            <div className="w-full px-8 py-12 space-y-12 relative z-10">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-4 border-black pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <WalletCards
                                size={50}
                                strokeWidth={2.5}
                                className="text-[#FF5F5F] mt-2"
                            />

                            <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase transform translate-y-2">
                                YOUR CLASSROOMS
                            </h1>
                        </div>
                        <p className="font-bold text-gray-700 text-lg ml-1">
                            Welcome back! Here's your academic overview.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 bg-[#FF5F5F] text-white px-8 py-4 font-black text-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF5F5F] hover:text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                        <Plus size={24} strokeWidth={3} />
                        JOIN CLASS
                    </button>
                </header>

                <section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                        {joinedClasses.map((cls) => (
                            <ClassCard key={cls.id} data={cls} />
                        ))}

                        {/* Join Class Card */}
                        <div className="bg-gray-50 border-4 border-black p-6 flex flex-col items-center justify-center text-center gap-4 min-h-[256px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-white transition-all cursor-pointer group rounded-xl">
                            <div className="w-16 h-16 bg-[#FF5F5F] text-white rounded-full flex items-center justify-center border-4 border-black shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                <Plus size={32} strokeWidth={3} />
                            </div>
                            <p className="font-black text-lg text-gray-900 uppercase">
                                Join a new class
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StudentDashboard;

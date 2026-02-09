import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import { Users, BookOpen, Activity, TrendingUp, ShieldAlert } from "lucide-react";

const data = [
    { name: "Jan", students: 400, teachers: 24, classes: 24 },
    { name: "Feb", students: 300, teachers: 13, classes: 22 },
    { name: "Mar", students: 200, teachers: 38, classes: 22 },
    { name: "Apr", students: 278, teachers: 39, classes: 20 },
    { name: "May", students: 189, teachers: 48, classes: 21 },
    { name: "Jun", students: 239, teachers: 38, classes: 25 },
];

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-[#f3e4c3] p-8 font-sans relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center border-b-4 border-black pb-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-black text-white p-3 border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                            <ShieldAlert size={32} />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">
                            Admin Console
                        </h1>
                    </div>

                    <button className="bg-black text-white px-6 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-[#FF5F5F] hover:border-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                        LOGOUT
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="TOTAL USERS"
                        value="1,234"
                        icon={<Users size={32} />}
                        color="bg-[#FF5F5F]"
                        textColor="text-white"
                    />
                    <StatCard
                        title="ACTIVE CLASSES"
                        value="42"
                        icon={<BookOpen size={32} />}
                        color="bg-[#3A5A40]"
                        textColor="text-white"
                    />
                    <StatCard
                        title="DAILY ACTIVITY"
                        value="+12%"
                        icon={<Activity size={32} />}
                        color="bg-white"
                    />
                    <StatCard
                        title="REVENUE"
                        value="$0.00"
                        icon={<TrendingUp size={32} />}
                        color="bg-[#FFC94D]"
                        textColor="text-black"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Growth Chart */}
                    <div className="bg-white p-6 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                        <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                            Growth Analytics
                            <span className="text-xs font-bold bg-[#FF5F5F] text-white px-2 py-1 border-2 border-black rounded-full">
                                LIVE
                            </span>
                        </h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                                    <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: "bold" }} />
                                    <YAxis tick={{ fontSize: 12, fontWeight: "bold" }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#fff",
                                            border: "3px solid #000",
                                            boxShadow: "6px 6px 0px 0px #000",
                                            fontWeight: "bold",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="students"
                                        stroke="#FF5F5F"
                                        strokeWidth={4}
                                        dot={{ r: 6, fill: "#fff", stroke: "#000", strokeWidth: 3 }}
                                        activeDot={{ r: 8, stroke: "#000", strokeWidth: 3, fill: "#FF5F5F" }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="teachers"
                                        stroke="#3A5A40"
                                        strokeWidth={4}
                                        dot={{ r: 6, fill: "#fff", stroke: "#000", strokeWidth: 3 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Activity Bar Chart */}
                    <div className="bg-white p-6 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                        <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Class Engagement</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                                    <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: "bold" }} />
                                    <YAxis tick={{ fontSize: 12, fontWeight: "bold" }} />
                                    <Tooltip
                                        cursor={{ fill: "#f3e4c3", opacity: 0.5 }}
                                        contentStyle={{
                                            backgroundColor: "#fff",
                                            border: "3px solid #000",
                                            boxShadow: "6px 6px 0px 0px #000",
                                            fontWeight: "bold",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <Bar dataKey="classes" fill="#3A5A40" radius={[8, 8, 0, 0]} barSize={40} stroke="#000" strokeWidth={2} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon, color, textColor = "text-gray-900" }) => (
    <div
        className={`${color} ${textColor} p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl`}
    >
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-xs font-black opacity-80 mb-2 uppercase tracking-widest">{title}</p>
                <h2 className="text-5xl font-black tracking-tighter">{value}</h2>
            </div>
            <div className={`p-3 rounded-lg border-2 border-black ${textColor === 'text-white' ? 'bg-white/20' : 'bg-black/5'}`}>
                {icon}
            </div>
        </div>
    </div>
);

export default AdminDashboard;

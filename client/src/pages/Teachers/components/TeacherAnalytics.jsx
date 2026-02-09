import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

const TeacherAnalytics = () => {
    // Mock Data
    const data = [
        { name: "Week 1", attendance: 95, avgGrade: 85 },
        { name: "Week 2", attendance: 92, avgGrade: 88 },
        { name: "Week 3", attendance: 98, avgGrade: 82 },
        { name: "Week 4", attendance: 85, avgGrade: 90 },
        { name: "Week 5", attendance: 90, avgGrade: 89 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-black uppercase tracking-tighter flex items-center gap-3">
                <TrendingUp size={40} className="text-[#3A5A40]" />
                Class Performance
            </h2>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard icon={<Users />} label="Total Students" value="156" color="bg-[#FFADAD]" />
                <StatCard icon={<BookOpen />} label="Active Classes" value="4" color="bg-[#FDFFB6]" />
                <StatCard icon={<Award />} label="Avg. Class Grade" value="88%" color="bg-[#CAFFBF]" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Attendance Trends">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                            <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: "bold" }} />
                            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fontWeight: "bold" }} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    border: "2px solid #000",
                                    boxShadow: "4px 4px 0px 0px #000",
                                    fontWeight: "bold",
                                    borderRadius: "8px",
                                }}
                            />
                            <Line type="monotone" dataKey="attendance" stroke="#3A5A40" strokeWidth={4} dot={{ r: 6, strokeWidth: 2, fill: "#fff" }} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Grade Distribution">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                            <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: "bold" }} />
                            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fontWeight: "bold" }} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    border: "2px solid #000",
                                    boxShadow: "4px 4px 0px 0px #000",
                                    fontWeight: "bold",
                                    borderRadius: "8px",
                                }}
                            />
                            <Bar dataKey="avgGrade" fill="#FF5F5F" radius={[8, 8, 0, 0]} stroke="#000" strokeWidth={2} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value, color }) => (
    <div className={`${color} border-4 border-black p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between`}>
        <div>
            <p className="font-black text-sm uppercase tracking-widest opacity-70">{label}</p>
            <h3 className="text-4xl font-black">{value}</h3>
        </div>
        <div className="p-3 bg-white/50 border-2 border-black rounded-lg">
            {React.cloneElement(icon, { size: 32, strokeWidth: 2.5 })}
        </div>
    </div>
);

const ChartCard = ({ title, children }) => (
    <div className="bg-white border-4 border-black p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-black uppercase mb-6">{title}</h3>
        {children}
    </div>
);

export default TeacherAnalytics;

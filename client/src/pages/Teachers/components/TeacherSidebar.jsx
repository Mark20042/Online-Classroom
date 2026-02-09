import React, { useState } from "react";
import {
    LayoutDashboard,
    BarChart2,
    Users,
    Settings,
    LogOut,
    PanelLeftClose,
    ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeacherSidebar = ({ activeView, setActiveView }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { id: "overview", label: "Classrooms", icon: <LayoutDashboard size={22} /> },
        { id: "analytics", label: "Analytics", icon: <BarChart2 size={22} /> },
        { id: "students", label: "Students", icon: <Users size={22} /> },
        { id: "settings", label: "Settings", icon: <Settings size={22} /> },
    ];

    return (
        <div
            className={`bg-[#f3e4c3] h-screen sticky top-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col  ${isCollapsed ? "w-20" : "w-64"
                }`}
        >
            {/* COLLAPSE TOGGLE - Positioned stylishly */}
            <div className={`p-6 flex ${isCollapsed ? "justify-center" : "justify-end"}`}>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="group relative p-2    transition-all duration-200"
                >
                    <PanelLeftClose
                        size={18}
                        className={`transition-transform duration-500 ${isCollapsed ? "rotate-180" : ""}`}
                    />
                    {/* Tooltip for collapsed mode */}
                    {isCollapsed && (
                        <span className="absolute left-14 bg-black text-white text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            EXPAND
                        </span>
                    )}
                </button>
            </div>

            {/* NAVIGATION LINKS */}
            <nav className="flex-1 px-3 space-y-3">
                {menuItems.map((item) => {
                    const isActive = activeView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveView(item.id)}
                            className={`relative flex items-center w-full transition-all duration-200 group ${isCollapsed ? "justify-center" : "justify-start px-4 py-3"
                                } ${isActive
                                    ? "bg-white"
                                    : "hover:bg-white/50  border-transparent hover:border-black/10"
                                }`}
                        >
                            {/* Active Indicator Line */}
                            {isActive && !isCollapsed && (
                                <div className="absolute left-0 top-0 h-full w-1.5 bg-black" />
                            )}

                            <div className={`shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:rotate-6"}`}>
                                {item.icon}
                            </div>

                            {!isCollapsed && (
                                <div className="flex items-center justify-between w-full ml-3">
                                    <span className={`text-xs font-black uppercase tracking-[0.15em] ${isActive ? "text-black" : "text-gray-600"}`}>
                                        {item.label}
                                    </span>
                                    {isActive && <ArrowRight size={14} className="opacity-50" />}
                                </div>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* MINIMAL FOOTER DECORATION */}
            <div className="p-6">
                <div className={`border-t-2 border-black/10 pt-4 ${isCollapsed ? "text-center" : ""}`}>
                    {!isCollapsed ? (
                        <div className="bg-black/5 p-3 rounded-sm border border-black/5">
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                                Workspace: <span className="text-black">Skwelastic</span>
                            </p>
                        </div>
                    ) : (
                        <div className="w-2 h-2 rounded-full bg-black/20 mx-auto" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeacherSidebar;
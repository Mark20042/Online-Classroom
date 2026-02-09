import React, { useState } from "react";
import { Search, Filter, MoreHorizontal, Mail } from "lucide-react";

const StudentList = () => {
    const [filter, setFilter] = useState("");

    // Mock Data
    const students = [
        { id: 1001, name: "Alice Johnson", class: "WEB101", email: "alice@example.com", grade: "92%" },
        { id: 1002, name: "Bob Smith", class: "RCT202", email: "bob@example.com", grade: "85%" },
        { id: 1003, name: "Charlie Brown", class: "WEB101", email: "charlie@example.com", grade: "78%" },
        { id: 1004, name: "Diana Prince", class: "UIX303", email: "diana@example.com", grade: "95%" },
        { id: 1005, name: "Evan Wright", class: "RCT202", email: "evan@example.com", grade: "88%" },
        { id: 1006, name: "Fiona Gallagher", class: "WEB101", email: "fiona@example.com", grade: "90%" },
    ];

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(filter.toLowerCase()) ||
        student.email.toLowerCase().includes(filter.toLowerCase()) ||
        student.class.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-4xl font-black uppercase tracking-tighter">Student Directory</h2>

                <div className="flex w-full md:w-auto gap-2">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search students..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 font-bold border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        />
                    </div>
                    <button className="p-2 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50 active:translate-y-0.5 active:shadow-none transition-all">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            <div className="bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100 border-b-4 border-black">
                                <th className="p-4 font-black uppercase tracking-wider text-sm">ID</th>
                                <th className="p-4 font-black uppercase tracking-wider text-sm">Name</th>
                                <th className="p-4 font-black uppercase tracking-wider text-sm">Class</th>
                                <th className="p-4 font-black uppercase tracking-wider text-sm">Email</th>
                                <th className="p-4 font-black uppercase tracking-wider text-sm">Grade</th>
                                <th className="p-4 font-black uppercase tracking-wider text-sm text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y-2 divide-gray-200">
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
                                    <tr key={student.id} className="hover:bg-[#FFF4E0] transition-colors font-bold group">
                                        <td className="p-4 font-mono text-gray-500">#{student.id}</td>
                                        <td className="p-4 text-lg">{student.name}</td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 bg-black text-white text-xs rounded uppercase tracking-widest">
                                                {student.class}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-600">{student.email}</td>
                                        <td className="p-4 text-[#3A5A40] text-lg">{student.grade}</td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 hover:bg-[#FF5F5F] hover:text-white rounded border border-black transition-colors" title="Email">
                                                    <Mail size={16} />
                                                </button>
                                                <button className="p-1.5 hover:bg-gray-200 rounded border border-black transition-colors" title="Options">
                                                    <MoreHorizontal size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-8 text-center text-gray-500 font-bold italic">
                                        No students found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentList;

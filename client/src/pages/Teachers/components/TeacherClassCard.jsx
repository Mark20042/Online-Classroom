import React from "react";
import { ArrowRight, Book, Users } from "lucide-react";

const TeacherClassCard = ({ data }) => (
    <div
        className={`${data.color} border-4 border-black p-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between h-64 rounded-xl overflow-hidden group cursor-pointer relative`}
    >
        <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-gray-900 mb-3">
                <div className="bg-white/50 p-1 rounded ">
                    <Book size={14} strokeWidth={2.5} />
                </div>
                <span className="font-black text-[10px] uppercase tracking-widest bg-white/50 px-2 py-0.5 rounded ">
                    CODE: {data.code}
                </span>
            </div>
            <h3 className="text-2xl font-black leading-tight mb-2 text-gray-900 drop-shadow-sm line-clamp-2">
                {data.name}
            </h3>
            <div className="mt-auto flex items-center gap-2 text-gray-800 font-bold">
                <Users size={16} />
                <span className="text-sm">{data.students} Students</span>
            </div>
        </div>

        <div className="bg-black/10 p-4 border-t-4 border-black flex items-center justify-between backdrop-blur-sm">
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-gray-800 tracking-wider">
                    Status
                </span>
                <span className="font-black text-xl text-gray-900 uppercase">Active</span>
            </div>
            <button className="bg-white text-black w-10 h-10 flex items-center justify-center border-2 border-black group-hover:bg-black group-hover:text-white transition-colors rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <ArrowRight size={20} strokeWidth={3} />
            </button>
        </div>
    </div>
);

export default TeacherClassCard;

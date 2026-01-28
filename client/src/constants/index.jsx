import {
  BookOpen,
  Menu,
  Zap,
  Layout,
  School,
  User,
  CreditCard,
  Mail,
  Upload,
  Video,
  FileBarChart,
  UserPlus,
  BarChart3,
  CalendarCheck,
  GraduationCap,
  ShieldCheck,
  Users,
  LayoutDashboard, // Added
} from "lucide-react";

export const NAV_LINKS = [
  { icon: <Zap size={18} />, text: "WHY CHOOSE US", href: "#" },
  { icon: <Layout size={18} />, text: "HOW IT WORKS", href: "#" },
  { icon: <School size={18} />, text: "FOR SCHOOLS", href: "#" },
  { icon: <CreditCard size={18} />, text: "PRICING", href: "#" },
  { icon: <Mail size={18} />, text: "CONTACT", href: "#" },
];

export const MOBILE_LINKS = [
  { icon: <Zap size={18} />, text: "WHY CHOOSE US" },
  { icon: <Layout size={18} />, text: "HOW IT WORKS" },
  { icon: <School size={18} />, text: "FOR SCHOOLS" },
  { icon: <CreditCard size={18} />, text: "PRICING" },
  { icon: <Mail size={18} />, text: "CONTACT" },
];

import analyticsImg from "../assets/features/analytics.png";
import attendanceImg from "../assets/features/attendance.png";
import gradebookImg from "../assets/features/gradebook.png";
import classroomImg from "../assets/features/classroom.png";
import submissionsImg from "../assets/features/submissions.png";
import progressImg from "../assets/features/progress.png";

export const TEACHER_FEATURES = [
  {
    icon: <BarChart3 size={32} />,
    title: "Real-Time Analytics",
    desc: "Visualize student performance instantly. Spot trends, identify at-risk students, and generate detailed reports.",
    color: "bg-[#FF5F5F]", // Red
    image: analyticsImg,
    className: "md:col-span-2",
    imgBg: "bg-[#ffe0e0]", // Lighter red for image background
  },
  {
    icon: <CalendarCheck size={32} />,
    title: "Smart Attendance",
    desc: "Track daily attendance and sync data automatically.",
    color: "bg-[#F3E8C9]", // Beige
    image: attendanceImg,
    className: "md:col-span-1",
    imgBg: "bg-[#fff8e0]",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Automated Gradebook",
    desc: "Input scores once and let our system calculate weighted averages and final grades instantly.",
    color: "bg-[#3A5A40]", // Green
    iconColor: "text-white",
    image: gradebookImg,
    className: "md:col-span-3", // Full width
    imgBg: "bg-[#e0f0e0]",
  },
];

export const STUDENT_FEATURES = [
  {
    icon: <Users size={32} />,
    title: "Classroom Central",
    desc: "Manage multiple sections and student profiles from one unified dashboard.",
    color: "bg-[#A78BFA]", // Purple
    image: classroomImg,
    className: "md:col-span-2",
    imgBg: "bg-[#ece0ff]",
  },
  {
    icon: <Zap size={32} />,
    title: "Instant Submissions",
    desc: "Submit assignments digitally and get instant confirmation.",
    color: "bg-[#FACC15]", // Yellow
    image: submissionsImg,
    className: "md:col-span-1",
    imgBg: "bg-[#fffde0]",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Private Progress",
    desc: "Check your grades privately and track your own progress.",
    color: "bg-[#60A5FA]", // Blue
    image: progressImg,
    className: "md:col-span-3", // Full width
    imgBg: "bg-[#e0efff]",
  },
];

// Make sure to add 3 more images to your assets folder for the new steps!
import teacherSignupImg from "../assets/how-it-works/signup.png";
import classSetupImg from "../assets/how-it-works/onlinemeet.png"; // New image needed
import importStudentImg from "../assets/how-it-works/upload.png";
import studentSignupImg from "../assets/how-it-works/student-login.png"; // New image needed
import onlineMeetImg from "../assets/how-it-works/discuss.png";
import analyticImg from "../assets/how-it-works/onlinetest.png"; // New image needed

export const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "Teacher Sign Up",
    desc: "Teachers start by creating a secure account to establish their digital classroom environment.",
    icon: <UserPlus className="text-white" size={24} />,
    color: "bg-[#FF5F5F]", // Red
    rotate: "-rotate-2",
    image: teacherSignupImg,
  },
  {
    id: 2,
    title: "Setup Classes",
    desc: "Create subjects and organize class schedules to prepare the learning structure.",
    icon: <BookOpen className="text-white" size={24} />,
    color: "bg-[#F59E0B]", // Amber/Orange
    rotate: "rotate-2",
    image: classSetupImg,
  },
  {
    id: 3,
    title: "Import Students",
    desc: "Upload student details in bulk via CSV or add them manually to populate your class lists.",
    icon: <Upload className="text-white" size={24} />,
    color: "bg-[#3A5A40]", // Green
    rotate: "-rotate-1",
    image: importStudentImg,
  },
  {
    id: 4,
    title: "Student Registration",
    desc: "Students create their accounts to verify their identity and join their assigned subjects.",
    icon: <GraduationCap className="text-white" size={24} />,
    color: "bg-[#8B5CF6]", // Purple
    rotate: "rotate-2",
    image: studentSignupImg,
  },
  {
    id: 5,
    title: "Online Meetings",
    desc: "Conduct live virtual classes and discussions directly inside the platform.",
    icon: <Video className="text-white" size={24} />,
    color: "bg-[#60A5FA]", // Blue
    rotate: "-rotate-2",
    image: onlineMeetImg,
  },
  {
    id: 6,
    title: "Assess & Export",
    desc: "Host online quizzes, manage gradebooks automatically, and export full performance reports.",
    icon: <FileBarChart className="text-white" size={24} />,
    color: "bg-[#EC4899]", // Pink
    rotate: "rotate-1",
    image: analyticImg,
  },
];

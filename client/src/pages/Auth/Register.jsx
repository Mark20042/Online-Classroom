import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../utils/axios";
import { API_PATHS } from "../../utils/api";
import { Loader2, ArrowLeft, GraduationCap, School } from "lucide-react";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Redirect if already logged in
    React.useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userStr = localStorage.getItem("user");
        if (token && userStr) {
            try {
                const user = JSON.parse(userStr);
                if (user.role === "ADMIN") navigate("/admin");
                else if (user.role === "TEACHER") navigate("/teacher");
                else navigate("/student");
            } catch (e) {
                localStorage.removeItem("authToken");
                localStorage.removeItem("user");
            }
        }
    }, [navigate]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            role: "STUDENT", // Default role
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Full Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            role: Yup.string()
                .oneOf(["STUDENT", "TEACHER"], "Invalid role")
                .required("Role is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setError("");

            try {
                await axiosInstance.post(API_PATHS.auth.register, values);
                navigate("/login");
            } catch (err) {
                setError(err.response?.data?.error || "Something went wrong");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3e4c3] px-4 font-sans relative overflow-hidden py-12">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            ></div>

            <div className="max-w-md w-full space-y-8 bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
                <div className="text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold hover:underline mb-6 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                        JOIN SKWELASTIC
                    </h2>
                    <p className="mt-2 text-sm font-medium text-gray-600">
                        Create your account and start managing
                    </p>
                </div>

                {error && (
                    <div className="bg-red-100 border-2 border-red-500 text-red-600 p-3 font-bold text-sm text-center shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                {...formik.getFieldProps("name")}
                                className={`appearance-none relative block w-full px-4 py-3 border-2 border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-medium ${formik.touched.name && formik.errors.name
                                    ? "border-red-500 bg-red-50"
                                    : "bg-gray-50"
                                    }`}
                                placeholder="Full Name"
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-xs mt-1 font-bold border-l-2 border-red-500 pl-2">
                                    {formik.errors.name}
                                </div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                {...formik.getFieldProps("email")}
                                className={`appearance-none relative block w-full px-4 py-3 border-2 border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-medium ${formik.touched.email && formik.errors.email
                                    ? "border-red-500 bg-red-50"
                                    : "bg-gray-50"
                                    }`}
                                placeholder="Email address"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-xs mt-1 font-bold border-l-2 border-red-500 pl-2">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                {...formik.getFieldProps("password")}
                                className={`appearance-none relative block w-full px-4 py-3 border-2 border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-medium ${formik.touched.password && formik.errors.password
                                    ? "border-red-500 bg-red-50"
                                    : "bg-gray-50"
                                    }`}
                                placeholder="Password"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500 text-xs mt-1 font-bold border-l-2 border-red-500 pl-2">
                                    {formik.errors.password}
                                </div>
                            ) : null}
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label className="block text-sm font-black text-gray-900 mb-3">
                                I AM A:
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className={`cursor-pointer border-2 border-black p-3 flex flex-col items-center justify-center gap-2 transition-all ${formik.values.role === "STUDENT"
                                    ? "bg-[#3A5A40] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    : "bg-white text-gray-500 hover:bg-gray-50"
                                    }`}>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="STUDENT"
                                        checked={formik.values.role === "STUDENT"}
                                        onChange={formik.handleChange}
                                        className="sr-only"
                                    />
                                    <GraduationCap size={24} strokeWidth={2.5} />
                                    <span className="font-bold text-sm">STUDENT</span>
                                </label>

                                <label className={`cursor-pointer border-2 border-black p-3 flex flex-col items-center justify-center gap-2 transition-all ${formik.values.role === "TEACHER"
                                    ? "bg-[#3A5A40] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    : "bg-white text-gray-500 hover:bg-gray-50"
                                    }`}>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="TEACHER"
                                        checked={formik.values.role === "TEACHER"}
                                        onChange={formik.handleChange}
                                        className="sr-only"
                                    />
                                    <School size={24} strokeWidth={2.5} />
                                    <span className="font-bold text-sm">TEACHER</span>
                                </label>
                            </div>
                            {formik.touched.role && formik.errors.role ? (
                                <div className="text-red-500 text-xs mt-1 font-bold border-l-2 border-red-500 pl-2">
                                    {formik.errors.role}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border-2 border-black text-lg font-black text-white bg-[#FF5F5F] hover:bg-[#ff4040] focus:outline-none focus:ring-0 active:translate-x-0.5 active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-100"
                        >
                            {loading ? (
                                <Loader2 className="w-6 h-6 animate-spin text-black" />
                            ) : (
                                "CREATE ACCOUNT"
                            )}
                        </button>
                    </div>
                </form>

                <div className="text-center text-sm font-bold">
                    <span className="text-gray-600">
                        Already have an account?{" "}
                    </span>
                    <Link
                        to="/login"
                        className="text-[#FF5F5F] hover:text-black hover:underline decoration-2 underline-offset-2"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;

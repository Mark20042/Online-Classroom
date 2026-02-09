import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../utils/axios";
import { API_PATHS } from "../../utils/api";
import { Loader2, ArrowLeft } from "lucide-react";

const Login = () => {
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
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setError("");

            try {
                const response = await axiosInstance.post(API_PATHS.auth.login, values);

                if (response.data.token) {
                    localStorage.setItem("authToken", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));

                    // Role-based redirect
                    const role = response.data.user.role;
                    if (role === "ADMIN") {
                        navigate("/admin");
                    } else if (role === "TEACHER") {
                        navigate("/teacher");
                    } else {
                        navigate("/student");
                    }
                }
            } catch (err) {
                setError(err.response?.data?.error || "Something went wrong");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3e4c3] px-4 font-sans relative overflow-hidden">
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
                        WELCOME BACK
                    </h2>
                    <p className="mt-2 text-sm font-medium text-gray-600">
                        Please sign in to your <span className="font-black">Skwelastic</span> account
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
                                autoComplete="current-password"
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
                                "SIGN IN"
                            )}
                        </button>
                    </div>
                </form>

                <div className="text-center text-sm font-bold">
                    <span className="text-gray-600">
                        Don't have an account?{" "}
                    </span>
                    <Link
                        to="/register"
                        className="text-[#FF5F5F] hover:text-black hover:underline decoration-2 underline-offset-2"
                    >
                        Sign up now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

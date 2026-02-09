import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/Landing/LandingPage.jsx";
import Login from "@/pages/Auth/Login.jsx";
import Register from "@/pages/Auth/Register.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import AdminDashboard from "@/pages/Admin/AdminDashboard.jsx";
import TeacherDashboard from "@/pages/Teachers/TeacherDashboard.jsx";
import StudentDashboard from "@/pages/Students/StudentDashboard.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["TEACHER"]} />}>
          <Route path="/teacher" element={<TeacherDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["STUDENT"]} />}>
          <Route path="/student" element={<StudentDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

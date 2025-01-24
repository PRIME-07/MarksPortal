import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdminPortal from "./pages/adminPortal";
import StudentPortal from "./pages/studentPortal";
import AdminDashboard from "./components/dashboard/adminDashboard";
import StudentDashboard from "./components/dashboard/studentDashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminPortal />} />
                <Route path="/student" element={<StudentPortal />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;

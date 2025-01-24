import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdminPortal from ".src/pages/adminPortal";
import StudentPortal from ".src/pages/studentPortal.js";
import AdminDashboard from "./components/dashboard/adminDashboard";
import StudentDashboard from "./components/dashboard/studentDashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="MarksPortal/src/pages/home.js" element={<Home />} />
                <Route path="MarksPortal/src/pages/adminPortal.js" element={<AdminPortal />} />
                <Route path="MarksPortal/src/pages/studentPortal.js" element={<StudentPortal />} />
                <Route path="MarksPortal/src/components/dashboard/adminDashboard.js" element={<AdminDashboard />} />
                <Route path="MarksPortal/src/components/dashboard/studentDashboard.js" element={<StudentDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;

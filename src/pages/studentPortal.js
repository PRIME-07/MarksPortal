import React from "react";
import { useNavigate } from "react-router-dom";

const StudentPortal = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/student-dashboard"); // Redirect to student dashboard after login
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Student Portal</h1>
            <p>Log in to view your marks.</p>
            <button onClick={handleLogin}>Go to Student Dashboard</button>
        </div>
    );
};

export default StudentPortal;

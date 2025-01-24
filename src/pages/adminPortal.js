import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
    const navigate = useNavigate();

    const handleUpload = () => {
        navigate("/admin-dashboard"); // Redirect to admin dashboard after upload
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Admin Portal</h1>
            <p>Log in to manage marks and upload data.</p>
            <button onClick={handleUpload}>Go to Admin Dashboard</button>
        </div>
    );
};

export default AdminPortal;

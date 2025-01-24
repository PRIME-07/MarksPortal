import React from "react";

const AdminDashboard = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Admin Dashboard</h1>
            <p>Upload Excel files and manage marks here.</p>
            <input type="file" accept=".xlsx, .xls" />
            <button>Upload</button>
        </div>
    );
};

export default AdminDashboard;

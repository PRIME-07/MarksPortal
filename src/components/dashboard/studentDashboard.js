import React from "react";

const StudentDashboard = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Student Dashboard</h1>
            <p>Select a semester to view your marks:</p>
            <select>
                <option value="sem1">Semester 1</option>
                <option value="sem2">Semester 2</option>
                <option value="sem3">Semester 3</option>
            </select>
            <button>View Marks</button>
        </div>
    );
};

export default StudentDashboard;

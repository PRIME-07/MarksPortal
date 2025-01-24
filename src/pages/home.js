import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to the Marks Portal</h1>
            <p>Select your role to continue:</p>
            <button onClick={() => navigate("/admin")}>Admin</button>
            <button onClick={() => navigate("/student")}>Student</button>
        </div>
    );
};

export default Home;

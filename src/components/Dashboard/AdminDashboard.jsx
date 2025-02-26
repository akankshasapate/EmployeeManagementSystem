import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ onLogout }) => {
    const adminData = {
        firstname: "Admin"  // Or you can get this from localStorage if needed
    };

    return (
        <div className="h-screen w-screen bg-[#1c1c1c] p-5">
            <Header data={adminData} onLogout={onLogout} />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
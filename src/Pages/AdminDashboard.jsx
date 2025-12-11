import React from 'react';
import './../Styles/AdminDashBoard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>

            {/* Stats Section */}
            <div className="admin-stats">
                <div className="stat-card">
                    <h2>25</h2>
                    <p>Total Users</p>
                </div>
                <div className="stat-card">
                    <h2>12</h2>
                    <p>Total Services</p>
                </div>
                <div className="stat-card">
                    <h2>40</h2>
                    <p>Total Bookings</p>
                </div>
            </div>   
        </div>
    );
};

export default AdminDashboard;

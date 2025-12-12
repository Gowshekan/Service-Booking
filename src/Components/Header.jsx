//change according to your need

import {NavLink} from "react-router-dom";
import '../App.css'

const Header = () => {
    return (
        <header className="header">
            <img src="/Booking.jpg" alt="logo"></img>
            <div className="links">
                <NavLink to={"/auth"}>Login</NavLink>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/service-details"}>Service</NavLink>
                <NavLink to={"/provider-dashboard"}>Provider Dashboard</NavLink>
                <NavLink to={"/booking/1"}>Booking</NavLink>
                <NavLink to={"/customer-dashboard"}>Customer Dashboard</NavLink>
                <NavLink to={"/admin-dashboard"}>Admin Dashboard</NavLink>
                <NavLink to={"/provider-registration"}>Provider Registration</NavLink>
                
            </div>
        </header>
    );
};

export default Header;
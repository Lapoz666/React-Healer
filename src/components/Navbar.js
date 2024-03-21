import axios from "axios";
import image from "../images/medical-logo-maker-6.png";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
    const user = useSelector(store => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        if (user) {
            axios.post(
                'https://medicalstore.mashupstack.com/api/logout',
                {},
                {
                    headers: { 'Authorization': "Bearer " + user.token }
                }
            );
            dispatch(removeUser());
            navigate('/login');
        }
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <div className="navbar-brand">
                <a href="aboutus" style={{ textDecoration: 'none' }}>
                    <img src={image} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
                </a>
                <span><b>HEALER</b></span>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse mr-auto"
                id="navbarNav"
                style={{ float: "left" }}
            >
                <ul className="navbar-nav mr-auto" style={{ color: "#ffffff" }}>
                    <li className="nav-item">
                        <NavLink to={"/home"} className='nav-link'>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/list"} className='nav-link'>
                            Medicine
                        </NavLink>
                    </li>
                </ul>
                
          
                <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                    {user ? (
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={logout}>Logout</NavLink>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <NavLink to={"/login"} className="nav-link">
                                Login
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

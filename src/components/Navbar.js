import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'
export const Navbar = () => (
    <nav className="navbar">
        <div className="navabar-logo">Logo</div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to="/about"
                >
                    About
                </NavLink>
            </li>

        </ul>
    </nav>
)
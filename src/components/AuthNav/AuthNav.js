import React from "react";
import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css';

export default function AuthNav() {
    return (
    <nav>
        <NavLink to='/register'
            className={ ({isActive})=> (isActive ? `${s.activeLink}` : `${s.link}`) }>
           Register
        </NavLink>

        <NavLink to='/login'
            className={ ({isActive})=> (isActive ? `${s.activeLink}` : `${s.link}`) }>
            Login
        </NavLink>
    </nav>
    );
};

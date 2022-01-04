import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Logo from "../../common/Logo/Logo";
import "./NavBar.scss";

export default function NavBar(props) {
    const { onClickSignIn } = props
    const navItem = ["Bollywood", "Technology", "Hollywood", "Fitness", "Food"]

    return (
        <div className="header">
            <Logo />
            <ul className="nav-bar">
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                {navItem.map((link, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={link}>{link}</NavLink>
                        </li>
                    );
                })}
                {/* <li>
                    <NavLink to="sign-in" onClick={onClickSignIn}>Sign In</NavLink>
                </li> */}
            </ul>
            <hr className="border-line" />
        </div>
    );
}

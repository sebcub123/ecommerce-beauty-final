import React from "react";
import CartWidget from "../CartWidget/index";
import './styles.scss';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <ul className="nav-list">
                    <a className="nav-item" href="/">
                        <img src="https://res.cloudinary.com/dml2fdgug/image/upload/v1671589157/react/logo_jm4zon.png" style={{ height: 150, width: 150 }} alt="logo beauty"></img>
                    </a>

                    <li className="nav-item">
                        <Link to="/category/Tratamientos">Tratamientos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/Guantes">Guantes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/Cremas de Peinar">Cremas de Peinar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/Shampoo y Acondicionador">Shampoo y Acondicionador</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/Protectores Termicos">Protectores Termicos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/Serums">Serums</Link>
                    </li>
                    <div className="widget-container">
                        <CartWidget />
                    </div>
                </ul>
            </div>
        </nav>
    );
}
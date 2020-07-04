import React from "react";
import "./style.css";

const Navbar = function () {
    return (
        <nav className="navbar navbar-light">
            <div className="container navbar-container mx-0">
                <div className="row w-100">
                    <div className="col-0 col-sm-1 col-xl-2"></div>
                    <div className="col-4 col-sm-3 col-xl-2 bg-secondary text-center navbar-name rounded border border-light">
                        <h1>Maxime Semegen</h1>
                    </div>
                    <div className="col-1 col-sm-2 col-xl-2"></div>
                    <div className="col-7 col-sm-5 col-xl-4 navbar-links">
                        <ul className="nav nav-tabs justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./portfolio.html">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./resume.html">Resume</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-0 col-sm-1 col-xl-2"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
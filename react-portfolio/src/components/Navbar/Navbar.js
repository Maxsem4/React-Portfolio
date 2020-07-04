import React, { useContext } from "react";
import Navlink from "../Navlink";
import { PageContext } from "../../page/page";
import "./style.css";

const Navbar = function () {
    const { page, setPage } = useContext(PageContext);

    const clickHandler = function (link, event) {
        event.preventDefault();
        setPage(link);
    }

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
                            <Navlink text="Profile" handleClick={(event) => { clickHandler("profile", event) }} active={(page === "profile")} />
                            <Navlink text="Portfolio" handleClick={(event) => { clickHandler("portfolio", event) }} active={(page === "portfolio")} />
                            <Navlink text="Contact" handleClick={(event) => { clickHandler("contact", event) }} active={(page === "contact")} />
                        </ul>
                    </div>
                    <div className="col-0 col-sm-1 col-xl-2"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
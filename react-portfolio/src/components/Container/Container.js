import React from "react";
import Navbar from "../Navbar";
import ContentContainer from "../ContentContainer";
import "./style.css";

const Container = function () {
    return (
        <div className="background">
            <Navbar />
            <ContentContainer />
        </div>
    )
}

export default Container;
import React from "react";
import Nav from "./nav";
import Header from "./header";
import Content from "./content";

function Main () {
    return (
        <div className="w-[1440px] min-h-[931px]  flex">
            <Nav />
            <div className="w-[0] h-[931px] border-[0.01px] border-[#eef2f6]"></div>
            <Header />
            <Content />
        </div>
    )
}

export default Main;
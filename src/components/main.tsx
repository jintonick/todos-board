import React from "react";
import Nav from "./nav";
import Header from "./header";
import MyTasks from "./mytasks";
import Members from "./members";
import Home from "./home";
import Goals from "./goals";
import { Routes, Route } from 'react-router-dom';

const Main: React.FC = () => {
    return (
        <div className="w-[1440px] min-h-[931px]  flex ">
            <Nav />
            <div className="w-[0] h-[931px] border-r-[1px] border-[#eef2f6]"></div>
            <div className="flex flex-col">
                <div>
                    <Header />
                </div>
                <div className="flex">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="tasks" element={<MyTasks />} />
                        <Route path="goals" element={<Goals />} />
                        <Route path="members" element={<Members />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Main;

import React from "react";
import { Outlet } from "react-router-dom";
import Styles from "./css/ATSOutlet.module.css";
import Sidebar from "./Sidebar";

const ATSOutlet = () => {
    return (
        <div className={Styles.container}>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default ATSOutlet;
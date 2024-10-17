import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import AppStyles from "./AppOutlet.module.css";

const AppOutlet = () => {
    return (
        <div className={AppStyles.App}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default AppOutlet;
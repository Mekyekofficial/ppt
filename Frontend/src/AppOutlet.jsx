import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import AppStyles from "./AppOutlet.module.css";

const AppOutlet = () => {
    const location = useLocation();
    const hideFooter = location.pathname.startsWith("/ATS");
    const hideHeader = location.pathname === "/";

    return (
        <div className={AppStyles.App}>
            {!hideHeader && <Header />}
            <Outlet />
            {!hideFooter && <Footer />}
        </div>
    );
};

export default AppOutlet;
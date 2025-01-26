import React, { useState } from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import Post from "./components/Post";
import AppStyles from "./AppOutlet.module.css";

const AppOutlet = () => {
    const location = useLocation();
    const hideFooter = location.pathname.startsWith("/ATS");
    const hideHeader = location.pathname === "/";

    let [hidePost, setHidePost] = useState(true);
    const closePost = () => setHidePost(true);
    const openPost = () => setHidePost(false);

    return (
        <div className={AppStyles.App}>
            {!hideHeader && <Header />}
            <Outlet openPost={openPost}/>
            {!hidePost && <Post closePost={closePost}/>}
            {!hideFooter && <Footer />}
        </div>
    );
};

export default AppOutlet;
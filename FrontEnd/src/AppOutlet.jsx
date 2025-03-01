import React, { createContext, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import Post from "./components/Post";
import AppStyles from "./AppOutlet.module.css";

export const PostContext = createContext();

const AppOutlet = () => {
    const location = useLocation();
    const hideFooter = location.pathname.startsWith("/ATS");
    const hideHeader = location.pathname === "/";

    const [hidePost, setHidePost] = useState(true);

    const closePost = () => setHidePost(true);
    const openPost = () => setHidePost(false);

    return (
        <PostContext.Provider value={{ openPost, closePost }}>
            <div className={AppStyles.App}>
                {!hideHeader && <Header />}
                <Outlet />
                {!hidePost && <Post closePost={closePost} />}
                {/* {!hideFooter && <Footer />} */}
            </div>
        </PostContext.Provider>
    );
};

export default AppOutlet;

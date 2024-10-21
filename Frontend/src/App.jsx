import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppOutlet from "./AppOutlet";
import FeedSection from "./components/feedSection";
import NewsTab from "./components/NewsTab";
import ATSOutlet from "./components/ATSOutlet";
import Dashboard from './components/ATS/Dashboard';
import Jobs from './components/ATS/Jobs';
import Applications from './components/ATS/Applications';
import TalentPool from './components/ATS/TalentPool';
import ComingSoon from "./commingSoon";
// import Home from "./home.jsx";



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <AppOutlet />,
      children: [
        {
          path: "/",
          element: <ComingSoon />,
        },
        {
          path: "/Feeds",
          element: <FeedSection />,
        },
        {
          path: "/news",
          element: <NewsTab />,
        },
        {
          path: "/community",
          element: <ComingSoon />,
        },
        {
          path: "/learn",
          element: <ComingSoon />,
        },
        {
          path: "/events",
          element: <ComingSoon />,
        },
        {
          path: "/Work",
          element: <ATSOutlet />,
          children: [
            {
              path: "/Work",
              element: <Dashboard />,
            },
            {
              path: "/Work/Dashboard",
              element: <Dashboard />,
            },
            {
              path: "/Work/Jobs",
              element: <Jobs />,
            },
            {
              path: "/Work/Applications",
              element: <Applications />,
            },
            {
              path: "/Work/TalentPool",
              element: <TalentPool />,
            },
            {
              path: "/Work/TalentHunt",
              element: <ComingSoon />,
            },
            {
              path: "/Work/MarketPlace",
              element: <ComingSoon />,
            },
            {
              path: "/Work/Settings",
              element: <ComingSoon />,
            },
            {
              path: "/Work/Setup",
              element: <ComingSoon />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

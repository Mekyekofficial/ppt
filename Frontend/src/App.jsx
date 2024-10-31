import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppOutlet from "./AppOutlet";
import FeedSection from "./components/feedSection";
import NewsTab from "./components/NewsTab";
import CommunityTab from "./components/CommunityTab";
import EventTab from "./components/EventTab";
import WorkTab from "./components/WorkTab";
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
          element: <CommunityTab />,
        },
        {
          path: "/learn",
          element: <ComingSoon />,
        },
        {
          path: "/events",
          element: <EventTab />,
        },
        {
          path: "/Work",
          element: <WorkTab />,
        },
        {
          path: "/ATS",
          element: <ATSOutlet />,
          children: [
            {
              path: "/ATS",
              element: <Dashboard />,
            },
            {
              path: "/ATS/Dashboard",
              element: <Dashboard />,
            },
            {
              path: "/ATS/Jobs",
              element: <Jobs />,
            },
            {
              path: "/ATS/Applications",
              element: <Applications />,
            },
            {
              path: "/ATS/TalentPool",
              element: <TalentPool />,
            },
            {
              path: "/ATS/TalentHunt",
              element: <ComingSoon />,
            },
            {
              path: "/ATS/MarketPlace",
              element: <ComingSoon />,
            },
            {
              path: "/ATS/Settings",
              element: <ComingSoon />,
            },
            {
              path: "/ATS/Setup",
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

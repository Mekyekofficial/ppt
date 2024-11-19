import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home";
import AppOutlet from "./AppOutlet";
import FeedSection from "./components/feedSection";
import NewsTab from "./components/NewsTab";
import CommunityTab from "./components/CommunityTab";
import EventTab from "./components/EventTab";
import WorkTab from "./components/WorkTab";
import WorkDetails from "./components/Work/WorkDetails"
import ATSOutlet from "./components/ATSOutlet";
import Dashboard from './components/ATS/Dashboard';
import Jobs from './components/ATS/Jobs';
import Applications from './components/ATS/Applications';
import TalentPool from './components/ATS/TalentPool';
import ComingSoon from "./commingSoon";



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Home />,
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
          path: "/Work/job-Details",
          element: <WorkDetails />,
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

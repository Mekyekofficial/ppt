import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "./home";
import AppOutlet from "./AppOutlet";
// import ChatBox from './ChatBox/src/index';
import FeedSection from "./components/Feed";
import NewsTab from "./components/NewsTab";
import CommunityTab from "./components/CommunityTab";
import CourseTab from "./components/CourseTab";
import CourseCategory from "./components/CourseTab/CourseCategory";
import Course from "./components/CourseTab/Course";
import CourseSettings from "./components/CourseTab/CourseSettings";
import EventTab from "./components/EventTab";
import EventDetails from "./components/Event/EventDetails";
import WorkTab from "./components/WorkTab";
import WorkDetails from "./components/Work/WorkDetails";
import ATSOutlet from "./components/CompanyOutlet";
import Dashboard from "./components/Company/Dashboard";
import Jobs from "./components/Company/ATS/Jobs";
import Applications from "./components/Company/ATS/Applications";
import TalentPool from "./components/Company/ATS/TalentPool";
import TalentHunt from "./components/Company/ATS/TalentHunt";
import JobApplicants from "./components/Company/ATS/Jobs/JobApplicants";
import Payroll from "./components/Company/Payroll/Payroll";
import ComingSoon from "./commingSoon";
import RefreshHandler from "./RefreshHandler";
import Profile from "./components/Profile";
import CompanyProfile from "./components/CompanyProfile";
import Post from './components/Company/Post/Post';
import Report from './components/Company/Report/Report';
import EmployTeam from './components/Company/EmployTeam/EmployTeam';
import Documents from './components/Company/Documents/Documents';

const PrivateRouteLogin = ({ children, isLogged }) => {
  return isLogged ? <Navigate to="/Feeds" /> : children;
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <RefreshHandler setLoggedIn={setIsLogged} />
          <AppOutlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: (
            <PrivateRouteLogin isLogged={isLogged}>
              <Home />
            </PrivateRouteLogin>
          ),
        },
        { path: "/feeds", element: <FeedSection /> },
        { path: "/news", element: <NewsTab /> },
        { path: "/community", element: <CommunityTab /> },
        { path: "/learn", element: <CourseTab /> },
        { path: "/learn/:category", element: <CourseCategory /> },
        { path: "/learn/:category/:course", element: <Course /> },
        { path: "/learn/settings", element: <CourseSettings /> },
        { path: "/events", element: <EventTab /> },
        {path: "/events/:eventId", element: <EventDetails />},
        { path: "/Work", element: <WorkTab /> },
        { path: "/Work/job-Details/:jobId", element: <WorkDetails /> },
      ],
    },
    {
      path: "/Company",
      element: <ATSOutlet />,
      children: [
        { path: "/Company", element: <Navigate to="/Company/Dashboard" /> },
        { path: "/Company/Dashboard", element: <Dashboard /> },
        { path: "/Company/ATS", element: <ComingSoon />},
        { path: "/Company/Employ-Team", element: <EmployTeam />},
        { path: "/Company/Documents", element: <Documents />},
        { path: "/Company/Payroll", element: <Payroll />},
        { path: "/Company/Post", element: <Post />},
        { path: "/Company/Report", element: <Report />},
        { path: "/Company/Configuration", element: <ComingSoon />},
        { path: "/Company/Integration", element: <ComingSoon />},
        { path: "/Company/Promotion", element: <ComingSoon />},
      ],
    },
    {
      path: "/Profile/:userId",
      element: <Profile />,
    },
    {
      path: "/Company-Profile/:userId",
      element: <CompanyProfile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

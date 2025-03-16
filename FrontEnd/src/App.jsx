import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from "./home";
import AppOutlet from "./AppOutlet";

import FeedSection from "./components/Feed";
import NewsTab from "./components/NewsTab";

import CommunityTab from "./components/CommunityTab";
import CommunityMain from "./components/Community/CommunityMain";
import Community from "./components/Community/Community";

import CourseTab from "./components/CourseTab";
import CourseCategory from "./components/CourseTab/CourseCategory";
import Course from "./components/CourseTab/Course";
import CourseSettings from "./components/CourseTab/CourseSettings";

import EventTab from "./components/EventTab";
import EventDetails from "./components/Event/EventDetails";

import WorkTab from "./components/WorkTab";
import WorkDetails from "./components/Work/WorkDetails";

import CompanyOutlet from "./components/CompanyOutlet";
import Dashboard from "./components/Company/Dashboard";

import ATSOutlet from "./components/Company/ATS/ATSOutlet";
import Jobs from "./components/Company/ATS/Jobs";
import Applications from "./components/Company/ATS/Applications";
import TalentHunt from "./components/Company/ATS/TalentHunt";
import Interviews from "./components/Company/ATS/Interviews";

import JobApplicants from "./components/Company/ATS/Jobs/JobApplicants";
import Payroll from "./components/Company/Payroll/Payroll";
import Post from './components/Company/Post/Post';
import Report from './components/Company/Report/Report';
import EmployTeam from './components/Company/EmployTeam/EmployTeam';
import Documents from './components/Company/Documents/Documents';

import ComingSoon from "./commingSoon";
import RefreshHandler from "./RefreshHandler";

import Profile from "./components/Profile";
import CompanyProfile from "./components/CompanyProfile";

import FloatingChatboxFrame from './components/FloatingChatboxFrame';

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
        { path: "/community", 
          element: <CommunityTab />,
          children: [
            { path: "/community", element: <Navigate to="/community/main" /> },
            { path: "/community/main", element: <CommunityMain /> },
            { path: "/community/:id", element: <Community /> },
          ]
        },
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
      element: <CompanyOutlet />,
      children: [
        { path: "/Company", element: <Navigate to="/Company/Dashboard" /> },
        { path: "/Company/Dashboard", element: <Dashboard /> },
        { path: "/Company/ATS", 
          element: <ATSOutlet />,
          children: [
            { path: "/Company/ATS", element: <Navigate to="/Company/ATS/Jobs" />},
            { path: "/Company/ATS/Jobs", element: <Jobs />},
            { path: "/Company/ATS/Applications", element: <Applications />},
            { path: "/Company/ATS/Talent-Hunt", element: <TalentHunt />},
            { path: "/Company/ATS/Jobs/Job-Applicants", element: <JobApplicants />},
            { path: "/Company/ATS/Interviews", element: <Interviews />},
          ],
        },
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

  return (
    <div>
      <RouterProvider router={router} />
      <FloatingChatboxFrame />
    </div>
  );
};

export default App;

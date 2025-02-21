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
import CourseTab from "./components/CourseTab";
import CourseCategory from "./components/CourseTab/CourseCategory";
import Course from "./components/CourseTab/Course";
import CourseSettings from "./components/CourseTab/CourseSettings";
import EventTab from "./components/EventTab";
import WorkTab from "./components/WorkTab";
import WorkDetails from "./components/Work/WorkDetails";
import ATSOutlet from "./components/ATSOutlet";
import Dashboard from "./components/ATS/Dashboard";
import Jobs from "./components/ATS/Jobs";
import Applications from "./components/ATS/Applications";
import TalentPool from "./components/ATS/TalentPool";
import JobApplicants from "./components/ATS/Jobs/JobApplicants";
import ComingSoon from "./commingSoon";
import RefreshHandler from "./RefreshHandler";
import Profile from "./components/Profile";
import Post from "./components/Post";
import CountdownTimer from "./components/Feed/CountdownTimer";

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
      element: <CountdownTimer />,
    },
  ]);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <RefreshHandler setLoggedIn={setIsLogged} />
  //         <AppOutlet />
  //       </>
  //     ),
  //     children: [
  //       {
  //         path: "/",
  //         element: (
  //           <PrivateRouteLogin isLogged={isLogged}>
  //             <Home />
  //           </PrivateRouteLogin>
  //         ),
  //       },
  //       { path: "/feeds", element: <FeedSection /> },
  //       { path: "/news", element: <NewsTab /> },
  //       { path: "/community", element: <CommunityTab /> },
  //       { path: "/learn", element: <CourseTab /> },
  //       { path: "/learn/:category", element: <CourseCategory /> },
  //       { path: "/learn/:category/:course", element: <Course /> },
  //       { path: "/learn/settings", element: <CourseSettings /> },
  //       { path: "/events", element: <EventTab /> },
  //       { path: "/Work", element: <WorkTab /> },
  //       { path: "/Work/job-Details/:jobId", element: <WorkDetails /> },
  //       {
  //         path: "/ATS",
  //         element: <ATSOutlet />,
  //         children: [
  //           { path: "/ATS", element: <Navigate to="/ATS/Dashboard" /> },
  //           { path: "/ATS/Dashboard", element: <Dashboard /> },
  //           { path: "/ATS/Jobs", element: <Jobs /> },
  //           { path: "/ATS/Applications", element: <Applications /> },
  //           { path: "/ATS/TalentPool", element: <TalentPool /> },
  //           { path: "/ATS/TalentHunt", element: <ComingSoon /> },
  //           { path: "/ATS/MarketPlace", element: <ComingSoon /> },
  //           { path: "/ATS/Settings", element: <ComingSoon /> },
  //           { path: "/ATS/Setup", element: <ComingSoon /> },
  //           {
  //             path: "/ATS/jobs/job-applicants/:jobId",
  //             element: <JobApplicants />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: "/Profile/:userId",
  //     element: <Profile />,
  //   },
  //   {
  //     path: "/Post",
  //     element: <Post />,
  //   },
  // ]);

  return <RouterProvider router={router} />;
};

export default App;

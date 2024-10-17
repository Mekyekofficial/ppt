import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppOutlet from "./AppOutlet";
import FeedSection from "./components/feedSection";
import ATS from "./components/ATS";
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
          path: "/Feed-Section",
          element: <FeedSection />,
        },
        {
          path: "/ATS",
          element: <ATS />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

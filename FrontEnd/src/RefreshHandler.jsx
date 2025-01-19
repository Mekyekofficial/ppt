import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user-info");

    if (token || user) {
      setLoggedIn(true);
      if (["/", "/login", "/signup", "/Google"].includes(location.pathname)) {
        navigate("/feeds", { replace: true });
      }
    } else {
      setLoggedIn(false);
    }
  }, [location, navigate, setLoggedIn]);

  return null;
}

export default RefreshHandler;

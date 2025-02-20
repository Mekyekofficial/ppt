import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="GOOGLE_CLIENT_ID">
    <StrictMode>
      <App />
      <ToastContainer/>
    </StrictMode>
  </GoogleOAuthProvider>
);

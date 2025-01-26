import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="137399153709-dl079hd78sbv82mj2th7voonfrl8313i.apps.googleusercontent.com">
    <StrictMode>
      <App />
      <ToastContainer/>
    </StrictMode>
  </GoogleOAuthProvider>
);

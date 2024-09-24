import { useState } from "react";
import "./App.css";
import LoginPopup from "./components/LoginPopup";
import SignupPage from "./components/singup";
import NameModal from "./components/nameModal";
import BirthModal from "./components/birthModal";
import ConfirmEmailModal from "./components/confirmEmailModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ConfirmEmailModal />
    </div>
  );
}

export default App;

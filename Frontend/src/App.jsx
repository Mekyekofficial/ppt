import { useState } from "react";
import "./App.css";
import LoginPopup from "./components/LoginPopup";
import SignupPage from "./components/singup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginPopup />
      <SignupPage/>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import FeedSection from "./components/feedSection";
import LoginPopup from "./components/LoginPopup";
import SignupPage from "./components/singup";
import NameModal from "./components/nameModal";
import BirthModal from "./components/birthModal";
import ConfirmEmailModal from "./components/confirmEmailModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <FeedSection />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/includes/header";
import Footer from "./components/includes/footer";
import FeedSection from "./components/feedSection";
import ATS from "./components/ATS";
// import Home from "./home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <ATS />
      <Footer />
    </div>
  );
}

export default App;

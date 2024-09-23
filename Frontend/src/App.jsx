import { useState } from 'react';
import './App.css';
import LoginPopup from './components/LoginPopup';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <LoginPopup />
    </div>
  )
}

export default App

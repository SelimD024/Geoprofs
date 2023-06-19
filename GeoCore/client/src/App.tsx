import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="body">
        <Navbar active="dashboard" />
      </div>
    </>
  );
}

export default App;

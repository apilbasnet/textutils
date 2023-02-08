import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar title="Text Utility" about="About Us " homePage="Home" />

      <TextForm heading="Enter your text " />

      <button className="button ">Change to UpperCase</button>
    </div>
  );
}

export default App;

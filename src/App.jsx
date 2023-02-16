import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about"
import React, { useState } from "react";


function App() {
  const [darkMode, setdarkMode] = useState({

    color: "black",
    backgroundColor: "white"
  })


  const toggleDarkMode = () => {
    setdarkMode(!darkMode)
  }

 


  return (
    <>
      <div className={"dasd"} style={darkMode}>

        <Navbar title="Text Utility" about="About Us " homePage="Home" toggleDarkMode={toggleDarkMode} />


        <div className="my-box">
          <TextForm heading="Enter your text " />
        </div>
        <div className="about">

          {/* <About > </About> */}
        </div>





      </div>
    </>
  );
}

export default App;

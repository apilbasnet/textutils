import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about"
import React, { useEffect, useState } from "react";


function App() {
  const [theme, setTheme] = useState()

  const toggleDarkMode = () => {
    const oldTheme = window.localStorage.getItem("theme");
    const newTheme = oldTheme === "light" ? "dark" : "light";
    setTheme(newTheme)
  }
  
  useEffect(() => {
    const theme = window.localStorage.getItem('theme');

    if (theme) {
      setTheme(theme);
    } else {
      setTheme('light');
    }
  }, []);
  
  useEffect(() => {
    if (theme === 'light' || theme === 'dark') {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <>
      <div className={theme}>

        <Navbar title="Text Utility" about="About Us " homePage="Home" darkMode={theme === "dark"} toggleDarkMode={toggleDarkMode} />


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

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about";

import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App(props) {
  const [theme, setTheme] = useState();

  const [mode, setmode] = useState(setTheme);

  const toggleDarkMode = () => {
    const oldTheme = window.localStorage.getItem("theme");
    const newTheme = oldTheme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (mode === "dark") {
      setmode("light");
      showAlert("Light mode has been enabled", "success ")
    } else {
      setmode("dark");
      showAlert("Dark mode has been enabled", "success ")

    }
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (theme) {
      setTheme(theme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light" || theme === "dark") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null)

    },
      1500);

  }



  return (
    <>
      <div className={theme}>

        <Router>

          <Navbar
            title="Text Utility"
            about="About Us "
            homePage="Home"
            darkMode={theme === "dark"}
            toggleDarkMode={toggleDarkMode}
            mode={mode}
          />

          <div><Alert alert={alert} /></div>

          <div className="container mt-3">
            <Routes>
              <Route exact path="/about" element={<div className="about">
                <About mode={mode} > </About>
              </div>}> </Route>
              <Route exact path="/" element={<div className="my-box">
                <TextForm showAlert={showAlert} heading="Enter your text "  mode={mode} />
              </div>}></Route>
            </Routes>
          </div>

        </Router>
      </div>
    </>
  );
}

export default App;

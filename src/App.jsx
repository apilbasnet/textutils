import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";

function App() {
  return (
    <>
      <div>
        <Navbar title="Text Utility" about="About Us " homePage="Home" />

        <TextForm heading="Enter your text " />


      </div>
    </>
  );
}

export default App;

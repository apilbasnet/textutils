import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div>
        <Navbar title="Text Utility" about="About Us " homePage="Home" />


        <div className="my-box">
          <TextForm heading="Enter your text " />

        </div>


      </div>
    </>
  );
}

export default App;

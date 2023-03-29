import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default App;

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const modeChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#263848";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils - is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - is not amazing';
      // }, 100);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    {/* <Router> */}
      {/* <Navbar title="Textutils" aboutText="About Textutils"/> */}
      {/* <Navbar /> */}
      
        <Navbar title="Textutils" mode={mode} onClickChange={modeChange} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<About/>} /> */}
            {/* <Route exact path="/about" element={<TextForm
                heading="Enter the text to analyze below"
                showAlert={showAlert}
                mode={mode} />} /> */}
                <TextForm
                heading="Enter the text to analyze below"
                showAlert={showAlert}
                mode={mode} />
          {/* </Routes> */}
        </div>
        {/* </Router> */}
    </>
  );
}

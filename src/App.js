import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';


function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(2 7 14)";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" second="More About TextUtils" Mode={mode} toggleMode={toggleMode}/>
      <TextForm mode={mode}/>
    </>
  );
}

export default App;

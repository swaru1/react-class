import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {

  const {dark} = useContext(ThemeContext)

  return (
    <div className={`${dark? "bg-gray-300 text-white" : "bg-green-100"} h-screen`}>
      This is App
      <Navbar />
      {dark? <h1 className="text-center text-6xl mt-[100px]">Dark Theme Activated</h1> : <h1 className="text-center text-6xl mt-[100px]">Light Theme Activated</h1>}
    </div>
  );
};

export default App;

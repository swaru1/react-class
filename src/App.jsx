import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    dob: "",
  })

  console.log(formData);
  

  return (
    <div>
      <h1>App</h1>
      <form action="">
        <input onChange={(e)=> setFormData({...formData, name: e.target.value})} type="text" placeholder="name" />
        <input onChange={(e)=> setFormData({...formData, email: e.target.value})} type="text" placeholder="name" />
        <input onChange={(e)=> setFormData({...formData, dob : e.target.value})} type="text" placeholder="name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

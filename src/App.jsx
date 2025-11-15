import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      dob: "",
    });
  };

  return (
    <div className="bg-gray-400">
      <h1>App</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          value={formData.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="name"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="email"
        />
        <input
          value={formData.dob}
          name="dob"
          onChange={handleChange}
          type="text"
          placeholder="dob"
        />
        <button className="bg-blue-400 border border-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

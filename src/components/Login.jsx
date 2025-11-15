import React from "react";

const Login = ({ setToggle }) => {

    const handleClick = () => {
        setToggle((prev) => !prev)
    }

  return (
    <div>
      <h1>Login Form</h1>

      <form action="">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <input type="submit" />
      </form>

        <p>Dont have a account?</p>
        <span onClick={handleClick} className="cursor-pointer text-blue-500 capitalize font-semibold">Register Here</span>

    </div>
  );
};

export default Login;

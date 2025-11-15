import React from "react";

const Register = ({ setToggle }) => {
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <h1>Register Form</h1>

      <form action="">
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <input type="submit" />
      </form>

      <p>
        already have an account?{" "}
        <span
          onClick={handleClick}
          className="text-blue-500 font-semibold capitalize"
        >
          {" "}
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;

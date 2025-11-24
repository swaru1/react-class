import React, { useContext, useState } from "react";
import { InputContext } from "../Context/InputContext";

const Input = () => {
  const { setInpText } = useContext(InputContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInpText(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          type="text"
          className="border py-1 px-3"
          placeholder="enter your text"
        />

        <input className=" border ml-4 bg-blue-500 py-1 px-3 text-white" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Input;

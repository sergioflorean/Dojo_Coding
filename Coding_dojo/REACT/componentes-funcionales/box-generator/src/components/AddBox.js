import React, { useState } from "react";

const AddBox = (props) => {
  const [color, setColor] = useState("");
  const [dimension, setDimension] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(color,dimension);
  };
    

  return (
    <form onSubmit={handleSubmit}>
      <p>Select color:</p>
      <input type="text" name="color" />
      <p>Select dimension</p>
      <input type="text" name="dimension" />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default AddBox;

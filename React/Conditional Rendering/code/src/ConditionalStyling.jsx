import React, { useState } from "react";

function ColorToggle() {
  const [color, setColor] = useState("red");

  const toggleColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  return (
    <div>
      <div style={{ backgroundColor: color, padding: "20px", color: "white" }}>
        This is a {color} box
      </div>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
}

export default ColorToggle;

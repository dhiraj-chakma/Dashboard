import React from "react";

const Button = ({ color, bgColor, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shado-xl`}
    >
      {text}
    </button>
  );
};

export default Button;

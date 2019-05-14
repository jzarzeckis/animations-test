import React from "react";

import "./Button.css";

export const Button: React.FC<{
  onClick?: () => void,
}> = ({ onClick }) => <div className="btn">
  <button onClick={onClick}>Start</button>
</div>;

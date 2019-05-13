import React from "react";

import "./Button.css";

export const Button: React.FC<{
  onClick?: () => void,
}> = ({ onClick }) => <button className="btn" onClick={onClick}>Start</button>;

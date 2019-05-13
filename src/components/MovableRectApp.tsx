import React, { useState } from "react";
import { IPos } from "../types";

export const MovableRectApp: React.FC = () => {
  const [ coords, setCoords ] = useState<IPos>({ x: 0.2, y: 0.2 });
  return (<div className="mvApp">
  </div>);
};

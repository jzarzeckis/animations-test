import React, { useState } from "react";
import { IPos } from "../types";

import "./MovableRectApp.css";

export const MovableRectApp: React.FC<{ hide: () => void }> = ({ hide }) => {
  const [ coords, setCoords ] = useState<IPos>({ x: 100, y: 100 });
  return (<div onClick={hide} className="mvApp">
    <div className="grayRect" style={{
      transform: `translate(${coords.x}px, ${coords.y}px)`,
    }} onClick={(e) => e.stopPropagation()} />
  </div>);
};

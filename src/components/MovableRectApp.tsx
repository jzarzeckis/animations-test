import React, { useState } from "react";
import { IPos } from "../types";

import "./MovableRectApp.css";

export const MovableRectApp: React.FC<{ hide: () => void }> = ({ hide }) => {
  const [ coords, setCoords ] = useState<IPos>({ x: 0.2, y: 0.2 });
  return (<div onClick={hide} className="mvApp">
  </div>);
};

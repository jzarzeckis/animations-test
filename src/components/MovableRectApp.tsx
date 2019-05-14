import React, { useState } from "react";
import { IPos } from "../types";

import "./MovableRectApp.css";

export const MovableRectApp: React.FC<{ hide: () => void }> = ({ hide }) => {
  const [ coords, setCoords ] = useState<IPos>({ x: 100, y: 100 });
  return (<div onClick={hide} className="mvApp">
    <div
      className="grayRect"
      style={{
        transform: `translate(${coords.x}px, ${coords.y}px)`,
      }}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(mDownEv) => {
        const mDownPos: IPos = { x: mDownEv.pageX, y: mDownEv.pageY };
        const rectStartPos: IPos = Object.assign({}, coords);

        const mMove = (mMoveEv: MouseEvent) => {
          setCoords({
            x: rectStartPos.x + mMoveEv.pageX - mDownPos.x,
            y: rectStartPos.y + mMoveEv.pageY - mDownPos.y,
          });
        };

        const mUp = (mUpEv: MouseEvent) => {
          document.removeEventListener("mousemove", mMove);
          document.removeEventListener("mouseup", mUp);
        };

        document.addEventListener("mousemove", mMove);

        document.addEventListener("mouseup", mUp);
      }}
    />
  </div>);
};

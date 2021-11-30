import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rainbowbox from "./Rainbowbox";

interface Props {
  xTime: number
  yTime: number
  text: string
  to: string
}

const FlyingButton: React.FC<Props> = ({xTime, yTime, text, to}) => {
    return(
        <Link className="HiddenButton" style={{
          textAlign: "center",
          textDecoration: "none",
          position: "absolute",
          maxWidth: "30vw",
          maxHeight: "20vh",
          animation: `moveX ${xTime}s linear 0s infinite alternate, moveY ${yTime}s linear 0s infinite alternate`
        }} to={to}>
          <Rainbowbox speed={50} width="0.5rem" rounded="2rem" changeAmount={10} padding="2rem">
            <h2 className="FlyingButton-Text">{text}</h2>
          </Rainbowbox>
        </Link>
    )
}

interface EmoteProps {
  xTime?: number
  yTime?: number
  children: React.ReactNode
}

export const FlyingEmote: React.FC<EmoteProps> = ({xTime, yTime, children}) => {
  const [times, setTimes] = useState([0,0]);

  useEffect(() => {
    if (!xTime) setTimes([Math.random()*5+1, Math.random()*5+1]);
  }, [xTime, yTime])

  return(
      <div className="emote" style={{
        position: "absolute",
        animation: `moveEmoteX ${xTime||times[0]}s linear 0s infinite alternate, moveEmoteY ${yTime||times[1]}s linear 0s infinite alternate`,
        zIndex: "-1"
      }}>
        {children}
      </div>
  )
}

export default FlyingButton;
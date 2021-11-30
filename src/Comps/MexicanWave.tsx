import React, { useEffect, useState } from "react";

interface Props {
    text: string
    speed: number
}

export const MexicanWave: React.FC<Props> = ({text, speed}) => {
    const [raiseIndex, setRaiseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRaiseIndex(raiseIndex => (raiseIndex+=1)%text.length);
        }, speed);
        return () => clearInterval(interval);
    }, [speed, text])

    return(
        <div className="MexicanWave-Wrapper">
            <h1>
                {
                    text.split("").map((char, idx) => {
                        if (idx === raiseIndex) {
                            return(
                                <span className="Raised">{char}</span>
                            )
                        }
                        return(
                            <span className="Lowered">{char}</span>
                        )
                    })
                }
            </h1>
        </div>
    )
}
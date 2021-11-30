import React, { useEffect, useState } from "react";

interface Props {
    speed: number
    width?: string
    rounded?: string
    children: React.ReactNode
    changeAmount?: number
    padding?: string
}

const Rainbowbox: React.FC<Props> = (props: Props) => {
    const [borderStyle, setBorderStyle] = useState({
        background: "linear-gradient(to right, red, purple)",
        padding: `${props.width?props.width:"10"}px`,
        borderRadius: `${props.rounded?props.rounded:"none"}`
    });
    const [hue, setHue] = useState(Math.random()*360);

    useEffect(() => {
        const interval = setInterval(() => {
            setHue(hue => (hue + (props.changeAmount?props.changeAmount:1))%360);
        }, props.speed);
        return () => clearInterval(interval);
    }, [props.speed, props.changeAmount])

    useEffect(() => {
        setBorderStyle({
            background: `linear-gradient(to bottom right, 
                hsl(${hue}, 100%, 50%), 
                hsl(${(hue+45)%360}, 100%, 50%) 25%, 
                hsl(${(hue+90)%360}, 100%, 50%) 50%,
                hsl(${(hue+135)%360}, 100%, 50%) 75%,
                hsl(${(hue+180)%360}, 100%, 50%)
            )`,
            padding: `${props.width?props.width:"none"}`,
            borderRadius: `${props.rounded?props.rounded:"none"}`
        })
    }, [hue, props.width, props.rounded])

    return(
        <div style={borderStyle}>
            <div style={{backgroundColor: "black", padding:`${props.padding}`, borderRadius: `${props.rounded?props.rounded:"none"}`}}>
                {props.children}
            </div>
        </div>
    )
}

export default Rainbowbox;
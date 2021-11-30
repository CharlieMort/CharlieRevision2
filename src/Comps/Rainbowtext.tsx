import React, { useEffect, useState } from "react";

interface Props {
    text: string
    type?: string
    speed: number
    changeAmount?: number
    name?: string
    vertical?: boolean
}

const Rainbowtext: React.FC<Props> = ({type, speed, text, changeAmount, name, vertical}) => {
    const [styledText, setStyledText] = useState("");
    const [hue, setHue] = useState(Math.random()*360);

    useEffect(() => {
        const interval = setInterval(() => {
            setHue(hue => (hue + (changeAmount?changeAmount:1))%360);
        }, speed);
        return () => clearInterval(interval);
    }, [speed, changeAmount])

    useEffect(() => {
        let tempText = text.split("");
        tempText = tempText.map((letter, idx) => {
            return `<span style="color: hsl(${(hue+(idx*10))%360}, 100%, 50%);"}>${letter}</span>${vertical?"<br/>":""}`
        })
        setStyledText(tempText.join(""));
    }, [hue, text, vertical])

    switch(type) {
        case "h1":
            return (
                <h1 dangerouslySetInnerHTML={{__html: styledText}} className={name} />
            )
        case "h2":
            return (
                <h2 dangerouslySetInnerHTML={{__html: styledText}} className={name} />
            )
        case "h3":
            return (
                <h3 dangerouslySetInnerHTML={{__html: styledText}} className={name} />
            )
        case "h4":
            return (
                <h4 dangerouslySetInnerHTML={{__html: styledText}} className={name} />
            )
        case "p":
            return (
                <p dangerouslySetInnerHTML={{__html: styledText}} className={name} />
            )
        default:
            return (
                <h1 dangerouslySetInnerHTML={{__html: styledText}} className={name} />
            )
    }
}

export default Rainbowtext;
import React from "react";
import pepeDance from "../Imgs/Emotes/pepeDance.gif";
import smart from "../Imgs/Emotes/smart.gif";
import Rainbowtext from "./Rainbowtext";
import Rainbowbox from "./Rainbowbox";
import eff from "../Imgs/Emotes/eff.gif";
import { Link } from "react-router-dom";

export const Maths: React.FC = () => {
    return(
        <div>
            <div>
                <div className="FuckKnows-Wrapper">
                    <Rainbowbox speed={20} changeAmount={20} rounded="1rem" padding="2rem">
                        <img src={eff} className="emote" />
                    </Rainbowbox>
                    <Rainbowbox speed={20} changeAmount={20} rounded="1rem" padding="2rem">
                        <img src={smart} className="emote grow" />
                    </Rainbowbox>
                    <div className="FuckKnows">
                        <Rainbowtext speed={50} text="Maths" changeAmount={5} type="h3" />
                    </div>
                    <Rainbowbox speed={20} changeAmount={20} rounded="1rem" padding="2rem">
                        <img src={pepeDance} className="emote grow" />
                    </Rainbowbox>
                    <Rainbowbox speed={20} changeAmount={20} rounded="1rem" padding="2rem">
                        <img src={eff} className="emote" />
                    </Rainbowbox>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <Link to="/maths/stats" className="linkbutton">Stats</Link>
                <Link to="/maths/pure" className="linkbutton">Pure</Link>
                <Link to="/maths/mechanics" className="linkbutton">Mechanics</Link>
            </div>
        </div>
    )
}
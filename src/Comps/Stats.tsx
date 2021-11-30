import React from "react";
import { Link } from "react-router-dom";
import { FlyingEmote } from "./FlyingButton";
import Rainbowtext from "./Rainbowtext";
import popCat from "../Imgs/Emotes/popCat.gif";

const Stats: React.FC = () => {
    return(
        <div className="flex">
            <div>
                <Rainbowtext speed={20} text="Stats" changeAmount={5} vertical={true} type="h1" name="vertical" />
            </div>
            <div className="flex flex-vertical">
                <div className="flex1 tac">
                    <h1>Topic Selection</h1>
                </div>
                <div className="flex3 flex space-around flex-wrap relative">
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <FlyingEmote><img src={popCat} className = "emote" /></FlyingEmote>
                    <Link to="/maths/stats/sampling" className="linkbutton">Sampling</Link>
                    <Link to="/maths/stats/Representation-Of-Data" className="linkbutton">Representation Of Data</Link>
                    <Link to="/maths/stats/Probability" className="linkbutton">Probability</Link>
                    <Link to="/maths/stats/Hypothesis-Testing" className="linkbutton">Hypothesis Testing</Link>
                    <Link to="/maths/stats/Normal-Distribution" className="linkbutton">Normal Distribution</Link>
                </div>
            </div>
        </div>
    )
}

export const Sampling: React.FC = () => {
    return(
        <div>
            <div>
                <h1>Sampling</h1>
            </div>
            <div>
                <p>
                    A <b>population</b> is the whole set of items that are of interest. Information gained from the population is <b>raw data</b>. 
                    A <b>census</b> asks everyone in a population. A <b>sample</b> asks a selection from the population and is used to average
                    the rest of the population.
                </p>
                <table>
                    <tr>
                        <th></th>
                        <th>Advantages</th>
                        <th>Un Adanvatages</th>
                    </tr>
                    <tr>
                        <td>Census</td>
                        <td>-	Should be completely accurate</td>
                        <td>
                        -	Time consuming and expensive<br/>
                        -	Hard to process big data
                        </td>
                    </tr>
                    <tr>
                        <td>Sample</td>
                        <td>
                            -	Less time consuming and cheaper<br/>
                            -	Fewer people have to respond<br/>
                            -	Less data to process
                        </td>
                        <td>
                            -	Might not be accurate<br />
                            -	Sample might not be large enough to give info about small groups
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Stats;
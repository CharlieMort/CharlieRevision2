import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Rainbowtext from './Comps/Rainbowtext';
import Rainbowbox from './Comps/Rainbowbox';
import ratJam from "./Imgs/Emotes/ratJam.gif";
import blobDance from "./Imgs/Emotes/blobDance.gif";
import FlyingButton from "./Comps/FlyingButton";
import { Routes, Route} from "react-router-dom";
import { CompSci } from "./Comps/CompSci";
import { Maths } from "./Comps/Maths";
import { Physics } from "./Comps/Physics";
import Stats from "./Comps/Stats";

function App() {
  return (
    <div className="App">
      <Rainbowbox speed={50} width="0.5rem" rounded="2rem" changeAmount={10} padding="2rem">
        <div className="Topbar">
          <div>
            <img src={ratJam} className="emote" />
          </div>
          <div className="TitleBox">
            <div className="TitleText-Wrapper">
              <Rainbowtext speed={50} text="Charlie" changeAmount={5} name="CharlieRevision" />
              <Rainbowtext speed={50} text="Revision" changeAmount={5} name="CharlieRevision" />
            </div>
            <div className="TitleNumber-Wrapper">
              <Rainbowtext speed={10} text="2" changeAmount={10} type="h2" name="BigTwo" />
            </div>
            <div className="TitleText-Wrapper">
              <br></br>
              <Rainbowtext speed={50} text=".com" changeAmount={5} name="CharlieRevision" />
            </div>
          </div>
          <div>
            <img src={blobDance}  className="emote" />
          </div>
        </div>
      </Rainbowbox>
      <Routes>
        <Route path="/" element={<SubjectSelect />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/maths/stats" element={<Stats />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/compsci" element={<CompSci />} />
        <Route path="*" element={<FourOFour />} />
      </Routes> 
    </div>
  );
}

const FourOFour: React.FC = () => {
  return(
    <h1>
      Dis A 404 how tf you get here ????????
    </h1>
  )
}

const buttons = 4;

const SubjectSelect: React.FC = () => {
  return(
    <div className="FlyingButtons">
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Comp Sci" to="/compsci" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Physics" to="/physics" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Maths" to="/maths" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Comp Sci" to="/compsci" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Physics" to="/physics" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Maths" to="/maths" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Comp Sci" to="/compsci" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Physics" to="/physics" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Maths" to="/maths" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Comp Sci" to="/compsci" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Physics" to="/physics" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Maths" to="/maths" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Comp Sci" to="/compsci" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Physics" to="/physics" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Maths" to="/maths" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Comp Sci" to="/compsci" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Physics" to="/physics" />
      <FlyingButton xTime={Math.random()*5+1} yTime={Math.random()*5+1} text="Maths" to="/maths" />
    </div>
  )
}

export default App;

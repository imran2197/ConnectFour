import React from 'react';
import "./App.css";
import { Button } from 'reactstrap';
import connectFour from "./components/connectFour";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="quote-container">
          <h1 className="name">CONNECT FOUR!</h1>
          <p className="quote">Play with other players around the world.</p>
        </div> 
      </div>
      <div className="board">
        <div className="header">
          <Button className="play"><PlayCircleFilledWhiteOutlinedIcon id="playlogo" />PLAY</Button>
          <img className="img" src="./connect.png" alt="ConnectFour Logo" /> 
        </div>
        <hr />
          <div className="buttons">
            <Button className="button" id="custom"><PersonOutlineOutlinedIcon id="icons" />Custom Game<div id="comingSoon">Coming Soon</div></Button>
            <Button className="button" id="two"><PeopleAltOutlinedIcon id="icons" />Two Players</Button>
            <Button className="button" id="online"><LanguageOutlinedIcon id="icons" />Game Online<div id="comingSoon">Coming Soon</div></Button>
            <Button className="button" id="training"><ExtensionOutlinedIcon id="icons" />Training Game<div id="comingSoon">Coming Soon</div></Button>
          </div>
      </div>
      <div className="footer">
        <CopyrightOutlinedIcon />
        2020
      </div>
    </>
  )
}

export default App;

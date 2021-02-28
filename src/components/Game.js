import React from 'react';
import "../styles/Game.css";
import { Button } from 'reactstrap';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import TwoPlayers from './Board';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';

const Game = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route path="/TwoPlayers"><TwoPlayers /></Route>
                    <Route path="/">
                        <div className="container">
                            <div className="quote-container">
                            <h1 className="name">CONNECT FOUR!</h1>
                            <p className="quote">Play with other players around the world.</p>
                            </div> 
                        </div>

                        <div className="board">
                            <div className="header">
                            <Link to="/TwoPlayers" id="link"><Button className="play"><PlayCircleFilledWhiteOutlinedIcon id="playlogo" />PLAY</Button></Link>
                            <img className="img" src="./connect.png" alt="ConnectFour Logo" /> 
                            </div>
                            <hr />
                            <div className="buttons">
                                <Button className="button" id="custom"><PersonOutlineOutlinedIcon id="icons" />Custom Game<div id="comingSoon">Coming Soon</div></Button>
                                <Link to="/TwoPlayers" id="link"><Button className="button" id="two"><PeopleAltOutlinedIcon id="icons" />Two Players</Button></Link>
                                <Button className="button" id="online"><LanguageOutlinedIcon id="icons" />Game Online<div id="comingSoon">Coming Soon</div></Button>
                                <Button className="button" id="training"><ExtensionOutlinedIcon id="icons" />Training Game<div id="comingSoon">Coming Soon</div></Button>
                            </div>
                        </div>

                        <div className="footer">
                            <CopyrightOutlinedIcon />
                            2020
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Game;
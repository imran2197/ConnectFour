import React from 'react';
import "../styles/Board.css";

function Hole(props){
    return <div className="Hole"><div className={props.value}></div></div>
  }
  
  function Slat(props){
      return <div className="Slat" onClick={() => props.handleClick()}>
        {[...Array(props.holes.length)].map((val, idx) => 
          <Hole key={idx} value={props.holes[idx]}></Hole>)}
        </div>
   }

class Board extends React.Component {
    constructor() {
      super();
      this.state = {
        boardState: new Array(7).fill(new Array(6).fill(null)),
        playerTurn: 'Red',
        gameSelected: true,
        winner: ''
      }
    }
  
    selectedGame(mode){
      this.setState({
         gameSelected: true, 
         boardState: new Array(7).fill(new Array(6).fill(null))
      })
    }
  
    makeMove(slatID){
      const boardCopy = this.state.boardState.map(function(arr) {
        return arr.slice();
      });
      if( boardCopy[slatID].indexOf(null) !== -1 ){
        let newSlat = boardCopy[slatID].reverse()
        newSlat[newSlat.indexOf(null)] = this.state.playerTurn
        newSlat.reverse()
        this.setState({
          playerTurn: (this.state.playerTurn === 'Red') ? 'Blue' : 'Red',
          boardState: boardCopy
        })
      }
    }
  
    /*Only make moves if winner doesn't exist*/
    handleClick(slatID) {
      if(this.state.winner === ''){
        this.makeMove(slatID)
      }
    }
    
    /*check the winner*/
    componentDidUpdate(){
      let winner = checkWinner(this.state.boardState)
      if(this.state.winner !== winner){
        this.setState({winner: winner})
      }
    }
  
    render(){
  
      /*If a winner exists display the name*/
      let winnerMessageStyle
      if(this.state.winner !== ""){
        winnerMessageStyle = "winnerMessage appear"
      }else {
        winnerMessageStyle = "winnerMessage"
      }
  
      /*Contruct slats allocating column from board*/
      let slats = [...Array(this.state.boardState.length)].map((x, idx) => 
        <Slat 
            key={idx}
            holes={this.state.boardState[idx]}
            handleClick={() => this.handleClick(idx)}
        ></Slat>
      )
  
      return (
        <>
          <div id="container">
            <div id="quote-container">
            <h1 id="name">CONNECT FOUR!</h1>
            <p id="quote">Play with other players around the world.</p>
            </div> 
            <img id="image" src="./connect.png" alt="ConnectFour Logo" />
          </div>
          <div className="main">
            {this.state.gameSelected &&
              <div className="Board">
                {slats}
              </div>
            }
          </div>
            <div className={winnerMessageStyle}>{this.state.winner}</div>
            {(this.state.winner !== '') &&
              <div className="reset">
                <button onClick={() => this.selectedGame()}>Reset</button>
              </div>
            }
        </>
      )
    }
  }

  function checkLine(a,b,c,d) {
    return ((a !== null) && (a === b) && (a === c) && (a === d));
  }
  
  function checkWinner(bs) {
    for (let c = 0; c < 7; c++)
      for (let r = 0; r < 4; r++)
        if (checkLine(bs[c][r], bs[c][r+1], bs[c][r+2], bs[c][r+3]))
          return "Congratulations! " +bs[c][r] + ' wins.'
  
    for (let r = 0; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (checkLine(bs[c][r], bs[c+1][r], bs[c+2][r], bs[c+3][r]))
          return "Congratulations! " +bs[c][r] + ' wins.'
  
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (checkLine(bs[c][r], bs[c+1][r+1], bs[c+2][r+2], bs[c+3][r+3]))
          return "Congratulations! " +bs[c][r] + ' wins.'
  
    for (let r = 0; r < 4; r++)
      for (let c = 3; c < 6; c++)
        if (checkLine(bs[c][r], bs[c-1][r+1], bs[c-2][r+2], bs[c-3][r+3]))
          return "Congratulations! " +bs[c][r] + ' wins.'
  
    return "";
  }

export default Board;
import * as React from "react"
import "./App.css"

function Board() {
  const [squares, setStatus] = React.useState(Array(9).fill(null))

  const nextValue = setNextValue(squares)
  const winner = determineWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectedPosition(square: number) {
    if (winner || squares[square]) {
      return
    } 
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setStatus(squaresCopy)
  }

  function restart() {
    setStatus(Array(9).fill(null))
  }

  function position(i: number) {
    return (
      <button className="square" onClick={() => selectedPosition(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <>
      <p className="status">{status}</p>
      <div className="row">
        {position(0)}
        {position(1)}
        {position(2)}
      </div>
      <div className="row">
        {position(3)}
        {position(4)}
        {position(5)}
      </div>
      <div className="row">
        {position(6)}
        {position(7)}
        {position(8)}
      </div>
      <br></br>
      <button className="restart" onClick={restart}>
        RESTART GAME
      </button>
    </>
  )
}

function setNextValue(squares: object[]) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "0"
}

function determineWinner(squares: object[]) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
}

function calculateStatus(winner: any, squares: object[], nextValue: string) {
  return winner ? `Winner: ${winner}` : squares.every(Boolean) ? `Scratch` : `Next Turn: ${nextValue}`
}

function Game() {
  return (
    <div className="game" data-testid="game">
      <Board />
    </div>
  )
}

function App() {
  return (
    <Game />
  )
}

export default App;

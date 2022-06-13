import * as React from 'react'

function Board() {
  const [squares, setStatus] = React.useState(Array(9).fill(null));


  function position(i: any) {
    return (
      <button>
        {squares[i]}
      </button>
    )
  }

  return (
    <>
      <p className="status">status</p>
      <div className="rows"></div>
      <div className="rows"></div>
      <div className="rows"></div>
      <button>
        RESTART GAME
      </button>
    </>
  )
}

function Game() {
  return (
    <div className="game">
      <Board />
    </div>
  );
}

function App() {
  return (
    <Game />
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { Cell } from './Cell'
import { TURNS, WINNER_COMBOS } from './constants'

function App() {
  const initialBoard = Object.freeze(Array(9).fill(null))
  const initialWinner = null
  const [ board, setBoard] = useState(initialBoard)
  const [ turn, setTurn ] = useState(TURNS.X)
  const [ winner, setWinner] = useState(initialWinner) // null es sin ganador - false es empate

  const checkWinnerFrom = (boardToCheck) => {
    // se revisan todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return;

    const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinnerFrom(newBoard);
    if(newWinner) {
      setWinner(newWinner)
    }
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setTurn(winner)
    setWinner(initialWinner)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((cell ,index) => (
            <Cell key={index} updateBoard={updateBoard} index={index}>
              {cell}
            </Cell>
          ))
        }
      </section>
      <section className="turn">
        <Cell isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Cell>
        <Cell isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Cell>
      </section>
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <header>
                <h2>
                  {`Gano el waso numero ${winner == 1 ? "uno" : "cero"}`}
                </h2>
              </header>
            <footer>
              <button onClick={resetGame}>Reiniciar</button>
            </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App

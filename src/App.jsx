import { useState } from 'react'
import './App.css'
import { Cell } from './Cell'
import { TURNS } from './constants'
import { checkWinnerFrom } from './checkWinnerFrom'
import { checkEndGame } from './checkEndGame'
import { WinnerModal } from './WinnerModal'
import { Turn } from './Turn'

function App() {
  const initialBoard = Object.freeze(Array(9).fill(null))
  const initialWinner = null
  const [ board, setBoard] = useState(initialBoard)
  const [ turn, setTurn ] = useState(TURNS.X)
  const [ winner, setWinner] = useState(initialWinner) // null es sin ganador - false es empat

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
    else if(checkEndGame(newBoard)) {
      setWinner(false)
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

      <Turn actualTurn={turn}></Turn>

      <WinnerModal winner={winner} resetGameFunction={resetGame} />
    </main>
  )
}

export default App

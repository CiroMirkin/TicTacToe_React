
export function WinnerModal({ winner, resetGameFunction }) {
  if(winner === null) return null

  return (
      <section className="winner">
        <div className="text">
          <header>
            <h2>
              {console.log(winner)}
              {winner === false ? "Son malardos" : (`Gano el waso numero ${winner == 1 ? "uno" : "cero"}`)}
            </h2>
          </header>
          <footer>
            <button onClick={resetGameFunction}>Reiniciar</button>
        </footer>
        </div>
      </section>
  )
}
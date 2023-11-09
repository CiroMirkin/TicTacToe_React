export const checkEndGame = (newBoard) => {
    return newBoard.every(cell => cell !== null)
}
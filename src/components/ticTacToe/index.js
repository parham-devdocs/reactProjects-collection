import { useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState(null);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function calculateWin(currentBoard) {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a]; // Return the current player (winner)
            }
        }
        return null; // Explicitly return null if there is no winner
    }

    function mark(index) {
        if (board[index] || winner) return; // Prevent marking if cell is occupied or there's a winner

        const newBoard = [...board]; // Create a copy of the board
        newBoard[index] = turn; // Update the clicked cell
        setBoard(newBoard); // Update the board state

        const calculatedWinner = calculateWin(newBoard); // Calculate winner based on the new board
        if (calculatedWinner) {
            setWinner(calculatedWinner); // Set winner if there's one
        } else {
            setTurn(prev => (prev === "X" ? "O" : "X")); // Switch turn
        }
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-wrap w-96 h-96 border-[2px] border-red-500">
                    {board.map((cell, index) => (
                        <Cell key={index} value={cell} mark={() => mark(index)} />
                    ))}
                </div>
                <p className=" text-xl text-red-800"> Player: {turn}</p>
                {winner &&  <h2 className=" text-red-500 text-2xl"> Winner: {winner}</h2>}
                
            </div>
        </div>
    );
}

function Cell({ value, mark }) {
    return (
        <button className="w-1/3 h-1/3 border-red-500 border-[2px]" onClick={mark}>
            {value}
        </button>
    );
}

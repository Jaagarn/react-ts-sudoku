import { Cell } from "./Cell";
import { arrayToCells } from "../helpers/CellParser"
import { valid_board_1, valid_board_easy_sudoku } from "../testdata/test_boards";
import { useState } from "react";
import { findAndFillCanditates } from "../solver/Crooks";

const Board = () => {
    const initialBoard = arrayToCells(valid_board_1);
    const [board, setBoard] = useState(initialBoard);
    const [hello, setHello] = useState("Board 1")

    const handleSolve = () => {
        setBoard(findAndFillCanditates(board));
        setHello("Solved!");
    };

    const handleBoard1 = () => {
        setBoard(arrayToCells(valid_board_1));
        setHello("Board 1");
    };

    const handleBoard2 = () => {
        setBoard(arrayToCells(valid_board_easy_sudoku));
        setHello("Board 2");
    };

    return (
        <>
            <div>
                <div className="board-style">
                    {board.map((cell) => (
                        <Cell
                            key={cell.id}
                            value={cell.value}
                            id={cell.id}
                            x={cell.x}
                            y={cell.y} />
                    ))}
                </div>
                <p>{hello}</p>
                <button onClick={handleSolve}>Solve</button>
                <button onClick={handleBoard1}>Board 1</button>
                <button onClick={handleBoard2}>Board 2</button>
            </div>

        </>)
}

export { Board }
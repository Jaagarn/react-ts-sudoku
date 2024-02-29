import { Cell } from "./Cell";
import { arrayToCells } from "../helpers/CellParser"
import { valid_board_1, valid_board_easy_sudoku, valid_board_expert_sudoku } from "../testdata/test_boards";
import { useState } from "react";
import { findAndFillCanditates, findCanditates } from "../solver/Crooks";
import { solved } from "../solver/Validator";
import { wrap } from 'comlink'
import type { RunCrooksRecursionWorker } from '../workers/crooksRecursion.worker';

const Board = () => {
  const initialBoard = arrayToCells(valid_board_1);
  const [board, setBoard] = useState(initialBoard);
  const [solving, setSolving] = useState(false);
  const [message, setMessage] = useState("Board 1");

  const solveBoard = async () => {
    let newBoard = findAndFillCanditates(board);

    if (solved(newBoard)) {
      setBoard(newBoard);
    } else {
      const worker = new Worker(new URL('../workers/crooksRecursion.worker', import.meta.url))
      const { recursionStart } = wrap<RunCrooksRecursionWorker>(worker)
      const canditates = findCanditates(newBoard);
      newBoard = await recursionStart(newBoard, canditates);
      console.log(newBoard);
      setBoard(newBoard);
    }
  }

  const handleSolve = async () => {
    setMessage("Solving...");
    setSolving(true);
    await solveBoard();
    setMessage("Solved");
    setSolving(false);
  };

  const handleBoard1 = () => {
    setBoard(arrayToCells(valid_board_1));
    setMessage("Board 1");
  };

  const handleBoard2 = () => {
    setBoard(arrayToCells(valid_board_easy_sudoku));
    setMessage("Board 2");
  };

  const handleBoard3 = () => {
    setBoard(arrayToCells(valid_board_expert_sudoku));
    setMessage("Board 3");
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
        <p>{message}</p>
        {!solving && (
          <>
            <button onClick={handleSolve}>Solve</button>
            <button onClick={handleBoard1}>Board 1</button>
            <button onClick={handleBoard2}>Board 2</button>
            <button onClick={handleBoard3}>Board 3</button>
          </>
        )}

      </div>

    </>)
}

export { Board }
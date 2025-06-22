import { Cell } from "./Cell";
import { arrayToCells, cellsToString, stringToCells } from "../helpers/CellParser"
import { valid_board_1, valid_board_easy_sudoku, valid_board_expert_sudoku } from "../testdata/test_boards";
import { useState } from "react";
import { findAndFillCanditates } from "../solver/Crooks";
import { solved } from "../solver/Validator";
import { wrap } from 'comlink'
import type { RunCrooksRecursionWorker } from '../workers/crooksRecursion.worker';
import { recursionStartStringGenerator } from "../solver/CrooksGenerator";
import { CellData } from "../solver/CellData";

const Board = () => {
  const initialBoard = arrayToCells(valid_board_1);
  const [board, setBoard] = useState(initialBoard);
  const [solving, setSolving] = useState(false);
  const [message, setMessage] = useState("Board 1");

  const runSolverStepByStep = (generator: Generator<CellData[], any, any>) => {
    return new Promise((resolve) => {
      const processNextStep = () => {
        // Get the next step from the generator
        const result = generator.next();

        if (!result.done) {
          // If the generator is not finished, update the state
          const newBoardState = result.value;

          setBoard(newBoardState);
          setMessage(cellsToString(newBoardState));

          // Request the next animation frame to process the next step
          // This gives React time to re-render before the next step is processed
          requestAnimationFrame(processNextStep);

        } else {
          // When the generator is done, resolve the promise
          resolve(result.value);
        }
      };

      // Start the process
      requestAnimationFrame(processNextStep);
    });
  };

  const solveBoard = async () => {
    let newBoard = findAndFillCanditates(board);

    if (solved(newBoard)) {
      setBoard(newBoard);

    } else {

      /* 
          const worker = new Worker(new URL('../workers/crooksRecursion.worker', import.meta.url))
          const { recursionStartString } = wrap<RunCrooksRecursionWorker>(worker);
          let stringBoard = await recursionStartString(cellsToString(newBoard)); */
          
      // Start the generator
      const recursiveGenerator = recursionStartStringGenerator(cellsToString(newBoard));

      // Run the step-by-step process
      await runSolverStepByStep(recursiveGenerator);
    }

  };


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
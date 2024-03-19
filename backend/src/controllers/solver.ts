import { cellsToString, stringToCells } from "../helpers/CellParser";
import { CellData } from "../solver/CellData";
import { findAndFillCanditates, findCanditates } from "../solver/Crooks";
import { recursionStart } from "../solver/CrooksRecursion";
import { solvableString, solved } from "../solver/Validator";
import express from 'express';

interface BoardJson {
  board: string;
}

const solverRouter = express.Router();

solverRouter.post("/", async (request: express.Request, response: express.Response) => {
  
  if(request.body.board === undefined){
    return response.status(400).json("Missing 'board' from body.")
  }

  const reqBoard: BoardJson = request.body;
  let parsedBoard = new Array<CellData>;
  
  try {
    parsedBoard = stringToCells(reqBoard.board);
  } catch (error: any) {
    return response.status(400).json(error.message);
  }
  
  if (!solvableString(reqBoard.board)) {
    return response.status(400).json("Unsolvabe soduku board");
  }

  let resBoard = findAndFillCanditates(parsedBoard);

  if (solved(resBoard)) {
    return response.status(200).json({ board: cellsToString(resBoard) });
  } else {
    const canditates = findCanditates(resBoard);
    const resBoardRecursion = recursionStart(resBoard, canditates);
    return response.status(200).json({ board: resBoardRecursion });
  }

}
)

module.exports = solverRouter;
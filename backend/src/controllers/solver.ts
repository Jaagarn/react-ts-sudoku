import { stringToCells } from "../helpers/CellParser";
import { CellData } from "../solver/CellData";
import { findAndFillCanditates, findCanditates } from "../solver/Crooks";
import { recursionStart } from "../solver/CrooksRecursion";
import { solvableString, solved } from "../solver/Validator";
import express from 'express';

const solverRouter = express.Router();

solverRouter.post("/", async (request: express.Request, response: express.Response) => {

  const reqBoard = JSON.stringify(request.body);
  let parsedBoard = new Array<CellData>;

  try {
    parsedBoard = stringToCells(reqBoard);
  } catch (error: any) {
    return response.status(400).json(error.message);
  }
  
  if (!solvableString(reqBoard)) {
    return response.status(400).json("Unsolvabe soduku board");
  }

  let resBoard = findAndFillCanditates(parsedBoard);

  if (solved(resBoard)) {
    return response.status(200).json({ board: resBoard });
  } else {
    const canditates = findCanditates(resBoard);
    const resBoardRecursion = recursionStart(resBoard, canditates);
    return response.status(200).json({ board: resBoardRecursion });
  }

}
)
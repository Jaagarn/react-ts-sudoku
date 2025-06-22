import { CanditatesHolder } from "../helpers/CanditatesHolder"
import { stringToCells } from "../helpers/CellParser";
import { CellData } from "./CellData"
import { findCanditates } from "./Crooks";
import { solvable, solved } from "./Validator";
import _ from "lodash"

const recursionGenerator = function* (board: CellData[], canditates: CanditatesHolder[], newCell: CellData): Generator<CellData[]> {
  let clonedBoard = _.cloneDeep(board);
  clonedBoard[newCell.id] = newCell;

  yield clonedBoard;

  if (!solvable(clonedBoard))
    return new Array<CellData>();

  if (solved(clonedBoard))
    return clonedBoard;

  const firstCanditate = canditates[0];
  const id = firstCanditate.y * 9 + firstCanditate.x;
  for (let canditateValue of firstCanditate.canditates.values()) {
    let newCell = new CellData(firstCanditate.x, firstCanditate.y, id, Number(canditateValue));
    let newBoard = yield* recursionGenerator(clonedBoard, canditates.slice(1), newCell);
    if (newBoard.length !== 0)
      return newBoard;
  }

  return new Array<CellData>();
}

const recursionStartGenerator = function* (board: CellData[], canditates: CanditatesHolder[]): Generator<CellData[]> {
  const firstCanditate = canditates[0];
  const id = firstCanditate.y * 9 + firstCanditate.x;
  const iterator = firstCanditate.canditates.values();

  for (let canditateValue of iterator) {
    let newCell = new CellData(firstCanditate.x, firstCanditate.y, id, canditateValue)
    let newBoard = yield* recursionGenerator(board, canditates.slice(1), newCell)
    if (newBoard.length !== 0)
      return newBoard;
  }

  return new Array<CellData>();
}

const recursionStartStringGenerator = function* (board: string): Generator<CellData[]> {
  let boardArray = stringToCells(board);
  let canditates = findCanditates(boardArray);
  yield* recursionStartGenerator(boardArray, canditates);
}

export { recursionStartGenerator, recursionStartStringGenerator }
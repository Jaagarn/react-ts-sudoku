import { CanditatesHolder } from "../helpers/CanditatesHolder"
import { CellData } from "./CellData"
import { solvable, solved } from "./Validator";
import _ from "lodash"

const recursion = (board: CellData[], canditates: CanditatesHolder[], newCell: CellData): CellData[] => {
  let clonedBoard = _.cloneDeep(board);
  clonedBoard[newCell.id] = newCell;
  console.log("Hello inside")
  if (!solvable(clonedBoard))
    return new Array<CellData>();

  if (solved(clonedBoard))
    return clonedBoard;

  const firstCanditate = canditates[0];
  const id = firstCanditate.y * 9 + firstCanditate.x;
  for (let canditateValue of firstCanditate.canditates.values()) {
    let newCell = new CellData(firstCanditate.x, firstCanditate.y, id, Number(canditateValue));
    let newBoard = recursion(clonedBoard, canditates.slice(1), newCell);
    if (newBoard.length !== 0)
      return newBoard;
  }

  return new Array<CellData>();
}

const recursionStart = (board: CellData[], canditates: CanditatesHolder[]): CellData[] => {
  const firstCanditate = canditates[0];
  const id = firstCanditate.y * 9 + firstCanditate.x;
  const iterator = firstCanditate.canditates.values();
  console.log("Hello")
  for (let canditateValue of iterator) {
    let newCell = new CellData(firstCanditate.x, firstCanditate.y, id, canditateValue)
    let newBoard = recursion(board, canditates.slice(1), newCell)
    if (newBoard.length !== 0)
      return newBoard;
  }

  return new Array<CellData>();
}

export { recursionStart };

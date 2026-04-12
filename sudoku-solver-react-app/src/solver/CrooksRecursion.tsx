import { CanditatesHolder } from "../helpers/CanditatesHolder"
import { cellsToString, stringToCells } from "../helpers/CellParser";
import { CellData } from "./CellData"
import { findCanditates } from "./Crooks";
import { solvable, solved } from "./Validator";
import _ from "lodash"

const recursion = (board: CellData[], canditates: CanditatesHolder[], newCell: CellData): CellData[] => {
  let clonedBoard = _.cloneDeep(board);
  clonedBoard[newCell.id] = newCell;

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

  for (let canditateValue of iterator) {
    let newCell = new CellData(firstCanditate.x, firstCanditate.y, id, canditateValue)
    let newBoard = recursion(board, canditates.slice(1), newCell)
    if (newBoard.length !== 0)
      return newBoard;
  }

  return new Array<CellData>();
}

const recursionStartString = (board: string): string => {
  let boardArray = stringToCells(board);
  let canditates = findCanditates(boardArray);
  return cellsToString(recursionStart(boardArray, canditates));
}

type ProgressTracker = {
  steps: number;
  stepsForCallback: number;
  onProgress?: (boardStr: string) => void;
};

const recursionWithProgress = (board: CellData[], canditates: CanditatesHolder[], newCell: CellData, tracker: ProgressTracker): CellData[] => {
  let clonedBoard = _.cloneDeep(board);
  clonedBoard[newCell.id] = newCell;

  tracker.steps++;
  if (tracker.onProgress && tracker.steps % tracker.stepsForCallback === 0) {
    tracker.onProgress(cellsToString(clonedBoard)); 
  }

  if (!solvable(clonedBoard))
    return new Array<CellData>();

  if (solved(clonedBoard))
    return clonedBoard;

  const firstCanditate = canditates[0];
  const id = firstCanditate.y * 9 + firstCanditate.x;
  for (let canditateValue of firstCanditate.canditates.values()) {
    let newCell = new CellData(firstCanditate.x, firstCanditate.y, id, Number(canditateValue));
    let newBoard = recursionWithProgress(clonedBoard, canditates.slice(1), newCell, tracker);
    if (newBoard.length !== 0)
      return newBoard;
  }

  return new Array<CellData>();
}

const recursionStartWithProgress = (board: CellData[], canditates: CanditatesHolder[], tracker: ProgressTracker): CellData[] => {
  const firstCanditate = canditates[0];
  const id = firstCanditate.y * 9 + firstCanditate.x;
  const iterator = firstCanditate.canditates.values();

  for (let canditateValue of iterator) {
    let newCell = new CellData(firstCanditate.x, firstCanditate.y, id, canditateValue)
    let newBoard = recursionWithProgress(board, canditates.slice(1), newCell, tracker)
    if (newBoard.length !== 0)
      return newBoard;
  }

  return new Array<CellData>();
}

const recursionStartStringWithProgress = (board: string, stepsForCallback = 500, onProgress?: (boardStr: string) => void): string => {
  const tracker: ProgressTracker = {
    steps: 0,
    stepsForCallback: stepsForCallback,
    onProgress
  };

  let boardArray = stringToCells(board);
  let canditates = findCanditates(boardArray);
  
  let finalBoard = recursionStartWithProgress(boardArray, canditates, tracker); 
  return cellsToString(finalBoard);
}

export { recursionStart, recursionStartString, recursionStartStringWithProgress };

import { CanditatesHolder } from "../helpers/CanditatesHolder";
import { getCanditates } from "./Calculations";
import { CellData } from "./CellData";

const findCanditates = (board: CellData[]): Array<CanditatesHolder> => {
  let canditatesHolders = new Array<CanditatesHolder>();
  for (let i = 0; i < 81; i++) {
    let cell = board[i];
    if (cell.value !== 0)
      continue;
    let canditates = getCanditates(board, cell.x, cell.y);
    if (canditates.size < 1)
      throw new Error("Unsolveble board");
    canditatesHolders.push(new CanditatesHolder(cell.x, cell.y, canditates));
  }
  return canditatesHolders;
}

const findAndFillCanditates = (board: CellData[]): CellData[] => {
  let canditatesHolders = findCanditates(board);
  let placingNumbers = true;
  while (placingNumbers) {
    placingNumbers = false;
    for (let i = 0; i < canditatesHolders.length; i++) {
      let canditatesHolder = canditatesHolders[i];
      if (canditatesHolder.canditates.size === 1) {
        board[canditatesHolder.y * 9 + canditatesHolder.x].value = canditatesHolder.canditates.values().next().value;
        placingNumbers = true;
      }
    }
    if(placingNumbers){
      canditatesHolders = findCanditates(board);
    }
  }
  return board;
}

export { findCanditates, findAndFillCanditates }
import { CanditatesHolder } from "../helpers/CanditatesHolder";
import { getCanditates } from "./Calculations";
import { CellData } from "./CellData";

const findCanditates = (board: CellData[]): Array<CanditatesHolder> => {
  let canditatesHolders = new Array<CanditatesHolder>();
  for(let i = 0; i < 81; i++) {
    let cell = board[i];
    if(cell.value !== 0)
      continue;
    let canditates = getCanditates(board, cell.x, cell.y);
    canditatesHolders.push(new CanditatesHolder(cell.x, cell.y, canditates))
  }
  return canditatesHolders;
}

const findAndFillCanditates = (board: CellData[]): Array<CanditatesHolder> => {
  return findCanditates(board);
}

export { findAndFillCanditates }
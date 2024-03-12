import { CellData } from "./CellData";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference
// dosen't exist in this version
const setDifference = (original: Set<number>, duplicates: Set<number>) => {
  duplicates.forEach((element) => original.delete(element));
}

const findColumnCanditates = (board: CellData[], x: number): Set<number> => {
  let column = new Set<number>();
  for (let i = 0; i < 9; i++) {
    let value = board[i * 9 + x].value;
    if (value === 0)
      continue;
    column.add(value);
  }
  return column;
}

const findSquareCanditates = (board: CellData[], x: number, y: number): Set<number> => {
  let square = new Set<number>();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let value = board[(j + (y - y % 3)) * 9 + (i + (x - x % 3))].value;
      if (value === 0)
        continue;
      square.add(value);
    }
  }
  return square;
}

const findRowCanditates = (board: CellData[], y: number): Set<number> => {
  let index = y * 9;
  let row = board.slice(index, index + 9).map((element) => Number(element.value))
  row = row.filter((element) => element !== 0);
  return new Set(row);
}

const getCanditates = (board: CellData[], x: number, y: number): Set<number> => {
  if (board[y * 9 + x].value !== 0) {
    return new Set<number>();
  }

  let canditates = new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  setDifference(canditates, findRowCanditates(board, y));

  setDifference(canditates, findColumnCanditates(board, x));

  setDifference(canditates, findSquareCanditates(board, x, y));


  return canditates;
}

export { getCanditates }
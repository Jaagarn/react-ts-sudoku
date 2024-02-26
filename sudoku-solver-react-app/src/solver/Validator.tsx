import { CellData } from "./CellData";

const columns = (board: CellData[]): Array<number> => {
  let columns = new Array<number>;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      columns.push(board[j * 9 + i].value)
    }
  }

  return columns;
}

const column = (board: CellData[], y: number): Array<number> => {
  let column = new Array<number>;

  for (let i = 0; i < 9; i++) {
    column.push(board[i * 9 + y].value)
  }

  return column;
}

const square = (board: CellData[], x: number, y: number): Array<number> => {
  let square = new Array<number>;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      square.push(board[(j + y * 3) * 9 + (i + x * 3)].value)
    }
  }
  return square;
}

const solvedSet = (inputArray: Array<number>): boolean => {
  inputArray = inputArray.filter((element) => element !== 0);
  let testSet = new Set(inputArray);
  return testSet.size === 9;
}

const solvableSet = (inputArray: Array<number>): boolean => {
  inputArray = inputArray.filter((element) => element !== 0);
  let testSet = new Set();

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    if (testSet.has(element))
      return false;
    testSet.add(element);
  }

  return true;
}

const solved = (board: CellData[]) => {

  // Check squares
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!solvableSet(square(board, i, j)))
        return false;
    }
  }

  // Check columns
  for (let i = 0; i < 9; i++) {
    if (!solvableSet(column(board, i)))
      return false;
  }

  // Check rows
  for (let i = 0; i < 81; i += 9) {
    if (!solvableSet(board.slice(i, i + 9).map((element) => Number(element.value)))) {
      return false;
    }
  }

  return true;
}

const solvable = (board: CellData[]) => {
    // Check squares
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!solvableSet(square(board, i, j)))
          return false;
      }
    }
  
    // Check columns
    for (let i = 0; i < 9; i++) {
      if (!solvableSet(column(board, i)))
        return false;
    }
  
    // Check rows
    for (let i = 0; i < 81; i += 9) {
      if (!solvableSet(board.slice(i, i + 9).map((element) => Number(element.value)))) {
        return false;
      }
    }
  
    return true;
}

export { solved, solvable, columns, column, square, solvedSet, solvableSet };
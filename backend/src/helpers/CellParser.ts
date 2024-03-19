import { CellData } from "../solver/CellData";

const arrayToCells = (array: number[]): Array<CellData> => {
    const boardArray: Array<CellData> = new Array(9 * 9);

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            boardArray[j * 9 + i] = new CellData(i, j, j * 9 + i, array[j * 9 + i]);
        }
    }

    return boardArray;
}

const stringToCells = (board: string): Array<CellData> => {
  let boardArray = new Array<number>();
  let inputBoardArray = Array.from(board);

  for (let i = 0; i < inputBoardArray.length; i++) {
    let digit = parseInt(inputBoardArray[i]);
    if(Number.isNaN(digit)){
      throw TypeError("String contains a/several non number(s).");
    }
    boardArray.push(digit);
  }

  if(boardArray.length !== 81){
    throw new RangeError("Too few/many numbers in for a sudoku board.")
  }
  
  return arrayToCells(boardArray);
}

const cellsToString = (board: CellData[]): string => {
  return board.map((celldata) => celldata.value.toString()).join("");
}

export {arrayToCells, cellsToString, stringToCells}
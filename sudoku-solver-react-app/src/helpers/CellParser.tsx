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

export {arrayToCells}
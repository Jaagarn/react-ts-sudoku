import { arrayToCells, cellsToString } from "../helpers/CellParser";
import { findCanditates } from "../solver/Crooks";
import { recursionStart, recursionStartString } from "../solver/CrooksRecursion";
import {
  valid_board_easy_sudoku, valid_board_easy_sudoku_almost_solved,
  valid_board_easy_sudoku_solution
}
  from "../testdata/test_boards";

describe('testing cooks recursion', () => {
  test('recursionStart solves a simple sudoku 1', () => {
    let board = arrayToCells(valid_board_easy_sudoku_almost_solved);
    expect(recursionStart(board, findCanditates(board))).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution));
  })
  test('recursionStart solves a simple sudoku 2', () => {
    let board = arrayToCells(valid_board_easy_sudoku);
    expect(recursionStart(board, findCanditates(board))).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution));
  })
  test('recursionStartString solves a simple sudoku', () => {
    let board = cellsToString(arrayToCells(valid_board_easy_sudoku));
    expect(recursionStartString(board)).toStrictEqual(cellsToString(arrayToCells(valid_board_easy_sudoku_solution)));
  })
});
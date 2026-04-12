import { arrayToCells, cellsToString, stringToCells } from "../helpers/CellParser";
import { findAndFillCanditates, findCanditates } from "../solver/Crooks";
import { recursionStart, recursionStartString, recursionStartStringWithProgress } from "../solver/CrooksRecursion";
import { solved } from "../solver/Validator";
import {
  valid_board_expert_sudoku,
  valid_board_hard_sudoku,
  valid_board_hard_sudoku_solution,
  valid_board_very_hard
}
  from "../testdata/test_boards";

describe('testing cooks recursion long running', () => {
  /*
  test('recursionStart solves a hard sudoku', () => {
    let newBoard = arrayToCells(valid_board_hard_sudoku);
    let board = findAndFillCanditates(newBoard);
    expect(recursionStart(board, findCanditates(board))).toStrictEqual(arrayToCells(valid_board_hard_sudoku_solution));
  })
  test('recursionStart solves a expert sudoku', () => {
    let newBoard = arrayToCells(valid_board_expert_sudoku);
    let board = findAndFillCanditates(newBoard);
    let solution = recursionStart(board, findCanditates(board));
    expect(solved(solution)).toStrictEqual(true);
  })
  test('recursionStart solves a very hard sudoku', () => {
    let newBoard = arrayToCells(valid_board_very_hard);
    let board = findAndFillCanditates(newBoard);
    let solution = recursionStart(board, findCanditates(board));
    expect(solved(solution)).toStrictEqual(true);
  })
  test('recursionStartString solves a very hard sudoku', () => {
    let board = cellsToString(arrayToCells(valid_board_very_hard));
    let solution = recursionStartString(board);
    expect(solved(stringToCells(solution))).toStrictEqual(true);
  }) 
  test('recursionStartStringWithProgress solves a very hard sudoku and triggers progress callback', () => {
    let boardStr = cellsToString(arrayToCells(valid_board_very_hard));
    
    const mockCallback = jest.fn();
    let solution = recursionStartStringWithProgress(boardStr, 10000, mockCallback);

    expect(solved(stringToCells(solution))).toStrictEqual(true);
    expect(mockCallback).toHaveBeenCalled();
  });
  */
});
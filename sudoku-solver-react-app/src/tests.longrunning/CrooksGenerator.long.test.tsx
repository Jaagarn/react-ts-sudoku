import { arrayToCells, cellsToString } from "../helpers/CellParser";
import { CellData } from "../solver/CellData";
import { findCanditates } from "../solver/Crooks";
import { recursionStartGenerator, recursionStartStringGenerator } from "../solver/CrooksGenerator";
import { solved } from "../solver/Validator";
import {
  valid_board_easy_sudoku, valid_board_easy_sudoku_almost_solved,
  valid_board_easy_sudoku_solution, valid_board_expert_sudoku,
}
  from "../testdata/test_boards";

describe('testing cooks recursion', () => {
  test('recursionGeneratorStart solves a simple sudoku 1', () => {
    let board = arrayToCells(valid_board_easy_sudoku_almost_solved);
    let recursiveGenerator = recursionStartGenerator(board, findCanditates(board));
    let result = recursiveGenerator.next();

    while (!result.done) {
      result = recursiveGenerator.next()
    }
    expect(result.value).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution));
  })
  test('recursionGeneratorStart solves a simple sudoku 2', () => {
    let board = arrayToCells(valid_board_easy_sudoku);
    let recursiveGenerator = recursionStartGenerator(board, findCanditates(board));

    let result = recursiveGenerator.next();

    while (!result.done) {
      result = recursiveGenerator.next()
    }

    expect(result.value).toStrictEqual(arrayToCells(valid_board_easy_sudoku_solution));
  })
  /*   test('recursionGeneratorStart solves an expert sudoku', () => {
      let board = arrayToCells(valid_board_expert_sudoku);
      let recursiveGenerator = recursionStartGenerator(board, findCanditates(board));
      let result = recursiveGenerator.next();

      while (!result.done) {
        result = recursiveGenerator.next()
      }

      expect(solved(result.value)).toStrictEqual(true);
    }) */
  /*  test('recursionStartGeneratorString solves an expert sudoku', () => {
     let board = cellsToString(arrayToCells(valid_board_expert_sudoku));
     let recursiveGenerator = recursionStartStringGenerator(board);
     let result = recursiveGenerator.next();

     while (!result.done) {
       result = recursiveGenerator.next()
     }
        
     expect(solved(result.value)).toStrictEqual(true);
   }) */
});